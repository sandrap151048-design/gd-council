'use client';

import { useState } from 'react';
import Link from 'next/link';
import api from '../services/api';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      setLoading(false);
      setTimeout(() => setError(''), 5000);
      return;
    }

    try {
      const { data } = await api.post('/newsletter/subscribe', { email });
      setMessage(data.message || 'Successfully subscribed to our newsletter!');
      setEmail('');
      setTimeout(() => setMessage(''), 5000);
    } catch (err) {
      console.error('Subscription error:', err);
      
      // Check if it's a network error (backend not available)
      if (err.code === 'ERR_NETWORK' || !err.response) {
        setError('Service temporarily unavailable. Please try again later.');
      } else {
        setError(err.response?.data?.message || 'Failed to subscribe. Please try again.');
      }
      
      setTimeout(() => setError(''), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-black border-t border-emerald-500/20 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 tech-grid opacity-5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/5 rounded-full filter blur-3xl"></div>
      
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-emerald-900/20 to-green-900/20 border-b border-emerald-500/20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left w-full md:w-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 gradient-text-emerald">Stay Updated</h3>
              <p className="text-gray-300 text-base sm:text-lg">Subscribe to our newsletter for the latest updates</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  className="px-4 sm:px-5 py-3 sm:py-4 bg-gray-900/70 border-2 border-emerald-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/30 transition-all w-full sm:w-64 md:w-80 disabled:opacity-50 backdrop-blur-sm text-sm sm:text-base"
                />
                <button 
                  type="submit" 
                  disabled={loading}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-400 to-green-500 text-gray-900 rounded-xl font-semibold hover:from-emerald-500 hover:to-green-600 transition-all shadow-emerald-glow hover:shadow-emerald-glow-lg whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto text-sm sm:text-base"
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              {message && (
                <p className="text-xs sm:text-sm text-emerald-400 text-center md:text-left">{message}</p>
              )}
              {error && (
                <p className="text-xs sm:text-sm text-red-400 text-center md:text-left">{error}</p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold gradient-text-emerald mb-4">Global Education Council</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">Your trusted partner for global education partnerships, skill development, and international collaborations.</p>
              <div className="flex items-center gap-2 text-sm text-gray-400 glass-dark px-4 py-3 rounded-lg border border-emerald-500/20">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Trusted by 500+ Institutions</span>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white text-lg mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                  <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  <span>About Us</span>
                </Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                  <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  <span>Services</span>
                </Link></li>
                <li><Link href="/courses" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                  <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  <span>Courses</span>
                </Link></li>
                <li><Link href="/universities" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                  <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  <span>Universities</span>
                </Link></li>
                <li><Link href="/partnerships" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                  <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  <span>Partnerships</span>
                </Link></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="font-bold text-white text-lg mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Support
              </h4>
              <ul className="space-y-3">
                <li><Link href="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                  <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  <span>Contact Us</span>
                </Link></li>
                <li><Link href="/blog" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                  <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  <span>Blog & Resources</span>
                </Link></li>
                <li><Link href="/login" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                  <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  <span>Partner Login</span>
                </Link></li>
                <li><Link href="/register" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                  <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  <span>Register</span>
                </Link></li>
              </ul>
            </div>
          
            {/* Contact & Social */}
            <div>
              <h4 className="font-bold text-white text-lg mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a 
                    href="mailto:info@globaleducation.com" 
                    className="flex items-center gap-2 hover:text-emerald-400 transition-colors group"
                  >
                    <svg className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@globaleducation.com</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+12345678900" 
                    className="flex items-center gap-2 hover:text-emerald-400 transition-colors group"
                  >
                    <svg className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+1 234 567 8900</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://maps.google.com/?q=123+Education+St,+City" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-emerald-400 transition-colors group"
                  >
                    <svg className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>123 Education St, City</span>
                  </a>
                </li>
              </ul>
              <div className="mt-6">
                <h5 className="font-bold text-white mb-4 text-sm">Follow Us</h5>
                <div className="flex gap-3">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full glass-dark border border-emerald-500/30 flex items-center justify-center hover:border-emerald-500 hover:bg-emerald-500/10 transition-all group shadow-md hover:shadow-emerald-glow"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5 text-gray-300 group-hover:text-emerald-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full glass-dark border border-emerald-500/30 flex items-center justify-center hover:border-emerald-500 hover:bg-emerald-500/10 transition-all group shadow-md hover:shadow-emerald-glow"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5 text-gray-300 group-hover:text-emerald-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full glass-dark border border-emerald-500/30 flex items-center justify-center hover:border-emerald-500 hover:bg-emerald-500/10 transition-all group shadow-md hover:shadow-emerald-glow"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-gray-300 group-hover:text-emerald-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full glass-dark border border-emerald-500/30 flex items-center justify-center hover:border-emerald-500 hover:bg-emerald-500/10 transition-all group shadow-md hover:shadow-emerald-glow"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 text-gray-300 group-hover:text-emerald-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-emerald-500/20 mt-10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                &copy; {new Date().getFullYear()} Global Education Council. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
                <Link href="/sitemap" className="hover:text-emerald-400 transition-colors">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
