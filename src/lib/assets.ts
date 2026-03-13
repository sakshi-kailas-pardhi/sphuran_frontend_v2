/**
 * Centralized Image Assets
 * All image URLs for the application in a single location
 */

const CLOUDINARY_BASE = 'https://res.cloudinary.com/dwr8472qb/image/upload';

export const IMAGES = {
  // Logos
  logos: {
    sphuran: `${CLOUDINARY_BASE}/v1770536102/sphuran-logo_a6mzzi.png`,
    ees: `${CLOUDINARY_BASE}/v1770536100/ees-logo_vjjwxn.png`,
  },

  // Event Images
  events: {
    alumniMeeting: `${CLOUDINARY_BASE}/v1770546216/undraw_meeting_dunc_dctfbx.svg`,
    icche: `${CLOUDINARY_BASE}/v1770546806/sphuran-x-icche_gkfhoq.jpg`,
    rxb: `${CLOUDINARY_BASE}/v1770546105/sphuran-x-rxb_vhuylt.jpg`,
  },

  // Merchandise Images
  merchandise: {
    tshirtFront: `${CLOUDINARY_BASE}/v1772645290/sphuran_tshirt_front_1440-removebg-preview_sa1xyg.png`,
    tshirtBack: `${CLOUDINARY_BASE}/v1772645290/sphuran_tshirt_back_1440-removebg-preview_alk4sq.png`,
  },

  // Sponsor Logos
  sponsors: {
    zomato: {
      src: `${CLOUDINARY_BASE}/v1770536010/Zomato-Logo_qcolki.png`,
      alt: "Zomato - Food Delivery Partner of SPHURAN",
      href: "https://www.zomato.com"
    },
    wowMomo: {
      src: `${CLOUDINARY_BASE}/v1770536010/Wow_Momo_Logo_bt8zdk.png`,
      alt: "Wow! Momo - Food Partner SPHURAN 4.0",
      href: "https://www.wowmomofoods.in"
    },
    vikramSolar: {
      src: `${CLOUDINARY_BASE}/v1770536009/Vikram_Solar_Logo_rcbs4y.png`,
      alt: "Vikram Solar - Renewable Energy Sponsor SPHURAN",
      href: "https://www.vikramsolar.com"
    },
    tataPower: {
      src: `${CLOUDINARY_BASE}/v1770536009/Tata_Power_logo_mnd5ud.png`,
      alt: "Tata Power - Energy Sector Partner SPHURAN 4.0",
      href: "https://www.tatapower.com"
    },
    tcs: {
      src: `${CLOUDINARY_BASE}/v1770536008/Tata_Consultancy_Services_old_logo_qrbffk.png`,
      alt: "Tata Consultancy Services (TCS) - Technology Partner SPHURAN",
      href: "https://www.tcs.com"
    },
    reacro: {
      src: `${CLOUDINARY_BASE}/v1770536007/Reacro_Logo_zb1z1j.png`,
      alt: "Reacro - Innovation Partner SPHURAN 4.0",
      href: "https://www.reacro.com"
    },
    pidilite: {
      src: `${CLOUDINARY_BASE}/v1770536007/Pidilite_logo_wsr0gf.png`,
      alt: "Pidilite Industries - Corporate Sponsor SPHURAN",
      href: "https://www.pidilite.com"
    },
    gateforum: {
      src: `${CLOUDINARY_BASE}/v1770536007/Gateforum_Logo_qi6qug.png`,
      alt: "GateForum - Education Partner SPHURAN 4.0",
      href: "https://www.gateforum.com"
    },
    nikon: {
      src: `${CLOUDINARY_BASE}/v1770536007/Nikon_Logo.svg_wnndep.png`,
      alt: "Nikon - Imaging Technology Partner SPHURAN",
      href: "https://www.nikon.com"
    },
    glocalHealthcare: {
      src: `${CLOUDINARY_BASE}/v1770536006/Glocal_Healthcare_Logo_veqjqh.png`,
      alt: "Glocal Healthcare - Healthcare Partner SPHURAN 4.0",
      href: "https://www.glocalhealthcare.com"
    },
    madeEasy: {
      src: `${CLOUDINARY_BASE}/v1770536006/MadeEasy_Logo_fxttls.png`,
      alt: "Made Easy - Educational Partner SPHURAN Technical Festival",
      href: "https://www.madeeasy.in"
    },
    edugraph: {
      src: `${CLOUDINARY_BASE}/v1770536006/Edugraph_logo_su10en.png`,
      alt: "Edugraph - Skill Development Partner SPHURAN 4.0",
      href: "https://www.edugraph.in"
    },
    cesc: {
      src: `${CLOUDINARY_BASE}/v1770536006/CESC_Logo_ddmhsa.png`,
      alt: "CESC Limited - Power Utility Partner SPHURAN",
      href: "https://www.cesc.co.in"
    },
    bengalBeverages: {
      src: `${CLOUDINARY_BASE}/v1770536006/Bengal_Beverages_la4ir2.png`,
      alt: "Bengal Beverages - Beverage Partner SPHURAN 4.0",
      href: "https://www.bengalbeverages.com"
    },
  },
};

