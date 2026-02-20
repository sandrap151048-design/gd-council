﻿'use client';

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
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black"></div>
          
          {/* Diagonal Accent */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-emerald-500/20 via-transparent to-transparent transform skew-x-12"></div>
          </div>

          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            animation: 'gridMove 25s linear infinite'
          }}></div>

          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text Content (7 columns) */}
              <div className="lg:col-span-7 text-center lg:text-left">
                {/* Animated Badge */}
                <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-emerald-500/20 to-emerald-400/10 border border-emerald-500/40 rounded-full mb-6 sm:mb-8 backdrop-blur-sm animate-blurToFocus">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-emerald-400 tracking-wider uppercase">Trusted Globally</span>
                </div>
                
                {/* Hero Title - Stacked Design */}
                <div className="mb-6 sm:mb-8">
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-4">
                    <div className="overflow-hidden">
                      <span className="block text-white animate-smoothSlideFade" style={{animationDelay: '0.1s'}}>
                        Transform
                      </span>
                    </div>
                    <div className="overflow-hidden">
                      <span className="block bg-gradient-to-r from-emerald-700 via-emerald-800 to-emerald-900 bg-clip-text text-transparent animate-smoothSlideFade" style={{
                        animationDelay: '0.2s'
                      }}>
                        Education
                      </span>
                    </div>
                    <div className="overflow-hidden">
                      <span className="block text-gray-300 text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-smoothSlideFade" style={{animationDelay: '0.3s'}}>
                        Through Global Partnerships
                      </span>
                    </div>
                  </h1>
                </div>
                
                {/* Description */}
                <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-smoothSlideFade" style={{animationDelay: '0.4s'}}>
                  Building bridges between institutions worldwide. We deliver comprehensive education solutions that drive growth, foster innovation, and create lasting impact in the global academic community.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-smoothSlideFade" style={{animationDelay: '0.5s'}}>
                  <Link href="/register" className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-black font-bold rounded-xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Get Started
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Link>
                  <Link href="/about" className="px-8 py-4 bg-white/5 text-white font-bold rounded-xl border-2 border-white/10 hover:bg-white/10 hover:border-emerald-400/50 transition-all hover:scale-105 text-center backdrop-blur-sm">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Right Column - Image with Modern Frame (5 columns) */}
              <div className="lg:col-span-5 relative mt-12 lg:mt-0">
                <div className="relative" style={{
                  animation: 'spreadScale 1.5s ease-out forwards',
                  animationDelay: '0.7s',
                  opacity: 0,
                  transform: 'scale(0.2)'
                }}>
                  {/* Main Image Container */}
                  <div className="relative rounded-3xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" 
                      alt="Global education collaboration"
                      className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
                  <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-emerald-400/20 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 border-t-4 border-r-4 border-emerald-500/50 rounded-tr-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-16 sm:w-20 h-16 sm:h-20 border-b-4 border-l-4 border-emerald-500/50 rounded-bl-3xl"></div>
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
              <div className="text-xs font-medium text-emerald-400 tracking-wide uppercase mb-4">What We Offer</div>
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
                  icon: '🌍', 
                  title: 'Global Education',
                  desc: 'Connect with 500+ universities across 50+ countries',
                },
                { 
                  icon: '🎓', 
                  title: 'Skill Development',
                  desc: 'Industry-recognized certification programs',
                },
                { 
                  icon: '📚', 
                  title: 'Course Assistance',
                  desc: 'End-to-end application assistance',
                },
                { 
                  icon: '✈️', 
                  title: 'Immigration Support',
                  desc: 'Expert immigration guidance',
                }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6 hover:bg-white/10 hover:border-emerald-500/40 transition-all group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">{service.title}</h3>
                  <p className="text-sm text-gray-400">{service.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
              <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-all">
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
              <div className="text-xs font-medium text-emerald-400 tracking-wide uppercase mb-4">Featured Solutions</div>
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
                  <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden bg-gray-900 flex-shrink-0">
                      <img 
                        src={`https://images.unsplash.com/${service.img}?w=600&q=80`}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">{service.title}</h3>
                      <p className="text-sm text-gray-400 mb-4 flex-1">{service.desc}</p>
                      
                      {/* Expandable Details */}
                      {expandedCard === index && (
                        <div className="mb-4 pt-4 border-t border-emerald-500/20">
                          {/* Features List */}
                          <div className="mb-4">
                            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Key Features
                            </h4>
                            <div className="space-y-2">
                              {service.details.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-xs">
                                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0 mt-1.5"></div>
                                  <p className="text-gray-300">{feature}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Stats Grid */}
                          <div className="grid grid-cols-3 gap-2 mb-4">
                            {service.details.stats.map((stat, idx) => (
                              <div key={idx} className="text-center p-2 bg-emerald-500/5 rounded-lg">
                                <div className="text-lg font-bold text-emerald-400 mb-1">
                                  {stat.value}
                                </div>
                                <div className="text-xs text-gray-400">{stat.label}</div>
                              </div>
                            ))}
                          </div>

                          {/* CTA Button */}
                          <Link 
                            href={service.link}
                            className="block w-full px-4 py-2 bg-emerald-500 text-black text-sm font-bold rounded-lg hover:bg-emerald-400 transition-all text-center"
                          >
                            Explore {service.title}
                          </Link>
                        </div>
                      )}

                      <button
                        onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                        className="flex items-center text-emerald-400 text-sm font-medium mt-auto hover:text-emerald-300 transition-colors"
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
              <div className="text-xs font-medium text-emerald-400 tracking-wide uppercase mb-4">Why Choose Us</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Trusted by Institutions Worldwide
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {[
                { number: '86%', title: 'Lower Fees', desc: 'Cost savings on partnerships', icon: '💰' },
                { number: '24/7', title: 'Support', desc: 'Round-the-clock assistance', icon: '🛟' },
                { number: '500+', title: 'Partners', desc: 'Global university network', icon: '🌐' }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-xl p-8 hover:border-emerald-500/40 transition-all group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div className="text-5xl font-bold text-emerald-400 mb-3">{item.number}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
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
                <Link href="/register" className="px-8 py-4 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-400 transition-all">
                  Get Started Today
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-transparent text-emerald-400 font-semibold rounded-lg border border-emerald-500/30 hover:bg-emerald-500/10 hover:border-emerald-400 transition-all">
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
