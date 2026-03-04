import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Award } from 'lucide-react';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { useInView } from '@/hooks/use-in-view';
import { IMAGES } from '@/lib/assets';

const Merchandise = () => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState<string>('M');

  // Animation refs
  const mainRef = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* SEO Meta Tags */}
      <SEO
        title="Merchandise"
        description="Get official SPHURAN 4.0 merchandise. Shop exclusive t-shirts, hoodies, and accessories from the annual technical festival of Electrical Engineers' Society, IIEST Shibpur."
        keywords="SPHURAN merchandise, SPHURAN t-shirt, college fest merchandise, IIEST Shibpur merch, SPHURAN 4.0 official t-shirt, technical fest merchandise"
        url="https://sphuran.eesiiests.org/merch"
      />

      {/* === BACKGROUND LAYERS === */}
      
      {/* Base gradient - cream/off-white */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f0e8] via-[#ebe5d9] to-[#e8e0d0]" />
      
      {/* Left Panel - Textured with embossed letters */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-[#e0d6c4] overflow-hidden">
        {/* Canvas texture overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }} />
        
        {/* Large embossed geometric letters */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden select-none pointer-events-none">
          <span className="font-display text-[30vw] font-black text-[#d4c8b4] opacity-60 -ml-[20vw] transform -rotate-12">
            S
          </span>
          <span className="font-display text-[25vw] font-black text-[#c9bda8] opacity-40 absolute top-10 -left-10">
            P
          </span>
        </div>

        {/* Distressed seal/stamp */}
        <div className="absolute bottom-20 left-8 w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#8b7355]/30 flex items-center justify-center transform -rotate-12">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-dashed border-[#8b7355]/20 flex items-center justify-center">
            <img 
              src={IMAGES.logos.ees} 
              alt="EES Stamp" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain opacity-40 grayscale"
            />
          </div>
        </div>
      </div>

      {/* Right Panel - Clean smooth backdrop */}
      <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-gradient-to-b from-[#f8f4ed] to-[#f0ebe0]" />

      {/* Wireframe curved lines - emanating from bottom left */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg 
          className="absolute bottom-0 left-0 w-[120%] h-[120%] opacity-[0.07]" 
          viewBox="0 0 800 800" 
          preserveAspectRatio="xMinYMax slice"
        >
          {/* Concentric wireframe curves */}
          {[...Array(25)].map((_, i) => (
            <ellipse
              key={i}
              cx="0"
              cy="800"
              rx={100 + i * 40}
              ry={80 + i * 35}
              fill="none"
              stroke="#6b5a42"
              strokeWidth="0.8"
            />
          ))}
        </svg>
      </div>

      {/* Ghost watermark text - faded paragraph on lower right */}
      <div className="absolute bottom-32 right-8 w-80 hidden lg:block pointer-events-none select-none">
        <p className="font-body text-[10px] leading-relaxed text-[#c4b8a4] opacity-60">
          Elevate your everyday wear with our Men's Premium Cotton T-Shirt, designed for a refined feel and a more tailored, medium-weight fit than standard tees. Crafted from top-grade Combed Compact Cotton, this shirt offers an incredibly smooth, soft texture with a sleek, structured drape. Featuring a rich 190-210 GSM fabric weight, it delivers a dense and polished finish that feels luxurious and long-lasting. Engineered with a compact weaving technique, the fabric resists shrinking and maintains its original shape and dimensions — even after countless washes and extended use.
        </p>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#f5f0e8]/95 backdrop-blur-md border-b border-[#d4c8b4] relative">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => (window.history.length > 1 ? navigate(-1) : navigate('/'))}
            className="inline-flex items-center gap-2 font-display text-sm tracking-wider uppercase text-[#5c4a32] hover:text-[#8b4513] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          <Breadcrumbs
            items={[{ label: 'Home', href: '/' }, { label: 'Merchandise' }]}
          />
        </div>
      </header>

      {/* Main Content */}
      <div 
        ref={mainRef.ref}
        className={`relative z-10 min-h-[calc(100vh-80px)] transition-all duration-700 ${
          mainRef.isInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 items-stretch">
            
            {/* Left Side - Vertical SPHURAN Text */}
            <div className="hidden lg:flex flex-col justify-center items-center w-24 shrink-0">
              <div className="writing-vertical-rl transform rotate-180 font-display text-8xl xl:text-9xl font-black text-[#8b4513]/20 tracking-[0.3em] select-none">
                SPHURAN
              </div>
            </div>

            {/* Center - T-Shirt Images */}
            <div className="flex-1 flex flex-col items-center justify-center py-8">
              
              {/* Header Text - Above Images */}
              <div className="text-center mb-8">
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-[#4a3628] leading-none tracking-tight">
                  PREMIUM DROP
                </h1>
                <p className="font-body text-sm md:text-base text-[#8b7355] tracking-[0.2em] uppercase mt-1">
                  SHOULDER PRINTED
                </p>
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-[#6b1c1c] leading-none mt-2">
                  T-SHIRT
                </h2>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                {/* Front T-Shirt */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-b from-[#d4c4a8]/50 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative">
                    <img
                      src={IMAGES.merchandise.tshirtFront}
                      alt="SPHURAN 4.0 Official T-Shirt - Front View"
                      className="w-full max-w-[280px] md:max-w-[320px] lg:max-w-[380px] object-contain drop-shadow-2xl transform group-hover:scale-105 group-hover:-rotate-2 transition-all duration-500"
                    />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#5c4a32] text-[#f5f0e8] text-xs font-display tracking-wider rounded-full">
                      FRONT
                    </div>
                  </div>
                </div>

                {/* Back T-Shirt */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-b from-[#d4c4a8]/50 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative">
                    <img
                      src={IMAGES.merchandise.tshirtBack}
                      alt="SPHURAN 4.0 Official T-Shirt - Back View"
                      className="w-full max-w-[280px] md:max-w-[320px] lg:max-w-[380px] object-contain drop-shadow-2xl transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-500"
                    />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#5c4a32] text-[#f5f0e8] text-xs font-display tracking-wider rounded-full">
                      BACK
                    </div>
                  </div>
                </div>
              </div>

              {/* Sizes Section */}
              <div className="mt-10 flex flex-col items-center gap-4">
                <span className="font-display text-sm text-[#5c4a32] tracking-[0.2em] uppercase">
                  SELECT SIZE
                </span>
                <div className="flex items-center gap-3">
                  {['S', 'M', 'L', 'XL', '2XL'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 font-display text-sm font-bold border-2 transition-all duration-200 ${
                        selectedSize === size
                          ? 'bg-[#2c1810] text-[#f5f0e8] border-[#2c1810] scale-110'
                          : 'bg-transparent text-[#5c4a32] border-[#c4b49a] hover:border-[#5c4a32] hover:bg-[#5c4a32]/10'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Buy It Now Button */}
              <a
                href="https://forms.gle/your-google-form-link"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 px-12 py-4 bg-[#1a1a1a] text-white font-display text-sm tracking-[0.2em] uppercase hover:bg-black transition-colors duration-200 inline-block text-center"
              >
                BUY IT NOW
              </a>
            </div>

            {/* Right Side - Product Info */}
            <div className="lg:w-[380px] xl:w-[420px] shrink-0 flex flex-col justify-center space-y-6 lg:space-y-8 px-4 lg:px-0">

              {/* Tagline */}
              <p className="font-body text-sm md:text-base text-[#5c4a32]/80 italic leading-relaxed max-w-md">
                Elevate your everyday wear with our Premium Cotton T-Shirt, designed for a refined feel and a more tailored, medium-weight fit than standard tees.
              </p>

              {/* Premium Badges */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                {['PREMIUM QUALITY', 'PREMIUM FABRIC', 'PREMIUM FINISH'].map((badge, index) => (
                  <div key={index} className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#5c4a32]/10 flex items-center justify-center">
                      <Award className="w-5 h-5 md:w-6 md:h-6 text-[#8b4513]" />
                    </div>
                    <span className="text-[10px] md:text-xs font-display text-[#5c4a32] tracking-wider text-center">
                      {badge.split(' ')[1]}
                    </span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="space-y-4 border-t border-[#c4b49a] pt-6">
                <p className="font-body text-xs md:text-sm text-[#5c4a32]/70 leading-relaxed">
                  Crafted from top-grade Combed Compact Cotton, this shirt offers an incredibly smooth, soft texture with a sleek, structured drape. Featuring a rich 190-210 GSM fabric weight, it delivers a dense and polished finish that feels luxurious and long-lasting.
                </p>
                <p className="font-body text-xs md:text-sm text-[#5c4a32]/70 leading-relaxed">
                  Engineered with a compact weaving technique, the fabric resists shrinking and maintains its original shape and dimensions — even after countless washes and extended use.
                </p>
              </div>

              {/* Official Badge */}
              <div className="flex items-center gap-3 bg-[#5c4a32]/10 rounded-lg p-4">
                <img 
                  src={IMAGES.logos.sphuran} 
                  alt="SPHURAN Logo" 
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
                <div>
                  <p className="font-display text-sm md:text-base font-bold text-[#5c4a32]">
                    SPHURAN 4.0 OFFICIAL
                  </p>
                  <p className="font-body text-xs text-[#8b7355]">
                    Limited Edition Collection
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Mobile Vertical Text - Only visible on smaller screens */}
        <div className="lg:hidden absolute top-1/2 -left-8 transform -translate-y-1/2 -rotate-90 origin-center">
          <span className="font-display text-4xl font-black text-[#8b4513]/10 tracking-[0.3em] select-none whitespace-nowrap">
            SPHURAN
          </span>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Merchandise;
