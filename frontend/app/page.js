'use client';

import Link from 'next/link';
import { useState } from 'react';
import Script from 'next/script';
import { organizationSchema, breadcrumbSchema } from '../lib/seo';

export default function Home() {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: 'Home', path: '/' }])
          ),
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black pt-20 md:pt-16">
        {/* Hero Section - Modern Asymmetric Design */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0a0e1a] via-[#0f1729] to-[#0a0e1a]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&q=80" 
              alt="Education and learning"
              className="w-full h-full object-cover"
              style={{opacity: 0.35}}
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/85 via-[#0f1729]/80 to-[#0a0e1a]/85"></div>
          </div>
          
          {/* Animated Pattern Overlay */}
          <div className="absolute inset-0 opacity-5 z-10" style={{
            backgroundImage: `
              linear-gradient(rgba(230, 200, 124, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(230, 200, 124, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-20">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text Content (7 columns) */}
              <div className="lg:col-span-7 text-center lg:text-left">
                {/* Animated Badge */}
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-gold-500/20 to-gold-400/10 border border-gold-400/40 rounded-full mb-4 sm:mb-5 backdrop-blur-sm animate-blurToFocus">
                  <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-gold-400"></span>
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-gold-400 tracking-wider uppercase">Trusted Globally</span>
                </div>
                
                {/* Hero Title - Stacked Design */}
                <div className="mb-4 sm:mb-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-none mb-3">
                    <div className="overflow-hidden">
                      <span className="block text-white animate-smoothSlideFade" style={{animationDelay: '0.1s'}}>
                        Transform
                      </span>
                    </div>
                    <div className="overflow-hidden">
                      <span className="block text-white animate-smoothSlideFade" style={{
                        animationDelay: '0.2s',
                        textShadow: '0 0 20px rgba(230, 200, 124, 0.6), 0 0 40px rgba(230, 200, 124, 0.4), 0 0 60px rgba(230, 200, 124, 0.2)',
                        animation: 'smoothSlideFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s, goldTextGlow 3s ease-in-out infinite'
                      }}>
                        Education
                      </span>
                    </div>
                    <div className="overflow-hidden">
                      <span className="block text-gray-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl animate-smoothSlideFade" style={{animationDelay: '0.3s'}}>
                        Through Global Partnerships
                      </span>
                    </div>
                  </h1>
                </div>
                
                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-5 sm:mb-7 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-smoothSlideFade" style={{animationDelay: '0.4s'}}>
                  Building bridges between institutions worldwide. We deliver comprehensive education solutions that drive growth, foster innovation, and create lasting impact in the global academic community.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start animate-smoothSlideFade" style={{animationDelay: '0.5s'}}>
                  <Link href="/courses" className="group relative px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold rounded-xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-gold-500/50 hover:scale-105 text-sm sm:text-base">
                    <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Get Started
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Link>
                  <Link href="/about" className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white/5 text-white font-bold rounded-xl border-2 border-white/10 hover:bg-white/10 hover:border-gold-400/50 transition-all hover:scale-105 text-center backdrop-blur-sm text-sm sm:text-base">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Right Column - Workflow Circles with Curved Arrows (5 columns) */}
              <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex items-center justify-center">
                <div className="relative w-full max-w-[280px] sm:max-w-md lg:max-w-lg aspect-square p-4 sm:p-8">
                  {/* Top Circle */}
                  <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-gold-500/30 to-gold-600/20 backdrop-blur-sm border-2 border-gold-400/40 rounded-full flex flex-col items-center justify-center text-center animate-float shadow-lg shadow-gold-400/20">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gold-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-[10px] sm:text-xs font-bold text-white">Enroll</p>
                  </div>

                  {/* Right Circle */}
                  <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-gold-500/30 to-gold-600/20 backdrop-blur-sm border-2 border-gold-400/40 rounded-full flex flex-col items-center justify-center text-center animate-float shadow-lg shadow-gold-400/20" style={{animationDelay: '0.5s'}}>
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gold-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <p className="text-[10px] sm:text-xs font-bold text-white">Learn</p>
                  </div>

                  {/* Bottom Circle */}
                  <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-gold-500/30 to-gold-600/20 backdrop-blur-sm border-2 border-gold-400/40 rounded-full flex flex-col items-center justify-center text-center animate-float shadow-lg shadow-gold-400/20" style={{animationDelay: '1s'}}>
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gold-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                    <p className="text-[10px] sm:text-xs font-bold text-white">Graduate</p>
                  </div>

                  {/* Left Circle */}
                  <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-gold-500/30 to-gold-600/20 backdrop-blur-sm border-2 border-gold-400/40 rounded-full flex flex-col items-center justify-center text-center animate-float shadow-lg shadow-gold-400/20" style={{animationDelay: '1.5s'}}>
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gold-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-[10px] sm:text-xs font-bold text-white">Connect</p>
                  </div>

                  {/* Center Circle - Main */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-gold-500/60 to-gold-600/40 backdrop-blur-md border-4 border-gold-400/70 rounded-full flex flex-col items-center justify-center text-center shadow-2xl shadow-gold-400/50 z-20 relative">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-gold-400 mb-1 relative z-10 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <p className="text-xs sm:text-sm font-black text-white relative z-10 tracking-wide uppercase">SUCCESS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* Services Section */}
        <section className="py-12 md:py-20 bg-black relative">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Section Header */}
            <div className="text-center mb-8 md:mb-16">
              <div className="text-xs font-medium text-gold-400 tracking-wide uppercase mb-4">What We Offer</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Services
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Empowering institutions with world-class services and partnerships
              </p>
            </div>
            
            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { 
                  title: 'Global Education',
                  desc: 'Connect with 500+ universities across 50+ countries',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                { 
                  title: 'Skill Development',
                  desc: 'Industry-recognized certification programs',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  )
                },
                { 
                  title: 'Course Assistance',
                  desc: 'End-to-end application assistance',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )
                },
                { 
                  title: 'Immigration Support',
                  desc: 'Expert immigration guidance',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 backdrop-blur-sm border border-gold-400/20 rounded-xl p-6 hover:bg-white/10 hover:border-gold-400/40 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 flex items-center justify-center mb-4 text-gold-400 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gold-400 transition-colors">{service.title}</h3>
                  <p className="text-sm text-gray-400">{service.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
              <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-400 text-black font-bold rounded-xl hover:bg-gold-400 transition-all">
                <span>Explore All Services</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Solutions */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-black to-gray-950 relative">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-medium text-gold-400 tracking-wide uppercase mb-4">Featured Solutions</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Everything You Need
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  img: 'photo-1488190211105-8b0e65b80b4e',
                  title: 'Overseas Education',
                  desc: 'Expert guidance for international partnerships',
                  link: '/contact',
                  details: {
                    features: [
                      'Connect with 500+ universities worldwide',
                      'Personalized university matching',
                      'Application process support',
                      'Visa assistance and guidance'
                    ],
                    stats: [
                      { label: 'Partner Universities', value: '500+' },
                      { label: 'Countries', value: '50+' },
                      { label: 'Success Rate', value: '98%' }
                    ]
                  }
                },
                {
                  img: 'photo-1522202176988-66273c2fd55f',
                  title: 'Skill Development',
                  desc: 'Industry-recognized certifications',
                  link: '/courses',
                  details: {
                    features: [
                      'Industry-recognized certification programs',
                      'Expert-led training courses',
                      'Flexible learning schedules',
                      'Career advancement support'
                    ],
                    stats: [
                      { label: 'Courses Available', value: '200+' },
                      { label: 'Certified Students', value: '10K+' },
                      { label: 'Industry Partners', value: '100+' }
                    ]
                  }
                },
                {
                  img: 'photo-1541339907198-e08756dedf3f',
                  title: 'University Network',
                  desc: 'Access to 500+ partner institutions',
                  link: '/universities',
                  details: {
                    features: [
                      'Global network of top universities',
                      'Diverse program offerings',
                      'Scholarship opportunities',
                      'Direct admission pathways'
                    ],
                    stats: [
                      { label: 'Universities', value: '500+' },
                      { label: 'Programs', value: '5000+' },
                      { label: 'Placements', value: '15K+' }
                    ]
                  }
                }
              ].map((service, index) => (
                <div key={index} className="group w-full">
                  <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-gold-400/30 transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden bg-gray-900 flex-shrink-0">
                      <img 
                        src={`https://images.unsplash.com/${service.img}?w=600&q=80`}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors">{service.title}</h3>
                      <p className="text-sm text-gray-400 mb-4 flex-1">{service.desc}</p>
                      
                      {/* Expandable Details */}
                      {expandedCard === index && (
                        <div className="mb-4 pt-4 border-t border-gold-400/20">
                          {/* Features List */}
                          <div className="mb-4">
                            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                              <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Key Features
                            </h4>
                            <div className="space-y-2">
                              {service.details.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-xs">
                                  <div className="w-1.5 h-1.5 bg-gold-400 rounded-full flex-shrink-0 mt-1.5"></div>
                                  <p className="text-gray-300">{feature}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Stats Grid */}
                          <div className="grid grid-cols-3 gap-2 mb-4">
                            {service.details.stats.map((stat, idx) => (
                              <div key={idx} className="text-center p-2 bg-gold-400/5 rounded-lg">
                                <div className="text-lg font-bold text-gold-400 mb-1">
                                  {stat.value}
                                </div>
                                <div className="text-xs text-gray-400">{stat.label}</div>
                              </div>
                            ))}
                          </div>

                          {/* CTA Button */}
                          <Link 
                            href={service.link}
                            className="block w-full px-4 py-2 bg-gold-400 text-black text-sm font-bold rounded-lg hover:bg-gold-400 transition-all text-center"
                          >
                            Explore {service.title}
                          </Link>
                        </div>
                      )}

                      <button
                        onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                        className="flex items-center text-gold-400 text-sm font-medium mt-auto hover:text-gold-300 transition-colors"
                      >
                        <span>{expandedCard === index ? 'Show Less' : 'Learn More'}</span>
                        <svg 
                          className={`w-4 h-4 ml-2 transition-transform ${expandedCard === index ? 'rotate-180' : 'group-hover:translate-x-1'}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          {expandedCard === index ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          )}
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 md:py-20 bg-black relative">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-medium text-gold-400 tracking-wide uppercase mb-4">Why Choose Us</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Trusted by Institutions Worldwide
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {[
                { 
                  title: 'Lower Fees', 
                  desc: 'Cost savings on partnerships',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  image: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=600&q=80'
                },
                { 
                  title: 'Support', 
                  desc: 'Round-the-clock assistance',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ),
                  image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80'
                },
                { 
                  title: 'Partners', 
                  desc: 'Global university network',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ),
                  image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gold-500/10 to-transparent border border-gold-400/20 rounded-xl overflow-hidden hover:border-gold-400/40 transition-all group">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-gold-400/10 mix-blend-overlay"></div>
                    
                    {/* Icon Overlay */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-500/90 to-gold-600/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform text-black shadow-xl">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-black to-gray-950 relative">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Education?
              </h2>
              <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                Join hundreds of institutions already benefiting from our global network
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/courses" className="px-8 py-4 bg-gold-400 text-black font-semibold rounded-lg hover:bg-gold-400 transition-all">
                  Get Started Today
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-transparent text-gold-400 font-semibold rounded-lg border border-gold-400/30 hover:bg-gold-400/10 hover:border-gold-400 transition-all">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}



