export interface ScheduleEvent {
  time: string;
  title: string;
  venue: string;
}

export interface ScheduleDay {
  day: string;
  date: string;
  events: ScheduleEvent[];
}

export const scheduleData: ScheduleDay[] = [
  {
    day: 'Day 1',
    date: 'March 13, 2026',
    events: [
      { time: '4:00 PM – 6:00 PM', title: 'Inauguration', venue: 'I-Hall' },
      { time: '6:00 PM – 7:30 PM', title: 'Electroquip (Round 1)', venue: 'EE Seminar Hall, 2nd floor, EE Dept.' },
      { time: '7:30 PM – 9:30 PM', title: 'Online Gaming', venue: 'Parade Ground' },
      { time: '7:30 PM – 8:00 PM', title: 'Adhyayan (Round 1)', venue: 'Online' },
    ],
  },
  {
    day: 'Day 2',
    date: 'March 14, 2026',
    events: [
      { time: '10:00 AM – 11:30 AM', title: 'Illumination (Round 1)', venue: 'S464, 3rd floor, EE Dept.' },
      { time: '11:00 AM – 12:30 PM', title: 'Adhyayan (Round 2)', venue: 'S470, 3rd floor, EE Dept.' },
      { time: '11:30 AM – 12:30 PM', title: 'Cyberblame', venue: 'S464, 3rd floor, EE Dept.' },
      { time: '1:30 PM – 3:00 PM', title: 'Electroquip (Round 2)', venue: 'EE Seminar Hall, 2nd floor, EE Dept.' },
      { time: '3:00 PM – 4:30 PM', title: 'Vidyut Gyan (Round 1)', venue: 'EE Seminar Hall, 2nd floor, EE Dept.' },
      { time: '4:30 PM – 6:00 PM', title: 'Illumination (Round 2)', venue: 'S464, 3rd floor, EE Dept.' },
      { time: '6:30 PM – 8:30 PM', title: 'Online Gaming', venue: 'Parade Ground' },
    ],
  },
  {
    day: 'Day 3',
    date: 'March 15, 2026',
    events: [
      { time: '10:00 AM – 11:00 AM', title: 'Vidyut Gyan (Round 2)', venue: 'EE Seminar Hall, 2nd floor, EE Dept.' },
      { time: '11:00 AM – 12:30 PM', title: 'Electroquip (Round 3)', venue: 'S470, 3rd floor, EE Dept.' },
      { time: '1:30 PM – 3:30 PM', title: 'Alumni Meet / T-shirt Distribution', venue: 'I-Hall' },
      { time: '3:30 PM – 4:30 PM', title: 'Closing Ceremony', venue: 'EE Seminar Hall, 2nd floor, EE Dept.' },
      { time: '4:30 PM – 6:00 PM', title: 'Flashmob', venue: 'Netaji Bhavan' },
    ],
  },
];
