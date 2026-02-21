'use client';

import { useState } from 'react';
import ProtectedRoute from '../../../components/ProtectedRoute';
import DashboardLayout from '../../../components/DashboardLayout';
import api from '../../../services/api';
import { toast } from 'react-toastify';

function UniversitiesContent() {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    city: '',
    ranking: '',
    website: '',
    programs: '',
    students: ''
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
      await api.post('/universities', formData);
      toast.success('University submitted successfully! It will appear on the public universities page.');
      setFormData({
        name: '',
        country: '',
        city: '',
        ranking: '',
        website: '',
        programs: '',
        students: ''
      });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to submit university');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 gradient-text-emerald">Submit University Details</h1>
        <p className="text-gray-300 text-lg">Add a new university that will appear on the public universities page</p>
      </div>

      <div className="max-w-3xl">
        <div className="glass-dark rounded-xl border border-gold-400/20 shadow-emerald-glow p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                University Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="e.g., Harvard University"
                className="w-full px-4 py-3 bg-gray-900/70 border-2 border-gold-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-emerald-500/30 transition-all"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Country <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  placeholder="e.g., United States"
                  className="w-full px-4 py-3 bg-gray-900/70 border-2 border-gold-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-emerald-500/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  City <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Cambridge, MA"
                  className="w-full px-4 py-3 bg-gray-900/70 border-2 border-gold-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-emerald-500/30 transition-all"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Ranking
                </label>
                <input
                  type="text"
                  name="ranking"
                  value={formData.ranking}
                  onChange={handleChange}
                  placeholder="e.g., Top 1, #5 Globally"
                  className="w-full px-4 py-3 bg-gray-900/70 border-2 border-gold-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-emerald-500/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Website
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://www.university.edu"
                  className="w-full px-4 py-3 bg-gray-900/70 border-2 border-gold-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-emerald-500/30 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Programs Offered
              </label>
              <input
                type="text"
                name="programs"
                value={formData.programs}
                onChange={handleChange}
                placeholder="e.g., Business Administration, Law, Medicine, Engineering"
                className="w-full px-4 py-3 bg-gray-900/70 border-2 border-gold-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-emerald-500/30 transition-all"
              />
              <p className="text-xs text-gray-400 mt-1">Separate multiple programs with commas</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Number of Students
              </label>
              <input
                type="text"
                name="students"
                value={formData.students}
                onChange={handleChange}
                placeholder="e.g., 20,000+ Students"
                className="w-full px-4 py-3 bg-gray-900/70 border-2 border-gold-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-emerald-500/30 transition-all"
              />
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
                  'Submit University'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function Universities() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <UniversitiesContent />
      </DashboardLayout>
    </ProtectedRoute>
  );
}

