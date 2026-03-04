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

export const AVAILABLE_SIZES = ['S', 'M', 'L', 'XL', '2XL'] as const;
export type Size = (typeof AVAILABLE_SIZES)[number];

export const PREMIUM_BADGES = ['PREMIUM QUALITY', 'PREMIUM FABRIC', 'PREMIUM FINISH'] as const;

export const PRODUCT_INFO = {
  title: 'PREMIUM DROP',
  subtitle: 'SHOULDER PRINTED',
  type: 'T-SHIRT',
  tagline:
    'Elevate your everyday wear with our Premium Cotton T-Shirt, designed for a refined feel and a more tailored, medium-weight fit than standard tees.',
  descriptions: [
    'Crafted from top-grade Combed Compact Cotton, this shirt offers an incredibly smooth, soft texture with a sleek, structured drape. Featuring a rich 190-210 GSM fabric weight, it delivers a dense and polished finish that feels luxurious and long-lasting.',
    'Engineered with a compact weaving technique, the fabric resists shrinking and maintains its original shape and dimensions — even after countless washes and extended use.',
  ],
  officialBadge: {
    title: 'SPHURAN 4.0 OFFICIAL',
    subtitle: 'Limited Edition Collection',
  },
  buyLink: 'https://forms.gle/your-google-form-link',
};
