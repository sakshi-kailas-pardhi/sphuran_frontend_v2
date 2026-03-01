import { memo } from 'react';
import LogoLoop from './ui/animatedComponents/logoLoop';
import { getAllSponsors } from '@/lib/assets';

// Get sponsor logos from centralized assets
const sponsorLogos = getAllSponsors();

const PastSponsers = memo(() => {
  return (
    <section id="sponsors" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground">
            Our Partners
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-foreground mt-4 leading-none">
            PAST SPONSORS
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto mt-8" />
        </div>

        {/* Logo Loop */}
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
          <LogoLoop
            logos={sponsorLogos}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Past sponsors and partners"
          />
        </div>
      </div>
    </section>
  );
});

PastSponsers.displayName = 'PastSponsers';

export default PastSponsers;