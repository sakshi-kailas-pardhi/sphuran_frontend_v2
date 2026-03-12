import { memo } from 'react';
import TextType from './ui/animatedComponents/textType';
import ShinyText from './ui/animatedComponents/shinyText';
import { CounterUp } from './ui/animatedComponents/counterUp';

const HeroSection = memo(() => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* Hero Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 animate-load-fade-in">
        <img
          src="https://res.cloudinary.com/dwr8472qb/image/upload/v1770875298/Gemini_Generated_Image_hgfxxuhgfxxuhgfx_g1mhpy.png"
          alt="SPHURAN 4.0 Technical Festival - Electrical Engineering Innovation at IIEST Shibpur"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>

      {/* <div className="absolute top-32 left-8 md:left-16 lg:left-32 z-20 animate-load-slide-left" style={{ animationDelay: '0.3s', opacity: 0 }}>
        <div className="px-4 py-2 bg-card/90 backdrop-blur border border-border rounded-full font-body text-xs md:text-sm tracking-widest text-foreground font-semibold">
          2026
        </div>
      </div> */}

      {/* <div className="absolute top-48 md:top-56 left-1/3 md:left-1/2 -translate-x-1/2 z-20 animate-load-slide-down" style={{ animationDelay: '0.2s', opacity: 0 }}>
        <div className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-display text-xs md:text-sm tracking-wider font-bold">
          4TH EDITION
        </div>
      </div> */}

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 overflow-hidden">
        {/* Massive Typography - SPHURAN */}
        <div className="relative mt-2 sm:mt-8 md:mt-16 lg:mt-24 text-center w-full animate-load-fade-scale" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <h1 className="font-display text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem] xl:text-[13rem] font-black tracking-tighter text-foreground leading-none select-none drop-shadow-2xl max-w-full">
            <ShinyText
              text="SPHURAN"
              speed={2}
              delay={0}
              color="#e5e5e5"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
            />
          </h1>

          {/* 4.0 overlapping */}
          <div className="absolute -bottom-8 sm:-bottom-16 md:-bottom-24 lg:-bottom-32 right-4 sm:right-12 md:right-20 lg:right-32 animate-load-slide-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
            <span className="font-display text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[12rem] xl:text-[15rem] font-black text-primary text-glow-strong leading-none select-none opacity-90">
              4.0
            </span>
          </div>
          {/* Event Date */}
          <div className='absolute -bottom-8 sm:-bottom-20 md:-bottom-32 lg:-bottom-40 left-4 sm:left-8 md:left-12 text-xs sm:text-base md:text-xl lg:text-2xl text-white font-display text-glow font-bold tracking-wide px-2 sm:px-4 py-1 sm:py-2 rounded-lg animate-load-slide-left' style={{ animationDelay: '0.8s', opacity: 0 }}>
            <TextType
              text={["13th - 15th March", "Prepare to Outsmart", "Stay Wired!"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              variableSpeed={{ min: 60, max: 120 }}
              cursorBlinkDuration={0.5}
            />
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-20 sm:mt-28 md:mt-40 lg:mt-52 max-w-2xl mx-auto text-center animate-load-fade-in" style={{ animationDelay: '1s', opacity: 0 }}>
          <p className="font-body text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase text-muted-foreground mb-3 md:mb-4">
            Electrical Engineers' Society Presents
          </p>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground tracking-wide mb-4 md:mb-6">
            WHERE INNOVATION<br />
            MEETS <span className="text-primary">EXCELLENCE</span>
          </h2>
          <p className="font-body text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
            The technical festival of the Electrical Engineering Department at IIEST Shibpur,
            bringing together students, industry leaders, and researchers to showcase technical skills and innovations.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 animate-load-slide-up" style={{ animationDelay: '1.2s', opacity: 0 }}>
          <a
            href="#events"
            className="group px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-display text-xs sm:text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300 box-glow hover:box-glow-strong"
          >
            EXPLORE EVENTS
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#about"
            className="px-6 sm:px-8 py-3 sm:py-4 border border-border text-foreground font-display text-xs sm:text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300"
          >
            LEARN MORE
          </a>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 mt-10 sm:mt-12 md:mt-16 animate-load-fade-in" style={{ animationDelay: '1.4s', opacity: 0 }}>
          <div className="text-center">
            <CounterUp 
              end={4} 
              duration={2500}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary text-glow"
            />
            <div className="font-body text-[10px] sm:text-xs tracking-widest text-muted-foreground uppercase mt-1 sm:mt-2">Edition</div>
          </div>
          <div className="text-center">
            <CounterUp 
              end={9} 
              suffix="+" 
              duration={2500}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
            />
            <div className="font-body text-[10px] sm:text-xs tracking-widest text-muted-foreground uppercase mt-1 sm:mt-2">Events</div>
          </div>
          <div className="text-center">
            <CounterUp 
              end={60} 
              prefix="₹" 
              suffix="K+" 
              duration={2500}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
            />
            <div className="font-body text-[10px] sm:text-xs tracking-widest text-muted-foreground uppercase mt-1 sm:mt-2">Prize Pool</div>
          </div>
          <div className="text-center">
            <CounterUp 
              end={500} 
              suffix="+" 
              duration={2500}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
            />
            <div className="font-body text-[10px] sm:text-xs tracking-widest text-muted-foreground uppercase mt-1 sm:mt-2">Participants</div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
