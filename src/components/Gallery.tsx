import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const captions = [
    "A beautiful baby girl ❤️", 
    "Cherishing our love every day 💕", 
    "Memories that last forever 📸", 
    "A special day, a special memory ✨",
    "The laughter we share is priceless 😂", 
    "Adventures with you are the best 🌍", 
    "Through every season, we shine 🌸🍂", 
    "Every smile tells a story 😊", 
    "Dancing through life together 💃🕺",
    "Unforgettable times with my love ❤️", 
    "Happiness is being with you 😘", 
    "A love story written in the stars ✨", 
    "Together, forever, and always 💖", 
];

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Start from first caption

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === captions.length - 1 ? 0 : prev + 1)); // Loop captions
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <section className="min-h-screen bg-pink-200">
            <Navbar />
            <motion.h2 
                className="text-3xl py-4 font-semibold text-pink-600 text-center"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Our Memories 📸
            </motion.h2>

            {/* Image Carousel for Small Screens */}
            <div className="md:hidden relative w-full overflow-hidden">
                <motion.div 
                    key={currentIndex}
                    className="w-full flex flex-col p-4 items-center"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                >
                    <img 
                        src={`/IMG-20250131-WA00${11 + (currentIndex % captions.length)}.jpg`} 
                        alt={`Memory ${currentIndex}`} 
                        className="w-full h-[600px] p-4 object-cover rounded-lg shadow-md"
                    />
                    <p className="text-sm font-medium p-3 bg-white rounded-sm text-gray-700 m-4 text-center w-full">
                        {captions[currentIndex]}
                    </p>
                </motion.div>
            </div>

            {/* Grid Layout for Larger Screens */}
            <div className="hidden md:grid grid-cols-3 gap-4 mt-6">
                {[0, 1, 2].map((offset) => {
                    let imgNumber = 11 + ((currentIndex + offset) % captions.length); // Loop images from 11 to 24
                    return (
                        <motion.div 
                            key={imgNumber}
                            className="flex flex-col items-center w-full h-full bg-white rounded-lg shadow-md p-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: offset * 0.5 }}
                        >
                            {/* Image */}
                            <img 
                                src={`/IMG-20250131-WA00${imgNumber}.jpg`} 
                                alt={`Memory ${imgNumber}`} 
                                className="w-full h-full object-cover rounded-lg"
                            />
                            {/* Caption */}
                            <p className="font-semibold  bg-white rounded-lg text-gray-700 mt-2 text-center">
                                {captions[(currentIndex + offset) % captions.length]}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Gallery;
