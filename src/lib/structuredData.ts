import { Event } from './eventsData';

/**
 * Generates JSON-LD structured data for an individual event
 */
export const generateEventSchema = (event: Event) => {
  // Don't generate schema for special events without specific dates
  if (event.isSpecialEvent && event.date === 'To Be Announced') {
    return null;
  }

  // Parse actual date strings like "March 13", "March 14-15", "March 13, 14, 15"
  const getEventDate = (dateStr: string): string => {
    const days = [...dateStr.matchAll(/\b(1[3-5])\b/g)].map(m => parseInt(m[1]));
    const first = days.length > 0 ? days[0] : 13;
    return `2026-03-${String(first).padStart(2, '0')}`;
  };

  const getEventEndDate = (dateStr: string): string => {
    const days = [...dateStr.matchAll(/\b(1[3-5])\b/g)].map(m => parseInt(m[1]));
    const last = days.length > 0 ? Math.max(...days) : 13;
    return `2026-03-${String(last).padStart(2, '0')}`;
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.description,
    image: event.image || 'https://res.cloudinary.com/dwr8472qb/image/upload/v1770880076/og-sphuran_lnd2mq.png',
    startDate: getEventDate(event.date),
    endDate: getEventEndDate(event.date),
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: event.venue === 'Online' 
      ? 'https://schema.org/OnlineEventAttendanceMode' 
      : 'https://schema.org/OfflineEventAttendanceMode',
    location: event.venue === 'Online' 
      ? {
          '@type': 'VirtualLocation',
          url: 'https://sphuran.eesiiests.org/events'
        }
      : {
          '@type': 'Place',
          name: event.venue || 'IIEST Shibpur',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Indian Institute of Engineering Science and Technology',
            addressLocality: 'Howrah',
            addressRegion: 'West Bengal',
            postalCode: '711103',
            addressCountry: 'IN'
          }
        },
    organizer: {
      '@type': 'Organization',
      name: 'Electrical Engineers\' Society, IIEST Shibpur',
      url: 'https://sphuran.eesiiests.org',
      email: event.contact || 'sphuran.ees@gmail.com'
    },
    offers: {
      '@type': 'Offer',
      url: event.registrationLink || 'https://sphuran.eesiiests.org/events',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-02-12'
    },
    ...(event.prize && event.prize !== 'TBA' && event.prize !== '-' && {
      award: event.prize
    })
  };
};

/**
 * Generates JSON-LD for all events as an ItemList
 */
export const generateEventsListSchema = (events: Event[]) => {
  const competitiveEvents = events.filter(e => !e.isSpecialEvent);
  
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: competitiveEvents.map((event, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: generateEventSchema(event)
    })).filter(item => item.item !== null)
  };
};
