import { useState, useEffect, memo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, Home, Calendar, Users, Trophy, Image, Mail, Shirt } from 'lucide-react';
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import ChipsTab from './ui/tabs/ChipsTab';
import { StaggeredMenu } from './ui/tabs/StaggeredMenu';
import { SocialLinks } from '@/lib/utils';
import { logos } from '@/lib/logoData';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Events', href: '/events' },
  { label: 'Merch', href: '/merch' },
  { label: 'Contact', href: '#contact' },
  { label: 'Sponsors', href: '/sponsor' },
  { label: 'Team', href: '/team' },
];

const menuItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Events', href: '/events', icon: Calendar },
  { label: 'Merch', href: '/merch', icon: Shirt },
  { label: 'Gallery', href: '/gallery', icon: Image },
  { label: 'Team', href: '/team', icon: Users },
  { label: 'Sponsors', href: '/sponsor', icon: Trophy },
  { label: 'Contact', href: '#contact', icon: Mail },
];

const getSocialIcon = (label: string) => {
  switch (label) {
    case 'Instagram':
      return FaInstagram;
    case 'Facebook':
      return FaFacebook;
    case 'LinkedIn':
      return FaLinkedin;
    case 'WhatsApp':
      return FaWhatsapp;
    default:
      return FaInstagram;
  }
};

const staggeredMenuItems = menuItems.map((item) => ({
  label: item.label,
  ariaLabel: `Navigate to ${item.label}`,
  link: item.href,
}));

const socialLinks = SocialLinks.map((social) => ({
  label: social.label,
  link: social.link,
}));

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect active section based on scroll position
  useEffect(() => {
    if (location.pathname !== '/') {
      // Not on home page, set active based on pathname
      if (location.pathname === '/events') setActiveSection('Events');
      else if (location.pathname === '/merch') setActiveSection('Merch');
      else if (location.pathname === '/sponsor') setActiveSection('Sponsors');
      else if (location.pathname === '/team') setActiveSection('Team');
      return;
    }

    const handleScrollSpy = () => {
      const sections = ['home', 'about', 'events', 'contact', 'sponsors'];
      const scrollPosition = window.scrollY + 150; // offset for navbar height

      // Check sections from bottom to top
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            // Map section id to nav label
            let label = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
            setActiveSection(label);
            return;
          }
        }
      }
      
      // Default to Home if at the very top
      setActiveSection('Home');
    };

    handleScrollSpy(); // Initial check
    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [location.pathname]);

  // Handle hash navigation on route change
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  // Handle menu item clicks from StaggeredMenu for smooth scrolling
  useEffect(() => {
    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a.sm-panel-item');
      if (link && link instanceof HTMLAnchorElement) {
        const href = link.getAttribute('href');
        if (href?.startsWith('#')) {
          e.preventDefault();
          scrollToSection(href);
          
          // Close the StaggeredMenu by clicking the toggle button
          const toggleButton = document.querySelector('.sm-toggle') as HTMLButtonElement;
          if (toggleButton && isOpen) {
            toggleButton.click();
          }
        }
      }
    };

    document.addEventListener('click', handleLinkClick, true);
    return () => document.removeEventListener('click', handleLinkClick, true);
  }, [isOpen]);

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      // Navigate to other pages like /team or /sponsor
      navigate(href);
    } else if (href.startsWith('#')) {
      // Handle hash navigation
      if (location.pathname !== '/') {
        // If not on home page, navigate to home first with hash
        navigate('/' + href);
        // Small delay to let the navigation complete
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Header Background - Only visible on mobile when scrolled */}
      <div className={`lg:hidden fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      } h-20`} />

      {/* Mobile Live Badge - Centered in mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-[45] h-20 flex items-center justify-center pointer-events-none">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/40 bg-red-500/10">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
          </span>
          <span className="font-display text-xs tracking-[0.2em] uppercase text-red-400 font-bold">
            Event is Live
          </span>
        </div>
      </div>
      
      {/* Mobile StaggeredMenu - Only visible on mobile */}
      <div className="lg:hidden fixed inset-0 z-50 pointer-events-none">
        <StaggeredMenu
          position="right"
          colors={['#1a1a2e', '#16213e', '#0f3460']}
          items={staggeredMenuItems}
          socialItems={socialLinks}
          displaySocials={true}
          displayItemNumbering={true}
          logoUrl={logos.sphuran}
          menuButtonColor={scrolled ? '#ffffff' : '#ffffff'}
          openMenuButtonColor="#000000"
          accentColor="#6366f1"
          isFixed={false}
          changeMenuColorOnOpen={true}
          closeOnClickAway={true}
          onMenuOpen={() => setIsOpen(true)}
          onMenuClose={() => setIsOpen(false)}
        />
      </div>

      {/* Desktop Navbar */}
      <nav className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo - Hidden on mobile since StaggeredMenu has its own logo */}
            <a 
              href="#home" 
              className="hidden lg:flex items-center gap-3 hover:opacity-80 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
            >
              <img 
                src={logos.sphuran} 
                alt="SPHURAN 4.0 Festival Logo" 
                className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-lg "
              />
              <div className="hidden sm:block">
                <span className="font-display text-lg md:text-xl font-bold tracking-wider text-foreground">
                  SPHURAN
                </span>
                <span className="font-display text-lg md:text-xl font-bold tracking-wider text-primary ml-1">
                  4.0
                </span>
              </div>
            </a>

            {/* Desktop Navigation with ChipsTab - Hidden for now */}
            {/* <div className="hidden lg:block">
              <ChipsTab
                tabs={navItems}
                activeTab={activeSection}
                onSelect={(tab) => scrollToSection(tab.href ?? '')}
              />
            </div> */}

            {/* Live Badge - Center */}
            {/* <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-red-500/40 bg-red-500/10">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
              </span>
              <span className="font-display text-sm tracking-[0.25em] uppercase text-red-400 font-bold">
                Event is Live
              </span>
            </div> */}

            {/* CTA Button - Hidden on mobile */}
            <div className="hidden lg:flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 px-5 py-2 bg-primary text-white font-display text-xs tracking-widest uppercase hover:bg-primary/90 transition-all rounded-sm">
                    <Menu className="w-4 h-4" />
                    MENU
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-background/95 backdrop-blur-md border-border">
                  <DropdownMenuLabel className="font-display text-xs tracking-wider uppercase text-muted-foreground">
                    Quick Links
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <DropdownMenuItem
                        key={item.label}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.href);
                        }}
                        className="cursor-pointer hover:bg-primary/10 focus:bg-primary/50 hover:text-green-500 focus:text-foreground"
                      >
                        <Icon className="w-4 h-4 mr-3 text-primary" />
                        <span className="font-medium">{item.label}</span>
                      </DropdownMenuItem>
                    );
                  })}
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel className="font-display text-xs tracking-wider uppercase text-muted-foreground">
                    Connect With Us
                  </DropdownMenuLabel>
                  {SocialLinks.map((social) => {
                    const Icon = getSocialIcon(social.label);
                    return (
                      <DropdownMenuItem
                        key={social.label}
                        onClick={() => window.open(social.link, '_blank')}
                        className="cursor-pointer hover:bg-primary/10 focus:bg-primary/50 hover:text-foreground focus:text-foreground"
                      >
                        <Icon className="w-4 h-4 mr-3 text-primary" />
                        <span className="font-medium">{social.label}</span>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
