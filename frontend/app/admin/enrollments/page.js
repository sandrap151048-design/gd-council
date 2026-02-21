'use client';

import { useState, useEffect } from 'react';
import ProtectedRoute from '../../../components/ProtectedRoute';
import DashboardLayout from '../../../components/DashboardLayout';
import api from '../../../services/api';
import { toast } from 'react-toastify';

function EnrollmentsContent() {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    try {
      const { data } = await api.get('/enrollments/all');
      setEnrollments(data);
    } catch (error) {
      console.error('Error fetching enrollments:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/enrollments/${id}`, { status });
      toast.success('Status updated successfully');
      fetchEnrollments();
    } catch (error) {
      toast.error('Update failed');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-dark-900 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-white">Manage Enrollments</h1>

        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-dark-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Student</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Course</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-700">
                {enrollments.map((enrollment) => (
                  <tr key={enrollment._id} className="text-gray-300">
                    <td className="px-6 py-4">{enrollment.studentName}</td>
                    <td className="px-6 py-4">{enrollment.course?.title || 'N/A'}</td>
                    <td className="px-6 py-4">{enrollment.email}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        enrollment.status === 'approved' ? 'bg-gold-400/20 text-gold-400' :
                        enrollment.status === 'rejected' ? 'bg-red-500/20 text-red-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {enrollment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">{new Date(enrollment.createdAt).toLocaleDateString()}</td>
                    <td className="px-6 py-4">
                      {enrollment.status === 'pending' && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => updateStatus(enrollment._id, 'approved')}
                            className="text-gold-400 hover:text-gold-300 text-sm"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => updateStatus(enrollment._id, 'rejected')}
                            className="text-red-400 hover:text-red-300 text-sm"
                          >
                            Reject
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminEnrollments() {
  return (
    <ProtectedRoute adminOnly={true}>
      <DashboardLayout>
        <EnrollmentsContent />
      </DashboardLayout>
    </ProtectedRoute>
  );
}


