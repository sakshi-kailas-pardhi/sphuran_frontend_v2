import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, Sparkles, Zap, Heart, Users, Target, Award, TrendingUp, Globe } from 'lucide-react';
import Footer from '@/components/Footer';
import PastSponsers from '@/components/PastSponsers';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { useInView } from '@/hooks/use-in-view';

const sponsorshipTiers = [
  { tier: 'Title Sponsor', amount: '₹200000/-', highlight: true },
  { tier: 'Co-Sponsor', amount: '₹150000/-', highlight: true },
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
    icon: TrendingUp,
    title: 'Enhanced Publicity',
    description: 'Expand your brand\'s reach among a diverse, engaged audience of students, professionals, and industry leaders.',
  },
  {
    icon: Users,
    title: 'Strategic Networking',
    description: 'Connect directly with talented students, innovators, and notable personalities for recruitment and collaboration.',
  },
  {
    icon: Award,
    title: 'Reputation & Goodwill',
    description: 'Demonstrate your commitment to innovation and talent development, enhancing corporate goodwill.',
  },
  {
    icon: Target,
    title: 'Targeted Reach',
    description: 'Access a highly relevant audience including students, academicians, and industry leaders.',
  },
  {
    icon: Globe,
    title: 'Amplified Visibility',
    description: 'Gain exposure across website, social media, printed materials, and on-ground branding.',
  },
];

