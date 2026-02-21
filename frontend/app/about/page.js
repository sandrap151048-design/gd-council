import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen puzzle-bg-dark pt-20 md:pt-16">
      {/* Hero Section - Full Screen Like Home Page */}
      <section className="relative min-h-screen flex items-center overflow-hidden puzzle-bg">
        {/* Large Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80" 
            alt="University students in modern campus"
            className="w-full h-full object-cover animate-elasticScale"
            style={{opacity: 0.15}}
          />
          {/* Puzzle-style Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1729]/95 via-[#1a1f35]/90 to-[#0f1729]/85"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/90 via-transparent to-transparent"></div>
        </div>

        {/* Animated Tech Grid */}
        <div className="absolute inset-0 z-10 opacity-20" style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite'
        }}></div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold-400 rounded-full animate-float opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gold-400 rounded-full animate-float animation-delay-1000 opacity-40"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-emerald-300 rounded-full animate-float animation-delay-2000 opacity-50"></div>
          <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-gold-400 rounded-full animate-float animation-delay-3000 opacity-30"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gold-400/10 border border-gold-400/30 rounded-full mb-6 animate-blurToFocus">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold-400"></span>
              </span>
              <span className="text-xs font-semibold text-gold-400 tracking-wider uppercase">Established 2015 • Trusted Globally</span>
            </div>
            
            {/* Hero Title - Centered */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]">
              <div className="overflow-hidden mb-2">
                <span className="block text-white animate-smoothSlideFade" style={{animationDelay: '0.1s'}}>
                  About
                </span>
              </div>
              <div className="overflow-hidden">
                <span className="block text-white animate-smoothSlideFade" style={{
                  animationDelay: '0.3s',
                  textShadow: '0 0 20px rgba(16, 185, 129, 0.6), 0 0 40px rgba(16, 185, 129, 0.4), 0 0 60px rgba(16, 185, 129, 0.2)',
                  animation: 'smoothSlideFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.3s, greenTextGlow 3s ease-in-out infinite'
                }}>
                  Global Education
                </span>
              </div>
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed animate-smoothSlideFade" style={{animationDelay: '0.5s'}}>
              Empowering institutions worldwide with <span className="text-gold-400 font-semibold">quality education partnerships</span> since 2015. We bridge the gap between educational institutions and world-class partnership opportunities.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center animate-smoothSlideFade" style={{animationDelay: '0.6s'}}>
              <Link href="/partnerships" className="btn-magnetic group relative px-8 py-4 bg-gold-400 text-black font-bold rounded-xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-emerald-500/50">
                <span className="relative z-10 flex items-center gap-2">
                  Partner With Us
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link href="/contact" className="ripple-effect px-8 py-4 bg-white/5 text-gold-400 font-bold rounded-xl border-2 border-gold-400/30 hover:bg-gold-400/10 hover:border-gold-400 transition-all hover:scale-105">
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
            <span className="puzzle-label mx-auto mb-6">WHAT WE DO</span>
            <h2 className="puzzle-heading">
              <span className="puzzle-gradient-text">Comprehensive B2B Solutions</span>
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
              { icon: '👥', title: 'Expert Team', desc: 'Experienced B2B consultants with deep industry knowledge' },
              { icon: '🌍', title: 'Global Network', desc: 'Strategic partnerships with 200+ top-ranked universities' },
              { icon: '✓', title: 'Proven Track Record', desc: 'Thousands of successful B2B partnerships with 98% satisfaction' },
              { icon: '🎯', title: 'End-to-End Support', desc: 'Complete assistance from partnership setup to ongoing collaboration' }
            ].map((item, index) => (
              <div key={index} className={`lofi-card p-6 text-center h-full flex flex-col ${index % 2 === 0 ? 'card-slide-left' : 'card-slide-right'} delay-${(index + 1) * 100}`}>
                <div className="text-5xl mb-4">{item.icon}</div>
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
              { icon: '⭐', title: 'Excellence', desc: 'We strive for excellence in every partnership and service we deliver, maintaining the highest standards of quality' },
              { icon: '🛡️', title: 'Integrity', desc: 'Building trust through transparent and ethical business practices in all our partnerships and operations' },
              { icon: '⚡', title: 'Innovation', desc: 'Continuously evolving our services and technology to meet changing market needs and exceed expectations' },
              { icon: '🌐', title: 'Global Impact', desc: 'Creating meaningful connections that transform education worldwide and empower institutions globally' }
            ].map((item, index) => (
              <div key={index} className={`lofi-feature h-full flex flex-col ${index % 2 === 0 ? 'card-slide-left' : 'card-slide-right'} delay-${(index + 1) * 100}`}>
                <div className="text-5xl mb-4">{item.icon}</div>
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

