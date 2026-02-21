'use client';

import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: '🌍',
      title: 'Global Education Partnerships',
      description: 'Connect with 500+ universities across 50+ countries. We facilitate strategic partnerships between institutions worldwide.',
      features: [
        'University network access',
        'Partnership facilitation',
        'International collaboration',
        'Global program development'
      ]
    },
    {
      icon: '🎓',
      title: 'Skill Development Programs',
      description: 'Industry-recognized certification programs and expert-led training courses designed for institutional growth.',
      features: [
        'Professional certifications',
        'Custom training programs',
        'Industry partnerships',
        'Career advancement support'
      ]
    },
    {
      icon: '📚',
      title: 'Course Assistance',
      description: 'End-to-end application assistance and comprehensive support for course enrollment and management.',
      features: [
        'Application guidance',
        'Course selection support',
        'Enrollment management',
        'Academic counseling'
      ]
    },
    {
      icon: '✈️',
      title: 'Immigration Support',
      description: 'Expert immigration guidance and visa assistance for international education programs.',
      features: [
        'Visa application support',
        'Documentation assistance',
        'Immigration counseling',
        'Compliance guidance'
      ]
    },
    {
      icon: '🤝',
      title: 'Strategic Consulting',
      description: 'Build lasting relationships with top institutions through our strategic consulting services.',
      features: [
        'Partnership strategy',
        'Market analysis',
        'Growth planning',
        'Implementation support'
      ]
    },
    {
      icon: '💼',
      title: 'Institutional Support',
      description: 'Comprehensive support services for educational institutions looking to expand globally.',
      features: [
        'Operational support',
        'Quality assurance',
        'Accreditation assistance',
        'Program development'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black pt-20 md:pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-gold-500/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite'
        }}></div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold-400 rounded-full animate-float opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gold-400 rounded-full animate-float animation-delay-1000 opacity-40"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-emerald-300 rounded-full animate-float animation-delay-2000 opacity-50"></div>
          <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-gold-400 rounded-full animate-float animation-delay-3000 opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gold-400/10 border border-gold-400/30 rounded-full mb-6 animate-blurToFocus">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold-400"></span>
              </span>
              <span className="text-xs font-semibold text-gold-400 tracking-wider uppercase">Our Services</span>
            </div>
            
            {/* Animated Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]">
              <div className="overflow-hidden mb-2">
                <span className="block text-white animate-smoothSlideFade" style={{animationDelay: '0.1s'}}>
                  Comprehensive
                </span>
              </div>
              <div className="overflow-hidden">
                <span className="block text-white animate-smoothSlideFade" style={{
                  animationDelay: '0.2s',
                  textShadow: '0 0 20px rgba(16, 185, 129, 0.6), 0 0 40px rgba(16, 185, 129, 0.4), 0 0 60px rgba(16, 185, 129, 0.2)',
                  animation: 'smoothSlideFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s, greenTextGlow 3s ease-in-out infinite'
                }}>
                  Education Solutions
                </span>
              </div>
            </h1>
            
            {/* Animated Description */}
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-smoothSlideFade" style={{animationDelay: '0.3s'}}>
              Empowering institutions with <span className="text-gold-400 font-semibold">world-class services</span>, strategic partnerships, and innovative solutions for global education excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-gold-400/20 rounded-2xl p-8 hover:bg-white/10 hover:border-gold-400/40 hover:scale-105 transition-all group animate-smoothSlideFade"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                {/* Icon */}
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                      <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black/50 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-smoothSlideFade">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-400">
              Trusted by institutions worldwide for excellence in education services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { number: '500+', title: 'Partner Universities', desc: 'Global network' },
              { number: '50+', title: 'Countries', desc: 'Worldwide reach' },
              { number: '98%', title: 'Success Rate', desc: 'Proven results' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center bg-gradient-to-br from-gold-500/10 to-transparent border border-gold-400/20 rounded-xl p-8 hover:border-gold-400/40 hover:scale-105 transition-all animate-smoothSlideFade"
                style={{animationDelay: `${0.2 + (0.1 * index)}s`}}
              >
                <div className="text-5xl font-bold text-gold-400 mb-3">{stat.number}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{stat.title}</h3>
                <p className="text-sm text-gray-400">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center animate-smoothSlideFade" style={{animationDelay: '0.2s'}}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Let's discuss how our services can help your institution achieve its goals
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gold-400 text-black font-semibold rounded-lg hover:bg-gold-400 hover:scale-105 transition-all">
                Contact Us
              </Link>
              <Link href="/register" className="px-8 py-4 bg-transparent text-gold-400 font-semibold rounded-lg border border-gold-400/30 hover:bg-gold-400/10 hover:border-gold-400 hover:scale-105 transition-all">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

