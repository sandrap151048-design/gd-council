'use client';

import { useState, useEffect } from 'react';
import ProtectedRoute from '../../../components/ProtectedRoute';
import DashboardLayout from '../../../components/DashboardLayout';
import api from '../../../services/api';
import { toast } from 'react-toastify';

function UniversitiesContent() {
  const [universities, setUniversities] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCountry, setFilterCountry] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    city: '',
    description: '',
    ranking: '',
    website: '',
    tuitionFee: '',
    logo: '',
    programs: '',
    students: ''
  });

  useEffect(() => {
    fetchUniversities();
  }, []);

  const exportToCSV = () => {
    const headers = ['Name', 'Country', 'City', 'Ranking', 'Website', 'Tuition Fee', 'Created At'];
    const rows = filteredUniversities.map(uni => [
      uni.name,
      uni.country,
      uni.city,
      uni.ranking || 'N/A',
      uni.website || 'N/A',
      uni.tuitionFee || 'N/A',
      new Date(uni.createdAt).toLocaleDateString()
    ]);
    
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `universities_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const filteredUniversities = universities.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         uni.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = filterCountry === 'all' || uni.country === filterCountry;
    return matchesSearch && matchesCountry;
  });

  const countries = [...new Set(universities.map(uni => uni.country))].sort();

  const fetchUniversities = async () => {
    try {
      const { data } = await api.get('/universities');
      setUniversities(data);
    } catch (error) {
      console.error('Error fetching universities:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/universities/${editingId}`, formData);
        toast.success('University updated successfully');
      } else {
        await api.post('/universities', formData);
        toast.success('University created successfully');
      }
      resetForm();
      fetchUniversities();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Operation failed');
    }
  };

  const handleEdit = (university) => {
    setFormData({
      name: university.name,
      country: university.country,
      city: university.city,
      description: university.description,
      ranking: university.ranking || '',
      website: university.website || '',
      tuitionFee: university.tuitionFee || '',
      logo: university.logo || '',
      programs: university.programs || '',
      students: university.students || ''
    });
    setEditingId(university._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this university?')) {
      try {
        await api.delete(`/universities/${id}`);
        toast.success('University deleted successfully');
        fetchUniversities();
      } catch (error) {
        toast.error('Delete failed');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      country: '',
      city: '',
      description: '',
      ranking: '',
      website: '',
      tuitionFee: '',
      logo: '',
      programs: '',
      students: ''
    });
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="py-12 bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Manage Universities</h1>
            <p className="text-gray-400">Total: {universities.length} universities</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={exportToCSV}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export CSV
            </button>
            <button
              onClick={() => setShowForm(!showForm)}
              className="btn-primary"
            >
              {showForm ? 'Cancel' : '+ Add University'}
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="glass-dark rounded-xl p-4 border border-gold-400/20 mb-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Search universities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field w-full"
              />
            </div>
            <div>
              <select
                value={filterCountry}
                onChange={(e) => setFilterCountry(e.target.value)}
                className="input-field w-full"
              >
                <option value="all">All Countries</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {showForm && (
          <div className="glass-dark rounded-xl p-6 border border-gold-400/20 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">
              {editingId ? 'Edit University' : 'Add New University'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="input-field bg-dark-700 text-white border-dark-600"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Country</label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    required
                    className="input-field bg-dark-700 text-white border-dark-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                    className="input-field bg-dark-700 text-white border-dark-600"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows="4"
                  className="input-field bg-dark-700 text-white border-dark-600"
                />
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Ranking</label>
                  <input
                    type="number"
                    value={formData.ranking}
                    onChange={(e) => setFormData({ ...formData, ranking: e.target.value })}
                    className="input-field bg-dark-700 text-white border-dark-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Website</label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="input-field bg-dark-700 text-white border-dark-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Tuition Fee</label>
                  <input
                    type="text"
                    value={formData.tuitionFee}
                    onChange={(e) => setFormData({ ...formData, tuitionFee: e.target.value })}
                    className="input-field bg-dark-700 text-white border-dark-600"
                    placeholder="e.g., $20,000/year"
                  />
                </div>
              </div>
              <button type="submit" className="btn-primary">
                {editingId ? 'Update University' : 'Create University'}
              </button>
            </form>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUniversities.length === 0 ? (
            <div className="col-span-full glass-dark rounded-xl p-12 border border-gold-400/20 text-center">
              <p className="text-gray-400">No universities found</p>
            </div>
          ) : (
            filteredUniversities.map((university) => (
              <div key={university._id} className="glass-dark rounded-xl p-6 border border-gold-400/20 hover:border-gold-400/40 transition-all">
                <h3 className="text-xl font-semibold mb-2 text-white">{university.name}</h3>
                <p className="text-sm text-gray-400 mb-3">
                  📍 {university.city}, {university.country}
                </p>
                {university.ranking && (
                  <span className="inline-block bg-yellow-500/20 text-yellow-400 text-xs px-3 py-1 rounded-full mb-3 border border-yellow-500/30">
                    Ranking: #{university.ranking}
                  </span>
                )}
                <p className="text-gray-400 mb-4 line-clamp-2 text-sm">{university.description}</p>
                {university.tuitionFee && (
                  <p className="text-gold-400 text-sm mb-4">💰 {university.tuitionFee}</p>
                )}
                <div className="flex gap-2 pt-4 border-t border-gray-800">
                  <button
                    onClick={() => handleEdit(university)}
                    className="flex-1 px-3 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all text-sm border border-blue-500/30"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(university._id)}
                    className="flex-1 px-3 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-all text-sm border border-red-500/30"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default function AdminUniversities() {
  return (
    <ProtectedRoute adminOnly={true}>
      <DashboardLayout>
        <UniversitiesContent />
      </DashboardLayout>
    </ProtectedRoute>
  );
}


