// Merchandise product data

export interface ProductImage {
  src: string;
  alt: string;
  label: string;
}

export const PRODUCT_IMAGES: ProductImage[] = [
  {
    src: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772645291/sphuran_tshirt_front_1440_jy4z0u.png',
    alt: 'SPHURAN 4.0 Official T-Shirt - Front View',
    label: 'Front',
  },
  {
    src: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1772645292/sphuran_tshirt_back_1440_akuazt.png',
    alt: 'SPHURAN 4.0 Official T-Shirt - Back View',
    label: 'Back',
  },
];

export const AVAILABLE_SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'] as const;
export type Size = (typeof AVAILABLE_SIZES)[number];

export const PREMIUM_BADGES = ['PREMIUM QUALITY', 'PREMIUM FABRIC', 'PREMIUM FINISH'] as const;

export const SIZE_CHART = [
  { size: 'XS', chest: 32.0, frontLength: 24.5, shoulder: 20.0 },
  { size: 'S', chest: 34.0, frontLength: 25.0, shoulder: 21.0 },
  { size: 'M', chest: 36.0, frontLength: 25.5, shoulder: 22.0 },
  { size: 'L', chest: 38.0, frontLength: 26.0, shoulder: 23.0 },
  { size: 'XL', chest: 40.0, frontLength: 26.5, shoulder: 24.0 },
  { size: 'XXL', chest: 42.0, frontLength: 27.0, shoulder: 25.0 },
] as const;

export const PRODUCT_INFO = {
  title: 'PREMIUM DROP',
  subtitle: 'SHOULDER PRINTED',
  type: 'T-SHIRT',
  tagline:
    'Elevate your everyday wear with our Premium Cotton T-Shirt, designed for a refined feel and a more tailored, medium-weight fit than standard tees.',
  descriptions: [
    '• Premium quality fabric for maximum comfort\n• Exclusive SPHURAN 4.0 themed design\n• Personalized name Printing\n• Choose between Normal Fit and Oversized Fit',
  ],
  pricing: {
    normal: '₹329',
    oversized: '₹349',
    deadline: '8th March, 12:00 PM',
  },
  officialBadge: {
    title: 'SPHURAN 4.0 OFFICIAL',
    subtitle: 'Limited Edition Collection',
  },
  buyLink: 'https://forms.gle/Nb3oFcqaEPU1qRWD7',
};
