import { useState, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lightbulb } from 'lucide-react';
import EventCard from '@/components/EventCard';
import EventDetailModal from '@/components/EventDetailModal';
import Footer from '@/components/Footer';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { AnimatedCard } from '@/components/AnimatedCard';
import { events, categories, Event } from '@/lib/eventsData';
import { useInView } from '@/hooks/use-in-view';
import { generateEventsListSchema } from '@/lib/structuredData';
import { StructuredData } from '@/components/StructuredData';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const Events = memo(() => {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Scroll animation refs
  const headerRef = useInView({ threshold: 0.2, triggerOnce: false });
  const filtersRef = useInView({ threshold: 0.2, triggerOnce: false });
  const flagshipRef = useInView({ threshold: 0.2, triggerOnce: false });
  const specialEventsRef = useInView({ threshold: 0.2, triggerOnce: false });
  
  // Separate competitive and special events
  const competitiveEvents = events.filter(e => !e.isSpecialEvent);
  const specialEvents = events.filter(e => e.isSpecialEvent);
  
  const filteredEvents = activeCategory === 'All' 
    ? competitiveEvents 
    : competitiveEvents.filter(e => e.category === activeCategory);

  const handleEventClick = useCallback((event: Event) => {
    setSelectedEvent(event);
  }, []);

  const handleCategoryClick = useCallback((category: string) => {
    setActiveCategory(category);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedEvent(null);
  }, []);

  const handleFlagshipClick = useCallback(() => {
    const electroquip = events.find(e => e.title === 'Electroquip');
    if (electroquip) setSelectedEvent(electroquip);
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {/* SEO Meta Tags */}
      <SEO
        title="Events"
        description="Explore SPHURAN 4.0 events at IIEST Shibpur - Electroquip Quiz, Illumination Circuit Design, Cyberblame Coding, Adhyayan Case Study, and more competitive technical events. Register now for March 1-2, 2026."
        keywords="SPHURAN events, Electroquip, Illumination circuit design, Cyberblame coding, technical competitions, IIEST Shibpur events, engineering competitions, quiz competition, coding contest, case study competition"
        url="https://sphuran.eesiiests.org/events"
      />
      
      {/* Structured Data for SEO */}
      <StructuredData data={generateEventsListSchema(events)} />
      
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
              { label: 'Events' }
            ]}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            {/* Section Header - Bold Editorial */}
            <div 
              ref={headerRef.ref}
              className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 transition-all duration-700 ${
                headerRef.isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div>
                <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground">
                  What Awaits You
                </span>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-foreground mt-4 leading-none">
                  EVENTS
                </h1>
                <div className="flex items-center gap-4 mt-4">
                  <div className="w-16 h-1 bg-primary" />
                  <span className="font-display text-xl text-primary">{competitiveEvents.length} Competitive Events</span>
                </div>
              </div>
              
              {/* Category Filter - Pills */}
              <div 
                ref={filtersRef.ref}
                className={`flex flex-wrap gap-2 transition-all duration-700 delay-200 ${
                  filtersRef.isInView 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-10'
                }`}
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className={`px-4 py-2 font-body text-xs tracking-wider uppercase transition-all duration-300 rounded-full border ${
                      activeCategory === cat
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Event Highlight */}
            {activeCategory === 'All' && (
              <div 
                ref={flagshipRef.ref}
                className={`mb-12 p-8 md:p-12 border border-primary/30 bg-primary/5 rounded-lg relative overflow-hidden transition-all duration-700 delay-300 ${
                  flagshipRef.isInView 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95'
                }`}
              >
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-display tracking-wider rounded-full">
                  FLAGSHIP
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="font-body text-xs tracking-widest text-primary uppercase">Industry Collaborated</span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                      ELECTROQUIP
                    </h2>
                    <p className="font-body text-muted-foreground mt-4 leading-relaxed">
                      An industry-collaborated quiz that tests core Electrical Engineering concepts like machines, 
                      power systems, and control systems. Compete for prizes and recognition as a top performer.
                    </p>
                     <button 
                      onClick={handleFlagshipClick}
                      className="mt-6 px-6 py-3 bg-primary text-primary-foreground font-display text-sm tracking-wider hover:bg-primary/90 transition-all"
                    >
                      VIEW DETAILS
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <Lightbulb className="w-32 h-32 md:w-48 md:h-48 text-primary/20" strokeWidth={1} />
                  </div>
                </div>
              </div>
            )}

            {/* Events Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredEvents.map((event, index) => (
                <AnimatedCard key={event.title} delay={index * 100}>
                  <EventCard {...event} onClick={() => handleEventClick(event)} />
                </AnimatedCard>
              ))}
            </div>

            {/* Special Events Section */}
            {activeCategory === 'All' && (
              <div className="mt-24">
                <div 
                  ref={specialEventsRef.ref}
                  className={`mb-12 transition-all duration-700 ${
                    specialEventsRef.isInView 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground">
                    Beyond Competition
                  </span>
                  <h2 className="font-display text-4xl md:text-6xl font-black text-foreground mt-4 leading-none">
                    SPECIAL EVENTS
                  </h2>
                  <div className="w-16 h-1 bg-primary mt-6" />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {specialEvents.map((event, index) => (
                    <AnimatedCard key={event.title} delay={index * 150}>
                      <div
                        onClick={() => handleEventClick(event)}
                        className="group cursor-pointer bg-card border border-border hover:border-primary overflow-hidden transition-colors duration-300 h-full"
                      >
                      {/* Image Section */}
                      {event.image ? (
                        <div className="relative h-64 overflow-hidden">
                          <img 
                            src={event.image} 
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ) : (
                        <div className="relative h-64 bg-card/50 flex items-center justify-center">
                          <event.icon className="w-16 h-16 text-primary/20" strokeWidth={1} />
                        </div>
                      )}
                      
                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <event.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                          <span className="font-body text-xs tracking-wider uppercase text-primary">
                            {event.category}
                          </span>
                        </div>
                        <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                          {event.description}
                        </p>
                        <div className="flex items-center justify-between text-xs font-body text-muted-foreground">
                          <span>{event.date}</span>
                          <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </div>
                    </div>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <EventDetailModal
          isOpen={!!selectedEvent}
          onClose={handleCloseModal}
          {...selectedEvent}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
});

Events.displayName = 'Events';

export default Events;
