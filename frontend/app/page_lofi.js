'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import Script from 'next/script';
import { organizationSchema, breadcrumbSchema } from '../lib/seo';

export default function Home() {
  useEffect(() => {
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

  return (
    <>
      {/* Structured Data for SEO */}
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
      
      <div className="min-h-screen bg-black">
        {/* Hero Section - Lofi Style */}
        <section className="lofi-section min-h-screen flex items-center overflow-hidden">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          {/* Floating Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
          </div>
          
          <div className="lofi-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="lofi-badge mx-auto mb-8 animate-fadeInDown">
                <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></span>
                <span>Trusted by 500+ Institutions Worldwide</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="lofi-heading animate-fadeInUp">
                <span className="text-white">Global Education</span>
                <br />
                <span className="lofi-heading-gradient">Council</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
                Connecting educational institutions worldwide through innovative partnerships and comprehensive support services
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center animate-fadeInUp animation-delay-400">
                <Link href="/register" className="lofi-button">
                  Get Started
                </Link>
                <Link href="/about" className="lofi-button-secondary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Clean Lofi Style */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-950">
          <div className="lofi-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '500+', label: 'Partner Universities' },
                { number: '50+', label: 'Countries' },
                { number: '10K+', label: 'Students Placed' },
                { number: '98%', label: 'Success Rate' }
              ].map((stat, index) => (
                <div key={index} className="lofi-stat scroll-reveal" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="lofi-stat-number">{stat.number}</div>
                  <div className="lofi-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section - Lofi Cards */}
        <section className="lofi-section bg-black">
          <div className="lofi-container">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="lofi-heading">
                <span className="lofi-heading-gradient">Our Services</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive solutions for educational institutions and students
              </p>
            </div>
            
            <div className="lofi-grid">
              {/* Service 1 */}
              <div className="lofi-feature scroll-reveal">
                <div className="lofi-feature-icon">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Overseas Education</h3>
                <p className="text-gray-400 mb-6">
                  Expert guidance for international education partnerships and visa support
                </p>
                <Link href="/services" className="text-gold-400 font-semibold hover:text-gold-300 inline-flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Service 2 */}
              <div className="lofi-feature scroll-reveal animation-delay-200">
                <div className="lofi-feature-icon">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Skill Development</h3>
                <p className="text-gray-400 mb-6">
                  Industry-recognized certifications with flexible scheduling options
                </p>
                <Link href="/courses" className="text-gold-400 font-semibold hover:text-gold-300 inline-flex items-center gap-2">
                  View Courses
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Service 3 */}
              <div className="lofi-feature scroll-reveal animation-delay-400">
                <div className="lofi-feature-icon">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">University Partnerships</h3>
                <p className="text-gray-400 mb-6">
                  Access to 500+ partner universities with comprehensive support
                </p>
                <Link href="/universities" className="text-gold-400 font-semibold hover:text-gold-300 inline-flex items-center gap-2">
                  View Partners
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Clean Grid */}
        <section className="lofi-section bg-gradient-to-b from-black to-gray-950">
          <div className="lofi-container">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="lofi-heading">
                <span className="lofi-heading-gradient">Why Choose Us</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Join thousands of institutions transforming education worldwide
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: '86%', title: 'Lower Fees', desc: 'Save significantly on costs' },
                { number: '24/7', title: 'Global Support', desc: 'Round-the-clock assistance' },
                { number: '500+', title: 'Partners', desc: 'Extensive global network' }
              ].map((item, index) => (
                <div key={index} className="lofi-card p-8 text-center scroll-reveal" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-6xl font-bold mb-4 lofi-heading-gradient">{item.number}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Clean Lofi */}
        <section className="lofi-section bg-black">
          <div className="lofi-container">
            <div className="lofi-card p-12 md:p-16 text-center scroll-reveal">
              <h2 className="lofi-heading mb-6">
                <span className="lofi-heading-gradient">Ready to Get Started?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join hundreds of institutions already benefiting from our services
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/register" className="lofi-button">
                  Register Now
                </Link>
                <Link href="/contact" className="lofi-button-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