const Sponsor = () => {
  const navigate = useNavigate();
  
  // Animation refs
  const heroRef = useInView({ threshold: 0.2, triggerOnce: true });
  const benefitsRef = useInView({ threshold: 0.1, triggerOnce: true });
  const pastSponsorsRef = useInView({ threshold: 0.1, triggerOnce: true });
  const tariffRef = useInView({ threshold: 0.2, triggerOnce: true });
  const contactRef = useInView({ threshold: 0.2, triggerOnce: true });
  
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#0a0a0f' }}>
      {/* SEO Meta Tags */}
      <SEO
        title="Sponsor Us | SPHURAN 4.0"
        description="Partner with SPHURAN 4.0 at IIEST Shibpur. Explore sponsorship opportunities and join prestigious brands supporting our tech-cultural fest."
        keywords="SPHURAN sponsorship, college fest sponsors, IIEST Shibpur partners, tech fest sponsorship, become a sponsor"
        url="https://sphuran.eesiiests.org/sponsor"
      />
      
      {/* Abstract Background */}
      <div className="fixed inset-0 z-0">
        {/* Gradient Orbs */}
        <div 
          className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full opacity-30 blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(255,128,0,0.4) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-25 blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(255,96,0,0.4) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-[80px]"
          style={{ background: 'radial-gradient(circle, rgba(255,160,0,0.3) 0%, transparent 70%)' }}
        />
        
        {/* Grain Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Geometric Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/5" style={{ backgroundColor: 'rgba(10, 10, 15, 0.8)' }}>
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => window.history.length > 1 ? navigate(-1) : navigate('/')}
            className="inline-flex items-center gap-2 font-body text-sm text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Sponsors' }
            ]}
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div 
            ref={heroRef.ref}
            className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
              heroRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Sparkle Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8" style={{ background: 'linear-gradient(135deg, rgba(255,128,0,0.2) 0%, rgba(255,96,0,0.2) 100%)', border: '1px solid rgba(255,128,0,0.3)' }}>
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            
            {/* Event Title */}
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-6">
              <span 
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #FF8000 0%, #FF6000 50%, #FFA000 100%)' }}
              >
                SPHURAN
              </span>
              <span className="text-white ml-4">4.0</span>
            </h1>
            
            {/* Subtitle */}
            <p className="font-body text-xl md:text-2xl text-white/50 font-light tracking-wide mb-4">
              Our Sponsors & Partners
            </p>
            
            {/* Accent Line */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/50" />
              <Zap className="w-4 h-4 text-primary" />
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Sponsor Us Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div 
            ref={benefitsRef.ref}
            className={`transition-all duration-1000 ${
              benefitsRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
                Why <span className="text-primary">Sponsor</span> Us?
              </h2>
              <p className="font-body text-white/50 max-w-2xl mx-auto">
                Partner with one of the most anticipated tech-cultural fests in Eastern India
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="relative p-6 rounded-xl backdrop-blur-sm transition-all duration-300 group"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,128,0,0.3)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(255,128,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="font-body text-sm text-white/50 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Past Sponsors Section */}
      <section className="relative z-10">
        <div 
          ref={pastSponsorsRef.ref}
          className={`transition-all duration-1000 ${
            pastSponsorsRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <PastSponsers />
        </div>
      </section>

      {/* Thin Divider */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
      </div>

      {/* Sponsorship Tariff Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div 
            ref={tariffRef.ref}
            className={`transition-all duration-1000 ${
              tariffRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
                Sponsorship <span className="text-primary">Packages</span>
              </h2>
              <p className="font-body text-white/50 max-w-2xl mx-auto">
                Choose a sponsorship tier that aligns with your brand goals
              </p>
            </div>

            <div 
              className="max-w-3xl mx-auto rounded-2xl overflow-hidden backdrop-blur-xl"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
              }}
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ background: 'linear-gradient(90deg, rgba(255,128,0,0.1), rgba(255,96,0,0.05))' }}>
                      <th className="px-6 py-5 text-left font-display text-sm tracking-wider uppercase text-white/80">
                        Sponsorship Tier
                      </th>
                      <th className="px-6 py-5 text-right font-display text-sm tracking-wider uppercase text-white/80">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sponsorshipTiers.map((tier, index) => (
                      <tr
                        key={index}
                        className={`border-t border-white/5 transition-colors hover:bg-white/5 ${tier.highlight ? 'bg-primary/5' : ''}`}
                      >
                        <td className="px-6 py-4 font-body text-sm text-white/90 font-medium">
                          {tier.tier}
                          {tier.highlight && <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">Premium</span>}
                        </td>
                        <td className="px-6 py-4 text-right font-display text-sm font-bold text-primary">
                          {tier.amount}
                        </td>
                      </tr>
                    ))}
                    <tr style={{ background: 'linear-gradient(90deg, rgba(255,128,0,0.15), rgba(255,96,0,0.1))' }}>
                      <td className="px-6 py-5 font-display text-lg font-bold text-white uppercase">
                        Total
                      </td>
                      <td className="px-6 py-5 text-right font-display text-xl font-black text-primary">
                        ₹7,00,000/-
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div 
            ref={contactRef.ref}
            className={`transition-all duration-1000 ${
              contactRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div 
              className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 text-center backdrop-blur-xl"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255,128,0,0.1) 0%, rgba(255,96,0,0.05) 100%)',
                border: '1px solid rgba(255,128,0,0.2)',
                boxShadow: '0 20px 60px rgba(255,128,0,0.1)'
              }}
            >
              <h2 className="font-display text-2xl md:text-4xl font-bold text-white mb-4">
                Become a Partner
              </h2>
              <p className="font-body text-white/50 mb-8 max-w-xl mx-auto">
                Join us in making SPHURAN 4.0 an unforgettable experience. Reach out for customized sponsorship packages.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <a
                  href="mailto:sphuran.ees@gmail.com"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-display text-sm tracking-wider uppercase text-white transition-all duration-300 bg-primary hover:bg-primary/90"
                  style={{ 
                    boxShadow: '0 10px 30px rgba(255,128,0,0.3)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
                <a
                  href="tel:+917908362321"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-display text-sm tracking-wider uppercase transition-all duration-300 text-primary"
                  style={{ 
                    background: 'transparent',
                    border: '2px solid rgba(255,128,0,0.5)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,128,0,0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
              </div>

              <div className="pt-8 border-t border-white/10 text-left md:text-center">
                <p className="font-body text-sm text-white/60 mb-2">
                  <span className="text-white/80 font-medium">Contact:</span> Ruman Paul (Secretary, EES)
                </p>
                <p className="font-body text-sm text-white/60 mb-2">
                  <span className="text-white/80 font-medium">Phone:</span> +91 79083 62321
                </p>
                <p className="font-body text-sm text-white/60">
                  <span className="text-white/80 font-medium">Email:</span> 2022eeb002.ruman@students.iiests.ac.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gratitude Message */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-5 h-5 text-primary" />
            <p className="font-body text-lg text-white/40 font-light tracking-wide">
              Proudly supported by our partners
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Sponsor;
