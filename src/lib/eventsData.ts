import { Brain, Gamepad2, Lightbulb, Code, BookOpen, Users, Heart, Music, Zap } from 'lucide-react';
import { IMAGES } from './assets';

export interface Event {
    title: string;
    description: string;
    icon: any;
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

export const events: Event[] = [
    {
        title: 'Electroquip',
        description: 'An industry-collaborated quiz that tests core Electrical Engineering concepts like machines, power systems, and control systems, offering prizes and recognition to top performers.',
        icon: Lightbulb,
        category: 'Quiz',
        date: 'March 13-15',
        time: 'Round 1: Mar 13, 6:00-7:30 PM | Round 2: Mar 14, 1:30-3:00 PM | Round 3: Mar 15, 11:00 AM-12:30 PM',
        prize: 'TBA',
        venue: 'Seminar Hall, S470',
        teamSize: '2-3 members',
        rules: [
            'Questions on core EE concepts: machines, power systems, control systems',
            'Multiple rounds with increasing difficulty',
            'Industry collaboration for question setting',
            'Top performers receive prizes and recognition'
        ],
        eligibility: 'Open to all engineering students',
        contact: 'sphuran.ees@gmail.com',
        image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772354566/DSC_0712_sxgche.jpg',
    },
    {
        title: 'Illumination',
        description: 'A circuit design and simulation event that challenges participants to create efficient and innovative electronic solutions. Includes both simulation and hands-on hardware rounds to bring designs to life.',
        icon: Zap,
        category: 'Circuit Simulation',
        date: 'March 14',
        time: 'Round 1: 10:00-11:30 AM | Round 2: 4:30-6:00 PM',
        prize: 'TBA',
        venue: 'S464',
        teamSize: '1-3 members',
        rules: [
            'Design efficient and innovative electronic circuits',
            'Simulation round followed by hardware implementation',
            'Bring designs to life with hands-on hardware',
            'Judged on efficiency, innovation, and functionality'
        ],
        eligibility: 'Open to all ECE, EE students',
        contact: 'sphuran.ees@gmail.com',
        image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772354442/DSC_0552_gtblih.jpg',
    },
    {
        title: 'Cyberblame',
        description: 'A competitive coding contest testing problem solving skills and programming expertise. A platform for coders to innovate, compete, and push their limits.',
        icon: Code,
        category: 'Coding',
        date: 'March 14',
        time: '11:30 AM - 12:30 PM',
        prize: 'TBA',
        venue: 'S464',
        teamSize: '1-2 members',
        rules: [
            'Competitive programming problems',
            'Tests problem-solving and coding expertise',
            'Multiple rounds with time constraints',
            'Platform to innovate and push limits'
        ],
        eligibility: 'Open to all students with programming knowledge',
        contact: 'sphuran.ees@gmail.com',
        image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1770563231/coding_uffkpq.svg',
    },
    {
        title: 'Adhyayan',
        description: 'A case study competition focused on analyzing real world tech and business challenges. Test your problem solving, innovation, and strategic thinking skills.',
        icon: BookOpen,
        category: 'Case Study',
        date: 'March 13-14',
        time: 'Round 1: Mar 13, 7:30-8:00 PM (Online) | Round 2: Mar 14, 11:00 AM-12:30 PM',
        prize: 'TBA',
        venue: 'Online, S470',
        teamSize: '2-4 members',
        rules: [
            'Analyze real-world tech and business challenges',
            'Present innovative solutions',
            'Judged on problem-solving and strategic thinking',
            'Presentation skills matter'
        ],
        eligibility: 'Open to all college students',
        contact: 'sphuran.ees@gmail.com',
        image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772354777/DSC_0396_q2t4y7.jpg',
    },
    {
        title: 'Vidyut Gyan',
        description: 'An open mic quiz celebrating intellect, patience, and strategic brilliance. This competition brings together sharp minds to battle, where every answer counts and knowledge defines victory.',
        icon: Brain,
        category: 'Open Mic Quiz',
        date: 'March 14-15',
        time: 'Round 1: Mar 14, 3:00-4:30 PM | Round 2: Mar 15, 10:00-11:00 AM',
        prize: 'TBA',
        venue: 'Seminar Hall',
        teamSize: '2-3 members',
        rules: [
            'Open mic format quiz',
            'Tests general and technical knowledge',
            'Quick thinking and recall required',
            'Multiple exciting rounds'
        ],
        eligibility: 'Open to all students',
        contact: 'sphuran.ees@gmail.com',
        image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772354706/DSC_0421_dxy69q.jpg',
    },
    {
        title: 'Online Gaming',
        description: 'Intense gaming events featuring MotoGP and FIFA. Players compete in matches showcasing strategy, reflexes, and teamwork. A perfect platform to test your gaming skills and gain victory.',
        icon: Gamepad2,
        category: 'Gaming',
        date: 'March 13-14',
        time: 'Mar 13: 7:30-9:30 PM | Mar 14: 6:30-8:30 PM',
        prize: 'TBA',
        venue: 'Parade Ground',
        teamSize: '1-2 players',
        rules: [
            'Games: MotoGP and FIFA',
            'Compete in intense matches',
            'Strategy, reflexes, and teamwork tested',
            'Online participation'
        ],
        eligibility: 'Open to all gaming enthusiasts',
        contact: 'sphuran.ees@gmail.com',
        image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1770563231/video_game_n6vibt.svg',
    },
    {
        title: 'Alumni Convention',
        description: 'A special gathering to reconnect alumni, share experiences, and celebrate a journey of innovation and learning—strengthening alumni-student bonds through inspiration, mentorship, and growth within the EES community.',
        icon: Users,
        category: 'Networking',
        date: 'March 15',
        time: '1:30 - 3:30 PM',
        prize: '-',
        venue: 'I-Hall',
        teamSize: 'Open',
        rules: [
            'Reconnect with alumni and celebrate shared experiences',
            'Share insights on innovation and learning journeys',
            'Mentorship opportunities for current students',
            'Strengthen alumni-student bonds within the EES community'
        ],
        eligibility: 'EES Alumni and current students',
        contact: 'sphuran.ees@gmail.com',
        image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772354644/DSC_0952_twpcbc.jpg',
        isSpecialEvent: true,
    },
    {
        title: 'SPHURAN × ICCHE',
        description: 'The T-Shirt Distribution Drive is a social initiative aimed at promoting community welfare and collective responsibility. Through this drive, essential clothing is distributed to individuals, reinforcing the values of compassion, inclusivity, and social commitment while encouraging active participation in community service.',
        icon: Heart,
        category: 'Social Initiative',
        date: 'March 15',
        time: '1:30 - 3:30 PM',
        prize: '-',
        venue: 'I-Hall',
        teamSize: 'Volunteers',
        rules: [
            'Social initiative promoting community welfare',
            'T-shirt distribution to individuals in need',
            'Reinforces values of compassion and inclusivity',
            'Encourages active participation in community service'
        ],
        eligibility: 'Open to all volunteers',
        contact: 'sphuran.ees@gmail.com',
        image: IMAGES.events.icche,
        isSpecialEvent: true,
    },
    {
        title: 'SPHURAN × RxB Flashmob',
        description: 'A curated dance performance highlighting rhythm, expression, and artistic excellence. A celebration of movement and creativity.',
        icon: Music,
        category: 'Cultural',
        date: 'March 15',
        time: '4:30 - 6:00 PM',
        prize: '-',
        venue: 'Netaji Bhavan',
        teamSize: 'Performance Team',
        rules: [
            'Curated dance performance showcasing talent',
            'Highlights rhythm, expression, and artistic excellence',
            'Celebration of movement and creativity',
            'Collaboration with RxB dance collective'
        ],
        eligibility: 'Selected performers',
        contact: 'sphuran.ees@gmail.com',
        image: IMAGES.events.rxb,
        isSpecialEvent: true,
    },
];

export const categories = ['All', 'Quiz', 'Coding', 'Circuit Simulation', 'Case Study', 'Gaming', 'Cultural'];
