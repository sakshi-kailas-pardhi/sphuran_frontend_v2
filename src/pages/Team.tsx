import { useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp, X, User } from 'lucide-react';
import Footer from '@/components/Footer';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { useInView } from '@/hooks/use-in-view';
import { teamData, type TeamMember, type Department } from '@/lib/teamData';

// Extended type for modal display
interface SelectedMember extends TeamMember {
  displayRole?: string;
}

// Profile Modal Component
const ProfileModal = ({ member, onClose }: { member: SelectedMember | null; onClose: () => void }) => {
  if (!member) return null;
  
  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="relative bg-card border border-border rounded-xl p-0 w-[90vw] max-w-3xl h-[280px] md:h-[350px] overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
        >
          <X className="w-5 h-5 text-white" />
        </button>
        
        {member.image && (
          <div className="w-full md:w-1/2 h-40 md:h-full flex-shrink-0">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            {member.name}
          </h3>
          
          {member.year && (
            <p className="text-base text-accent mb-3">
              {member.year}<sup>{member.year === 1 ? 'st' : member.year === 2 ? 'nd' : member.year === 3 ? 'rd' : 'th'}</sup> Year
            </p>
          )}
          
          {(member.displayRole || member.role) && (
            <div className="mt-2">
              <p className="font-display text-xs uppercase tracking-wider text-muted-foreground mb-1">Role</p>
              <p className="font-body text-base text-foreground">{member.displayRole || member.role}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const TeamSection = memo(({ title, members, expandable = false, onMemberClick, departmentName, showRoleBadge = false, roleBadge }: { title: string; members: TeamMember[]; expandable?: boolean; onMemberClick: (member: SelectedMember) => void; departmentName?: string; showRoleBadge?: boolean; roleBadge?: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayMembers = expandable && !isExpanded ? members.slice(0, 3) : members;

  return (
    <>
      {title && <h3 className="font-display text-sm tracking-wider uppercase text-primary mb-3 col-span-full">{title}</h3>}
      {displayMembers.map((member, index) => (
        <div 
          key={index}
          onClick={() => onMemberClick({ 
            ...member, 
            displayRole: departmentName 
              ? (roleBadge ? `${roleBadge} - ${departmentName}` : departmentName)
              : (roleBadge || member.role)
          })}
          className="bg-card border border-border rounded-lg hover:border-primary/50 transition-colors flex flex-col overflow-hidden cursor-pointer"
        >
          <div className="aspect-square w-full overflow-hidden bg-muted relative">
            {member.image ? (
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <User className="w-1/3 h-1/3 text-muted-foreground/50" />
              </div>
            )}
            {showRoleBadge && roleBadge && (
              <span className="absolute top-2 left-2 px-2 py-0.5 bg-primary/90 text-primary-foreground text-[9px] sm:text-[10px] font-medium rounded-full">
                {roleBadge}
              </span>
            )}
          </div>
          <div className="p-3 text-center">
            <p className="font-display text-xs sm:text-sm font-semibold text-foreground leading-tight">
              {member.name}
            </p>
            {member.year && (
              <p className="text-[10px] sm:text-xs text-accent mt-1">
                {member.year}<sup>{member.year === 1 ? 'st' : member.year === 2 ? 'nd' : member.year === 3 ? 'rd' : 'th'}</sup> year
              </p>
            )}
            {member.role && (
              <p className="font-body text-[10px] sm:text-xs text-muted-foreground mt-1 line-clamp-2">{member.role}</p>
            )}
          </div>
        </div>
      ))}
      {expandable && members.length > 3 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="col-span-full mt-3 w-full p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors font-body text-xs text-muted-foreground hover:text-primary flex items-center justify-center gap-2"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Show {members.length - 3} More
            </>
          )}
        </button>
      )}
    </>
  );
});

TeamSection.displayName = 'TeamSection';

const DepartmentSection = memo(({ 
  title, 
  department,
  onMemberClick
}: { 
  title: string; 
  department: Department;
  onMemberClick: (member: SelectedMember) => void;
}) => {
  return (
    <div className="mb-8">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 border-b border-border pb-3">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        <TeamSection title="" members={department.head} onMemberClick={onMemberClick} departmentName={title} showRoleBadge roleBadge="Head" />
        <TeamSection title="" members={department.associateHead} onMemberClick={onMemberClick} departmentName={title} showRoleBadge roleBadge="Assoc. Head" />
        <TeamSection title="" members={department.associates} onMemberClick={onMemberClick} departmentName={title} showRoleBadge roleBadge="Associate" />
      </div>
    </div>
  );
});

DepartmentSection.displayName = 'DepartmentSection';

const Team = () => {
  const navigate = useNavigate();
  const [selectedMember, setSelectedMember] = useState<SelectedMember | null>(null);
  
  const handleMemberClick = (member: SelectedMember) => {
    setSelectedMember(member);
  };
  
  // Animation refs
  const heroRef = useInView({ threshold: 0.2, triggerOnce: true });
  const facultyRef = useInView({ threshold: 0.2, triggerOnce: true });
  const leadershipRef = useInView({ threshold: 0.2, triggerOnce: true });
  const departmentsRef = useInView({ threshold: 0.1, rootMargin: '200px', triggerOnce: true });
  
  return (
    <div className="min-h-screen bg-background relative">
      {/* SEO Meta Tags */}
      <SEO
        title="Team"
        description="Meet the dedicated team behind SPHURAN 4.0 at IIEST Shibpur. Faculty coordinators, main coordinators, and department heads organizing the technical festival."
        keywords="SPHURAN team, EES IIEST team, SPHURAN organizers, student coordinators, faculty advisors, IIEST Shibpur team"
        url="https://sphuran.eesiiests.org/team"
      />
      
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
              { label: 'Team' }
            ]}
          />
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
        {/* Page Header */}
        <div 
          ref={heroRef.ref}
          className={`mb-16 transition-all duration-700 ${
            heroRef.isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground">
            Meet Our Team
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-foreground mt-4 leading-none">
            TEAM SPHURAN 4.0
          </h1>
          <div className="w-32 h-1 bg-primary mt-8" />
        </div>

        {/* Faculty */}
        <div 
          ref={facultyRef.ref}
          className={`mb-12 ${
            facultyRef.isInView 
              ? 'animate-load-slide-up' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 border-b border-border pb-3">
            Faculty Advisors
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamData.faculty.map((member, index) => (
              <div 
                key={index}
                onClick={() => member.image && handleMemberClick(member)}
                className={`p-6 bg-card border-2 border-primary/30 rounded-lg hover:border-primary transition-colors flex flex-col items-center text-center ${member.image ? 'cursor-pointer' : ''}`}
              >
                {member.image && (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover border-2 border-primary/50 mb-4"
                  />
                )}
                <p className="font-display text-base font-bold text-foreground mb-2">{member.name}</p>
                <p className="font-body text-xs text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div 
          ref={leadershipRef.ref}
          className={`mb-12 transition-all duration-700 ${
            leadershipRef.isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 border-b border-border pb-3">
            Leadership
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            <TeamSection title="" members={teamData.secretary} onMemberClick={handleMemberClick} departmentName="Secretary" showRoleBadge roleBadge="Secretary" />
            <TeamSection title="" members={teamData.mainCoordinators} onMemberClick={handleMemberClick} departmentName="Main Coordinator" showRoleBadge roleBadge="Main Coord." />
            <TeamSection title="" members={teamData.jointCoordinators} onMemberClick={handleMemberClick} departmentName="Joint Coordinator" showRoleBadge roleBadge="Jt. Coord." />
          </div>
        </div>

        {/* Departments */}
        <div 
          ref={departmentsRef.ref}
          className={`transition-all duration-700 ${
            departmentsRef.isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
        <DepartmentSection title="Finance & Audit" department={teamData.financeAudit} onMemberClick={handleMemberClick} />
        <DepartmentSection title="Website" department={teamData.website} onMemberClick={handleMemberClick} />
        <DepartmentSection title="Design" department={teamData.design} onMemberClick={handleMemberClick} />
        <DepartmentSection title="Sponsorship" department={teamData.sponsorship} onMemberClick={handleMemberClick} />
        <DepartmentSection title="Publicity" department={teamData.publicity} onMemberClick={handleMemberClick} />
        <DepartmentSection title="Event Management" department={teamData.eventManagement} onMemberClick={handleMemberClick} />
        <DepartmentSection title="Travel & Logistics" department={teamData.travelLogistics} onMemberClick={handleMemberClick} />

        {/* Volunteers */}
        <div className="mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 border-b border-border pb-3">
            Volunteers
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            <TeamSection title="" members={teamData.volunteers} onMemberClick={handleMemberClick} departmentName="Volunteer" showRoleBadge roleBadge="Volunteer" />
          </div>
        </div>
        </div>
      </div>

      {/* Profile Modal */}
      {selectedMember && (
        <ProfileModal member={selectedMember} onClose={() => setSelectedMember(null)} />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Team;
