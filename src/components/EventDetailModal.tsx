import { memo } from 'react';
import { LucideIcon, X, ExternalLink, FileText, UserPlus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface EventDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  date: string;
  time?: string;
  prize: string;
  venue?: string;
  teamSize?: string;
  rules?: string[];
  eligibility?: string;
  contact?: string;
  rulebookLink?: string;
  registrationLink?: string;
  image?: string;
  isSpecialEvent?: boolean;
}

const EventDetailModal = memo(({
  isOpen,
  onClose,
  title,
  description,
  icon: Icon,
  category,
  date,
  time,
  prize,
  venue = 'Main Auditorium, IIEST Shibpur',
  teamSize = '1-4 members',
  rules = [],
  eligibility = 'Open to all college students',
  contact = 'sphuran@eesiiests.org',
  rulebookLink,
  registrationLink,
  image,
  isSpecialEvent = false,
}: EventDetailModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
        {/* Image Banner for Special Events */}
        {image && isSpecialEvent && (
          <div className="-m-6 mb-6">
            <div className="relative h-80 overflow-hidden">
              <img 
                src={image} 
                alt={`${title} - Special Event at SPHURAN 4.0 Technical Festival`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            </div>
          </div>
        )}
        
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center border-2 border-primary/50 rounded-lg bg-primary/10">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <span className="px-3 py-1 text-xs font-body tracking-wider uppercase text-primary border border-primary/30 rounded-full">
                  {category}
                </span>
                <DialogTitle className="font-display text-3xl font-bold text-foreground mt-2">
                  {title}
                </DialogTitle>
              </div>
            </div>
          </div>
          <DialogDescription className="font-body text-muted-foreground text-base leading-relaxed mt-4">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Event Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-background border border-border rounded-lg">
              <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">Date</p>
              <p className="text-sm font-display font-semibold text-foreground">{date}</p>
            </div>
            <div className="p-4 bg-background border border-border rounded-lg">
              <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">Prize Pool</p>
              <p className="text-sm font-display font-semibold text-primary">{prize === 'TBA' || prize === '-' ? prize : `₹${prize}`}</p>
            </div>
            <div className="p-4 bg-background border border-border rounded-lg">
              <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">Team Size</p>
              <p className="text-sm font-display font-semibold text-foreground">{teamSize}</p>
            </div>
            <div className="p-4 bg-background border border-border rounded-lg">
              <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">Venue</p>
              <p className="text-sm font-display font-semibold text-foreground">{venue}</p>
            </div>
          </div>

          {/* Time/Schedule */}
          {time && (
            <div className="p-4 bg-background border border-border rounded-lg">
              <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                Schedule
              </h4>
              <ul className="space-y-2">
                {time.split('|').map((round, index) => (
                  <li key={index} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-0.5 font-semibold min-w-[20px]">{index + 1}.</span>
                    <span>{round.trim()}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Eligibility */}
          <div className="p-4 bg-background border border-border rounded-lg">
            <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
              Eligibility
            </h4>
            <p className="font-body text-sm text-muted-foreground">{eligibility}</p>
          </div>

          {/* Rules */}
          {rules.length > 0 && (
            <div className="p-4 bg-background border border-border rounded-lg">
              <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                Event Rules
              </h4>
              <ul className="space-y-2">
                {rules.map((rule, index) => (
                  <li key={index} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contact */}
          <div className="p-4 bg-background border border-border rounded-lg">
            <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
              Contact
            </h4>
            <p className="font-body text-sm text-primary">{contact}</p>
          </div>

          {/* Action Buttons */}
          {(registrationLink || rulebookLink) && (
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {registrationLink && (
                <a
                  href={registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300 rounded-sm"
                >
                  <UserPlus className="w-4 h-4" />
                  Register Now
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {rulebookLink && (
                <a
                  href={rulebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 border border-primary text-primary font-display text-sm tracking-widest uppercase hover:bg-primary/10 transition-all duration-300 rounded-sm"
                >
                  <FileText className="w-4 h-4" />
                  Rulebook
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
});

EventDetailModal.displayName = 'EventDetailModal';

export default EventDetailModal;
