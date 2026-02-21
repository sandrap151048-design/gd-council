'use client';

import { useState, useEffect } from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import DashboardLayout from '../../components/DashboardLayout';
import api from '../../services/api';
import Link from 'next/link';

function AdminContent() {
  const [stats, setStats] = useState({
    courses: 0,
    universities: 0,
    services: 0,
    enrollments: 0,
    inquiries: 0,
    partnerships: 0,
    subscribers: 0
  });
  const [recentActivities, setRecentActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
    fetchRecentActivities();
  }, []);

  const fetchStats = async () => {
    try {
      const [courses, universities, services, enrollments, inquiries, partnerships, newsletter] = await Promise.all([
        api.get('/courses'),
        api.get('/universities'),
        api.get('/services'),
        api.get('/enrollments/all'),
        api.get('/inquiries/all'),
        api.get('/partnerships/all'),
        api.get('/newsletter')
      ]);

      console.log('Newsletter data:', newsletter.data); // Debug log

      setStats({
        courses: courses.data.length,
        universities: universities.data.length,
        services: services.data.length,
        enrollments: enrollments.data.length,
        inquiries: inquiries.data.length,
        partnerships: partnerships.data.length,
        subscribers: newsletter.data.activeCount || newsletter.data.count || 0
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
      console.error('Error details:', error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecentActivities = async () => {
    try {
      const [enrollments, inquiries, partnerships, newsletter] = await Promise.all([
        api.get('/enrollments/all'),
        api.get('/inquiries/all'),
        api.get('/partnerships/all'),
        api.get('/newsletter')
      ]);

      const activities = [
        ...enrollments.data.slice(0, 3).map(e => ({
          type: 'enrollment',
          title: `New enrollment: ${e.studentName}`,
          time: e.createdAt,
          icon: '📝',
          color: 'text-gold-400'
        })),
        ...inquiries.data.slice(0, 3).map(i => ({
          type: 'inquiry',
          title: `New inquiry from ${i.name}`,
          time: i.createdAt,
          icon: '💬',
          color: 'text-blue-400'
        })),
        ...partnerships.data.slice(0, 3).map(p => ({
          type: 'partnership',
          title: `Partnership request: ${p.institutionName}`,
          time: p.createdAt,
          icon: '🤝',
          color: 'text-purple-400'
        })),
        ...(newsletter.data.subscribers || []).slice(0, 3).map(s => ({
          type: 'subscriber',
          title: `New subscriber: ${s.email}`,
          time: s.subscribedAt,
          icon: '📧',
          color: 'text-gold-400'
        }))
      ].sort((a, b) => new Date(b.time) - new Date(a.time)).slice(0, 8);

      setRecentActivities(activities);
    } catch (error) {
      console.error('Error fetching activities:', error);
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
    <div className="py-12 min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
        <div className="absolute inset-0 tech-grid opacity-5"></div>
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gold-400/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gold-400/10 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text-emerald mb-2">Admin Dashboard</h1>
          <p className="text-gray-300 text-lg">Welcome back! Here's what's happening with your platform.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card-3d p-6 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-400 rounded-xl flex items-center justify-center shadow-emerald-glow">
                <span className="text-3xl">📚</span>
              </div>
              <span className="text-xs text-gray-400 font-medium">Total</span>
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">{stats.courses}</h3>
            <p className="text-sm text-gray-300 font-medium">Courses</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
          </div>

          <div className="card-3d p-6 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <span className="text-3xl">🎓</span>
              </div>
              <span className="text-xs text-gray-400 font-medium">Partners</span>
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">{stats.universities}</h3>
            <p className="text-sm text-gray-300 font-medium">Universities</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
          </div>

          <div className="card-3d p-6 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-500 rounded-xl flex items-center justify-center shadow-lg shadow-gold-400/30">
                <span className="text-3xl">📝</span>
              </div>
              <span className="text-xs text-gray-400 font-medium">Active</span>
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">{stats.enrollments}</h3>
            <p className="text-sm text-gray-300 font-medium">Enrollments</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
          </div>

          <div className="card-3d p-6 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                <span className="text-3xl">📧</span>
              </div>
              <span className="text-xs text-gray-400 font-medium">Active</span>
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">{stats.subscribers}</h3>
            <p className="text-sm text-gray-300 font-medium">Subscribers</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
          </div>
        </div>

        {/* Secondary Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="glass-card-modern p-6 border border-gold-400/20 hover:border-gold-400/40 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-2 font-medium">Services</p>
                <p className="text-3xl font-bold text-white">{stats.services}</p>
              </div>
              <div className="text-4xl">⚙️</div>
            </div>
          </div>

          <div className="glass-card-modern p-6 border border-gold-400/20 hover:border-gold-400/40 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-2 font-medium">Inquiries</p>
                <p className="text-3xl font-bold text-white">{stats.inquiries}</p>
              </div>
              <div className="text-4xl">💬</div>
            </div>
          </div>

          <div className="glass-card-modern p-6 border border-gold-400/20 hover:border-gold-400/40 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-2 font-medium">Partnerships</p>
                <p className="text-3xl font-bold text-white">{stats.partnerships}</p>
              </div>
              <div className="text-4xl">🤝</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/admin/courses" className="card-3d p-6 group hover:scale-105 transition-transform">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-emerald-glow">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Manage Courses</h3>
                    <p className="text-gray-400 text-sm">Add, edit, or delete courses</p>
                  </div>
                </div>
              </Link>

              <Link href="/admin/universities" className="glass-dark rounded-xl p-6 border border-gold-400/20 hover:border-gold-400/40 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Manage Universities</h3>
                    <p className="text-gray-400 text-sm">Add, edit, or delete universities</p>
                  </div>
                </div>
              </Link>

              <Link href="/admin/services" className="glass-dark rounded-xl p-6 border border-gold-400/20 hover:border-gold-400/40 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Manage Services</h3>
                    <p className="text-gray-400 text-sm">Add, edit, or delete services</p>
                  </div>
                </div>
              </Link>

              <Link href="/admin/enrollments" className="glass-dark rounded-xl p-6 border border-gold-400/20 hover:border-gold-400/40 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-400/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">📝</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">View Enrollments</h3>
                    <p className="text-gray-400 text-sm">Manage student enrollments</p>
                  </div>
                </div>
              </Link>

              <Link href="/admin/inquiries" className="glass-dark rounded-xl p-6 border border-gold-400/20 hover:border-gold-400/40 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">View Inquiries</h3>
                    <p className="text-gray-400 text-sm">Manage user inquiries</p>
                  </div>
                </div>
              </Link>

              <Link href="/admin/partnerships" className="glass-dark rounded-xl p-6 border border-gold-400/20 hover:border-gold-400/40 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Partnership Applications</h3>
                    <p className="text-gray-400 text-sm">Review and approve partnerships</p>
                  </div>
                </div>
              </Link>

              <Link href="/admin/subscribers" className="glass-dark rounded-xl p-6 border border-gold-400/20 hover:border-gold-400/40 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-400/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Newsletter Subscribers</h3>
                    <p className="text-gray-400 text-sm">View and manage subscribers</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Recent Activities */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Recent Activities</h2>
            <div className="glass-dark rounded-xl p-6 border border-gold-400/20">
              {recentActivities.length === 0 ? (
                <p className="text-gray-400 text-center py-8">No recent activities</p>
              ) : (
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-800 last:border-0 last:pb-0">
                      <div className="text-2xl flex-shrink-0">{activity.icon}</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white font-medium truncate">{activity.title}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          {new Date(activity.time).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <ProtectedRoute adminOnly={true}>
      <DashboardLayout>
        <AdminContent />
      </DashboardLayout>
    </ProtectedRoute>
  );
}


