import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen puzzle-bg-dark pt-20 md:pt-16">
      {/* Hero Section - Matching Home Page Style */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black"></div>
        
        {/* Diagonal Accent */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-gold-500/20 via-transparent to-transparent transform skew-x-12"></div>
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(230, 200, 124, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(230, 200, 124, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          animation: 'gridMove 25s linear infinite'
        }}></div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-gold-500/20 to-gold-400/10 border border-gold-400/40 rounded-full mb-6 sm:mb-8 backdrop-blur-sm animate-blurToFocus">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold-400"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold text-gold-400 tracking-wider uppercase">Established 2015 • Trusted Globally</span>
            </div>
            
            {/* Hero Title - Centered */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-4">
              <div className="overflow-hidden">
                <span className="block text-white animate-smoothSlideFade" style={{animationDelay: '0.1s'}}>
                  About
                </span>
              </div>
              <div className="overflow-hidden">
                <span className="block text-white animate-smoothSlideFade" style={{
                  animationDelay: '0.2s',
                  textShadow: '0 0 20px rgba(230, 200, 124, 0.6), 0 0 40px rgba(230, 200, 124, 0.4), 0 0 60px rgba(230, 200, 124, 0.2)',
                  animation: 'smoothSlideFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s, goldTextGlow 3s ease-in-out infinite'
                }}>
                  Global Education
                </span>
              </div>
            </h1>
            
            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed animate-smoothSlideFade" style={{animationDelay: '0.3s'}}>
              Empowering institutions worldwide with <span className="text-gold-400 font-semibold">quality education partnerships</span> since 2015. We bridge the gap between educational institutions and world-class partnership opportunities.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center animate-smoothSlideFade" style={{animationDelay: '0.4s'}}>
              <Link href="/partnerships" className="group relative px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold rounded-xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-gold-500/50 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Partner With Us
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white/5 text-white font-bold rounded-xl border-2 border-white/10 hover:bg-white/10 hover:border-gold-400/50 transition-all hover:scale-105 text-center backdrop-blur-sm">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="lofi-section puzzle-section">
        <div className="lofi-container">
          <div className="puzzle-glass-card">
            <span className="puzzle-label mb-6">OUR MISSION</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Bridging Global Education Gaps</h2>
            <p className="puzzle-text mb-4">
              Global Education Council is dedicated to bridging the gap between educational institutions and world-class partnership opportunities. We provide comprehensive B2B support for organizations seeking to expand their global reach through strategic collaborations.
            </p>
            <p className="puzzle-text">
              Our platform connects universities, colleges, and training organizations with international partners, offering skill development programs, overseas education consulting, and admission support services tailored for institutional growth.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="lofi-section puzzle-bg-dark">
        <div className="lofi-container">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-gold-400/10 border border-gold-400/30 rounded-full text-xs font-bold text-gold-400 tracking-wider uppercase mx-auto mb-6">WHAT WE DO</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span style={{
                background: 'linear-gradient(135deg, #F5E5B8 0%, #E6C87C 50%, #D4B566 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Comprehensive B2B Solutions</span>
            </h2>
          </div>
          
          <div className="lofi-grid">
            {[
              { title: 'Expert B2B Guidance', desc: 'Provide expert B2B guidance for overseas education partnerships and institutional collaborations' },
              { title: 'Scalable Skill Development', desc: 'Offer scalable skill development courses aligned with corporate and institutional needs' },
              { title: 'Bulk Application Processing', desc: 'Facilitate bulk university applications and group admission processes' },
              { title: 'Global Partnerships', desc: 'Partner with leading educational institutions worldwide for mutual growth' },
              { title: 'Certification Programs', desc: 'Issue globally recognized certifications and manage B2B training programs' },
              { title: '24/7 Support', desc: 'Round-the-clock assistance for all partnership and enrollment needs' }
            ].map((item, index) => (
              <div key={index} className={`lofi-feature h-full flex flex-col ${index % 2 === 0 ? 'card-slide-left' : 'card-slide-right'} delay-${(index + 1) * 100}`}>
                <div className="lofi-feature-icon">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 flex-grow">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="lofi-section bg-gradient-to-b from-black to-gray-950">
        <div className="lofi-container">
          <div className="text-center mb-12">
            <span className="lofi-badge mx-auto mb-6">WHY CHOOSE US</span>
            <h2 className="lofi-heading">
              <span className="lofi-heading-gradient">What Sets Us Apart</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Expert Team', 
                desc: 'Experienced B2B consultants with deep industry knowledge',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              { 
                title: 'Global Network', 
                desc: 'Strategic partnerships with 200+ top-ranked universities',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              { 
                title: 'Proven Track Record', 
                desc: 'Thousands of successful B2B partnerships with 98% satisfaction',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                )
              },
              { 
                title: 'End-to-End Support', 
                desc: 'Complete assistance from partnership setup to ongoing collaboration',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className={`lofi-card p-6 text-center h-full flex flex-col ${index % 2 === 0 ? 'card-slide-left' : 'card-slide-right'} delay-${(index + 1) * 100}`}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500/30 to-gold-600/20 flex items-center justify-center mx-auto mb-4 text-gold-400">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm flex-grow">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="lofi-section bg-black">
        <div className="lofi-container">
          <div className="text-center mb-12">
            <span className="lofi-badge mx-auto mb-6">OUR VALUES</span>
            <h2 className="lofi-heading">
              <span className="lofi-heading-gradient">Guided by Core Principles</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                title: 'Excellence', 
                desc: 'We strive for excellence in every partnership and service we deliver, maintaining the highest standards of quality',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )
              },
              { 
                title: 'Integrity', 
                desc: 'Building trust through transparent and ethical business practices in all our partnerships and operations',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              { 
                title: 'Innovation', 
                desc: 'Continuously evolving our services and technology to meet changing market needs and exceed expectations',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              { 
                title: 'Global Impact', 
                desc: 'Creating meaningful connections that transform education worldwide and empower institutions globally',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className={`lofi-feature h-full flex flex-col ${index % 2 === 0 ? 'card-slide-left' : 'card-slide-right'} delay-${(index + 1) * 100}`}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500/30 to-gold-600/20 flex items-center justify-center mb-4 text-gold-400">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed flex-grow">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


