import { memo } from 'react';
import { logos } from '@/lib/logoData';
import { useInView } from '@/hooks/use-in-view';
import { CounterUp } from './ui/animatedComponents/counterUp';

const AboutSection = memo(() => {
  const headerRef = useInView({ threshold: 0.2, triggerOnce: false });
  const leftColRef = useInView({ threshold: 0.2, triggerOnce: false });
  const rightColRef = useInView({ threshold: 0.2, triggerOnce: false });
  const iiestRef = useInView({ threshold: 0.2, triggerOnce: false });
  const sphuranLogoRef = useInView({ threshold: 0.3, triggerOnce: false });
  const eesLogoRef = useInView({ threshold: 0.3, triggerOnce: false });

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Decorative vertical text */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block">
        <span className="font-display text-8xl font-black text-muted/10 tracking-widest" style={{ writingMode: 'vertical-rl' }}>
          SPHURAN
        </span>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header - Bold Editorial Style */}
        <div
          ref={headerRef.ref}
          className={`relative mb-20 transition-all duration-700 ${headerRef.isInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
            }`}
        >
          <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground">
            About The Fest
          </span>
          <div className="mt-6 flex flex-col md:flex-row md:items-end gap-4">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-none">
              BEYOND
            </h2>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary text-glow leading-none">
              LIMITS
            </h2>
          </div>
          <div className="w-32 h-1 bg-primary mt-8" />
        </div>

        {/* Content Grid - Magazine Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Large Quote */}
          <div
            ref={leftColRef.ref}
            className={`lg:col-span-5 space-y-8 transition-all duration-700 delay-200 ${leftColRef.isInView
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-10'
              }`}
          >
            <div className="relative">
              <span className="absolute -left-4 -top-4 text-8xl font-display text-primary/20">"</span>
              <p className="font-display text-2xl md:text-3xl text-foreground leading-tight pl-8">
                Where Innovation Meets Excellence
              </p>
            </div>

            {/* Logo & Badge */}
            <div
              ref={sphuranLogoRef.ref}
              className={`flex items-center gap-6 pt-8 border-t border-border transition-all duration-700 delay-300 ${sphuranLogoRef.isInView
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-75'
                }`}
            >
              <img
                src={logos.sphuran}
                alt="SPHURAN 4.0 Logo - Annual Technical Festival by Electrical Engineers' Society"
                className="w-20 h-20 object-contain rounded-xl"
              />
              <div>
                <div className="font-display text-lg font-bold text-foreground">SPHURAN 4.0</div>
                <div className="font-body text-sm text-muted-foreground mt-1">2026</div>
                <div className="flex gap-2 mt-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-body rounded-full">4th Edition</span>
                </div>
              </div>
            </div>

            {/* EES Info */}
            <div
              ref={eesLogoRef.ref}
              className={`transition-all duration-700 delay-500 ${eesLogoRef.isInView
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-75'
                }`}
            >
              <a
                href="https://www.eesiiests.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-card/80 cursor-pointer group transition-all duration-300"
              >
                <img
                  src={logos.ees}
                  alt="Electrical Engineering"
                  className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <div className="flex-1">
                  <h3 className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    Electrical Engineers' Society
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mt-1">
                    Department of Electrical Engineering<br />
                    IIEST Shibpur, Est. 1981
                  </p>
                </div>
                <svg 
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div
            ref={rightColRef.ref}
            className={`lg:col-span-7 space-y-8 transition-all duration-700 delay-400 ${rightColRef.isInView
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-10'
              }`}
          >
            {/* About SPHURAN */}
            <div>
              <h3 className="font-display text-xl font-bold text-primary mb-4">About SPHURAN</h3>
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">SPHURAN</span>, the premier technical
                stage where engineering theory transforms into industrial reality. Orchestrated by the
                Electrical Engineers' Society at IIEST Shibpur, it serves as a high-octane environment for
                visionaries to bridge the gap between academic excellence and technological breakthrough.
              </p>
            </div>

            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Known for intellectually stimulating events such as paper presentations, project exhibitions,
              robotics, and hackathons, SPHURAN encourages creative and critical thinking while enabling
              students to network, build strong portfolios, and gain exposure to the latest trends and technologies.
            </p>

            {/* About EES */}
            <div className="p-6 bg-card/50 border border-border rounded-lg">
              <h3 className="font-display text-lg font-bold text-foreground mb-3">About EES</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                The Electrical Engineers' Society (EES) is the heartbeat of the department,
                fostering a culture of rigorous technical exploration and leadership since 1981.
                We empower students to venture beyond the syllabus, mastering the complex systems that power
                our world while building the professional networks of tomorrow.
              </p>
            </div>

            {/* Stats Row - EES Heritage */}
            <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-8 md:gap-0 pt-8 border-t border-border">
              <div className="text-center md:text-left">
                <div className="flex items-baseline justify-center md:justify-start gap-1">
                  <span className="font-body text-lg text-amber-600/80">Since</span>
                  <CounterUp 
                    end={1981} 
                    duration={2500}
                    className="font-display text-3xl md:text-4xl font-black text-amber-600"
                  />
                </div>
                <div className="font-body text-xs tracking-widest text-muted-foreground uppercase mt-2">45 Years of Excellence</div>
              </div>
              
              <div className="hidden md:block w-px bg-border self-stretch"></div>
              
              <div className="text-center md:text-left">
                <CounterUp 
                  end={10} 
                  suffix="+" 
                  duration={2500}
                  className="font-display text-3xl md:text-4xl font-black text-foreground"
                />
                <div className="font-body text-xs tracking-widest text-muted-foreground uppercase mt-2">Annual Initiatives</div>
              </div>
              
              <div className="hidden md:block w-px bg-border self-stretch"></div>
              
              <div className="text-center md:text-left">
                <CounterUp 
                  end={300} 
                  suffix="+" 
                  duration={2500}
                  className="font-display text-3xl md:text-4xl font-black text-foreground"
                />
                <div className="font-body text-xs tracking-widest text-muted-foreground uppercase mt-2">Active Members</div>
              </div>
            </div>
          </div>
        </div>

        {/* About IIEST Section */}
        <div
          ref={iiestRef.ref}
          className={`mt-20 p-8 md:p-12 border border-border bg-card/30 rounded-lg transition-all duration-700 ${iiestRef.isInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-2 bg-primary/10 text-primary font-display text-sm tracking-wider rounded-full">
              ESTD 1856
            </span>
            <h3 className="font-display text-2xl font-bold text-foreground">IIEST, Shibpur</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="font-body text-muted-foreground leading-relaxed">
              Indian Institute of Engineering Science and Technology, Shibpur (formerly Bengal Engineering College),
              established in 1856, is one of the oldest and most respected engineering institutions in India.
              With a strong legacy of excellence, the institute provides a multidisciplinary research environment,
              nurturing innovation and technological advancement aimed at contributing to a developed India.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              As an Institution of National Importance, IIEST is committed to producing skilled engineers,
              researchers, and innovators equipped for global challenges. The institute blends rigorous academics
              with hands-on exposure, leadership opportunities, and vibrant campus culture—empowering students to
              excel in their chosen fields and make meaningful contributions to society.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;
