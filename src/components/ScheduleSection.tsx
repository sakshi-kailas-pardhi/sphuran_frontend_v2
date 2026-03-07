import { memo } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { scheduleData } from '@/lib/scheduleData';
import { MapPin, Clock } from 'lucide-react';

// Timeline colors for events - premium aesthetic palette (alternating)
const eventStyles = [
  { bg: 'bg-[#CE7E5A]', text: 'text-white', textMuted: 'text-white/80' },      // Olive brown
  { bg: 'bg-[#e0d6c4]', text: 'text-[#5c4a32]', textMuted: 'text-[#5c4a32]/70' }, // Light tan/warm grey
];

const ScheduleSection = memo(() => {
  const headerRef = useInView({ threshold: 0.2, triggerOnce: false });
  
  return (
    <section id="schedule" className="relative py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div 
          ref={headerRef.ref}
          className={`text-center mb-16 transition-all duration-700 ${
            headerRef.isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="font-body text-primary text-sm tracking-widest uppercase">
            Mark Your Calendar
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            EVENT SCHEDULE
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </div>

        {/* Schedule Timeline */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {scheduleData.map((day, dayIndex) => (
            <div
              key={day.day}
              className="animate-slide-up"
              style={{ animationDelay: `${dayIndex * 0.2}s` }}
            >
              {/* Day Header */}
              <div className="text-center mb-8">
                <h3 className="font-display text-3xl font-bold text-primary">{day.day}</h3>
                <p className="font-body text-sm text-muted-foreground mt-1">{day.date}</p>
              </div>

              {/* Timeline Events */}
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

                {day.events.map((event, eventIndex) => {
                  const style = eventStyles[eventIndex % eventStyles.length];
                  return (
                    <div key={eventIndex} className="relative flex items-start gap-4 mb-6 last:mb-0">
                      {/* Step Circle */}
                      <div className={`relative z-10 flex-shrink-0 w-12 h-12 ${style.bg} rounded-full flex items-center justify-center shadow-lg`}>
                        <span className={`${style.text} font-display font-bold text-lg`}>
                          {String(eventIndex + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Event Card */}
                      <div className={`flex-1 ${style.bg} rounded-full py-3 px-5 shadow-md hover:shadow-lg transition-shadow duration-300`}>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div className="flex-1">
                            <h4 className={`font-display ${style.text} font-semibold text-base`}>
                              {event.title}
                            </h4>
                            <div className="flex flex-wrap items-center gap-3 mt-1">
                              <span className={`flex items-center gap-1 ${style.textMuted} text-xs`}>
                                <Clock className="w-3 h-3" />
                                {event.time}
                              </span>
                              <span className={`flex items-center gap-1 ${style.textMuted} text-xs`}>
                                <MapPin className="w-3 h-3" />
                                {event.venue}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ScheduleSection.displayName = 'ScheduleSection';

export default ScheduleSection;
