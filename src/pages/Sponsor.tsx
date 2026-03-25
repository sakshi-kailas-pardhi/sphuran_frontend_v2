import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, Users, Target, Award, TrendingUp, Globe } from 'lucide-react';
import PastSponsers from '@/components/PastSponsers';
import Footer from '@/components/Footer';
import CircularText from '@/components/ui/animatedComponents/circularText';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { useInView } from '@/hooks/use-in-view';

const sponsorshipTiers = [
  { tier: 'Title Sponsor', amount: '₹200000/-' },
  { tier: 'Co-Sponsor', amount: '₹150000/-' },
  { tier: 'Associate Sponsor', amount: '₹100000/-' },
  { tier: 'Media Partner', amount: '₹25000/-' },
  { tier: 'Beverages Partner', amount: '₹25000/-' },
  { tier: 'Logistic Partner', amount: '₹25000/-' },
  { tier: 'Event Partner', amount: 'VARIABLE' },
  { tier: 'Gaming Partner', amount: '₹20000/-' },
  { tier: 'Food Partner', amount: '₹20000/-' },
  { tier: 'Edtech Partner', amount: '₹25000/-' },
  { tier: 'Refreshment Partner', amount: '₹25000/-' },
  { tier: 'Banking Partner', amount: '₹25000/-' },
  { tier: 'Travel Partner', amount: '₹25000/-' },
  { tier: 'Skill Partner', amount: '₹25000/-' },
  { tier: 'Snacks Partner', amount: '₹20000/-' },
  { tier: 'Other Partner', amount: '₹25000/-' },
];

const benefits = [
  {
    number: '01',
    title: 'Enhanced Publicity',
    description: 'Sponsorship offers a strong platform to expand your brand\'s reach and visibility among a diverse, engaged audience, positioning your company alongside respected and influential names.',
    icon: TrendingUp
  },
  {
    number: '02',
    title: 'Strategic Communication & Networking',
    description: 'Engage directly with talented students, innovators, professionals, and notable personalities, creating opportunities for networking, recruitment, collaboration, and long-term partnerships.',
    icon: Users
  },
  {
    number: '03',
    title: 'Reputation & Goodwill',
    description: 'Sponsoring reflects your commitment to innovation, talent development, and community engagement, enhancing corporate goodwill and strengthening your brand\'s social responsibility image.',
    icon: Award
  },
  {
    number: '04',
    title: 'Targeted Audience Reach',
    description: 'Reach a highly relevant audience including students, academicians, industry leaders, alumni, and the general public ensuring high recall and impactful brand communication.',
    icon: Target
  },
  {
    number: '05',
    title: 'Amplified Brand Visibility',
    description: 'Your brand gains wide exposure across the event website, social media, printed materials, and on-ground branding. Promotion extends beyond the IIEST Shibpur campus to multiple reputed institutions across Kolkata.',
    icon: Globe
  }
];

