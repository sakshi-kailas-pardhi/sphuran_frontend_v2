import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { wrap } from 'popmotion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { GALLERY_IMAGES } from '@/lib/assets';

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
            {/* Skeleton placeholder */}
            {(!isInView || !isLoaded) && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse">
                    <ImageIcon className="w-8 h-8 text-muted-foreground/50" />
                </div>
            )}
            
            {/* Actual image - only render when in view */}
            {isInView && (
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    onLoad={() => setIsLoaded(true)}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                        isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
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
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = selectedImage !== null ? wrap(0, GALLERY_IMAGES.length, page) : 0;

    const paginate = (newDirection: number) => {
        setPage(([currentPage, _]) => [currentPage + newDirection, newDirection]);
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
        }
    }, [selectedImage]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (selectedImage === null) return;

            if (e.key === 'Escape') {
                setSelectedImage(null);
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

            <div className="min-h-screen bg-background">
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
                                    onClick={() => setSelectedImage(index)}
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
                            onClick={() => setSelectedImage(null)}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 z-[103] p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                                aria-label="Close lightbox"
                            >
                                <X className="w-6 h-6" />
                            </button>

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
        </>
    );
};

export default Gallery;
