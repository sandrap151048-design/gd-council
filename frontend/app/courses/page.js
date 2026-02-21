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
      {/* Hero Section - Split Layout with Photos and Background (Home Page Style) */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden puzzle-bg">
        {/* Large Background Image - More Visible */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80" 
            alt="Professional training and skill development"
            className="w-full h-full object-cover animate-elasticScale"
            style={{opacity: 0.15}}
          />
          {/* Puzzle-style Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1729]/95 via-[#1a1f35]/90 to-[#0f1729]/85"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/90 via-transparent to-transparent"></div>
        </div>

        {/* Animated Tech Grid */}
        <div className="absolute inset-0 z-10 opacity-20" style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite'
        }}></div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold-400 rounded-full animate-float opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gold-400 rounded-full animate-float animation-delay-1000 opacity-40"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-emerald-300 rounded-full animate-float animation-delay-2000 opacity-50"></div>
          <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-gold-400 rounded-full animate-float animation-delay-3000 opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Content */}
            <div className="text-center lg:text-left">
              {/* Animated Badge */}
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 bg-gold-400/10 border border-gold-400/30 rounded-full mb-4 sm:mb-6 animate-blurToFocus">
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-gold-400"></span>
                </span>
                <span className="text-xs font-semibold text-gold-400 tracking-wider uppercase">Professional Development</span>
              </div>
              
              {/* Hero Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="block text-white mb-2 animate-smoothSlideFade" style={{animationDelay: '0.1s'}}>Skill Development</span>
                <span className="block text-white animate-smoothSlideFade" style={{
                  animationDelay: '0.2s',
                  textShadow: '0 0 20px rgba(16, 185, 129, 0.6), 0 0 40px rgba(16, 185, 129, 0.4), 0 0 60px rgba(16, 185, 129, 0.2)',
                  animation: 'smoothSlideFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s, greenTextGlow 3s ease-in-out infinite'
                }}>Courses & Programs</span>
              </h1>
              
              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed animate-smoothSlideFade" style={{animationDelay: '0.3s'}}>
                Industry-recognized certifications and expert-led training programs designed for institutional growth
              </p>
            </div>

            {/* Right: Circle Images - Joined Vertically - Visible on all devices */}
            <div className="flex flex-col gap-0 items-center mt-8 lg:mt-0">
              {/* Top Circle Image */}
              <div style={{
                animation: 'spreadTopLeft 1s ease-out forwards',
                animationDelay: '0.2s',
                opacity: 0
              }}>
                <div className="relative overflow-hidden rounded-full w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 group border-4 border-gold-400/20">
                  <img 
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80"
                    alt="Students learning"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1729]/60 to-transparent"></div>
                </div>
              </div>

              {/* Bottom Circle Image - Joined */}
              <div className="-mt-6 sm:-mt-8" style={{
                animation: 'spreadBottomRight 1s ease-out forwards',
                animationDelay: '0.3s',
                opacity: 0
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

