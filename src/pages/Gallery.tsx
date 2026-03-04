import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, Share2, Link, Check, Download } from 'lucide-react';
import { wrap } from 'popmotion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { GALLERY_IMAGES } from '@/lib/assets';

// Social share icons as SVG components
const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

const XIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

// Lazy Image Component with Intersection Observer
const LazyImage = ({
    src,
    alt,
    title,
    index,
    onClick
}: {
    src: string;
    alt: string;
    title: string;
    index: number;
    onClick: () => void;
}) => {
    const [isInView, setIsInView] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '100px', // Start loading 100px before entering viewport
                threshold: 0.01
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <motion.div
            ref={imgRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
            className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-muted"
            onClick={onClick}
        >
            {/* Skeleton placeholder with shimmer effect */}
            {(!isInView || !isLoaded) && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    {/* Shimmer overlay */}
                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    {/* Pulsing icon */}
                    <div className="relative flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-muted-foreground/10 flex items-center justify-center animate-pulse">
                            <ImageIcon className="w-6 h-6 text-muted-foreground/40" />
                        </div>
                        {isInView && !isLoaded && (
                            <div className="flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce [animation-delay:-0.3s]" />
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce [animation-delay:-0.15s]" />
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce" />
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Actual image - only render when in view */}
            {isInView && (
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    onLoad={() => setIsLoaded(true)}
                    className={`w-full h-full object-cover transition-all duration-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                        } group-hover:scale-110`}
                />
            )}

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="text-white font-medium text-sm md:text-base px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    {title}
                </motion.p>
            </div>
        </motion.div>
    );
};

// Animation variants for smooth sliding transitions
const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
    })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

