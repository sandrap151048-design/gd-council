'use client';

import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 gradient-text-emerald">
              Terms of Service
            </h1>
            <p className="text-gray-400 text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="glass-dark rounded-2xl p-8 md:p-12 border border-gold-400/20 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using Global Education Council's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use of Services</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Use the service in any way that violates any applicable law or regulation</li>
                <li>Impersonate or attempt to impersonate the company or another user</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use of the service</li>
                <li>Use any automated system to access the service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
              <p className="text-gray-300 leading-relaxed">
                When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding your password and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Educational Services</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our platform provides:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Information about courses and universities</li>
                <li>Partnership opportunities with educational institutions</li>
                <li>Enrollment assistance and guidance</li>
                <li>Educational resources and materials</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                We strive to provide accurate information, but we do not guarantee the completeness or accuracy of all content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed">
                The service and its original content, features, and functionality are owned by Global Education Council and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                In no event shall Global Education Council, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Termination</h2>
              <p className="text-gray-300 leading-relaxed">
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including if you breach the Terms. Upon termination, your right to use the service will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. We will provide notice of any significant changes by posting the new Terms on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="mt-4 p-4 bg-gold-400/10 border border-gold-400/30 rounded-lg">
                <p className="text-gold-400">Email: info@globaleducation.com</p>
                <p className="text-gold-400">Phone: +1 234 567 8900</p>
              </div>
            </section>
          </div>

          {/* Back Button */}
          <div className="text-center mt-8">
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

