import EventCard from './EventCard';
import EventDetailModal from './EventDetailModal';
import { useState, memo, useCallback } from 'react';
import { Lightbulb } from 'lucide-react';
import { events as allEvents, categories, Event } from '@/lib/eventsData';

const events: Event[] = allEvents.filter(e => !e.isSpecialEvent).slice(0, 4);

const EventsSection = memo(() => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredEvents = activeCategory === 'All' 
    ? events 
    : events.filter(e => e.category === activeCategory);

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
    const electroquip = events.find(e => e.title === 'ELECTROQUIP');
    if (electroquip) setSelectedEvent(electroquip);
  }, []);

  return (
    <section id="events" className="relative py-24 md:py-32 overflow-hidden bg-card/30">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header - Bold Editorial */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground">
              What Awaits You
            </span>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-foreground mt-4 leading-none">
              EXPLORE
            </h2>
            <div className="flex items-center gap-4 mt-4">
              <div className="w-16 h-1 bg-primary" />
              <span className="font-display text-xl text-primary">9+ Events</span>
            </div>
          </div>
          
          {/* Category Filter - Pills */}
          <div className="flex flex-wrap gap-2">
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
          <div className="mb-12 p-8 md:p-12 border border-primary/30 bg-primary/5 rounded-lg relative overflow-hidden">
            <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-display tracking-wider rounded-full">
              FLAGSHIP
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="font-body text-xs tracking-widest text-primary uppercase">Industry Collaborated</span>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                  ELECTROQUIP
                </h3>
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
            <div
              key={event.title}
              style={{ animationDelay: `${index * 0.05}s` }}
              className="animate-slide-up"
            >
              <EventCard {...event} onClick={() => handleEventClick(event)} />
            </div>
          ))}
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <EventDetailModal
          isOpen={!!selectedEvent}
          onClose={handleCloseModal}
          {...selectedEvent}
        />
      )}

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
});

EventsSection.displayName = 'EventsSection';

export default EventsSection;
