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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Content */}
            <div className="text-center lg:text-left">
              {/* Animated Badge */}
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-gold-500/20 to-gold-400/10 border border-gold-400/40 rounded-full mb-6 sm:mb-8 backdrop-blur-sm animate-blurToFocus">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold-400"></span>
                </span>
                <span className="text-xs sm:text-sm font-bold text-gold-400 tracking-wider uppercase">Professional Development</span>
              </div>
              
              {/* Hero Title */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-4">
                <div className="overflow-hidden">
                  <span className="block text-white animate-smoothSlideFade" style={{animationDelay: '0.1s'}}>
                    Skill Development
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="block text-white animate-smoothSlideFade" style={{
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

            {/* Right: Circle Images */}
            <div className="flex flex-col gap-0 items-center mt-8 lg:mt-0">
              {/* Top Circle Image */}
              <div style={{
                animation: 'spreadScale 1.5s ease-out forwards',
                animationDelay: '0.7s',
                opacity: 0,
                transform: 'scale(0.2)'
              }}>
                <div className="relative overflow-hidden rounded-full w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 group border-4 border-gold-400/20">
                  <img 
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80"
                    alt="Students learning"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                </div>
              </div>

              {/* Bottom Circle Image */}
              <div className="-mt-6 sm:-mt-8" style={{
                animation: 'spreadScale 1.5s ease-out forwards',
                animationDelay: '0.9s',
                opacity: 0,
                transform: 'scale(0.2)'
              }}>
                <div className="relative overflow-hidden rounded-full w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 group border-4 border-gold-400/20">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
                    alt="Professional training"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1729]/60 to-transparent"></div>
                </div>
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


