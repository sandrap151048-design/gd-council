'use client';

import { useState, useEffect } from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import DashboardLayout from '../../components/DashboardLayout';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';
import Link from 'next/link';

function DashboardContent() {
  const { user } = useAuth();
  const [enrollments, setEnrollments] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [partnerships, setPartnerships] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const requests = [
        api.get('/enrollments'),
        api.get('/inquiries'),
        api.get('/partnerships'),
        api.get('/courses')
      ];

      const responses = await Promise.all(requests);
      
      setEnrollments(responses[0].data);
      setInquiries(responses[1].data);
      setPartnerships(responses[2].data);
      setCourses(responses[3].data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gold-400"></div>
          <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border border-gold-400/30"></div>
        </div>
      </div>
    );
  }

  const stats = [
    {
      title: 'Active Partnerships',
      value: partnerships.filter(p => p.status === 'approved').length,
      total: partnerships.length,
      change: '+12%',
      trend: 'up',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Course Enrollments',
      value: enrollments.filter(e => e.status === 'approved').length,
      total: enrollments.length,
      change: '+8%',
      trend: 'up',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Pending Inquiries',
      value: inquiries.filter(i => i.status === 'pending').length,
      total: inquiries.length,
      change: '+5%',
      trend: 'up',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      title: 'Available Courses',
      value: courses.length,
      total: courses.length,
      change: '+3%',
      trend: 'up',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  const recentActivity = [
    { type: 'enrollment', title: 'New course enrollment', time: '2 hours ago', status: 'success' },
    { type: 'inquiry', title: 'Partnership inquiry received', time: '5 hours ago', status: 'pending' },
    { type: 'partnership', title: 'Partnership approved', time: '1 day ago', status: 'success' },
    { type: 'enrollment', title: 'Course completed', time: '2 days ago', status: 'success' }
  ];

  return (
    <div className="min-h-screen bg-black p-6">
      {/* Tech Grid Background */}
      <div className="fixed inset-0 tech-grid-advanced opacity-10 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fadeInDown">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                <span className="bg-gradient-to-r from-gold-400 to-green-400 bg-clip-text text-transparent">
                  Welcome back, {user?.name}
                </span>
              </h1>
              <p className="text-gray-400 flex items-center gap-2">
                <span className="status-dot active"></span>
                System Status: All systems operational
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400">Last updated</div>
              <div className="text-gold-400 font-semibold">{new Date().toLocaleTimeString()}</div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="data-card p-6 animate-fadeInUp group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-green-500/20 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className={`flex items-center gap-1 text-sm font-semibold ${stat.trend === 'up' ? 'text-gold-400' : 'text-red-400'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.trend === 'up' ? 'M5 10l7-7m0 0l7 7m-7-7v18' : 'M19 14l-7 7m0 0l-7-7m7 7V3'} />
                  </svg>
                  {stat.change}
                </div>
              </div>
              
              <div className="metric-number mb-2 counter">
                {stat.value}
              </div>
              
              <div className="text-gray-400 text-sm mb-3">{stat.title}</div>
              
              <div className="progress-bar">
                <div 
                  className="progress-fill transition-all duration-1000"
                  style={{ width: `${(stat.value / stat.total) * 100}%` }}
                ></div>
              </div>
              
              <div className="text-xs text-gray-500 mt-2">
                {stat.value} of {stat.total} total
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Activity Feed */}
          <div className="lg:col-span-2 data-card p-6 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Recent Activity</h2>
              <Link href="/dashboard/browse-courses" className="text-gold-400 hover:text-gold-300 text-sm font-semibold flex items-center gap-1">
                View All
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div 
                  key={index} 
                  className="info-card flex items-center gap-4 group"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activity.status === 'success' ? 'bg-gold-400/20 text-gold-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold group-hover:text-gold-400 transition-colors">
                      {activity.title}
                    </div>
                    <div className="text-gray-400 text-sm">{activity.time}</div>
                  </div>
                  <div className={`status-dot ${activity.status === 'success' ? 'active' : 'inactive'}`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="data-card p-6 animate-fadeInUp" style={{ animationDelay: '500ms' }}>
            <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
            
            <div className="space-y-3">
              <Link href="/dashboard/browse-courses" className="block">
                <div className="info-card group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-500 to-green-500 flex items-center justify-center text-black">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold group-hover:text-gold-400 transition-colors">Browse Courses</div>
                      <div className="text-gray-400 text-sm">Explore available programs</div>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link href="/dashboard/universities" className="block">
                <div className="info-card group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-gold-500 flex items-center justify-center text-black">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold group-hover:text-gold-400 transition-colors">Universities</div>
                      <div className="text-gray-400 text-sm">View partner institutions</div>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link href="/dashboard/partnership" className="block">
                <div className="info-card group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-gold-500 flex items-center justify-center text-black">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold group-hover:text-gold-400 transition-colors">Partnership</div>
                      <div className="text-gray-400 text-sm">Apply for partnerships</div>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link href="/dashboard/inquiry" className="block">
                <div className="info-card group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-green-400 flex items-center justify-center text-black">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold group-hover:text-gold-400 transition-colors">Submit Inquiry</div>
                      <div className="text-gray-400 text-sm">Get assistance</div>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section - Progress Overview */}
        <div className="data-card p-6 animate-fadeInUp" style={{ animationDelay: '600ms' }}>
          <h2 className="text-2xl font-bold text-white mb-6">Your Progress</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="chart-container">
              <div className="text-gray-400 text-sm mb-2">Enrollment Progress</div>
              <div className="metric-number text-3xl mb-3">
                {enrollments.filter(e => e.status === 'approved').length}/{enrollments.length}
              </div>
              <div className="progress-bar h-3">
                <div 
                  className="progress-fill"
                  style={{ width: `${(enrollments.filter(e => e.status === 'approved').length / (enrollments.length || 1)) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="chart-container">
              <div className="text-gray-400 text-sm mb-2">Partnership Status</div>
              <div className="metric-number text-3xl mb-3">
                {partnerships.filter(p => p.status === 'approved').length}/{partnerships.length}
              </div>
              <div className="progress-bar h-3">
                <div 
                  className="progress-fill"
                  style={{ width: `${(partnerships.filter(p => p.status === 'approved').length / (partnerships.length || 1)) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="chart-container">
              <div className="text-gray-400 text-sm mb-2">Inquiry Resolution</div>
              <div className="metric-number text-3xl mb-3">
                {inquiries.filter(i => i.status === 'resolved').length}/{inquiries.length}
              </div>
              <div className="progress-bar h-3">
                <div 
                  className="progress-fill"
                  style={{ width: `${(inquiries.filter(i => i.status === 'resolved').length / (inquiries.length || 1)) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <DashboardContent />
      </DashboardLayout>
    </ProtectedRoute>
  );
}

