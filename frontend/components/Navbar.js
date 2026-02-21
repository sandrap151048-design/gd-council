'use client';

import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed-navbar !fixed top-0 left-0 right-0 z-[9999] bg-[#0a0e1a]/95 border-b border-gold-400/30 shadow-lg shadow-gold-400/10 backdrop-blur-xl">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 217, 163, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 217, 163, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px'
      }}></div>
      <div className="w-full px-4 sm:px-6 relative z-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-400 rounded-xl flex items-center justify-center shadow-lg shadow-gold-400/50 group-hover:shadow-gold-400/80 group-hover:scale-110 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-300 to-gold-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <svg className="w-6 h-6 text-black relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-gold-400 to-gold-400 bg-clip-text text-transparent">
                Global Education
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-gray-400">
                Council
              </span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gold-400/10 hover:text-gold-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-gold-400 hover:bg-gold-400/10 rounded-lg transition-all relative group">
              <span className="relative z-10">Home</span>
            </Link>
            <Link href="/courses" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-gold-400 hover:bg-gold-400/10 rounded-lg transition-all relative group">
              <span className="relative z-10">Courses</span>
            </Link>
            <Link href="/universities" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-gold-400 hover:bg-gold-400/10 rounded-lg transition-all relative group">
              <span className="relative z-10">Universities</span>
            </Link>
            <Link href="/contact" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-gold-400 hover:bg-gold-400/10 rounded-lg transition-all relative group">
              <span className="relative z-10">Contact</span>
            </Link>
            <Link href="/about" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-gold-400 hover:bg-gold-400/10 rounded-lg transition-all relative group">
              <span className="relative z-10">About</span>
            </Link>
            
            <div className="h-8 w-px bg-gold-400/30 mx-2"></div>
            
            {user ? (
              <>
                <Link href="/dashboard" className="px-6 py-2 text-sm font-bold bg-gradient-to-r from-gold-400 to-gold-400 text-black rounded-lg hover:shadow-lg hover:shadow-gold-400/50 transition-all hover:scale-105">
                  Dashboard
                </Link>
                {user.role === 'admin' && (
                  <Link href="/admin" className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-gold-400 bg-gold-400/10 hover:bg-gold-400/20 border border-gold-400/30 rounded-lg transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span>Admin</span>
                  </Link>
                )}
                <button onClick={logout} className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="px-6 py-2 text-sm font-bold bg-gradient-to-r from-gold-400 to-gold-400 text-black rounded-lg hover:shadow-lg hover:shadow-gold-400/50 transition-all hover:scale-105">
                  Login
                </Link>
                <Link href="/register" className="px-4 py-2 text-sm font-medium text-gold-400 hover:text-emerald-300 transition-colors">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gold-400/20 animate-slideFromTop">
            <div className="space-y-1">
              <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-gold-400 hover:bg-gold-400/10 rounded-lg transition-all">
                Home
              </Link>
              <Link href="/courses" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-gold-400 hover:bg-gold-400/10 rounded-lg transition-all">
                Courses
              </Link>
              <Link href="/universities" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-gold-400 hover:bg-gold-400/10 rounded-lg transition-all">
                Universities
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-gold-400 hover:bg-gold-400/10 rounded-lg transition-all">
                Contact
              </Link>
              <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-gold-400 hover:bg-gold-400/10 rounded-lg transition-all">
                About
              </Link>
              
              <div className="pt-4 mt-4 border-t border-gold-400/20">
                {user ? (
                  <>
                    <Link href="/dashboard" className="block text-center px-6 py-3 text-base font-bold bg-gradient-to-r from-gold-400 to-gold-400 text-black rounded-lg mb-2 shadow-lg shadow-gold-400/30">
                      Dashboard
                    </Link>
                    {user.role === 'admin' && (
                      <Link href="/admin" className="flex items-center justify-center space-x-2 px-3 py-2 text-base font-semibold text-gold-400 bg-gold-400/10 border border-gold-400/30 rounded-lg mb-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span>Admin</span>
                      </Link>
                    )}
                    <button onClick={logout} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all">
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="block text-center px-6 py-3 text-base font-bold bg-gradient-to-r from-gold-400 to-gold-400 text-black rounded-lg mb-2 shadow-lg shadow-gold-400/30">
                      Login
                    </Link>
                    <Link href="/register" className="block text-center px-6 py-3 text-base font-medium text-gold-400 hover:text-emerald-300 transition-colors">
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

