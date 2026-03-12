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
        title: 'ELECTROQUIP',
        description: 'The stakes are high and the voltage is rising! As part of SPHURAN 4.0, the Electrical Engineering Society presents ELECTROQUIP—the ultimate technical quiz for those who think they know everything about the world of electricity and beyond.',
        icon: Lightbulb,
        category: 'Quiz',
        date: 'March 13, 14, 15',
        time: 'Round 1: Mar 13, 6:00-7:30 PM | Round 2: Mar 14, 1:30-3:00 PM | Round 3: Mar 15, 1:30-3:00 PM',
        prize: 'Massive prize pool of ₹10K up for grabs!',
        venue: 'EE Seminar Hall, 2nd floor, EE Dept.',
        teamSize: '2-3 members',
        rules: [
            'The event will consist of three rounds.',
            'Use of any electronic devices (mobile phones, smart watches, headphones, calculators, or other smart gadgets) is strictly prohibited during the competition.',
            'Rough sheets will be provided during the event.',
            'For the 3rd round, participants must carry their own laptops.',
            'Each team will consist of 3 members, and participants may choose their partners on their own.',
            'The marking scheme for each round will be mentioned in the respective question paper.'
        ],
        eligibility: 'Open to all students',
        contact: 'sphuran.ees@gmail.com',
        registrationLink: 'https://forms.gle/eBUPVxGmr3jp48RS9',
        rulebookLink: 'https://drive.google.com/file/d/1SmHBYZEPObLqhu787okoeqaL58qTjND7/view?usp=drive_link',
        image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772354566/DSC_0712_sxgche.jpg',
    },
    {
        title: 'Illumination',
        description: 'The Electrical Engineering Society is proud to present ILLUMINATION, a premier circuit simulation contest under the banner of SPHURAN 4.0. This is your chance to showcase your mastery over components, signals, and systems in the digital realm',
        icon: Zap,
        category: 'Circuit Simulation',
        date: 'March 14',
        time: 'Round 1: 10:00-11:30 AM | Round 2: 4:30-6:00 PM',
        prize: 'Total prize pool worth ₹6.5K!',
        venue: 'S464, 3rd floor, EE Dept.',
        teamSize: '1-3 members',
        rules: [
            'It will be a team-based event; each team can have a maximum of 3 members, and solo entry is also allowed.',
            'Electronic gadgets and mobile phones are strictly prohibited. Anyone found using them will be disqualified.',
            'Pen and paper will be provided at the venue.',
            'Participants must bring their own calculators.'
        ],
        eligibility: 'Open to all students',
        contact: 'sphuran.ees@gmail.com',
        registrationLink: 'https://forms.gle/EXywr63W2G51euW18',
        rulebookLink: 'https://drive.google.com/file/d/1tbSzOqWy6bfsKrnFKww6Tnrw4s4tvFyh/view?usp=drive_link',
        image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772354442/DSC_0552_gtblih.jpg',
    },
    {
        title: 'Cyberblame',
        description: 'Code, Compile, Conquer. As part of SPHURAN 4.0, the Electrical Engineering Society presents CYBERBLAME—the ultimate coding contest where logic meets speed. It’s time to put your algorithms to the test and prove your prowess at the keyboard.',
        icon: Code,
        category: 'Coding',
        date: 'March 14',
        time: '11:30 AM - 1:30 PM',
        prize: 'Win prizes worth ₹6.5K!',
        venue: 'S470, 3rd floor, EE Dept.',
        teamSize: '1-2 members',
        rules: [
            'Competitive programming contest with multiple rounds and strict time constraints.',
            'Use of standard programming language libraries and personal templates is allowed.',
            'Discussion is allowed only within your registered team (maximum 2 members).',
            'Access to general programming documentation and references is permitted.',
            'Use of LLMs and AI-based tools (such as ChatGPT, Copilot, Gemini, AI Browser, Google AI Mode, etc.) is strictly prohibited.'
        ],
        eligibility: 'Open to all students with programming knowledge',
        contact: 'sphuran.ees@gmail.com',
        registrationLink: 'https://forms.gle/3MZdPAGimgXuWEBa8',
        rulebookLink: 'https://drive.google.com/file/d/1O2hBZI8ju1eRXqU-XDRUGyyeJE3Vqb59/view?usp=drive_link',
        image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1770563231/coding_uffkpq.svg',
    },
    {
        title: 'Adhyayan',
        description: 'In collaboration with the Co-Innovation Centre (CIC), the Electrical Engineering Society presents ADHYAYAN—the flagship case study competition of SPHURAN 4.0. This is more than just a contest; it’s a platform to tackle real-world challenges with deep-tech solutions.',
        icon: BookOpen,
        category: 'Case Study',
        date: 'March 13, 14',
        time: 'Round 1: March 13,solutions to be submitted by 8:00 PM (Online) | Round 2: March 14, 11:00 AM-12:30 PM (EE Seminar hall, 2nd floor, EE Dept.)',
        prize: '₹6.5K + CIC Prototype Funding',
        venue: 'R1: Online Mode | R2: EE Seminar hall, 2nd floor, EE Dept.',
        teamSize: '2-3 members',
        // rules: [
        //     'Analyze real-world tech and business challenges',
        //     'Present innovative solutions',
        //     'Judged on problem-solving and strategic thinking',
        //     'Presentation skills matter'
        // ],
        eligibility: 'Open to all students',
        contact: 'sphuran.ees@gmail.com',
        registrationLink: 'https://forms.gle/oZSa8joMidS44Xah8',
        rulebookLink: 'https://drive.google.com/file/d/1rwZ1qvLSkV9IiUIJ7o0-432pvVGgF7-j/view?usp=drive_link',
        image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772354777/DSC_0396_q2t4y7.jpg',
    },
    {
        title: 'Vidyut Gyan',
        description: 'As a core highlight of SPHURAN 4.0, the Electrical Engineering Society presents VIDYUT GYAAN—the ultimate technical contest designed to test your knowledge, logic, and engineering prowess. It’s time to bridge the gap between theory and brilliance!',
        icon: Brain,
        category: 'Technical Contest',
        date: 'March 14-15',
        time: 'Round 1: Mar 14, 3:00-4:30 PM (EE Seminar Hall, 2nd floor, EE Dept.) | Round 2: Mar 15, 10:00-11:00 AM (Parade Ground)',
        prize: 'Stand a chance to win prizes worth ₹6.5K!',
        venue: 'EE Seminar Hall, 2nd floor, EE Dept, Parade Ground (for final round)',
        teamSize: '2-3 members',
        // rules: [
        //     'Open mic format quiz',
        //     'Tests general and technical knowledge',
        //     'Quick thinking and recall required',
        //     'Multiple exciting rounds'
        // ],
        eligibility: 'Open to all students',
        contact: 'sphuran.ees@gmail.com',
        registrationLink: 'https://forms.gle/F9eSz77msEBircj99',
        rulebookLink: 'https://drive.google.com/file/d/1OSZnw9bYoRUcjqPrW3i-qWP2SgbQ8_ow/view?usp=drive_link',
        image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772354706/DSC_0421_dxy69q.jpg',
    },
    {
        title: 'MOTO GP',
        description: 'As part of SPHURAN 4.0, the Electrical Engineering Society of IIEST Shibpur presents MOTOGP—the ultimate racing contest where speed meets precision. Whether youre a speed demon or a strategic racer, this is the arena to prove your mettle',
        icon: Gamepad2,
        category: 'Gaming',
        date: 'March 13-14',
        time: 'Mar 13: 7:30-9:30 PM | Mar 14: 6:30-8:30 PM',
        prize: 'Win prizes worth ₹4.5K!',
        venue: 'Parade Ground',
        teamSize: '2 players',
        // rules: [
        //     'MotoGP racing game competition',
        //     'Compete in intense racing matches',
        //     'Strategy and reflexes tested',
        //     'Online participation'
        // ],
        eligibility: 'Open to all gaming enthusiasts',
        contact: 'sphuran.ees@gmail.com',
        registrationLink: 'https://forms.gle/BxtBHJbJnQ9KFgPRA',
        rulebookLink: 'https://drive.google.com/file/d/1YI6yoPyJ5EL1OGK_Ad-LKTfcPFSV3RM5/view?usp=drive_link',
        image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1770563231/video_game_n6vibt.svg',
    },
    {
        title: 'FIFA',
        description: 'Get ready to dominate the virtual pitch. As part of SPHURAN 4.0, the Electrical Engineering Society presents the FIFA E-Football Contest! It’s time to show off your skills, perfect your tactics, and claim the title of the ultimate champion',
        icon: Gamepad2,
        category: 'Gaming',
        date: 'March 13-14',
        time: 'Mar 13: 7:30-9:30 PM | Mar 14: 6:30-8:30 PM',
        prize: 'Win prizes worth ₹4.5K!',
        venue: 'Parade Ground',
        teamSize: '1 player',
        eligibility: 'Open to all gaming enthusiasts',
        contact: 'sphuran.ees@gmail.com',
        registrationLink: 'https://forms.gle/tZXSs7U8AReqHXXKA',
        rulebookLink: 'https://drive.google.com/file/d/1nQyLtT-GhZ3-q5i3e-_UMbqzeE8N0s4D/view?usp=drive_link',
        image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1770563231/video_game_n6vibt.svg',
    },
    {
        title: 'T-Shirt Distribution Drive',
        description: 'Join us in our initiative to share and support. If you have gently used T-shirts or clothing to donate, bring them to the drive and help us spread kindness across the campus and beyond.',
        icon: Heart,
        category: 'Social Initiative',
        date: 'March 15',
        time: '11:30 AM - 1:00 PM',
        prize: '-',
        venue: 'Parade Ground',
        teamSize: '-',
        eligibility: 'Open to all',
        contact: 'sphuran.ees@gmail.com',
        image: IMAGES.events.icche,
        isSpecialEvent: true,
    },
    {
        title: 'Cultural Event',
        description: 'Unleash the Rhythm at the SPHURAN 4.0 Cultural Event! After the high-voltage technical battles, it’s time to switch gears and celebrate the vibrant spirit of IIEST! The Electrical Engineering Society presents the Cultural Event—the grand finale to an incredible fest. Come witness a night of music, dance, and artistic brilliance under the stars.',
        icon: Music,
        category: 'Cultural',
        date: 'March 15',
        time: '6:00 - 8:30 PM',
        prize: '-',
        venue: 'Parade Ground',
        teamSize: 'Performance Team',
        eligibility: '-',
        contact: 'sphuran.ees@gmail.com',
        image: IMAGES.events.rxb,
        isSpecialEvent: true,
    },
];

export const categories = ['All', 'Quiz', 'Coding', 'Circuit Simulation', 'Case Study', 'Gaming', 'Cultural'];
