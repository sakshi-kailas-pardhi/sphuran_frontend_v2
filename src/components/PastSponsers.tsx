import { memo } from 'react';
import LogoLoop from './ui/animatedComponents/logoLoop';
import { getAllSponsors } from '@/lib/assets';

// Get sponsor logos from centralized assets
const sponsorLogos = getAllSponsors();

const PastSponsers = memo(() => {
  return (
    <section id="sponsors" className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: 'transparent' }}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-xs tracking-[0.4em] uppercase text-white/40">
            Trusted By Industry Leaders
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 leading-none">
            Past <span className="text-primary">Sponsors</span>
          </h2>
          <p className="font-body text-white/50 mt-4 max-w-xl mx-auto">
            Join prestigious brands that have partnered with us in previous editions
          </p>
        </div>

        {/* Logo Loop */}
        <div 
          className="relative overflow-hidden"
          style={{ height: '120px' }}
        >
          <LogoLoop
            logos={sponsorLogos}
            speed={80}
            direction="left"
            logoHeight={60}
            gap={80}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#0a0a0f"
            ariaLabel="Past sponsors and partners"
          />
        </div>
      </div>
    </section>
  );
});

PastSponsers.displayName = 'PastSponsers';

export default PastSponsers;