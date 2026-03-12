export interface TeamMember {
  name: string;
  role?: string;
  year?: number;
  image?: string;
}

export interface Department {
  head: TeamMember[];
  associateHead: TeamMember[];
  associates: TeamMember[];
}

export interface TeamData {
  faculty: TeamMember[];
  secretary: TeamMember[];
  mainCoordinators: TeamMember[];
  jointCoordinators: TeamMember[];
  financeAudit: Department;
  design: Department;
  sponsorship: Department;
  publicity: Department;
  eventManagement: Department;
  website: Department;
  travelLogistics: Department;
  volunteers: TeamMember[];
}

export const teamData: TeamData = {
  faculty: [
    {
      name: 'Prof. Bhaskaran Barman',
      role: 'Professor-in-Charge, Electrical Engineers\' Society',
      image: 'https://www.iiests.ac.in/assets/images/faculty/90.jpg'
    },
    {
      name: 'Prof. Anirudh Nath',
      role: 'Convenor, SPHURAN 4.0',
      image: 'https://www.iiests.ac.in/assets/images/faculty/653f41610c27fani1%20(1).jpg'
    },
    {
      name: 'Prof. Syed Abdullah Qasim',
      role: 'Co-Convenor, SPHURAN 4.0',
      image: 'https://www.iiests.ac.in/assets/images/faculty/64e65300f0cd1db043e76-30a2-45c9-ade7-4ac7150d1888.jpg'
    }
  ],
  secretary: [
    { name: 'Ruman Paul', year: 4, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772428153/2022EEB002_RUMAN_PAUL_zvilay.jpg' }
  ],
  mainCoordinators: [
    { name: 'Devendra Prasad', year: 4, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382526/IMG-20241102-WA0004_3_-_2022EEB059_2022EEB059_DEVENDRA_lketvf.jpg' },
    { name: 'Deepak Garg', year: 4, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382451/IMG_20260117_182219151_HDR_AE_1_-_2022EEB082_2022EEB082_DEEPAK_uxfwy2.jpg' },
    { name: 'Ambhrin Roy', year: 4, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1773340316/AMBHRIN_ROY_wtz4u5.jpg' }
  ],
  jointCoordinators: [
    { name: 'Aman Kumar Mehta', year: 3, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382461/IMG-20241022-WA0063_-_2023EEB069_AMAN_KUMAR_ffubww.jpg' },
    { name: 'Sandip Kumar Das', year: 3, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1773307428/2023EEB030_SANDIP_KD_fuxset.jpg' }
  ],
  financeAudit: {
    head: [{ name: 'Niloy Mondal', year: 4 }],
    associateHead: [{ name: 'Suryansh Singh', year: 3 }],
    associates: [{ name: 'Aditya Kumar Vats', year: 2, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382340/IMG20251021171103_-_2024EEB086_ADITYA_KUMAR_VATS_s218jk.jpg' }]
  },
  design: {
    head: [
      {
        name: 'Saatwata Sen',
        year: 4,
        image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382281/1000466260-03_-_2022EEB107_SAATWATA_SEN_prgfm4.jpg'
      }
    ],
    associateHead: [
      { name: 'Sumit Kumar', year: 3, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382382/IMG-20260121-WA0000_-_2023EEB110_SUMIT_KUMAR_idxzd0.jpg' },
      { name: 'Anshita', year: 3 },
      { name: 'Aarush Roy', year: 3, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382433/ee_-_2023EEB028_AARUSH_ROY_vca5ct.png' }
    ],
    associates: [
      { name: 'Jannat Parveen', year: 2, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382578/IMG_20260301_112740_-_2024EEB019_JANNAT_PARVIN_blpnbb.jpg' },
      { name: 'Daksha Raj', year: 2, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382438/IMG_6297_-_2024EEB014_DAKSHA_RAJ_cqbich.jpg' },
      { name: 'Tanushree Gupta', year: 2, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382541/IMG-20260116-WA0031_-_2024EEB107_TANUSHREE_GUPTA_lcnqz2.jpg' },
      { name: 'Shreya Goswami', year: 2, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382357/IMG-20241129-WA0225_-_2024EEB034_SHREYA_GOSWAMI_o1r7jq.jpg' }
    ]
  },
  sponsorship: {
    head: [
      { name: 'Rudra Pratap Singh', year: 4 },
      { name: 'Esha Kumari', year: 4, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1773124917/IMG_20260123_150700_-_2022EEB064_2022EEB064_ESHA_cuzjgf.jpg' },
      { name: 'Hrishit Das', year: 4 }
    ],
    associateHead: [
      { name: 'Amit Kiran Das', year: 3, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382416/4ad27705-f999-4fc5-838d-9e4f24fbef1f_-_2023EEB015_AMIT_KIRAN_DAS_pybbqi.jpg' },
      { name: 'Keshav Bhagat', year: 3, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382599/IMG_1554_-_2023EEB108_KESHAV_BHAGAT_d6fwwp.jpg' },
      { name: 'Banoth Amitha', year: 3 },
      { name: 'Shreya Sen', year: 3 }
    ],
    associates: [
      { name: 'Ahana pal', year: 2 },
      { name: 'Bikramjeet', year: 2, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382513/IMG_20260301_073929_-_2024EEB040_BIKRAMJEET_DASGUPTA_gi85xs.jpg' },
      { name: 'Joyon rudra pal', year: 2, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382483/IMG_20251204_205721_-_2024EEB029_JOYON_RUDRA_PAL_mqtxxu.jpg' },
      { name: 'Alok Kumar', year: 2, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382523/IMG_20260228_203940_-_2024EEB067_ALOK_KUMAR_u33gji.jpg' },
      { name: 'Ayisa Nithara S G', year: 2, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772526842/IMG_9620_-_2024EEB016_AYISA_NITHARA_S_G_kjvozo.jpg' }
    ]
  },
  publicity: {
    head: [
      { name: 'Ishika Singh', year: 4, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382575/IMG-20260216-WA0097_-_2022EEB018_2022EEB018_ISHIKA_m1fknj.jpg' },
      { name: 'Abhay Raj Singh', year: 4 }
    ],
    associateHead: [
      { name: 'Dhruv Kumar', year: 3 },
      { name: 'Lonisha Rudra', year: 3 },
      { name: 'Adarsh Raj', year: 3 }
    ],
    associates: [
      { name: 'Shruti Tudu', year: 2 },
      { name: 'Biswaroop Sinha', year: 2 },
      { name: 'Koutilya Shashwat', year: 2 }
    ]
  },
  eventManagement: {
    head: [
      { name: 'Anay Verma', year: 4, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382378/IMG-20251213-WA0017_-_2022EEB083_2022EEB083_ANAY_kexe61.jpg' },
      { name: 'Shekhar Pal', year: 4, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772526925/IMG_20260118_220428_-_2022EEB084_2022EEB084_SHEKHAR_lfle5a.jpg' }
    ],
    associateHead: [
      { name: 'Kilari Dheeraj Kumar', year: 3 },
      { name: 'Bithika Mondal', year: 3, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382561/IMG-20260301-WA0058_-_2023EEB013_BITHIKA_MANDAL_axmpou.jpg' },
      { name: 'Mahesh Purohit', year: 3, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772526927/IMG_20260302_010042_-_2023EEB092_MAHESH_PUROHIT_jueu1r.jpg' },
      { name: 'Preeti Bhargava', year: 3, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382426/1710267279175_-_2023EEB051_PREETI_BHARGAVA_l1klgb.jpg' }
    ],
    associates: [
      { name: 'Debangik Biswas', year: 2, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382412/WhatsApp_Image_2026-03-01_at_4.37.20_PM_-_2024EEB113_DEBANGIK_BISWAS_fc5vit.jpg' },
      { name: 'Ahmad Raza Beg', year: 2 },
      { name: 'Kunal Bhaskar', year: 2 },
      { name: 'Ravi Ranjan Patel', year: 2, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382434/ravi_-_2024EEB105_RAVI_RANJAN_PATEL_bhfgrx.jpg' },
      { name: 'Samrat Das', year: 2, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382567/IMG_20251001_221535402_HDR_PORTRAIT_1_-_2024EEB010_SAMRAT_DAS_e1wupx.jpg' },
      { name: 'Prajna Dey', year: 2, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382282/IMG_20260111_132822_-_2024EEB051_PRAJNA_DEY_t13uij.jpg' }
    ]
  },
  website: {
    head: [{ name: 'Sakshi Kailas Pardhi', year: 4, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772610199/IMG20260207123249_-_2022EEB085_2022EEB085_SAKSHI_chsccv.jpg' }],
    associateHead: [{ name: 'Aminul Islam', year: 3, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772428315/2023EEB005_AMINUL_ISLAM_suhoze.jpg' }],
    associates: [
      { name: 'Shivam Kumar', year: 2 },
      { name: 'Vijay Nitin Deshmukh', year: 2, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382450/IMG_20250930_155205_545_-_2024EEB085_VIJAY_NITIN_DESHMUKH_tpho0n.webp' }
    ]
  },
  travelLogistics: {
    head: [
      { name: 'Sandeep Raj', year: 4, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382591/IMG_20250214_195002841_-_2022EEB028_2022EEB028_SANDEEP_haylgx.jpg' },
      { name: 'Akash kumar Bharti', year: 4 }
    ],
    associateHead: [
      { name: 'Ashutosh Kumar', year: 3 },
      { name: 'Gugulothu Krupakaran', year: 3 },
      { name: 'Harsh Kamal', year: 3, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382483/IMG_20260115_102728_493_-_2023EEB087_HARSH_KAMAL_woz0i0.webp' },
      { name: 'Piyush Raj', year: 3 }
    ],
    associates: [
      { name: 'Bisani Love Vijay', year: 2 },
      { name: 'Gaurav Sau', year: 2, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382384/IMG_20260301_162903_-_2024EEB071_GAURAV_SAU_ma44iv.jpg' },
      { name: 'Shivam Yadav', year: 2, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382441/IMG_20250618_192736_631_-_2024EEB039_SHIVAM_YADAV_gwuewt.webp' },
      { name: 'Kurada Venkata Sai Purnesh', year: 2, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382386/IMG-20260125-WA0030_2_-_2024EEB089_KURADA_VENKATA_SAI_PURNESH_omms9v.jpg' }
    ]
  },
  volunteers: [
    { name: 'Saptarshi Mallick', year: 4 },
    { name: 'PENDELA VINAY RAJ', year: 3, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772382410/Screenshot_20250823_222435_Photos_2_-_2023EEB050_PENDELA_VINAY_RAJ_ymxzzv.jpg' },
    { name: 'Ankul Kumar', year: 3, image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772526929/Passport_Photo_-_2023EEB012_ANKUL_KUMAR_bz1jma.png' },
    { name: 'Harshit Awasthi', year: 3 },
    { name: 'Keshav Kumar', year: 3 }
  ]
};
