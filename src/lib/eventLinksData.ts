export interface EventExternalLinks {
  registrationLink?: string;
  rulebookLink?: string;
}

export const eventLinksByTitle: Record<string, EventExternalLinks> = {
  'ELECTROQUIP': {
    registrationLink: 'https://forms.gle/eBUPVxGmr3jp48RS9',
    rulebookLink: 'https://drive.google.com/file/d/1SmHBYZEPObLqhu787okoeqaL58qTjND7/view?usp=drive_link',
  },
  'Adhyayan': {
    registrationLink: 'https://forms.gle/oZSa8joMidS44Xah8',
    rulebookLink: 'https://drive.google.com/file/d/1rwZ1qvLSkV9IiUIJ7o0-432pvVGgF7-j/view?usp=drive_link',
  },
  'Illumination': {
    registrationLink: 'https://forms.gle/EXywr63W2G51euW18',
    rulebookLink: 'https://drive.google.com/file/d/1tbSzOqWy6bfsKrnFKww6Tnrw4s4tvFyh/view?usp=drive_link',
  },
  'Cyberblame': {
    registrationLink: 'https://forms.gle/3MZdPAGimgXuWEBa8',
    rulebookLink: 'https://drive.google.com/file/d/119qhZKlm9vkdVCbOPx-hdO7o4kbYYunZ/view?usp=drive_link',
  },
  'MOTO GP': {
    registrationLink: 'https://forms.gle/BxtBHJbJnQ9KFgPRA',
    rulebookLink: 'https://drive.google.com/file/d/1YI6yoPyJ5EL1OGK_Ad-LKTfcPFSV3RM5/view?usp=drive_link',
  },
  'FIFA': {
    registrationLink: 'https://forms.gle/tZXSs7U8AReqHXXKA',
    rulebookLink: 'https://drive.google.com/file/d/1nQyLtT-GhZ3-q5i3e-_UMbqzeE8N0s4D/view?usp=drive_link',
  },
  'Vidyut Gyan': {
    registrationLink: 'https://forms.gle/F9eSz77msEBircj99',
    rulebookLink: 'https://drive.google.com/file/d/1OSZnw9bYoRUcjqPrW3i-qWP2SgbQ8_ow/view?usp=drive_link',
  },
};

export const attachEventLinks = <T extends { title: string }>(event: T): T & EventExternalLinks => ({
  ...event,
  ...eventLinksByTitle[event.title],
});