'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import api from '../../services/api';

// Demo universities data - empty array, will use database data only
const demoUniversities = [];

export default function Universities() {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUniversities();
  }, []);

  const fetchUniversities = async () => {
    try {
      console.log('Fetching universities from API...');
      const { data } = await api.get('/universities');
      console.log('Universities received:', data);
      // Use only database universities
      setUniversities(data);
    } catch (error) {
      console.error('Error fetching universities:', error);
      console.error('Error details:', error.response?.data || error.message);
      // If API fails, show empty array
      setUniversities([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen puzzle-bg-dark">
        <div className="puzzle-glass-card p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-400 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen puzzle-bg-dark pt-20 md:pt-16">
      {/* Hero Section - Split Layout with Animated Images */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0a0e1a] via-[#0f1729] to-[#0a0e1a]">
        {/* Background Image - Students Studying */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Students studying together"
            className="w-full h-full object-cover"
            style={{opacity: 0.35}}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/85 via-[#0f1729]/80 to-[#0a0e1a]/85"></div>
        </div>

        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 z-10" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 217, 163, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 163, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}></div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-gold-400/20 rounded-full blur-3xl animate-pulse z-10"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-gold-400/10 rounded-full blur-3xl animate-pulse z-10" style={{animationDelay: '1s'}}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Content (7 columns) */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gold-400/10 border border-gold-400/30 rounded-full mb-4 sm:mb-6 animate-blurToFocus">
                <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">500+ Partner Universities Worldwide</span>
              </div>
              
              <h1 className="font-black leading-none mb-4 sm:mb-6">
                <div className="overflow-hidden">
                  <span className="block text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl animate-smoothSlideFade" style={{animationDelay: '0.1s'}}>
                    Partnership
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="block text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-smoothSlideFade" style={{
                    animationDelay: '0.2s',
                    textShadow: '0 0 20px rgba(230, 200, 124, 0.6), 0 0 40px rgba(230, 200, 124, 0.4), 0 0 60px rgba(230, 200, 124, 0.2)',
                    animation: 'smoothSlideFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s, goldTextGlow 3s ease-in-out infinite'
                  }}>
                    Universities
                  </span>
                </div>
              </h1>
              
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed animate-smoothSlideFade" style={{animationDelay: '0.3s'}}>
                Discover our network of prestigious universities across 50+ countries
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-smoothSlideFade justify-center lg:justify-start" style={{animationDelay: '0.4s'}}>
                <Link href="/contact" className="px-6 sm:px-8 py-3 sm:py-4 bg-gold-400 text-black font-bold rounded-xl hover:bg-gold-400 transition-all hover:scale-105 text-center">
                  Partner With Us
                </Link>
                <Link href="/about" className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 text-gold-400 font-bold rounded-xl border-2 border-gold-400/30 hover:bg-gold-400/10 transition-all text-center">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Column - Workflow Circles with Curved Arrows */}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-[10px] sm:text-xs font-bold text-white">Research</p>
                </div>

                {/* Right Circle */}
                <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-gold-500/30 to-gold-600/20 backdrop-blur-sm border-2 border-gold-400/40 rounded-full flex flex-col items-center justify-center text-center animate-float shadow-lg shadow-gold-400/20" style={{animationDelay: '0.5s'}}>
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gold-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-[10px] sm:text-xs font-bold text-white">Apply</p>
                </div>

                {/* Bottom Circle */}
                <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-gold-500/30 to-gold-600/20 backdrop-blur-sm border-2 border-gold-400/40 rounded-full flex flex-col items-center justify-center text-center animate-float shadow-lg shadow-gold-400/20" style={{animationDelay: '1s'}}>
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gold-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <p className="text-[10px] sm:text-xs font-bold text-white">Accept</p>
                </div>

                {/* Left Circle */}
                <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-gold-500/30 to-gold-600/20 backdrop-blur-sm border-2 border-gold-400/40 rounded-full flex flex-col items-center justify-center text-center animate-float shadow-lg shadow-gold-400/20" style={{animationDelay: '1.5s'}}>
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gold-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <p className="text-[10px] sm:text-xs font-bold text-white">Study</p>
                </div>

                {/* Center Circle - Main (Larger) - Positioned more up */}
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 bg-gradient-to-br from-gold-500/40 to-gold-600/30 backdrop-blur-sm border-3 border-gold-400/50 rounded-full flex flex-col items-center justify-center text-center shadow-xl shadow-gold-400/30 animate-pulse-slow z-10">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-gold-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  <p className="text-sm sm:text-base font-bold text-white">Graduate</p>
                </div>

                {/* Curved Arrows - Clockwise Workflow */}
                {/* Top to Right */}
                <svg className="absolute top-[25%] right-[25%] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-gold-400/50 animate-pulse" style={{animationDelay: '0.3s'}}>
                  <path d="M 5 5 Q 40 5 55 40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#uniArrow1)"/>
                  <defs>
                    <marker id="uniArrow1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                    </marker>
                  </defs>
                </svg>

                {/* Right to Bottom */}
                <svg className="absolute bottom-[25%] right-[25%] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-gold-400/50 animate-pulse" style={{animationDelay: '0.6s'}}>
                  <path d="M 55 5 Q 40 40 5 55" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#uniArrow2)"/>
                  <defs>
                    <marker id="uniArrow2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                    </marker>
                  </defs>
                </svg>

                {/* Bottom to Left */}
                <svg className="absolute bottom-[25%] left-[25%] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-gold-400/50 animate-pulse" style={{animationDelay: '0.9s'}}>
                  <path d="M 55 55 Q 5 40 5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#uniArrow3)"/>
                  <defs>
                    <marker id="uniArrow3" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                    </marker>
                  </defs>
                </svg>

                {/* Left to Top */}
                <svg className="absolute top-[25%] left-[25%] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-gold-400/50 animate-pulse" style={{animationDelay: '1.2s'}}>
                  <path d="M 5 55 Q 5 5 40 5" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#uniArrow4)"/>
                  <defs>
                    <marker id="uniArrow4" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
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

      {/* Universities Grid */}
      <section className="py-12 sm:py-16 lg:py-20 puzzle-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          {universities.length === 0 ? (
            <div className="text-center py-12 sm:py-20">
              <div className="puzzle-glass-card p-8 sm:p-12 max-w-md mx-auto">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gold-400/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 border border-gold-400/30">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-gray-300 text-base sm:text-lg mb-3 sm:mb-4">No universities available yet</p>
                <p className="text-gray-500 text-sm">Universities will appear here once added by admin</p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {universities.map((university, index) => (
                <div key={university._id} className={`puzzle-icon-card group h-full ${index % 2 === 0 ? 'card-slide-left' : 'card-slide-right'} delay-${(index + 1) * 100}`}>
                  {/* University Image */}
                  {university.image && (
                    <div className="relative h-40 sm:h-48 overflow-hidden rounded-xl mb-4 sm:mb-6">
                      <img 
                        src={university.image}
                        alt={university.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1729]/60 via-transparent to-transparent"></div>
                      
                      {/* Ranking Badge */}
                      {university.ranking && (
                        <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                          <span className="px-2 sm:px-3 py-1 bg-gold-400/90 text-black text-xs font-bold rounded-full">
                            {university.ranking}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Country */}
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <span className="puzzle-label text-xs">
                      🌍 {university.country}
                    </span>
                  </div>

                  {/* University Name */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-gold-400 transition-colors min-h-[3.5rem]">
                    {university.name}
                  </h3>

                  {/* Description */}
                  <p className="puzzle-text text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 min-h-[4.5rem]">
                    {university.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                    {university.programs && (
                      <div className="flex items-center gap-1 sm:gap-2 text-xs text-gray-400">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gold-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span className="truncate">{university.programs}</span>
                      </div>
                    )}
                    {university.students && (
                      <div className="flex items-center gap-1 sm:gap-2 text-xs text-gray-400">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gold-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="truncate">{university.students}</span>
                      </div>
                    )}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-gold-400/20 mt-auto">
                    <Link 
                      href="/contact"
                      className="flex-1 px-3 sm:px-4 py-2 bg-gold-400 text-black text-xs sm:text-sm font-bold rounded-lg hover:bg-gold-400 transition-all text-center"
                    >
                      Apply Now
                    </Link>
                    {university.website && (
                      <a 
                        href={university.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 sm:px-4 py-2 bg-white/5 text-gold-400 text-xs sm:text-sm font-bold rounded-lg border border-gold-400/30 hover:bg-gold-400/10 transition-all text-center"
                      >
                        Visit Website
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}



