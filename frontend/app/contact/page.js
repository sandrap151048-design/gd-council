'use client';

import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function Contact() {
  const { user } = useAuth();

  const handleEmailClick = (e) => {
    if (!user) {
      e.preventDefault();
      window.location.href = '/login';
    }
  };

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
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0a0e1a] via-[#0f1729] to-[#0a0e1a]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=compress&cs=tinysrgb&w=1920" 
            alt="Contact us"
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-gold-500/20 to-gold-400/10 border border-gold-400/40 rounded-full mb-4 sm:mb-6 backdrop-blur-sm animate-blurToFocus">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-400"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold text-gold-400 tracking-wider uppercase">We're Here to Help</span>
            </div>
            
            <h1 className="font-black leading-none mb-4 sm:mb-6">
                <div className="overflow-hidden">
                  <span className="block text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl animate-smoothSlideFade" style={{animationDelay: '0.1s'}}>
                    Contact
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="block text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-smoothSlideFade" style={{
                    animationDelay: '0.2s',
                    textShadow: '0 0 20px rgba(230, 200, 124, 0.6), 0 0 40px rgba(230, 200, 124, 0.4), 0 0 60px rgba(230, 200, 124, 0.2)',
                    animation: 'smoothSlideFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s, goldTextGlow 3s ease-in-out infinite'
                  }}>
                    Us
                  </span>
                </div>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6 leading-relaxed animate-smoothSlideFade max-w-2xl mx-auto" style={{animationDelay: '0.3s'}}>
                Get in touch with our team for any inquiries or support
              </p>
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
              <a 
                href={user ? `mailto:info@globaleducation.com?subject=Inquiry from ${user.user?.name || user.name}&body=From: ${user.user?.email || user.email}` : "mailto:info@globaleducation.com"}
                onClick={handleEmailClick}
                className="puzzle-btn-primary"
              >
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


