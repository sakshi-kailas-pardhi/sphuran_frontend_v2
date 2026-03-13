const CLOUDINARY_BASE = 'https://res.cloudinary.com/dwr8472qb/image/upload';

export interface Logos {
  sphuran: string;
  ees: string;
}

export const logos: Logos = {
  sphuran: `${CLOUDINARY_BASE}/v1770536102/sphuran-logo_a6mzzi.png`,
  ees: `${CLOUDINARY_BASE}/v1770536100/ees-logo_vjjwxn.png`,
};
