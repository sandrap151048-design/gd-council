'use client';

import Link from 'next/link';

export default function Sitemap() {
  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: '🏠',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Blog & Resources', path: '/blog' },
      ]
    },
    {
      title: 'Services',
      icon: '⚙️',
      links: [
        { name: 'All Services', path: '/services' },
        { name: 'Courses', path: '/courses' },
        { name: 'Universities', path: '/universities' },
        { name: 'Partnerships', path: '/partnerships' },
      ]
    },
    {
      title: 'User Account',
      icon: '👤',
      links: [
        { name: 'Login', path: '/login' },
        { name: 'Register', path: '/register' },
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Browse Courses', path: '/dashboard/browse-courses' },
        { name: 'Universities', path: '/dashboard/universities' },
      ]
    },
    {
      title: 'Legal',
      icon: '⚖️',
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Sitemap', path: '/sitemap' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 gradient-text-emerald">
              Sitemap
            </h1>
            <p className="text-gray-400 text-lg">
              Navigate through all pages of Global Education Council
            </p>
          </div>

          {/* Sitemap Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {sitemapSections.map((section, index) => (
              <div 
                key={index}
                className="glass-dark rounded-2xl p-8 border border-gold-400/20 hover:border-gold-400/40 transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{section.icon}</span>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.path}
                        className="flex items-center gap-2 text-gray-300 hover:text-gold-400 transition-colors group"
                      >
                        <svg 
                          className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="glass-dark rounded-2xl p-8 border border-gold-400/20 mb-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Quick Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">500+</div>
                <div className="text-sm text-gray-400">Partner Universities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">50+</div>
                <div className="text-sm text-gray-400">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">200+</div>
                <div className="text-sm text-gray-400">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold-400 text-black font-semibold rounded-lg hover:bg-gold-400 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

