import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const BirthdayPage = () => {
    const [playing, setPlaying] = useState(false);
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    const [scrolling, setScrolling] = useState(false);

    // Initialize audio object once
    useEffect(() => {
        const audioElement = new Audio('/omah.mp3');
        audioElement.loop = true;
        setAudio(audioElement);
    }, []);

    // Autoplay only after user interaction
    useEffect(() => {
        const enableAutoplay = () => {
            if (audio && !playing) {
                audio.play().catch(error => console.log('Autoplay blocked:', error));
                setPlaying(true);
            }
            document.removeEventListener('click', enableAutoplay);
        };

        document.addEventListener('click', enableAutoplay);

        return () => {
            document.removeEventListener('click', enableAutoplay);
        };
    }, [audio, playing]);

    // Toggle music play/pause
    const playMusic = () => {
        if (audio) {
            if (!playing) {
                audio.play().catch(error => console.log('Play failed:', error));
            } else {
                audio.pause();
                audio.currentTime = 0;
            }
            setPlaying(!playing);
        }
    };

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            setScrolling(prev => !prev);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-pink-100 text-center flex flex-col overflow-hidden">
            <Navbar />
            <motion.div
                className="relative w-full max-w-3xl p-6 bg-white shadow-lg rounded-lg my-8 mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    className="text-4xl font-bold text-pink-500 sm:text-5xl md:text-6xl"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Happy Birthday, Wifey! 🎉💖
                </motion.h1>

                {scrolling ? (
                    <motion.p
                        className="text-lg text-gray-700 mt-4 sm:text-xl md:text-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                         On your special day, I want you to know just how deeply you are loved and appreciated for your kindness, your strength, and all the little things you do that make life so beautiful. Here’s to celebrating you today and always. Happy Birthday, my love! I Love You Baby❤
                          </motion.p>
                ) : (
                    <motion.p
                        className="text-lg text-gray-700 mt-4 sm:text-xl md:text-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                       Happy Birthday My Queen 👑❤, Happy Birthday to the love of my life and the most amazing mother to our little one! Every day with you feels like a gift, but today is all about you. You are the heart of our family, the reason for so much joy and laughter in our lives. Watching you be such a loving mother fills me with endless admiration, and being your partner is the greatest blessing I could ever ask for.
                  
                    </motion.p>
                )}

                <motion.div
                    className="mt-6"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJpcnRoZGF5JTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Birthday Cake"
                        className="rounded-lg shadow-md mx-auto w-full h-96 sm:w-96 md:w-full"
                    />
                </motion.div>

                <motion.div
                    className="mt-6"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <button
                        onClick={playMusic}
                        className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition"
                    >
                        {playing ? 'Pause Music ⏸️' : 'Play Music 🎶'}
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default BirthdayPage;
