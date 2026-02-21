'use client';

import { Inter, Poppins, Space_Grotesk } from 'next/font/google';
import './globals.css';
import '../styles/animations.css';
import '../styles/fintech-animations.css';
import '../styles/puzzle-design.css';
import { AuthProvider } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { initScrollReveal, initNavbarScroll } from '../lib/animations';

// Modern font combinations
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  
  // Hide navbar and footer on dashboard and admin pages
  const isDashboardOrAdmin = pathname?.startsWith('/dashboard') || pathname?.startsWith('/admin');

  // Initialize animations on mount
  useEffect(() => {
    // Initialize scroll reveal animations
    const observer = initScrollReveal();
    
    // Disable navbar scroll behavior - keep navbar always visible
    // if (!isDashboardOrAdmin) {
    //   initNavbarScroll();
    // }

    // Page transition effect
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.3s ease-in-out';
      document.body.style.opacity = '1';
    }, 10);

    return () => {
      if (observer) observer.disconnect();
    };
  }, [isDashboardOrAdmin]);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#10b981" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Global Education Council" />
        
        {/* Primary Meta Tags */}
        <title>Global Education Council - B2B Education Platform & Partnerships</title>
        <meta name="title" content="Global Education Council - B2B Education Platform & Partnerships" />
        <meta name="description" content="Leading B2B education platform connecting institutions worldwide with strategic partnerships, courses, and certification programs. Join 500+ partners across 50+ countries." />
        <meta name="keywords" content="B2B education platform, educational partnerships, university partnerships, global education network, institutional collaboration, education consulting, overseas education, skill development programs" />
        <meta name="author" content="Global Education Council" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://globaleducationcouncil.com/" />
        <meta property="og:title" content="Global Education Council - B2B Education Platform & Partnerships" />
        <meta property="og:description" content="Leading B2B education platform connecting institutions worldwide with strategic partnerships, courses, and certification programs." />
        <meta property="og:image" content="https://globaleducationcouncil.com/og-image.jpg" />
        <meta property="og:site_name" content="Global Education Council" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://globaleducationcouncil.com/" />
        <meta property="twitter:title" content="Global Education Council - B2B Education Platform & Partnerships" />
        <meta property="twitter:description" content="Leading B2B education platform connecting institutions worldwide with strategic partnerships, courses, and certification programs." />
        <meta property="twitter:image" content="https://globaleducationcouncil.com/og-image.jpg" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} font-sans overflow-x-hidden`}>
        <AuthProvider>
          {!isDashboardOrAdmin && <Navbar />}
          <main className="min-h-screen-mobile">{children}</main>
          {!isDashboardOrAdmin && <Footer />}
          <ToastContainer 
            position="top-right" 
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            className="mobile-px"
          />
        </AuthProvider>
      </body>
    </html>
  );
}

