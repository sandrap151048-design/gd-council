'use client';

import { useState, useEffect } from 'react';
import api from '../../../services/api';

export default function ManageUniversities() {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingUniversity, setEditingUniversity] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    ranking: '',
    programs: '',
    students: '',
    description: '',
    image: '',
    website: ''
  });

  useEffect(() => {
    fetchUniversities();
  }, []);

  const fetchUniversities = async () => {
    try {
      const { data } = await api.get('/universities');
      setUniversities(data);
    } catch (error) {
      console.error('Error fetching universities:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting university data:', formData);
      if (editingUniversity) {
        const response = await api.put(`/universities/${editingUniversity._id}`, formData);
        console.log('Update response:', response.data);
        alert('University updated successfully!');
      } else {
        const response = await api.post('/universities', formData);
        console.log('Create response:', response.data);
        alert('University created successfully!');
      }
      resetForm();
      fetchUniversities();
    } catch (error) {
      console.error('Error saving university:', error);
      console.error('Error response:', error.response?.data);
      const errorMessage = error.response?.data?.message || error.message;
      const errors = error.response?.data?.errors;
      if (errors) {
        alert(`Validation failed:\n${errors.join('\n')}`);
      } else {
        alert(`Error: ${errorMessage}`);
      }
    }
  };

  const handleEdit = (university) => {
    setEditingUniversity(university);
    setFormData({
      name: university.name,
      country: university.country,
      ranking: university.ranking,
      programs: university.programs,
      students: university.students,
      description: university.description,
      image: university.image || '',
      website: university.website || ''
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this university?')) {
      try {
        await api.delete(`/universities/${id}`);
        alert('University deleted successfully!');
        fetchUniversities();
      } catch (error) {
        console.error('Error deleting university:', error);
        alert('Error deleting university. Please try again.');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      country: '',
      ranking: '',
      programs: '',
      students: '',
      description: '',
      image: '',
      website: ''
    });
    setEditingUniversity(null);
    setShowForm(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-400"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Manage Universities</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-3 bg-gold-400 text-black font-bold rounded-lg hover:bg-gold-400 transition-all"
          >
            {showForm ? 'Cancel' : '+ Add New University'}
          </button>
        </div>

        {/* Form */}
        {showForm && (
          <div className="bg-gray-900 border border-gold-400/20 rounded-2xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              {editingUniversity ? 'Edit University' : 'Add New University'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">University Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gold-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Country</label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gold-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                <textarea
                  required
                  rows="4"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gold-400 focus:outline-none"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Ranking</label>
                  <input
                    type="text"
                    placeholder="e.g., #1 Global"
                    value={formData.ranking}
                    onChange={(e) => setFormData({ ...formData, ranking: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gold-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Programs</label>
                  <input
                    type="text"
                    placeholder="e.g., 350+ Programs"
                    value={formData.programs}
                    onChange={(e) => setFormData({ ...formData, programs: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gold-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Students</label>
                  <input
                    type="text"
                    placeholder="e.g., 23,000+ Students"
                    value={formData.students}
                    onChange={(e) => setFormData({ ...formData, students: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gold-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Image URL</label>
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gold-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Website URL</label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://university.edu"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gold-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="px-6 py-3 bg-gold-400 text-black font-bold rounded-lg hover:bg-gold-400 transition-all"
                >
                  {editingUniversity ? 'Update University' : 'Create University'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-600 transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Universities List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map((university) => (
            <div key={university._id} className="bg-gray-900 border border-gold-400/20 rounded-2xl overflow-hidden">
              {university.image && (
                <img src={university.image} alt={university.name} className="w-full h-48 object-cover" />
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-gold-400/10 text-gold-400 text-xs font-bold rounded-full">
                    {university.ranking}
                  </span>
                  <span className="text-gray-400 text-xs">🌍 {university.country}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{university.name}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{university.description}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                  <span>📚 {university.programs}</span>
                  <span>👥 {university.students}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(university)}
                    className="flex-1 px-4 py-2 bg-gold-400/10 text-gold-400 font-bold rounded-lg hover:bg-gold-400/20 transition-all"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(university._id)}
                    className="flex-1 px-4 py-2 bg-red-500/10 text-red-400 font-bold rounded-lg hover:bg-red-500/20 transition-all"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {universities.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No universities yet. Click "Add New University" to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
}

