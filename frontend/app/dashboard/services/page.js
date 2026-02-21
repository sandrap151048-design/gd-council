'use client';

import { useState } from 'react';
import ProtectedRoute from '../../../components/ProtectedRoute';
import DashboardLayout from '../../../components/DashboardLayout';
import { useAuth } from '../../../context/AuthContext';
import api from '../../../services/api';
import { toast } from 'react-toastify';

function ServicesContent() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    institutionName: user?.companyName || '',
    contactPerson: user?.name || '',
    email: user?.email || '',
    phone: '',
    serviceType: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/inquiries', {
        name: formData.contactPerson,
        email: formData.email,
        phone: formData.phone,
        subject: `Service Inquiry - ${formData.serviceType}`,
        message: `
Institution: ${formData.institutionName}
Contact Person: ${formData.contactPerson}
Email: ${formData.email}
Phone: ${formData.phone}
Service Type: ${formData.serviceType}
        `
      });
      toast.success('Service inquiry submitted successfully!');
      setFormData({
        institutionName: user?.companyName || '',
        contactPerson: user?.name || '',
        email: user?.email || '',
        phone: '',
        serviceType: ''
      });
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      toast.error(error.response?.data?.message || 'Failed to submit inquiry');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 gradient-text-emerald">B2B Services</h1>
        <p className="text-gray-300 text-lg">Request customized educational services for your institution</p>
      </div>

      <div className="glass-dark rounded-xl border border-gold-400/20 shadow-emerald-glow p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Institution Name
              </label>
              <input
                type="text"
                name="institutionName"
                value={formData.institutionName}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Your institution name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Contact Person
              </label>
              <input
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Your name"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Service Type
            </label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className="input-field"
            >
              <option value="">Select a service</option>
              <option value="Overseas Education Consulting">Overseas Education Consulting</option>
              <option value="Corporate Skill Development">Corporate Skill Development</option>
              <option value="University Partnership Programs">University Partnership Programs</option>
              <option value="Admission Support Services">Admission Support Services</option>
              <option value="Language Training Programs">Language Training Programs</option>
              <option value="Career Counseling & Placement">Career Counseling & Placement</option>
              <option value="Custom Training Programs">Custom Training Programs</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full"
          >
            {loading ? 'Submitting...' : 'Submit Service Inquiry'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <ServicesContent />
      </DashboardLayout>
    </ProtectedRoute>
  );
}

