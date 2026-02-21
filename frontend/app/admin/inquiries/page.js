'use client';

import { useState, useEffect } from 'react';
import ProtectedRoute from '../../../components/ProtectedRoute';
import DashboardLayout from '../../../components/DashboardLayout';
import api from '../../../services/api';
import { toast } from 'react-toastify';

function InquiriesContent() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchInquiries();
  }, []);

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Subject', 'Message', 'Status', 'Date'];
    const rows = filteredInquiries.map(inquiry => [
      inquiry.name,
      inquiry.email,
      inquiry.phone,
      inquiry.subject,
      inquiry.message,
      inquiry.status,
      new Date(inquiry.createdAt).toLocaleDateString()
    ]);
    
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `inquiries_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const filteredInquiries = inquiries.filter(inquiry => {
    const matchesSearch = inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inquiry.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || inquiry.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const fetchInquiries = async () => {
    try {
      const { data } = await api.get('/inquiries/all');
      setInquiries(data);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/inquiries/${id}`, { status });
      toast.success('Status updated successfully');
      fetchInquiries();
    } catch (error) {
      toast.error('Update failed');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-400"></div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">B2B Inquiries & Applications</h1>
            <p className="text-gray-400">Total: {inquiries.length} inquiries</p>
          </div>
          <button
            onClick={exportToCSV}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Export CSV
          </button>
        </div>

        {/* Search and Filter */}
        <div className="glass-dark rounded-xl p-4 border border-gold-400/20 mb-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Search inquiries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field w-full"
              />
            </div>
            <div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="input-field w-full"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="resolved">Resolved</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {filteredInquiries.length === 0 ? (
            <div className="glass-dark rounded-xl p-12 border border-gold-400/20 text-center">
              <p className="text-gray-400">No inquiries found</p>
            </div>
          ) : (
            filteredInquiries.map((inquiry) => (
              <div key={inquiry._id} className="glass-dark rounded-xl p-6 border border-gold-400/20 hover:border-gold-400/40 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{inquiry.subject}</h3>
                    <div className="grid md:grid-cols-3 gap-2 text-sm">
                      <p className="text-gray-400">
                        <span className="text-gold-400">Name:</span> {inquiry.name}
                      </p>
                      <p className="text-gray-400">
                        <span className="text-gold-400">Email:</span> {inquiry.email}
                      </p>
                      <p className="text-gray-400">
                        <span className="text-gold-400">Phone:</span> {inquiry.phone}
                      </p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    inquiry.status === 'resolved' ? 'bg-gold-400/20 text-gold-400 border border-gold-400/30' :
                    inquiry.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {inquiry.status}
                  </span>
                </div>
                
                <div className="bg-gray-800/30 rounded-lg p-4 mb-4">
                  <p className="text-gray-300 text-sm leading-relaxed">{inquiry.message}</p>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {new Date(inquiry.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                  <div className="flex gap-2">
                    {inquiry.status !== 'in-progress' && (
                      <button
                        onClick={() => updateStatus(inquiry._id, 'in-progress')}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all text-sm border border-blue-500/30"
                      >
                        Mark In Progress
                      </button>
                    )}
                    {inquiry.status !== 'resolved' && (
                      <button
                        onClick={() => updateStatus(inquiry._id, 'resolved')}
                        className="px-3 py-1 bg-gold-400/20 text-gold-400 rounded-lg hover:bg-gold-400/30 transition-all text-sm border border-gold-400/30"
                      >
                        Mark Resolved
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default function AdminInquiries() {
  return (
    <ProtectedRoute adminOnly={true}>
      <DashboardLayout>
        <InquiriesContent />
      </DashboardLayout>
    </ProtectedRoute>
  );
}


