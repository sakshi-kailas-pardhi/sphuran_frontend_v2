import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Award } from 'lucide-react';

// Components
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProductCard, ProductPreviewModal } from '@/components/merchandise';

// Hooks
import { useInView } from '@/hooks/use-in-view';
import { useProductPreview } from '@/hooks/use-product-preview';

// Data & Assets
import { logos } from '@/lib/logoData';
import { tshirtHeroImages } from '@/lib/merchandiseData';
import {
  tshirtModalImages,
  AVAILABLE_SIZES,
  PREMIUM_BADGES,
  PRODUCT_INFO,
  SIZE_CHART,
  type Size,
} from '@/lib/merchandiseData';

// =============================================================================
// BACKGROUND COMPONENTS
// =============================================================================

function MerchandiseBackground() {
  return (
    <>
      {/* Base gradient - cream/off-white */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f0e8] via-[#ebe5d9] to-[#e8e0d0]" />

      {/* Left Panel - Textured with embossed letters */}
      <LeftPanel />

      {/* Right Panel - Clean smooth backdrop */}
      <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-gradient-to-b from-[#f8f4ed] to-[#f0ebe0]" />

      {/* Wireframe curved lines */}
      <WireframeCurves />

      {/* Ghost watermark text */}
      <GhostWatermark />
    </>
  );
}

function LeftPanel() {
  return (
    <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-[#e0d6c4] overflow-hidden">
      {/* Canvas texture overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

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
            src={logos.ees}
            alt="EES Stamp"
            className="w-10 h-10 md:w-12 md:h-12 object-contain opacity-40 grayscale"
          />
        </div>
      </div>
    </div>
  );
}

function WireframeCurves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute bottom-0 left-0 w-[120%] h-[120%] opacity-[0.07]"
        viewBox="0 0 800 800"
        preserveAspectRatio="xMinYMax slice"
      >
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
  );
}

function GhostWatermark() {
  return (
    <div className="absolute bottom-32 right-8 w-80 hidden lg:block pointer-events-none select-none">
      <p className="font-body text-[10px] leading-relaxed text-[#c4b8a4] opacity-60">
        Elevate your everyday wear with our Men's Premium Cotton T-Shirt,
        designed for a refined feel and a more tailored, medium-weight fit than
        standard tees. Crafted from top-grade Combed Compact Cotton, this shirt
        offers an incredibly smooth, soft texture with a sleek, structured
        drape. Featuring a rich 190-210 GSM fabric weight, it delivers a dense
        and polished finish that feels luxurious and long-lasting. Engineered
        with a compact weaving technique, the fabric resists shrinking and
        maintains its original shape and dimensions — even after countless
        washes and extended use.
      </p>
    </div>
  );
}

// =============================================================================
// HEADER COMPONENT
// =============================================================================

function MerchandiseHeader() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-[#f5f0e8]/95 backdrop-blur-md border-b border-[#d4c8b4] relative">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <button
          onClick={() =>
            window.history.length > 1 ? navigate(-1) : navigate('/')
          }
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
  );
}

// =============================================================================
// PRODUCT SECTION COMPONENTS
// =============================================================================

function ProductHeader() {
  return (
    <div className="text-center mb-8">
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-[#4a3628] leading-none tracking-tight">
        {PRODUCT_INFO.title}
      </h1>
      <p className="font-body text-sm md:text-base text-[#8b7355] tracking-[0.2em] uppercase mt-1">
        {PRODUCT_INFO.subtitle}
      </p>
      <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-[#6b1c1c] leading-none mt-2">
        {PRODUCT_INFO.type}
      </h2>
    </div>
  );
}

interface SizeSelectorProps {
  selectedSize: Size;
  onSizeChange: (size: Size) => void;
}

function SizeSelector({ selectedSize, onSizeChange }: SizeSelectorProps) {
  return (
    <div className="mt-10 flex flex-col items-center gap-4">
      <span className="font-display text-sm text-[#5c4a32] tracking-[0.2em] uppercase">
        SELECT SIZE
      </span>
      <div className="flex items-center gap-3">
        {AVAILABLE_SIZES.map((size) => (
          <button
            key={size}
            onClick={() => onSizeChange(size)}
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
  );
}

function BuyButton() {
  return (
    <a
      href={PRODUCT_INFO.buyLink}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 px-12 py-4 bg-[#1a1a1a] text-white font-display text-sm tracking-[0.2em] uppercase hover:bg-black transition-colors duration-200 inline-block text-center"
    >
      BUY IT NOW
    </a>
  );
}

function ProductInfo() {
  return (
    <div className="lg:w-[380px] xl:w-[420px] shrink-0 flex flex-col justify-center space-y-6 lg:space-y-8 px-4 lg:px-0">
      {/* Tagline */}
      <p className="font-body text-sm md:text-base text-[#5c4a32]/80 italic leading-relaxed max-w-md">
        {PRODUCT_INFO.tagline}
      </p>

      {/* Premium Badges */}
      <div className="flex flex-wrap items-center gap-4 md:gap-6">
        {PREMIUM_BADGES.map((badge, index) => (
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
        {PRODUCT_INFO.descriptions.map((desc, index) => (
          <p
            key={index}
            className="font-body text-xs md:text-sm text-[#5c4a32]/70 leading-relaxed whitespace-pre-line"
          >
            {desc}
          </p>
        ))}
      </div>

      {/* Pricing */}
      <div className="bg-[#6b1c1c]/10 border border-[#6b1c1c]/30 rounded-lg p-4">
        <p className="font-display text-sm text-[#6b1c1c] font-bold mb-2">PRICING</p>
        <div className="space-y-1 text-sm">
          <p className="text-[#6b1c1c] font-semibold">Normal Size – {PRODUCT_INFO.pricing.normal}</p>
          <p className="text-[#6b1c1c] font-semibold">Oversized – {PRODUCT_INFO.pricing.oversized}</p>
        </div>
        <p className="mt-3 text-xs text-[#6b1c1c]/80 font-medium">
          Order Deadline: {PRODUCT_INFO.pricing.deadline}
        </p>
      </div>

      {/* Size Chart */}
      <div className="border-t border-[#c4b49a] pt-6">
        <p className="font-display text-sm text-[#5c4a32] tracking-wider mb-3">
          SIZE CHART (in inches)
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs md:text-sm text-[#5c4a32]/80">
            <thead>
              <tr className="border-b border-[#c4b49a]">
                <th className="py-2 px-2 text-left font-display">Size</th>
                <th className="py-2 px-2 text-center font-display">Chest</th>
                <th className="py-2 px-2 text-center font-display">Length</th>
                <th className="py-2 px-2 text-center font-display">Shoulder</th>
              </tr>
            </thead>
            <tbody>
              {SIZE_CHART.map((row) => (
                <tr key={row.size} className="border-b border-[#c4b49a]/50">
                  <td className="py-1.5 px-2 font-display">{row.size}</td>
                  <td className="py-1.5 px-2 text-center">{row.chest}</td>
                  <td className="py-1.5 px-2 text-center">{row.frontLength}</td>
                  <td className="py-1.5 px-2 text-center">{row.shoulder}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Official Badge */}
      <div className="flex items-center gap-3 bg-[#5c4a32]/10 rounded-lg p-4">
        <img
          src={logos.sphuran}
          alt="SPHURAN Logo"
          className="w-10 h-10 md:w-12 md:h-12 object-contain"
        />
        <div>
          <p className="font-display text-sm md:text-base font-bold text-[#5c4a32]">
            {PRODUCT_INFO.officialBadge.title}
          </p>
          <p className="font-body text-xs text-[#8b7355]">
            {PRODUCT_INFO.officialBadge.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

function VerticalText({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <div className="writing-vertical-rl transform rotate-180 font-display text-8xl xl:text-9xl font-black text-[#8b4513]/20 tracking-[0.3em] select-none">
        SPHURAN
      </div>
    </div>
  );
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================

const Merchandise = () => {
  const [selectedSize, setSelectedSize] = useState<Size>('M');
  const mainRef = useInView({ threshold: 0.1, triggerOnce: true });

  const preview = useProductPreview({ images: tshirtModalImages });

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* SEO Meta Tags */}
      <SEO
        title="Merchandise"
        description="Get official SPHURAN 4.0 merchandise. Shop exclusive t-shirts, hoodies, and accessories from the annual technical festival of Electrical Engineers' Society, IIEST Shibpur."
        keywords="SPHURAN merchandise, SPHURAN t-shirt, college fest merchandise, IIEST Shibpur merch, SPHURAN 4.0 official t-shirt, technical fest merchandise"
        url="https://sphuran.eesiiests.org/merch"
      />

      {/* Background */}
      <MerchandiseBackground />

      {/* Header */}
      <MerchandiseHeader />

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
            <VerticalText className="hidden lg:flex flex-col justify-center items-center w-24 shrink-0" />

            {/* Center - T-Shirt Images */}
            <div className="flex-1 flex flex-col items-center justify-center py-8">
              <ProductHeader />

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                <ProductCard
                  imageSrc={tshirtHeroImages.tshirtFront}
                  imageAlt="SPHURAN 4.0 Official T-Shirt - Front View"
                  label="Front"
                  rotation="left"
                  onClick={() => preview.open(0)}
                />
                <ProductCard
                  imageSrc={tshirtHeroImages.tshirtBack}
                  imageAlt="SPHURAN 4.0 Official T-Shirt - Back View"
                  label="Back"
                  rotation="right"
                  onClick={() => preview.open(1)}
                />
              </div>

              <SizeSelector
                selectedSize={selectedSize}
                onSizeChange={setSelectedSize}
              />

              <BuyButton />
            </div>

            {/* Right Side - Product Info */}
            <ProductInfo />
          </div>
        </div>

        {/* Mobile Vertical Text */}
        <div className="lg:hidden absolute top-1/2 -left-8 transform -translate-y-1/2 -rotate-90 origin-center">
          <span className="font-display text-4xl font-black text-[#8b4513]/10 tracking-[0.3em] select-none whitespace-nowrap">
            SPHURAN
          </span>
        </div>
      </div>

      {/* Product Preview Modal */}
      <ProductPreviewModal
        isOpen={preview.isOpen}
        images={tshirtModalImages}
        currentIndex={preview.currentIndex}
        isZooming={preview.isZooming}
        zoomPosition={preview.zoomPosition}
        imageRef={preview.imageRef}
        onClose={preview.close}
        onPrevious={preview.goToPrevious}
        onNext={preview.goToNext}
        onDownload={preview.handleDownload}
        onSelectIndex={preview.setCurrentIndex}
        onZoomStart={() => preview.setIsZooming(true)}
        onZoomEnd={() => preview.setIsZooming(false)}
        onMouseMove={preview.handleMouseMove}
        onTouchStart={preview.handleTouchStart}
        onTouchMove={preview.handleTouchMove}
        onTouchEnd={preview.handleTouchEnd}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Merchandise;