const Sponsor = () => {
  const navigate = useNavigate();
  
  // Animation refs
  const heroRef = useInView({ threshold: 0.2, triggerOnce: true });
  const tiersRef = useInView({ threshold: 0.2, triggerOnce: true });
  const benefitsRef = useInView({ threshold: 0.2, triggerOnce: true });
  const pastSponsorsRef = useInView({ threshold: 0.2, triggerOnce: true });
  
  return (
    <div className="min-h-screen bg-background relative">
      {/* SEO Meta Tags */}
      <SEO
        title="Sponsor Us"
        description="Partner with SPHURAN 4.0 at IIEST Shibpur. Explore sponsorship opportunities including Title Sponsor, Co-Sponsor, Media Partner, and more. Reach thousands of engineering students and enhance your brand visibility."
        keywords="SPHURAN sponsorship, college fest sponsorship, IIEST Shibpur sponsors, technical fest sponsorship, title sponsor, media partner, event sponsorship opportunities"
        url="https://sphuran.eesiiests.org/sponsor"
      />
      
      {/* Background Beams */}
      <BackgroundBeams className="absolute inset-0 z-0" />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border relative">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => window.history.length > 1 ? navigate(-1) : navigate('/')}
            className="inline-flex items-center gap-2 font-display text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Sponsor' }
            ]}
          />
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
        {/* <CircularText
          text="SPHURAN 4.0 * EES * SPONSORSHIP * "
          onHover="speedUp"
          spinDuration={20}
          className="custom-class"
        /> */}
        {/* Page Header */}
        <div 
          ref={heroRef.ref}
          className={`mb-16 transition-all duration-700 ${
            heroRef.isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground">
            Partner With Us
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-foreground mt-4 leading-none">
            SPONSORSHIP
          </h1>
          <div className="w-32 h-1 bg-primary mt-8" />
          <p className="font-body text-lg text-muted-foreground mt-6 max-w-3xl">
            With strong student engagement and wide outreach, we offer sponsors a platform that delivers visibility, credibility, and lasting impact. Connect with a young, creative, and influential audience.
          </p>
        </div>

        {/* Why Sponsor Us Section */}
        <div 
          ref={benefitsRef.ref}
          className={`mb-20 transition-all duration-700 ${
            benefitsRef.isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-12">
            Why Sponsor Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.number}
                  className="relative p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all group"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <span className="font-display text-2xl font-bold text-primary">{benefit.number}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="w-5 h-5 text-primary" />
                        <h3 className="font-display text-xl font-bold text-foreground">
                          {benefit.title}
                        </h3>
                      </div>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sponsorship Tariff Section */}
        <div 
          ref={tiersRef.ref}
          className={`mb-20 transition-all duration-700 ${
            tiersRef.isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
            Sponsorship Tariff
          </h2>
          <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary/5 border-b border-border">
                    <th className="px-6 py-4 text-left font-display text-sm tracking-wider uppercase text-foreground">
                      Sponsorship Tier
                    </th>
                    <th className="px-6 py-4 text-right font-display text-sm tracking-wider uppercase text-foreground">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sponsorshipTiers.map((tier, index) => (
                    <tr
                      key={index}
                      className="border-b border-border hover:bg-primary/5 transition-colors"
                    >
                      <td className="px-6 py-4 font-body text-sm text-foreground font-semibold">
                        {tier.tier}
                      </td>
                      <td className="px-6 py-4 text-right font-display text-sm text-primary font-bold">
                        {tier.amount}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-primary/10 border-t-2 border-primary">
                    <td className="px-6 py-5 font-display text-lg font-bold text-foreground uppercase">
                      Total
                    </td>
                    <td className="px-6 py-5 text-right font-display text-xl font-black text-primary">
                      Rs 700000/-
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

{/* Title Sponsor Section */}
<div className="mb-20">
  <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8 text-center">
    Title Sponsor
  </h2>

  <div className="flex justify-center">
    <div className="bg-card border border-border rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
      <img
        src="/sponsors/powergrid.png"
        alt="PowerGrid"
        className="h-24 md:h-32 object-contain mx-auto"
      />
      <p className="text-center mt-4 font-semibold text-lg">
        PowerGrid
      </p>
    </div>
  </div>
</div>


        
        {/* Past Sponsors Section */}
        <div 
          ref={pastSponsorsRef.ref}
          className={`mb-0 transition-all duration-700 ${
            pastSponsorsRef.isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <PastSponsers />
        </div>

        {/* Contact Section */}
        <div className="bg-card border border-border rounded-lg p-8 md:p-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
            Become a Partner
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-2xl">
            Join us in making SPHURAN 4.0 a memorable experience. For detailed sponsorship packages and customized opportunities, reach out to our sponsorship team.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:sphuran.ees@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-display text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors rounded-lg"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </a>
            <a
              href="tel:+917908362321"
              className="inline-flex items-center gap-2 px-6 py-3 bg-card border-2 border-primary text-primary font-display text-sm tracking-wider uppercase hover:bg-primary hover:text-white transition-colors rounded-lg"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-border">
            <p className="font-body text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Contact Person:</span> Ruman Paul (Secretary, EES)
            </p>
            <p className="font-body text-sm text-muted-foreground mt-2">
              <span className="font-semibold text-foreground">Phone:</span> +91 79083 62321
            </p>
            <p className="font-body text-sm text-muted-foreground mt-2">
              <span className="font-semibold text-foreground">Email:</span> 2022eeb002.ruman@students.iiests.ac.in
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Sponsor;
