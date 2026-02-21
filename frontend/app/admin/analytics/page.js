'use client';

import { useState, useEffect } from 'react';
import ProtectedRoute from '../../../components/ProtectedRoute';
import DashboardLayout from '../../../components/DashboardLayout';
import api from '../../../services/api';

function AnalyticsContent() {
  const [stats, setStats] = useState({
    totalVisits: 0,
    totalInquiries: 0,
    totalEnrollments: 0,
    totalPartnerships: 0,
    totalSubscribers: 0,
    popularServices: [],
    popularCourses: [],
    inquiriesByStatus: { pending: 0, inProgress: 0, resolved: 0 },
    enrollmentsByStatus: { pending: 0, approved: 0, rejected: 0 },
    partnershipsByStatus: { pending: 0, approved: 0, rejected: 0 },
    recentActivity: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const [inquiries, enrollments, partnerships, courses, services, newsletter] = await Promise.all([
        api.get('/inquiries'),
        api.get('/enrollments'),
        api.get('/partnerships'),
        api.get('/courses'),
        api.get('/services'),
        api.get('/newsletter')
      ]);

      // Calculate inquiries by status
      const inquiriesByStatus = {
        pending: inquiries.data.filter(i => i.status === 'pending').length,
        inProgress: inquiries.data.filter(i => i.status === 'in-progress').length,
        resolved: inquiries.data.filter(i => i.status === 'resolved').length
      };

      // Calculate enrollments by status
      const enrollmentsByStatus = {
        pending: enrollments.data.filter(e => e.status === 'pending').length,
        approved: enrollments.data.filter(e => e.status === 'approved').length,
        rejected: enrollments.data.filter(e => e.status === 'rejected').length
      };

      // Calculate partnerships by status
      const partnershipsByStatus = {
        pending: partnerships.data.filter(p => p.status === 'pending').length,
        approved: partnerships.data.filter(p => p.status === 'approved').length,
        rejected: partnerships.data.filter(p => p.status === 'rejected').length
      };

      // Popular courses (by enrollment count)
      const courseEnrollmentCount = {};
      enrollments.data.forEach(enrollment => {
        const courseName = enrollment.course?.title || enrollment.courseName || 'Unknown';
        courseEnrollmentCount[courseName] = (courseEnrollmentCount[courseName] || 0) + 1;
      });
      const popularCourses = Object.entries(courseEnrollmentCount)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      // Popular services (by inquiry count)
      const serviceInquiryCount = {};
      inquiries.data.forEach(inquiry => {
        if (inquiry.subject && inquiry.subject.toLowerCase().includes('service')) {
          const serviceName = inquiry.subject;
          serviceInquiryCount[serviceName] = (serviceInquiryCount[serviceName] || 0) + 1;
        }
      });
      const popularServices = Object.entries(serviceInquiryCount)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      // Recent activity
      const recentActivity = [
        ...inquiries.data.slice(0, 3).map(i => ({
          type: 'inquiry',
          message: `New inquiry: ${i.subject}`,
          time: new Date(i.createdAt).toLocaleString(),
          status: i.status
        })),
        ...enrollments.data.slice(0, 3).map(e => ({
          type: 'enrollment',
          message: `New enrollment: ${e.course?.title || e.courseName}`,
          time: new Date(e.createdAt).toLocaleString(),
          status: e.status
        })),
        ...partnerships.data.slice(0, 3).map(p => ({
          type: 'partnership',
          message: `Partnership request: ${p.companyName}`,
          time: new Date(p.createdAt).toLocaleString(),
          status: p.status
        }))
      ].sort((a, b) => new Date(b.time) - new Date(a.time)).slice(0, 10);

      setStats({
        totalVisits: Math.floor(Math.random() * 5000) + 1000, // Simulated
        totalInquiries: inquiries.data.length,
        totalEnrollments: enrollments.data.length,
        totalPartnerships: partnerships.data.length,
        totalSubscribers: newsletter.data.subscribers?.length || 0,
        popularServices,
        popularCourses,
        inquiriesByStatus,
        enrollmentsByStatus,
        partnershipsByStatus,
        recentActivity
      });
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
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
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 gradient-text-emerald">Analytics Dashboard</h1>
        <p className="text-gray-300 text-lg">Track your business metrics and performance</p>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <div className="relative overflow-hidden glass-dark rounded-2xl border border-blue-500/30 shadow-lg p-6 hover:shadow-blue-500/20 transition-all group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
          <div className="relative">
            <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl border border-blue-500/30 w-fit mb-4">
              <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <p className="text-4xl font-bold gradient-text-blue mb-2">{stats.totalVisits.toLocaleString()}</p>
            <p className="text-sm text-gray-400 font-medium">Website Visits</p>
            <div className="mt-3 flex items-center text-xs text-gold-400">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span>+12.5% from last month</span>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden glass-dark rounded-2xl border border-gold-400/30 shadow-lg p-6 hover:shadow-emerald-500/20 transition-all group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-gold-400/20 transition-all"></div>
          <div className="relative">
            <div className="p-3 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-xl border border-gold-400/30 w-fit mb-4">
              <svg className="w-7 h-7 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <p className="text-4xl font-bold gradient-text-emerald mb-2">{stats.totalInquiries}</p>
            <p className="text-sm text-gray-400 font-medium">Total Inquiries</p>
            <div className="mt-3 flex items-center text-xs text-gold-400">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span>+8.2% this week</span>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden glass-dark rounded-2xl border border-purple-500/30 shadow-lg p-6 hover:shadow-purple-500/20 transition-all group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-purple-500/20 transition-all"></div>
          <div className="relative">
            <div className="p-3 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl border border-purple-500/30 w-fit mb-4">
              <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <p className="text-4xl font-bold text-purple-400 mb-2">{stats.totalEnrollments}</p>
            <p className="text-sm text-gray-400 font-medium">Course Enrollments</p>
            <div className="mt-3 flex items-center text-xs text-gold-400">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span>+15.3% growth</span>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden glass-dark rounded-2xl border border-gold-400/30 shadow-lg p-6 hover:shadow-green-500/20 transition-all group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-gold-400/20 transition-all"></div>
          <div className="relative">
            <div className="p-3 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl border border-gold-400/30 w-fit mb-4">
              <svg className="w-7 h-7 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <p className="text-4xl font-bold text-gold-400 mb-2">{stats.totalPartnerships}</p>
            <p className="text-sm text-gray-400 font-medium">Active Partners</p>
            <div className="mt-3 flex items-center text-xs text-gold-400">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span>+5 new partners</span>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden glass-dark rounded-2xl border border-yellow-500/30 shadow-lg p-6 hover:shadow-yellow-500/20 transition-all group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-yellow-500/20 transition-all"></div>
          <div className="relative">
            <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-xl border border-yellow-500/30 w-fit mb-4">
              <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-4xl font-bold text-yellow-400 mb-2">{stats.totalSubscribers}</p>
            <p className="text-sm text-gray-400 font-medium">Newsletter Subs</p>
            <div className="mt-3 flex items-center text-xs text-gold-400">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span>+20 this month</span>
            </div>
          </div>
        </div>
      </div>

      {/* Status Breakdown */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Inquiries Status */}
        <div className="glass-dark rounded-2xl border border-gold-400/20 shadow-lg p-6 hover:border-gold-400/40 transition-all">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white flex items-center">
              <div className="w-10 h-10 bg-gold-400/10 rounded-xl flex items-center justify-center mr-3 border border-gold-400/30">
                <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              Inquiries
            </h3>
            <span className="text-2xl font-bold text-gold-400">{stats.totalInquiries}</span>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-sm font-medium">Pending</span>
                <span className="text-yellow-400 font-bold">{stats.inquiriesByStatus.pending}</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(stats.inquiriesByStatus.pending / stats.totalInquiries) * 100}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-sm font-medium">In Progress</span>
                <span className="text-blue-400 font-bold">{stats.inquiriesByStatus.inProgress}</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(stats.inquiriesByStatus.inProgress / stats.totalInquiries) * 100}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-sm font-medium">Resolved</span>
                <span className="text-gold-400 font-bold">{stats.inquiriesByStatus.resolved}</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(stats.inquiriesByStatus.resolved / stats.totalInquiries) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enrollments Status */}
        <div className="glass-dark rounded-2xl border border-purple-500/20 shadow-lg p-6 hover:border-purple-500/40 transition-all">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white flex items-center">
              <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center mr-3 border border-purple-500/30">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              Enrollments
            </h3>
            <span className="text-2xl font-bold text-purple-400">{stats.totalEnrollments}</span>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-sm font-medium">Pending</span>
                <span className="text-yellow-400 font-bold">{stats.enrollmentsByStatus.pending}</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(stats.enrollmentsByStatus.pending / stats.totalEnrollments) * 100}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-sm font-medium">Approved</span>
                <span className="text-gold-400 font-bold">{stats.enrollmentsByStatus.approved}</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(stats.enrollmentsByStatus.approved / stats.totalEnrollments) * 100}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-sm font-medium">Rejected</span>
                <span className="text-red-400 font-bold">{stats.enrollmentsByStatus.rejected}</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-red-500 to-red-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(stats.enrollmentsByStatus.rejected / stats.totalEnrollments) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Partnerships Status */}
        <div className="glass-dark rounded-2xl border border-gold-400/20 shadow-lg p-6 hover:border-gold-400/40 transition-all">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white flex items-center">
              <div className="w-10 h-10 bg-gold-400/10 rounded-xl flex items-center justify-center mr-3 border border-gold-400/30">
                <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              Partnerships
            </h3>
            <span className="text-2xl font-bold text-gold-400">{stats.totalPartnerships}</span>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-sm font-medium">Pending</span>
                <span className="text-yellow-400 font-bold">{stats.partnershipsByStatus.pending}</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(stats.partnershipsByStatus.pending / stats.totalPartnerships) * 100}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-sm font-medium">Approved</span>
                <span className="text-gold-400 font-bold">{stats.partnershipsByStatus.approved}</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(stats.partnershipsByStatus.approved / stats.totalPartnerships) * 100}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-sm font-medium">Rejected</span>
                <span className="text-red-400 font-bold">{stats.partnershipsByStatus.rejected}</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-red-500 to-red-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(stats.partnershipsByStatus.rejected / stats.totalPartnerships) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Items */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Popular Courses */}
        <div className="glass-dark rounded-xl border border-gold-400/20 shadow-emerald-glow p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Popular Courses
          </h3>
          {stats.popularCourses.length === 0 ? (
            <p className="text-gray-400 text-center py-8">No enrollment data yet</p>
          ) : (
            <div className="space-y-3">
              {stats.popularCourses.map((course, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gold-400/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gold-400/10 rounded-full flex items-center justify-center text-gold-400 font-bold text-sm border border-gold-400/30">
                      {index + 1}
                    </div>
                    <span className="text-white font-medium text-sm">{course.name}</span>
                  </div>
                  <span className="px-3 py-1 bg-gold-400/20 text-gold-400 rounded-full text-sm font-semibold border border-gold-400/30">
                    {course.count} enrollments
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Popular Services */}
        <div className="glass-dark rounded-xl border border-gold-400/20 shadow-emerald-glow p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Popular Services
          </h3>
          {stats.popularServices.length === 0 ? (
            <p className="text-gray-400 text-center py-8">No service inquiry data yet</p>
          ) : (
            <div className="space-y-3">
              {stats.popularServices.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gold-400/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gold-400/10 rounded-full flex items-center justify-center text-gold-400 font-bold text-sm border border-gold-400/30">
                      {index + 1}
                    </div>
                    <span className="text-white font-medium text-sm">{service.name}</span>
                  </div>
                  <span className="px-3 py-1 bg-gold-400/20 text-gold-400 rounded-full text-sm font-semibold border border-gold-400/30">
                    {service.count} inquiries
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="glass-dark rounded-xl border border-gold-400/20 shadow-emerald-glow p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <svg className="w-6 h-6 mr-2 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Recent Activity
        </h3>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {stats.recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gold-400/20 hover:border-gold-400/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'inquiry' ? 'bg-gold-400' :
                  activity.type === 'enrollment' ? 'bg-purple-400' :
                  'bg-gold-400'
                }`}></div>
                <div>
                  <p className="text-white text-sm font-medium">{activity.message}</p>
                  <p className="text-xs text-gray-400">{activity.time}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                activity.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                activity.status === 'approved' ? 'bg-gold-400/20 text-gold-400 border border-gold-400/30' :
                activity.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                activity.status === 'resolved' ? 'bg-gold-400/20 text-gold-400 border border-gold-400/30' :
                'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}>
                {activity.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Analytics() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <AnalyticsContent />
      </DashboardLayout>
    </ProtectedRoute>
  );
}

