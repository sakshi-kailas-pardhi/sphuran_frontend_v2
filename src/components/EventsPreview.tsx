import { memo, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import EventCard from './EventCard';
import EventDetailModal from './EventDetailModal';
import { events, Event } from '@/lib/eventsData';
import { useInView } from '@/hooks/use-in-view';

const EventsPreview = memo(() => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const headerRef = useInView({ threshold: 0.2, triggerOnce: false });
  
  // Separate competitive events from special events
  const competitiveEvents = events.filter(e => !e.isSpecialEvent);
  const specialEventsCount = events.filter(e => e.isSpecialEvent).length;
  
  // Show first 4 competitive events as preview
  const featuredEvents = competitiveEvents.slice(0, 4);

  const handleEventClick = useCallback((event: Event) => {
    setSelectedEvent(event);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedEvent(null);
  }, []);

  return (
    <section id="events" className="relative py-24 md:py-32 overflow-hidden bg-card/30">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header - Bold Editorial */}
        <div 
          ref={headerRef.ref}
          className={`mb-16 transition-all duration-700 ${
            headerRef.isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground">
                What Awaits You
              </span>
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-foreground mt-4 leading-none">
                EVENTS
              </h2>
              <div className="flex items-center gap-4 mt-4">
                <div className="w-16 h-1 bg-primary" />
                <span className="font-display text-xl text-primary">{competitiveEvents.length} Competitive + {specialEventsCount} Special</span>
              </div>
            </div>
            
            {/* View All Link */}
            <Link 
              to="/events"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display text-sm tracking-wider hover:bg-primary/90 transition-all self-start lg:self-end"
            >
              View All Events
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Preview Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredEvents.map((event, index) => (
            <div
              key={event.title}
              style={{ animationDelay: `${index * 0.05}s` }}
              className="animate-slide-up"
            >
              <EventCard {...event} onClick={() => handleEventClick(event)} />
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center">
          <Link 
            to="/events"
            className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-display text-sm tracking-wider hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Explore All {competitiveEvents.length} Competitive Events + {specialEventsCount} Special Events
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
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

EventsPreview.displayName = 'EventsPreview';

export default EventsPreview;