// Gallery Images
export const GALLERY_IMAGES = [
  {
    src: `https://res.cloudinary.com/dwr8472qb/image/upload/v1772354028/DSC_0129_pbiqpa.jpg`,
    alt: 'Alumni Meeting Interaction',
    title: 'Alumni Meet',
    description: 'Connecting generations of electrical engineers'
  },
  // Add more gallery images here
  {
    src: `https://res.cloudinary.com/dwr8472qb/image/upload/v1772354571/DSC_0789_n1wfo4.jpg`,
    alt: 'Technical Workshop Session',
    title: 'Workshop Moments',
    description: 'Hands-on learning and skill development sessions'
  },
  {
    src: `https://res.cloudinary.com/dwr8472qb/image/upload/v1772354086/DSC_0031_xp4yqf.jpg`,
    alt: 'Opening Ceremony',
    title: 'Grand Opening',
    description: 'The spectacular inauguration of SPHURAN 2.0'
  },
  {
    src: `https://res.cloudinary.com/dwr8472qb/image/upload/v1772354640/DSC_0924_pouhwk.jpg`,
    alt: 'Guest Lecture',
    title: 'Guest Speakers',
    description: 'Industry experts sharing their knowledge and experience'
  },
  {
    src: `https://res.cloudinary.com/dwr8472qb/image/upload/v1772354315/DSC_0481_tkoyap.jpg`,
    alt: 'Team Activities',
    title: 'Team Building',
    description: 'Collaborative activities fostering teamwork and creativity'
  },
  {
    src: `https://res.cloudinary.com/dwr8472qb/image/upload/v1772354592/DSC_0838_nk8aeo.jpg`,
    alt: 'Prize Distribution Ceremony',
    title: 'Award Ceremony',
    description: 'Celebrating the achievements of talented participants'
  },
  {
    src: `https://res.cloudinary.com/dwr8472qb/image/upload/v1772354552/DSC_0572_dklipe.jpg`,
    alt: 'SPHURAN 2.0 Banner',
    title: 'SPHURAN 2.0 Memories',
    description: 'A glimpse into the past with our previous edition’s highlights'
  },
  {
    src: `https://res.cloudinary.com/dwr8472qb/image/upload/v1772354566/DSC_0712_sxgche.jpg`,
    alt: 'ELECTROQUIP',
    title: 'ELECTROQUIP | SPHURAN 2.0',
    description: 'Showcasing the best of technical exhibitions and projects'
  },
  {
    src: `https://res.cloudinary.com/dwr8472qb/image/upload/v1772354020/DSC_0003_nj8sl1.jpg`,
    alt: 'College Entrance Banner',
    title: 'Welcome Banner',
    description: 'SPHURAN banner installed at the college entrance'
  },
  {
    src: `https://res.cloudinary.com/dwr8472qb/image/upload/v1772354422/DSC_0233_lovexh.jpg`,
    alt: 'Students participating in Electroquip quiz',
    title: 'Electroquip Quiz',
    description: 'Students giving the quiz during the Electroquip event'
  },
  {
    src: `https://res.cloudinary.com/dwr8472qb/image/upload/v1772354644/DSC_0952_twpcbc.jpg`,
    alt: 'Group photo after guest lecture',
    title: 'Guest Lecture',
    description: 'A group photo after guest lecture session'
  },
  {
    src: `https://res.cloudinary.com/dwr8472qb/image/upload/v1772354274/DSC_0468_ig7v90.jpg`,
    alt: 'Vidyut Gyan event organizers',
    title: 'Vidyut Gyan Team',
    description: 'Group photo of team organizers of Vidyut Gyan event'
  },
  {
    src: `https://res.cloudinary.com/dwr8472qb/image/upload/v1772354777/DSC_0396_q2t4y7.jpg`,
    alt: 'Participants thinking during quiz',
    title: 'Quiz Time',
    description: 'Deep thinking on quizzes'
  },
  {
    src: `https://res.cloudinary.com/dwr8472qb/image/upload/v1772353838/DSC_0248_lhhiwl.jpg`,
    alt: 'Shatranj chess event participants',
    title: 'Shatranj',
    description: 'Participants of Shatranj event (chess game)'
  },
  {
    src: `https://res.cloudinary.com/dwr8472qb/image/upload/v1772353787/DSC_0056_dmtg3d.jpg`,
    alt: 'SPHURAN medals',
    title: 'Medals',
    description: 'Medals awarded to winners'
  },
  {
    src: `https://res.cloudinary.com/dwr8472qb/image/upload/v1772354639/WhatsApp_Image_2023-04-12_at_19.00.47_aspmcf.jpg`,
    alt: 'Team group photo after fest',
    title: 'Team SPHURAN',
    description: 'Group photo after successful fest organization'
  }
];

// Helper to get all sponsors as an array
export const getAllSponsors = () => {
  return Object.values(IMAGES.sponsors);
};
