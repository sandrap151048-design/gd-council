'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '../../../components/ProtectedRoute';
import DashboardLayout from '../../../components/DashboardLayout';
import api from '../../../services/api';
import { toast } from 'react-toastify';

function PartnershipContent() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: '',
    partnershipType: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/partnerships', formData);
      toast.success('Partnership application submitted successfully!');
      router.push('/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Submission failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-3">Partnership Application</h1>
            <p className="text-gray-300 text-lg">Apply to become a partner and grow together with us</p>
          </div>
          
          <div className="glass-dark border border-gold-400/20 rounded-xl shadow-emerald-glow p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Company Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your company name"
                  className="w-full px-4 py-3 bg-gray-900/70 border-2 border-gold-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-emerald-500/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Contact Person <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                  placeholder="Enter contact person name"
                  className="w-full px-4 py-3 bg-gray-900/70 border-2 border-gold-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-emerald-500/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="company@example.com"
                  className="w-full px-4 py-3 bg-gray-900/70 border-2 border-gold-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-emerald-500/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Phone <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 bg-gray-900/70 border-2 border-gold-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-emerald-500/30 transition-all"
                />
              </div>

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
                  placeholder="Enter your country"
                  className="w-full px-4 py-3 bg-gray-900/70 border-2 border-gold-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-emerald-500/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Partnership Type <span className="text-red-400">*</span>
                </label>
                <select
                  name="partnershipType"
                  value={formData.partnershipType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/70 border-2 border-gold-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-emerald-500/30 transition-all"
                >
                  <option value="">Select type</option>
                  <option value="University Partnership">University Partnership</option>
                  <option value="Corporate Training">Corporate Training</option>
                  <option value="Recruitment Agency">Recruitment Agency</option>
                  <option value="Education Consultant">Education Consultant</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Description <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-900/70 border-2 border-gold-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-emerald-500/30 transition-all resize-none"
                  placeholder="Describe your partnership proposal in detail..."
                ></textarea>
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
                    'Submit Application'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Partnership() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <PartnershipContent />
      </DashboardLayout>
    </ProtectedRoute>
  );
}

