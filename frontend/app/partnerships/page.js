'use client';

import Link from 'next/link';

export default function Partnerships() {
  const partnershipTypes = [
    {
      title: 'University Partnerships',
      description: 'Connect with top-ranked universities worldwide for student placements and academic collaborations',
      icon: '🎓',
      benefits: ['Student Exchange Programs', 'Joint Degree Programs', 'Research Collaborations', 'Faculty Exchange']
    },
    {
      title: 'Corporate Training',
      description: 'Scalable skill development programs tailored for corporate workforce training',
      icon: '💼',
      benefits: ['Custom Training Modules', 'ROI-Focused Programs', 'Flexible Scheduling', 'Certification Programs']
    },
    {
      title: 'Education Consultancy',
      description: 'B2B consulting services for visa support, scholarship partnerships, and group placements',
      icon: '🌍',
      benefits: ['Visa Support Services', 'Scholarship Partnerships', 'Group Placement Assistance', 'Country-Specific Guidance']
    },
    {
      title: 'Recruitment Agency',
      description: 'Partner with us to streamline student recruitment and placement processes',
      icon: '🤝',
      benefits: ['Lead Generation', 'Application Processing', 'Document Verification', 'Commission Structure']
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20 md:pt-16">
      {/* Hero Section with Education Image */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80" 
            alt="Business partnership"
            className="w-full h-full object-cover animate-scaleIn"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="absolute inset-0 tech-grid opacity-10 z-10"></div>
        
        <div className="lofi-container relative z-20">
          <div className="max-w-5xl">
            <div className="badge-animated mb-8 animate-fadeInDown">
              <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></span>
              <span>B2B Partnership Models</span>
            </div>
            
            <h1 className="font-black leading-none mb-6 animate-fadeInUp">
              <div className="overflow-hidden">
                <span className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl animate-smoothSlideFade" style={{animationDelay: '0.1s'}}>
                  Partnership
                </span>
              </div>
              <div className="overflow-hidden">
                <span className="block text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-smoothSlideFade" style={{
                  animationDelay: '0.2s',
                  textShadow: '0 0 20px rgba(230, 200, 124, 0.6), 0 0 40px rgba(230, 200, 124, 0.4), 0 0 60px rgba(230, 200, 124, 0.2)',
                  animation: 'smoothSlideFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s, goldTextGlow 3s ease-in-out infinite'
                }}>
                  Opportunities
                </span>
              </div>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl animate-fadeInUp animation-delay-200 leading-relaxed">
              Explore B2B partnership models designed for educational institutions and corporate partners
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="lofi-section bg-gradient-to-b from-black to-gray-950">
        <div className="lofi-container">
          <div className="text-center mb-12">
            <h2 className="lofi-heading mb-4">
              <span className="lofi-heading-gradient">Partnership Models</span>
            </h2>
            <p className="text-gray-400">Choose the partnership type that aligns with your business goals</p>
          </div>

          <div className="lofi-grid">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="lofi-card p-8 h-full flex flex-col">
                <div className="text-5xl mb-6">{type.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{type.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow">{type.description}</p>
                
                <div className="lofi-divider mb-6"></div>
                
                <h4 className="font-semibold text-gold-400 mb-3">Key Benefits:</h4>
                <ul className="space-y-2 mb-6 flex-grow">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-gold-400 mt-1">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <Link href="/login" className="text-gold-400 font-semibold hover:text-gold-300 inline-flex items-center gap-2 mt-auto">
                  Apply for Partnership
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="lofi-section bg-black">
        <div className="lofi-container">
          <div className="lofi-card p-12">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Why Partner With Global Education Council?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '📊', title: 'Clear ROI', desc: 'Measurable returns on investment with transparent reporting and analytics' },
                { icon: '🚀', title: 'Scalability', desc: 'Flexible solutions that grow with your business needs' },
                { icon: '🌐', title: 'Global Reach', desc: 'Access to 50+ countries and 200+ partner universities' },
                { icon: '💡', title: 'Expert Support', desc: 'Dedicated account managers and 24/7 technical support' },
                { icon: '🔒', title: 'Secure Platform', desc: 'Enterprise-grade security and data protection' },
                { icon: '📈', title: 'Growth Tools', desc: 'Marketing support and lead generation assistance' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-gold-400 mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="lofi-section bg-gradient-to-b from-black to-gray-950">
        <div className="lofi-container">
          <div className="lofi-card p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Become a Partner?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join our network of successful partners and unlock new business opportunities. Login to submit a detailed partnership application.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/register" className="lofi-button">
                Register as Partner
              </Link>
              <Link href="/login" className="lofi-button-secondary">
                Login to Apply
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



