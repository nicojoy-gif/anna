import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const BirthdayPage = () => {
    const [playing, setPlaying] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const playMusic = () => {
        const audio = document.getElementById('birthdaySong') as HTMLAudioElement | null;
        if (audio) {
            if (!playing) {
                audio.play();
            } else {
                audio.pause();
                audio.currentTime = 0;
            }
            setPlaying(!playing);
        }
    };

    // Auto-scroll effect to show paragraphs one after another every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setScrolling(prev => !prev);
        }, 10000); // Change content every 10 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
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
                {/* First Paragraph */}
                <motion.h1
                    className="text-4xl font-bold text-pink-500 sm:text-5xl md:text-6xl"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Happy Birthday, Wifey! 🎉💖
                </motion.h1>

                {/* Paragraphs */}
                {scrolling && (
                    <motion.p
                        className="text-lg text-gray-700 mt-4 sm:text-xl md:text-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        Happy Birthday My Queen 👑❤, Happy Birthday to the love of my life and the most amazing mother to our little one! Every day with you feels like a gift, but today is all about you. You are the heart of our family, the reason for so much joy and laughter in our lives. Watching you be such a loving mother fills me with endless admiration, and being your partner is the greatest blessing I could ever ask for.
                    </motion.p>
                )}
                {!scrolling && (
                    <motion.p
                        className="text-lg text-gray-700 mt-4 sm:text-xl md:text-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        On your special day, I want you to know just how deeply you are loved and appreciated for your kindness, your strength, and all the little things you do that make life so beautiful. Here’s to celebrating you today and always. Happy Birthday, my love! I Love You Baby❤
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

            <audio id="birthdaySong" autoPlay autoFocus >
                <source src="/hbg.mp3" type="audio/mp3" autoFocus />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default BirthdayPage;
