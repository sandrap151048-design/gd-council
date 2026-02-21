'use client';

import { useEffect } from 'react';

export default function Contact() {
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
    <div className="min-h-screen puzzle-bg-dark pt-20 md:pt-16">
      {/* Hero Section - Split Layout with Rounded Images */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0a0e1a] via-[#0f1729] to-[#0a0e1a]">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(230, 200, 124, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Content (7 columns) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gold-400/10 rounded-full mb-6 animate-blurToFocus">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold-400"></span>
                </span>
                <span className="text-xs font-semibold text-gold-400 tracking-wider uppercase">We're Here to Help</span>
              </div>
              
              <h1 className="font-black leading-none mb-6">
                <div className="overflow-hidden">
                  <span className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-smoothSlideFade" style={{animationDelay: '0.1s'}}>
                    Contact
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="block text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl animate-smoothSlideFade" style={{
                    animationDelay: '0.2s',
                    textShadow: '0 0 20px rgba(230, 200, 124, 0.6), 0 0 40px rgba(230, 200, 124, 0.4), 0 0 60px rgba(230, 200, 124, 0.2)',
                    animation: 'smoothSlideFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s, goldTextGlow 3s ease-in-out infinite'
                  }}>
                    Us
                  </span>
                </div>
              </h1>
              
              <p className="text-xl text-gray-300 mb-4 leading-relaxed animate-smoothSlideFade" style={{animationDelay: '0.3s'}}>
                Get in touch with our team for any inquiries or support
              </p>

              <p className="text-base text-gray-400 leading-relaxed mb-8 animate-smoothSlideFade" style={{animationDelay: '0.4s'}}>
                Our dedicated support team is available 24/7 to assist with partnership inquiries, enrollment questions, and technical support.
              </p>

              {/* Quick Contact Options */}
              <div className="flex flex-wrap gap-4 animate-smoothSlideFade" style={{animationDelay: '0.5s'}}>
                <a href="mailto:info@globaleducation.com" className="px-6 py-3 bg-gold-400 text-black font-semibold rounded-xl hover:bg-gold-400 transition-all hover:scale-105 inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </a>
                <a href="tel:+12345678900" className="px-6 py-3 bg-white/5 text-gold-400 font-semibold rounded-xl hover:bg-gold-400/10 transition-all hover:scale-105 inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-[10px] sm:text-xs font-bold text-white">Call</p>
                </div>

                {/* Right Circle */}
                <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-gold-500/30 to-gold-600/20 backdrop-blur-sm border-2 border-gold-400/40 rounded-full flex flex-col items-center justify-center text-center animate-float shadow-lg shadow-gold-400/20" style={{animationDelay: '0.5s'}}>
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gold-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[10px] sm:text-xs font-bold text-white">Email</p>
                </div>

                {/* Bottom Circle */}
                <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-gold-500/30 to-gold-600/20 backdrop-blur-sm border-2 border-gold-400/40 rounded-full flex flex-col items-center justify-center text-center animate-float shadow-lg shadow-gold-400/20" style={{animationDelay: '1s'}}>
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gold-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[10px] sm:text-xs font-bold text-white">Schedule</p>
                </div>

                {/* Left Circle */}
                <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-gold-500/30 to-gold-600/20 backdrop-blur-sm border-2 border-gold-400/40 rounded-full flex flex-col items-center justify-center text-center animate-float shadow-lg shadow-gold-400/20" style={{animationDelay: '1.5s'}}>
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gold-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  <p className="text-[10px] sm:text-xs font-bold text-white">Chat</p>
                </div>

                {/* Center Circle - Main (Larger) - Positioned more up */}
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 bg-gradient-to-br from-gold-500/40 to-gold-600/30 backdrop-blur-sm border-3 border-gold-400/50 rounded-full flex flex-col items-center justify-center text-center shadow-xl shadow-gold-400/30 animate-pulse-slow z-10">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-gold-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <p className="text-sm sm:text-base font-bold text-white">Connect</p>
                </div>

                {/* Curved Arrows - Clockwise Workflow */}
                {/* Top to Right */}
                <svg className="absolute top-[25%] right-[25%] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-gold-400/50 animate-pulse" style={{animationDelay: '0.3s'}}>
                  <path d="M 5 5 Q 40 5 55 40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#contactArrow1)"/>
                  <defs>
                    <marker id="contactArrow1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                    </marker>
                  </defs>
                </svg>

                {/* Right to Bottom */}
                <svg className="absolute bottom-[25%] right-[25%] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-gold-400/50 animate-pulse" style={{animationDelay: '0.6s'}}>
                  <path d="M 55 5 Q 40 40 5 55" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#contactArrow2)"/>
                  <defs>
                    <marker id="contactArrow2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                    </marker>
                  </defs>
                </svg>

                {/* Bottom to Left */}
                <svg className="absolute bottom-[25%] left-[25%] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-gold-400/50 animate-pulse" style={{animationDelay: '0.9s'}}>
                  <path d="M 55 55 Q 5 40 5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#contactArrow3)"/>
                  <defs>
                    <marker id="contactArrow3" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                    </marker>
                  </defs>
                </svg>

                {/* Left to Top */}
                <svg className="absolute top-[25%] left-[25%] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-gold-400/50 animate-pulse" style={{animationDelay: '1.2s'}}>
                  <path d="M 5 55 Q 5 5 40 5" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#contactArrow4)"/>
                  <defs>
                    <marker id="contactArrow4" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
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

      {/* Contact Information Section */}
      <section className="py-20 puzzle-section relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Details Card */}
            <div className="scroll-reveal">
              <div className="puzzle-glass-card">
                <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gold-400 mb-3 text-lg">Email</h3>
                      <p className="text-gray-300 mb-1">info@globaleducation.com</p>
                      <p className="text-gray-300">support@globaleducation.com</p>
                    </div>
                  </div>
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gold-400 mb-3 text-lg">Phone</h3>
                      <p className="text-gray-300 mb-1">+1 234 567 8900</p>
                      <p className="text-gray-300">+1 234 567 8901</p>
                    </div>
                  </div>
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gold-400 mb-3 text-lg">Address</h3>
                      <p className="text-gray-300 leading-relaxed">
                        123 Education Street<br />
                        Suite 456<br />
                        City, State 12345<br />
                        Country
                      </p>
                    </div>
                  </div>
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gold-400 mb-3 text-lg">Business Hours</h3>
                      <p className="text-gray-300 mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-300 mb-1">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-gray-300">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="scroll-reveal animation-delay-200">
              <div className="puzzle-glass-card h-full flex flex-col">
                <h2 className="text-4xl font-bold text-white mb-8">Send a Message</h2>
                <p className="puzzle-text mb-8 leading-relaxed text-lg">
                  For inquiries and enrollment, please <a href="/login" className="text-gold-400 hover:text-gold-300 font-semibold underline">login</a> or <a href="/register" className="text-gold-400 hover:text-gold-300 font-semibold underline">register</a> to submit your inquiry through our portal.
                </p>
                
                <div className="puzzle-icon-card flex-1">
                  <h3 className="font-bold text-white mb-6 text-xl flex items-center gap-3">
                    <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Quick Links
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <a href="/register" className="flex items-center gap-3 text-gray-300 hover:text-gold-400 transition-colors group p-3 rounded-xl hover:bg-gold-400/10">
                        <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        <span className="font-medium">Register for an Account</span>
                      </a>
                    </li>
                    <li>
                      <a href="/login" className="flex items-center gap-3 text-gray-300 hover:text-gold-400 transition-colors group p-3 rounded-xl hover:bg-gold-400/10">
                        <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        <span className="font-medium">Login to Your Account</span>
                      </a>
                    </li>
                    <li>
                      <a href="/courses" className="flex items-center gap-3 text-gray-300 hover:text-gold-400 transition-colors group p-3 rounded-xl hover:bg-gold-400/10">
                        <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span className="font-medium">Browse Courses</span>
                      </a>
                    </li>
                    <li>
                      <a href="/universities" className="flex items-center gap-3 text-gray-300 hover:text-gold-400 transition-colors group p-3 rounded-xl hover:bg-gold-400/10">
                        <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="font-medium">View Partner Universities</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 puzzle-bg-dark relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="puzzle-glass-card p-12 text-center scroll-reveal">
            <h2 className="puzzle-heading text-4xl md:text-5xl mb-6">
              <span className="puzzle-gradient-text">Need Immediate Assistance?</span>
            </h2>
            <p className="puzzle-text text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Our support team is available 24/7 to help with your inquiries
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="mailto:info@globaleducation.com" className="puzzle-btn-primary">
                <span>Email Us</span>
              </a>
              <a href="tel:+12345678900" className="puzzle-btn-secondary">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


