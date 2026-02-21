'use client';

import { useState, useEffect } from 'react';
import ProtectedRoute from '../../../components/ProtectedRoute';
import DashboardLayout from '../../../components/DashboardLayout';
import api from '../../../services/api';
import { toast } from 'react-toastify';

function PartnershipsContent() {
  const [partnerships, setPartnerships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPartnerships();
  }, []);

  const exportToCSV = () => {
    const headers = ['Institution Name', 'Contact Person', 'Email', 'Phone', 'Partnership Type', 'Status', 'Date'];
    const rows = filteredPartnerships.map(p => [
      p.institutionName,
      p.contactPerson,
      p.email,
      p.phone,
      p.partnershipType,
      p.status,
      new Date(p.createdAt).toLocaleDateString()
    ]);
    
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `partnerships_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const filteredPartnerships = partnerships.filter(p => {
    const matchesSearch = p.institutionName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         p.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         p.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || p.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const fetchPartnerships = async () => {
    try {
      const { data } = await api.get('/partnerships/all');
      setPartnerships(data);
    } catch (error) {
      console.error('Error fetching partnerships:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/partnerships/${id}`, { status });
      toast.success('Status updated successfully');
      fetchPartnerships();
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
            <h1 className="text-3xl font-bold text-white mb-2">Partnership Applications</h1>
            <p className="text-gray-400">Total: {partnerships.length} applications</p>
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
                placeholder="Search partnerships..."
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
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredPartnerships.length === 0 ? (
            <div className="col-span-full glass-dark rounded-xl p-12 border border-gold-400/20 text-center">
              <p className="text-gray-400">No partnership applications found</p>
            </div>
          ) : (
            filteredPartnerships.map((partnership) => (
              <div key={partnership._id} className="glass-dark rounded-xl p-6 border border-gold-400/20 hover:border-gold-400/40 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{partnership.institutionName}</h3>
                    <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 rounded-lg text-xs border border-purple-500/30 mb-3">
                      {partnership.partnershipType}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    partnership.status === 'approved' ? 'bg-gold-400/20 text-gold-400 border border-gold-400/30' :
                    partnership.status === 'rejected' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                    'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {partnership.status}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4 text-sm">
                  <p className="text-gray-400">
                    <span className="text-gold-400">Contact:</span> {partnership.contactPerson}
                  </p>
                  <p className="text-gray-400">
                    <span className="text-gold-400">Email:</span> {partnership.email}
                  </p>
                  <p className="text-gray-400">
                    <span className="text-gold-400">Phone:</span> {partnership.phone}
                  </p>
                  {partnership.website && (
                    <p className="text-gray-400">
                      <span className="text-gold-400">Website:</span>{' '}
                      <a href={partnership.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                        {partnership.website}
                      </a>
                    </p>
                  )}
                </div>

                {partnership.message && (
                  <div className="bg-gray-800/30 rounded-lg p-4 mb-4">
                    <p className="text-gray-300 text-sm leading-relaxed">{partnership.message}</p>
                  </div>
                )}
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                  <span className="text-sm text-gray-500">
                    {new Date(partnership.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <div className="flex gap-2">
                    {partnership.status !== 'approved' && (
                      <button
                        onClick={() => updateStatus(partnership._id, 'approved')}
                        className="px-3 py-1 bg-gold-400/20 text-gold-400 rounded-lg hover:bg-gold-400/30 transition-all text-sm border border-gold-400/30"
                      >
                        Approve
                      </button>
                    )}
                    {partnership.status !== 'rejected' && (
                      <button
                        onClick={() => updateStatus(partnership._id, 'rejected')}
                        className="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-all text-sm border border-red-500/30"
                      >
                        Reject
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

export default function AdminPartnerships() {
  return (
    <ProtectedRoute adminOnly={true}>
      <DashboardLayout>
        <PartnershipsContent />
      </DashboardLayout>
    </ProtectedRoute>
  );
}


