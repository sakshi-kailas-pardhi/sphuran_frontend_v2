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
        category: 'Technical Quiz',
        date: 'March 13, 14, 15',
        time: 'Round 1: Mar 13, 6:00-7:30 PM | Round 2: Mar 14, 1:30-3:00 PM | Round 3: Mar 15, 11:00 AM-12:30 PM',
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
        category: 'Coding Contest',
        date: 'March 14',
        time: '11:30 AM - 12:30 PM',
        prize: 'Win prizes worth ₹6.5K!',
        venue: 'S464, 3rd floor, EE Dept.',
        teamSize: '1-2 members',
        // rules: [
        //     'Competitive programming problems',
        //     'Tests problem-solving and coding expertise',
        //     'Multiple rounds with time constraints',
        //     'Platform to innovate and push limits'
        // ],
        eligibility: 'Open to all students with programming knowledge',
        contact: 'sphuran.ees@gmail.com',
        registrationLink: 'https://forms.gle/3MZdPAGimgXuWEBa8',
        image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1770563231/coding_uffkpq.svg',
    },
    {
        title: 'Adhyayan',
        description: 'In collaboration with the Co-Innovation Centre (CIC), the Electrical Engineering Society presents ADHYAYAN—the flagship case study competition of SPHURAN 4.0. This is more than just a contest; it’s a platform to tackle real-world challenges with deep-tech solutions.',
        icon: BookOpen,
        category: 'Case Study',
        date: 'March 13, 14, 15',
        time: 'Round 1: Mar 13, 7:30-8:00 PM (Online) | Round 2: Mar 14, 11:00 AM-12:30 PM (S470, 3rd floor, EE Dept.)',
        prize: '₹6.5K + CIC Prototype Funding',
        venue: 'R1: EE Seminar Hall, 2nd floor, EE Dept. | R2: S470, 3rd floor, EE Dept.',
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
        time: 'Round 1: Mar 14, 3:00-4:30 PM (EE Seminar Hall, 2nd floor, EE Dept.) | Round 2: Mar 15, 10:00-11:00 AM (EE Seminar Hall, 2nd floor, EE Dept.)',
        prize: 'Stand a chance to win prizes worth ₹6.5K!',
        venue: 'EE Seminar Hall, 2nd floor, EE Dept.',
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
        category: 'Racing Contest',
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
        category: 'E-Football Contest',
        date: 'March 13-14',
        time: 'Mar 13: 7:30-9:30 PM | Mar 14: 6:30-8:30 PM',
        prize: 'Win prizes worth ₹4.5K!',
        venue: 'Parade Ground',
        teamSize: '1-2 players',
        rules: [
            'FIFA football game competition',
            'Compete in intense matches',
            'Strategy and teamwork tested',
            'Online participation'
        ],
        eligibility: 'Open to all gaming enthusiasts',
        contact: 'sphuran.ees@gmail.com',
        registrationLink: 'https://forms.gle/tZXSs7U8AReqHXXKA',
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
