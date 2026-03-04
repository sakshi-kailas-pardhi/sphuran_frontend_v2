import { X, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { ShareMenu } from './ShareMenu';
import type { ProductImage } from '@/lib/merchandiseData';

interface ProductPreviewModalProps {
  isOpen: boolean;
  images: ProductImage[];
  currentIndex: number;
  isZooming: boolean;
  zoomPosition: { x: number; y: number };
  imageRef: React.RefObject<HTMLDivElement>;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onDownload: () => void;
  onSelectIndex: (index: number) => void;
  onZoomStart: () => void;
  onZoomEnd: () => void;
  onMouseMove: (e: React.MouseEvent) => void;
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchMove: (e: React.TouchEvent) => void;
  onTouchEnd: () => void;
}

export function ProductPreviewModal({
  isOpen,
  images,
  currentIndex,
  isZooming,
  zoomPosition,
  imageRef,
  onClose,
  onPrevious,
  onNext,
  onDownload,
  onSelectIndex,
  onZoomStart,
  onZoomEnd,
  onMouseMove,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
}: ProductPreviewModalProps) {
  if (!isOpen) return null;

  const currentImage = images[currentIndex];
  const shareText = `Check out the SPHURAN 4.0 Official T-Shirt - ${currentImage.label} View!`;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Close preview"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Main Content Area */}
      <div
        className="flex items-center gap-6 mb-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image with Lens Zoom */}
        <div
          ref={imageRef}
          className="relative rounded-lg shadow-2xl cursor-crosshair overflow-hidden"
          onMouseEnter={onZoomStart}
          onMouseLeave={onZoomEnd}
          onMouseMove={onMouseMove}
        >
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-w-full max-h-[50vh] object-contain rounded-lg pointer-events-none"
          />

          {/* Lens highlight area on hover */}
          {isZooming && (
            <div
              className="absolute w-20 h-20 border-2 border-white/80 rounded pointer-events-none"
              style={{
                left: `clamp(0px, calc(${zoomPosition.x}% - 40px), calc(100% - 80px))`,
                top: `clamp(0px, calc(${zoomPosition.y}% - 40px), calc(100% - 80px))`,
                background: 'rgba(255,255,255,0.1)',
                boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.5)',
              }}
            />
          )}
        </div>

        {/* Magnified View Panel */}
        {isZooming && (
          <div className="hidden md:block w-64 h-64 lg:w-72 lg:h-72 rounded-xl overflow-hidden border-2 border-white/30 shadow-2xl flex-shrink-0">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url(${currentImage.src})`,
                backgroundSize: '400%',
                backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                backgroundRepeat: 'no-repeat',
              }}
            />
          </div>
        )}
      </div>

      {/* Image Label */}
      <div className="text-center mb-4" onClick={(e) => e.stopPropagation()}>
        <span className="text-white/80 font-display text-lg tracking-wider">
          {currentImage.label} View
        </span>
        <span className="text-white/50 text-sm ml-2">
          ({currentIndex + 1} / {images.length})
        </span>
        {isZooming && (
          <p className="text-white/40 text-xs mt-1">Hover to zoom</p>
        )}
      </div>

      {/* Action Buttons */}
      <div
        className="flex items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onDownload}
          className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors font-display text-sm tracking-wider"
        >
          <Download className="w-5 h-5" />
          Download
        </button>

        <ShareMenu shareText={shareText} />
      </div>

      {/* Thumbnail Strip */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              onSelectIndex(index);
            }}
            className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
              index === currentIndex
                ? 'border-white scale-110'
                : 'border-white/30 opacity-60 hover:opacity-100'
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