const Gallery = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [[page, direction], setPage] = useState([0, 0]);
    const [showShareMenu, setShowShareMenu] = useState(false);
    const [linkCopied, setLinkCopied] = useState(false);
    const shareMenuRef = useRef<HTMLDivElement>(null);

    // Open image from URL query param on mount
    useEffect(() => {
        const imageParam = searchParams.get('image');
        if (imageParam !== null) {
            const imageIndex = parseInt(imageParam, 10);
            if (!isNaN(imageIndex) && imageIndex >= 0 && imageIndex < GALLERY_IMAGES.length) {
                setSelectedImage(imageIndex);
            }
        }
    }, []); // Only run on mount

    // Update URL when image changes
    const updateUrlParam = (index: number | null) => {
        if (index !== null) {
            setSearchParams({ image: index.toString() }, { replace: true });
        } else {
            setSearchParams({}, { replace: true });
        }
    };

    const imageIndex = selectedImage !== null ? wrap(0, GALLERY_IMAGES.length, page) : 0;

    // Helper functions to open/close lightbox with URL sync
    const openLightbox = (index: number) => {
        setSelectedImage(index);
        updateUrlParam(index);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        updateUrlParam(null);
    };

    const paginate = (newDirection: number) => {
        setPage(([currentPage, _]) => {
            const newPage = currentPage + newDirection;
            const newIndex = wrap(0, GALLERY_IMAGES.length, newPage);
            updateUrlParam(newIndex);
            return [newPage, newDirection];
        });
    };

    const handlePrevious = (e?: React.MouseEvent | KeyboardEvent) => {
        e?.stopPropagation?.();
        paginate(-1);
    };

    const handleNext = (e?: React.MouseEvent | KeyboardEvent) => {
        e?.stopPropagation?.();
        paginate(1);
    };

    // Sync page with selectedImage when lightbox opens
    useEffect(() => {
        if (selectedImage !== null) {
            setPage([selectedImage, 0]);
            setShowShareMenu(false);
            setLinkCopied(false);
        }
    }, [selectedImage]);

    // Close share menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (shareMenuRef.current && !shareMenuRef.current.contains(e.target as Node)) {
                setShowShareMenu(false);
            }
        };

        if (showShareMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showShareMenu]);

    // Share functions
    const getShareUrl = () => {
        const baseUrl = 'https://sphuran.eesiiests.org/gallery';
        return `${baseUrl}?image=${imageIndex}`;
    };

    const getShareText = () => {
        return `Check out this moment from SPHURAN 4.0 - ${GALLERY_IMAGES[imageIndex]?.title || 'Gallery'}`;
    };

    const shareToFacebook = () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl())}`;
        window.open(url, '_blank', 'width=600,height=400');
    };

    const shareToX = () => {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(getShareText())}&url=${encodeURIComponent(getShareUrl())}`;
        window.open(url, '_blank', 'width=600,height=400');
    };

    const shareToWhatsApp = () => {
        const url = `https://wa.me/?text=${encodeURIComponent(`${getShareText()} ${getShareUrl()}`)}`;
        window.open(url, '_blank');
    };

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(getShareUrl());
            setLinkCopied(true);
            setTimeout(() => setLinkCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy link:', err);
        }
    };

    // Download image
    const downloadImage = async () => {
        try {
            const image = GALLERY_IMAGES[imageIndex];
            const response = await fetch(image.src);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            // Create filename from title or use default
            const filename = image.title
                ? `sphuran-${image.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.jpg`
                : `sphuran-gallery-${imageIndex + 1}.jpg`;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (err) {
            console.error('Failed to download image:', err);
            // Fallback: open image in new tab
            window.open(GALLERY_IMAGES[imageIndex].src, '_blank');
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (selectedImage === null) return;

            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                handlePrevious();
            } else if (e.key === 'ArrowRight') {
                handleNext();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [selectedImage]);

    return (
        <>
            <SEO
                title="Gallery - SPHURAN 4.0"
                description="Explore the vibrant memories of SPHURAN 4.0 - The Annual Technical Festival of Electrical Engineering Society, IIEST Shibpur. View event highlights, workshops, competitions, and celebrations."
                keywords="SPHURAN gallery, SPHURAN photos, technical fest gallery, IIEST events, electrical engineering festival, SPHURAN 4.0 images, EES IIEST gallery"
                url="https://sphuran.eesiiests.org/gallery"
            />

            <div className="min-h-screen bg-background relative">
                {/* Aesthetic Texture Background */}
                <div className="fixed inset-0 pointer-events-none z-0">
                    {/* Gradient base */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />

                    {/* Noise texture overlay */}
                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        }}
                    />

                    {/* Subtle grid pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.08]"
                        style={{
                            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
                            backgroundSize: '50px 50px',
                        }}
                    />

                    {/* Radial glow accents */}
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
                    <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[80px]" />
                    <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[60px]" />
                </div>

                <div className="relative z-10">
                    <Navbar />

                    {/* Hero Section */}
                    <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-primary/5 via-background to-background">
                        <div className="container mx-auto max-w-7xl">
                            <Breadcrumbs
                                items={[
                                    { label: 'Home', href: '/' },
                                    { label: 'Gallery' }
                                ]}
                            />
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-center mb-8"
                            >
                                <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tight">
                                    Gallery
                                </h1>
                                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                    Relive the moments, memories, and magic of SPHURAN 4.0
                                </p>
                            </motion.div>
                        </div>
                    </section>

                    {/* Gallery Grid */}
                    <section className="py-12 px-4">
                        <div className="container mx-auto max-w-7xl">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                                {GALLERY_IMAGES.map((image, index) => (
                                    <LazyImage
                                        key={index}
                                        src={image.src}
                                        alt={image.alt}
                                        title={image.title}
                                        index={index}
                                        onClick={() => openLightbox(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Lightbox Modal with Smooth Sliding Transitions */}
                    <AnimatePresence>
                        {selectedImage !== null && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
                                onClick={() => closeLightbox()}
                            >
                                {/* Top Controls */}
                                <div className="absolute top-4 right-4 z-[103] flex items-center gap-2">
                                    {/* Share Button */}
                                    <div className="relative" ref={shareMenuRef}>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setShowShareMenu(!showShareMenu);
                                            }}
                                            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                                            aria-label="Share image"
                                        >
                                            <Share2 className="w-6 h-6" />
                                        </button>

                                        {/* Share Menu Dropdown */}
                                        <AnimatePresence>
                                            {showShareMenu && (
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                                                    transition={{ duration: 0.15 }}
                                                    className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-xl overflow-hidden min-w-[160px]"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <div className="p-1">
                                                        <button
                                                            onClick={shareToFacebook}
                                                            className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                                                        >
                                                            <span className="text-[#1877F2]"><FacebookIcon /></span>
                                                            Facebook
                                                        </button>
                                                        <button
                                                            onClick={shareToX}
                                                            className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                                                        >
                                                            <span className="text-foreground"><XIcon /></span>
                                                            X (Twitter)
                                                        </button>
                                                        <button
                                                            onClick={shareToWhatsApp}
                                                            className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                                                        >
                                                            <span className="text-[#25D366]"><WhatsAppIcon /></span>
                                                            WhatsApp
                                                        </button>
                                                        <div className="border-t border-border my-1" />
                                                        <button
                                                            onClick={copyLink}
                                                            className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                                                        >
                                                            {linkCopied ? (
                                                                <>
                                                                    <Check className="w-5 h-5 text-green-500" />
                                                                    Copied!
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <Link className="w-5 h-5 text-muted-foreground" />
                                                                    Copy Link
                                                                </>
                                                            )}
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Download Button */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            downloadImage();
                                        }}
                                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                                        aria-label="Download image"
                                    >
                                        <Download className="w-6 h-6" />
                                    </button>

                                    {/* Close Button */}
                                    <button
                                        onClick={() => closeLightbox()}
                                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                                        aria-label="Close lightbox"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                {/* Previous Button */}
                                <button
                                    onClick={handlePrevious}
                                    className="absolute left-4 z-[103] p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white hidden md:block"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>

                                {/* Next Button */}
                                <button
                                    onClick={handleNext}
                                    className="absolute right-4 z-[103] p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white hidden md:block"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>

                                {/* Sliding Image Container */}
                                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                                    <AnimatePresence initial={false} custom={direction}>
                                        <motion.div
                                            key={page}
                                            custom={direction}
                                            variants={variants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{
                                                x: { type: "spring", stiffness: 300, damping: 30 },
                                                opacity: { duration: 0.2 }
                                            }}
                                            drag="x"
                                            dragConstraints={{ left: 0, right: 0 }}
                                            dragElastic={1}
                                            onDragEnd={(e, { offset, velocity }) => {
                                                const swipe = swipePower(offset.x, velocity.x);

                                                if (swipe < -swipeConfidenceThreshold) {
                                                    paginate(1);
                                                } else if (swipe > swipeConfidenceThreshold) {
                                                    paginate(-1);
                                                }
                                            }}
                                            className="absolute w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <div className="relative max-w-[95vw] max-h-[90vh] select-none">
                                                <img
                                                    src={GALLERY_IMAGES[imageIndex].src}
                                                    alt={GALLERY_IMAGES[imageIndex].alt}
                                                    className="max-w-full max-h-[90vh] object-contain rounded-lg pointer-events-none"
                                                    draggable={false}
                                                />

                                                {/* Image Caption */}
                                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6 rounded-b-lg">
                                                    <p className="text-white font-semibold text-base md:text-lg">
                                                        {GALLERY_IMAGES[imageIndex].title}
                                                    </p>
                                                    {GALLERY_IMAGES[imageIndex].description && (
                                                        <p className="text-white/80 text-xs md:text-sm mt-1">
                                                            {GALLERY_IMAGES[imageIndex].description}
                                                        </p>
                                                    )}
                                                    <p className="text-white/60 text-xs mt-2">
                                                        {imageIndex + 1} / {GALLERY_IMAGES.length}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Gallery;
