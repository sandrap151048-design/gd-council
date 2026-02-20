'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import api from '../../services/api';

// Demo universities data
const demoUniversities = [
  {
    _id: 'demo-1',
    name: 'Stanford University',
    country: 'United States',
    description: 'World-renowned research university known for innovation, entrepreneurship, and academic excellence.',
    ranking: 'Top 5 Global',
    programs: '200+ Programs',
    students: '17,000+',
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&q=80',
    website: 'https://www.stanford.edu'
  },
  {
    _id: 'demo-2',
    name: 'University of Oxford',
    country: 'United Kingdom',
    description: 'Historic institution offering world-class education across humanities, sciences, and professional studies.',
    ranking: 'Top 3 Global',
    programs: '350+ Programs',
    students: '24,000+',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80',
    website: 'https://www.ox.ac.uk'
  },
  {
    _id: 'demo-3',
    name: 'National University of Singapore',
    country: 'Singapore',
    description: 'Leading global university in Asia with strong research focus and industry partnerships.',
    ranking: 'Top 15 Global',
    programs: '150+ Programs',
    students: '40,000+',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
    website: 'https://www.nus.edu.sg'
  }
];

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
      // Use only demo universities (don't merge with database)
      setUniversities(demoUniversities);
    } catch (error) {
      console.error('Error fetching universities:', error);
      console.error('Error details:', error.response?.data || error.message);
      // If API fails, still show demo universities
      setUniversities(demoUniversities);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen puzzle-bg-dark">
        <div className="puzzle-glass-card p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-400 mx-auto"></div>
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
        <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse z-10"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse z-10" style={{animationDelay: '1s'}}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4 sm:mb-6 animate-blurToFocus">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">500+ Partner Universities Worldwide</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="block text-white animate-smoothSlideFade" style={{animationDelay: '0.1s'}}>Partnership</span>
                <span className="block text-white animate-smoothSlideFade" style={{
                  animationDelay: '0.2s',
                  textShadow: '0 0 20px rgba(16, 185, 129, 0.6), 0 0 40px rgba(16, 185, 129, 0.4), 0 0 60px rgba(16, 185, 129, 0.2)',
                  animation: 'smoothSlideFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s, greenTextGlow 3s ease-in-out infinite'
                }}>Universities</span>
              </h1>
              
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed animate-smoothSlideFade" style={{animationDelay: '0.3s'}}>
                Discover our network of prestigious universities across 50+ countries
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-smoothSlideFade justify-center lg:justify-start" style={{animationDelay: '0.4s'}}>
                <Link href="/contact" className="px-6 sm:px-8 py-3 sm:py-4 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-all hover:scale-105 text-center">
                  Partner With Us
                </Link>
                <Link href="/about" className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 text-emerald-400 font-bold rounded-xl border-2 border-emerald-500/30 hover:bg-emerald-500/10 transition-all text-center">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right: Animated Image Grid - Visible on all devices */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 relative mt-8 lg:mt-0">
              {/* Top Left Image - Spreads from center */}
              <div className="relative z-10" style={{
                animation: 'spreadTopLeft 1s ease-out forwards',
                animationDelay: '0.2s',
                opacity: 0
              }}>
                <div className="group overflow-hidden rounded-xl sm:rounded-2xl bg-gray-800 shadow-2xl">
                  <img 
                    src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="University campus"
                    className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Top Right Image - Spreads from center */}
              <div className="relative z-20 mt-4 sm:mt-8 -ml-4 sm:-ml-8" style={{
                animation: 'spreadTopRight 1s ease-out forwards',
                animationDelay: '0.3s',
                opacity: 0
              }}>
                <div className="group overflow-hidden rounded-xl sm:rounded-2xl bg-gray-800 shadow-2xl">
                  <img 
                    src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Students studying"
                    className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Bottom Left Image - Spreads from center */}
              <div className="relative z-30 -mt-6 sm:-mt-12" style={{
                animation: 'spreadBottomLeft 1s ease-out forwards',
                animationDelay: '0.4s',
                opacity: 0
              }}>
                <div className="group overflow-hidden rounded-xl sm:rounded-2xl bg-gray-800 shadow-2xl">
                  <img 
                    src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="University building"
                    className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Bottom Right Image - Spreads from center */}
              <div className="relative z-40 -ml-4 sm:-ml-8 -mt-2 sm:-mt-4" style={{
                animation: 'spreadBottomRight 1s ease-out forwards',
                animationDelay: '0.5s',
                opacity: 0
              }}>
                <div className="group overflow-hidden rounded-xl sm:rounded-2xl bg-gray-800 shadow-2xl">
                  <img 
                    src="https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="University library"
                    className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
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
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 border border-emerald-500/30">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                          <span className="px-2 sm:px-3 py-1 bg-emerald-500/90 text-black text-xs font-bold rounded-full">
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
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-emerald-400 transition-colors min-h-[3.5rem]">
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
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span className="truncate">{university.programs}</span>
                      </div>
                    )}
                    {university.students && (
                      <div className="flex items-center gap-1 sm:gap-2 text-xs text-gray-400">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="truncate">{university.students}</span>
                      </div>
                    )}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-emerald-500/20 mt-auto">
                    <Link 
                      href="/contact"
                      className="flex-1 px-3 sm:px-4 py-2 bg-emerald-500 text-black text-xs sm:text-sm font-bold rounded-lg hover:bg-emerald-400 transition-all text-center"
                    >
                      Apply Now
                    </Link>
                    {university.website && (
                      <a 
                        href={university.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 sm:px-4 py-2 bg-white/5 text-emerald-400 text-xs sm:text-sm font-bold rounded-lg border border-emerald-500/30 hover:bg-emerald-500/10 transition-all text-center"
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
