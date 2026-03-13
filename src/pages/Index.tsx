import { lazy, Suspense } from 'react';
import StarField from '@/components/StarField';
import Navbar from '@/components/Navbar';
import { logos } from '@/lib/logoData';
import { StructuredData } from '@/components/StructuredData';
import { SEO } from '@/components/SEO';

// Lazy load heavy components for better performance
const HeroSection = lazy(() => import('@/components/HeroSection'));
const AboutSection = lazy(() => import('@/components/AboutSection'));
const EventsPreview = lazy(() => import('@/components/EventsPreview'));
const ScheduleSection = lazy(() => import('@/components/ScheduleSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const PastSponsers = lazy(() => import('@/components/PastSponsers'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
  // BreadcrumbList structured data for homepage
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://sphuran.eesiiests.org/"
    }]
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* SEO Meta Tags */}
      <SEO />
      
      {/* Structured Data for SEO */}
      <StructuredData data={breadcrumbSchema} />
      
      {/* Animated Star Background */}
      <StarField />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Suspense fallback={<div className="min-h-screen" />}>
          <HeroSection />
        </Suspense>
        
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><img src={logos.sphuran} alt="SPHURAN Logo - Loading Content" className="h-16 w-16 object-contain animate-pulse" /></div>}>
          <AboutSection />
        </Suspense>
        
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><img src={logos.sphuran} alt="SPHURAN Logo - Loading Content" className="h-16 w-16 object-contain animate-pulse" /></div>}>
          <EventsPreview />
        </Suspense>
        
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><img src={logos.sphuran} alt="SPHURAN Logo - Loading Content" className="h-16 w-16 object-contain animate-pulse" /></div>}>
          <ScheduleSection />
        </Suspense>
        
        <Suspense fallback={<div className="min-h-[30vh] flex items-center justify-center"><img src={logos.sphuran} alt="SPHURAN Logo - Loading Content" className="h-16 w-16 object-contain animate-pulse" /></div>}>
          <ContactSection />
        </Suspense>
        
        <Suspense fallback={<div className="min-h-[30vh] flex items-center justify-center"><img src={logos.sphuran} alt="SPHURAN Logo - Loading Content" className="h-16 w-16 object-contain animate-pulse" /></div>}>
          <PastSponsers />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={<div className="min-h-[20vh]" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;

