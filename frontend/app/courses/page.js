'use client';

import { useState, useEffect } from 'react';
import api from '../../services/api';
import Link from 'next/link';

// Demo courses data - empty array, will use database data only
const demoCourses = [];

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
    
    // Scroll reveal observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const fetchCourses = async () => {
    try {
      console.log('Fetching courses from API...');
      const { data } = await api.get('/courses');
      console.log('Courses received:', data);
      // Use only database courses
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
      console.error('Error details:', error.response?.data || error.message);
      // If API fails, show empty array
      setCourses([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen puzzle-bg-dark">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gold-400"></div>
          <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border border-gold-400/30"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen puzzle-bg-dark pt-20 md:pt-16">
      {/* Hero Section - Matching Home Page Style */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black"></div>
        
        {/* Diagonal Accent */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-gold-500/20 via-transparent to-transparent transform skew-x-12"></div>
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(230, 200, 124, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(230, 200, 124, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          animation: 'gridMove 25s linear infinite'
        }}></div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content (7 columns) */}
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Animated Badge */}
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-gold-500/20 to-gold-400/10 border border-gold-400/40 rounded-full mb-6 sm:mb-8 backdrop-blur-sm animate-blurToFocus">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold-400"></span>
                </span>
                <span className="text-xs sm:text-sm font-bold text-gold-400 tracking-wider uppercase">Professional Development</span>
              </div>
              
              {/* Hero Title */}
              <h1 className="font-black leading-none mb-4">
                <div className="overflow-hidden">
                  <span className="block text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl animate-smoothSlideFade" style={{animationDelay: '0.1s'}}>
                    Skill Development
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-smoothSlideFade" style={{
                    animationDelay: '0.2s',
                    textShadow: '0 0 20px rgba(230, 200, 124, 0.6), 0 0 40px rgba(230, 200, 124, 0.4), 0 0 60px rgba(230, 200, 124, 0.2)',
                    animation: 'smoothSlideFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s, goldTextGlow 3s ease-in-out infinite'
                  }}>
                    Courses & Programs
                  </span>
                </div>
              </h1>
              
              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-smoothSlideFade" style={{animationDelay: '0.3s'}}>
                Industry-recognized certifications and expert-led training programs designed for institutional growth
              </p>
            </div>

            {/* Right Column - Workflow Circles with Curved Arrows (5 columns) */}
            <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex items-center justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-md lg:max-w-lg aspect-square p-4 sm:p-8" style={{
                animation: 'spreadScale 1.5s ease-out forwards',
                animationDelay: '0.7s',
                opacity: 0,
                transform: 'scale(0.2)'
              }}>
                {/* Top Circle */}
                <div className="absolute top-4 sm:top-8 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-gold-500/30 to-gold-600/20 backdrop-blur-sm border-2 border-gold-400/40 rounded-full flex flex-col items-center justify-center text-center animate-float shadow-lg shadow-gold-400/20">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gold-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <p className="text-[10px] sm:text-xs font-bold text-white">Discover</p>
                </div>

                {/* Right Circle */}
                <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-gold-500/30 to-gold-600/20 backdrop-blur-sm border-2 border-gold-400/40 rounded-full flex flex-col items-center justify-center text-center animate-float shadow-lg shadow-gold-400/20" style={{animationDelay: '0.5s'}}>
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gold-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <p className="text-[10px] sm:text-xs font-bold text-white">Learn</p>
                </div>

                {/* Bottom Circle */}
                <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-gold-500/30 to-gold-600/20 backdrop-blur-sm border-2 border-gold-400/40 rounded-full flex flex-col items-center justify-center text-center animate-float shadow-lg shadow-gold-400/20" style={{animationDelay: '1s'}}>
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gold-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  <p className="text-[10px] sm:text-xs font-bold text-white">Practice</p>
                </div>

                {/* Left Circle */}
                <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-gold-500/30 to-gold-600/20 backdrop-blur-sm border-2 border-gold-400/40 rounded-full flex flex-col items-center justify-center text-center animate-float shadow-lg shadow-gold-400/20" style={{animationDelay: '1.5s'}}>
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gold-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-[10px] sm:text-xs font-bold text-white">Master</p>
                </div>

                {/* Center Circle - Main (Larger) - Positioned more up */}
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 bg-gradient-to-br from-gold-500/40 to-gold-600/30 backdrop-blur-sm border-3 border-gold-400/50 rounded-full flex flex-col items-center justify-center text-center shadow-xl shadow-gold-400/30 animate-pulse-slow z-10">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-gold-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <p className="text-sm sm:text-base font-bold text-white">Certify</p>
                </div>

                {/* Curved Arrows - Clockwise Workflow */}
                {/* Top to Right */}
                <svg className="absolute top-[25%] right-[25%] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-gold-400/50 animate-pulse" style={{animationDelay: '0.3s'}}>
                  <path d="M 5 5 Q 40 5 55 40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow1)"/>
                  <defs>
                    <marker id="arrow1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                    </marker>
                  </defs>
                </svg>

                {/* Right to Bottom */}
                <svg className="absolute bottom-[25%] right-[25%] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-gold-400/50 animate-pulse" style={{animationDelay: '0.6s'}}>
                  <path d="M 55 5 Q 40 40 5 55" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow2)"/>
                  <defs>
                    <marker id="arrow2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                    </marker>
                  </defs>
                </svg>

                {/* Bottom to Left */}
                <svg className="absolute bottom-[25%] left-[25%] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-gold-400/50 animate-pulse" style={{animationDelay: '0.9s'}}>
                  <path d="M 55 55 Q 5 40 5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow3)"/>
                  <defs>
                    <marker id="arrow3" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                    </marker>
                  </defs>
                </svg>

                {/* Left to Top */}
                <svg className="absolute top-[25%] left-[25%] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-gold-400/50 animate-pulse" style={{animationDelay: '1.2s'}}>
                  <path d="M 5 55 Q 5 5 40 5" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow4)"/>
                  <defs>
                    <marker id="arrow4" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                    </marker>
                  </defs>
                </svg>

                {/* Decorative Glowing Orbs */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-gold-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-28 h-28 sm:w-40 sm:h-40 bg-gold-400/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 puzzle-section relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {courses.length === 0 ? (
              <div className="text-center py-20">
                <div className="puzzle-glass-card p-12 max-w-md mx-auto">
                  <div className="w-20 h-20 bg-gold-400/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-gold-400/30">
                    <svg className="w-10 h-10 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m-6-6h12" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-lg mb-4">No courses available yet</p>
                  <p className="text-gray-400 text-sm">Check back soon for new programs</p>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                  <div 
                    key={course._id} 
                    className={`puzzle-icon-card group h-full ${index % 3 === 0 ? 'card-slide-left' : index % 3 === 1 ? 'card-slide-up' : 'card-slide-right'} delay-${(index + 1) * 100}`}
                  >
                    {/* Course Image */}
                    <div className="relative h-48 overflow-hidden rounded-xl mb-6">
                      <img 
                        src={`https://images.unsplash.com/photo-${['1434030216411-0b793f4b4173', '1513258496099-48168024aec0', '1503676260728-1c00da094a0b'][index % 3]}?w=600&q=80`}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1729] via-[#0f1729]/50 to-transparent"></div>
                      <div className="absolute inset-0 bg-gold-400/10 mix-blend-overlay"></div>
                      
                      {/* Level Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-gold-400/90 text-black text-xs font-bold rounded-full">
                          {course.level}
                        </span>
                      </div>
                    </div>

                    {/* Category & Duration */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="puzzle-label text-xs">
                        {course.category}
                      </span>
                      <span className="text-gray-400 text-xs">{course.duration}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors min-h-[3.5rem]">
                      {course.title}
                    </h3>

                    {/* Description */}
                    <p className="puzzle-text text-sm mb-6 line-clamp-3 min-h-[4.5rem]">
                      {course.description}
                    </p>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gold-400/20 mt-auto">
                      <div>
                        <div className="puzzle-stat-number text-2xl">
                          ${course.price}
                        </div>
                        <div className="text-xs text-gray-500">per course</div>
                      </div>
                      <Link 
                        href={`/dashboard/enroll?courseId=${course._id}`}
                        className="puzzle-btn-primary px-4 py-2 text-sm whitespace-nowrap"
                      >
                        <span>Enroll Now</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 puzzle-bg-dark relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="puzzle-glass-card p-12 text-center">
              <h2 className="puzzle-heading text-4xl mb-6">
                <span className="puzzle-gradient-text">
                  Ready to Start Learning?
                </span>
              </h2>
              <p className="puzzle-text text-xl mb-8">
                Join thousands of institutions advancing their teams' skills
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/register" className="puzzle-btn-primary">
                  <span>Get Started</span>
                </Link>
                <Link href="/contact" className="puzzle-btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


