'use client';

import { useState } from 'react';
import ProtectedRoute from '../../../components/ProtectedRoute';
import DashboardLayout from '../../../components/DashboardLayout';
import api from '../../../services/api';
import { toast } from 'react-toastify';

function BrowseCoursesContent() {
  const [formData, setFormData] = useState({
    title: '',
    duration: '',
    level: 'Beginner',
    category: '',
    price: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/courses', formData);
      toast.success('Course submitted successfully! It will appear on the public courses page.');
      setFormData({
        title: '',
        duration: '',
        level: 'Beginner',
        category: '',
        price: ''
      });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to submit course');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 gradient-text-emerald">Submit Course Details</h1>
        <p className="text-gray-300 text-lg">Add a new course that will appear on the public courses page</p>
      </div>

      <div className="max-w-3xl">
        <div className="glass-dark rounded-xl border border-gold-400/20 shadow-gold-glow p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Course Title <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="e.g., Business Management & Leadership"
                className="w-full px-4 py-3 bg-gray-900/70 border-2 border-gold-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-500/30 transition-all"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Duration <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 12 weeks"
                  className="w-full px-4 py-3 bg-gray-900/70 border-2 border-gold-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-500/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Level <span className="text-red-400">*</span>
                </label>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/70 border-2 border-gold-400/30 rounded-lg text-white focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-500/30 transition-all"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Category <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Business, Technology, Marketing"
                  className="w-full px-4 py-3 bg-gray-900/70 border-2 border-gold-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-500/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Price (INR ₹) <span className="text-red-400">*</span>
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  min="0"
                  placeholder="e.g., 41417"
                  className="w-full px-4 py-3 bg-gray-900/70 border-2 border-gold-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-500/30 transition-all"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-lg py-4"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Submit Course'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function BrowseCourses() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <BrowseCoursesContent />
      </DashboardLayout>
    </ProtectedRoute>
  );
}


