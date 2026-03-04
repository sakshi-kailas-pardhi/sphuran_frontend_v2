interface ProductCardProps {
  imageSrc: string;
  imageAlt: string;
  label: string;
  rotation?: 'left' | 'right';
  onClick: () => void;
}

export function ProductCard({
  imageSrc,
  imageAlt,
  label,
  rotation = 'left',
  onClick,
}: ProductCardProps) {
  const rotateClass =
    rotation === 'left'
      ? 'group-hover:-rotate-2'
      : 'group-hover:rotate-2';

  return (
    <div
      className="relative group cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute -inset-4 bg-gradient-to-b from-[#d4c4a8]/50 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
      <div className="relative">
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`w-full max-w-[280px] md:max-w-[320px] lg:max-w-[380px] object-contain drop-shadow-2xl transform group-hover:scale-110 ${rotateClass} transition-all duration-500`}
        />
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#5c4a32] text-[#f5f0e8] text-xs font-display tracking-wider rounded-full">
          {label.toUpperCase()}
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 rounded-lg">
          <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-display tracking-wider bg-black/50 px-4 py-2 rounded-full transition-opacity duration-300">
            Click to view
          </span>
        </div>
      </div>
    </div>
  );
}
