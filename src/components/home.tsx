import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const BirthdayPage = () => {
    const [playing, setPlaying] = useState(false);

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

    return (
        <div className="min-h-screen bg-pink-100 text-center flex flex-col">
            <Navbar />

            <motion.div 
                className="relative w-full max-w-2xl p-6 bg-white shadow-lg rounded-lg my-8 mx-auto"
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
                <motion.p 
                    className="text-lg text-gray-700 mt-4 sm:text-xl md:text-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    Wishing you a day filled with love, joy, and laughter. You are my everything, and I’m so lucky to have you in my life. 💕
                </motion.p>

                <motion.div 
                    className="mt-6"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    <img 
                        src="https://source.unsplash.com/600x400/?birthday,cake" 
                        alt="Birthday Cake" 
                        className="rounded-lg shadow-md mx-auto w-full sm:w-96 md:w-full"
                    />
                </motion.div>

                <motion.div 
                    className="mt-6"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <button onClick={playMusic} className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition">
                        {playing ? 'Pause Music ⏸️' : 'Play Music 🎶'}
                    </button>
                </motion.div>
            </motion.div>


            <audio id="birthdaySong" src="https://www.bensound.com/bensound-music/bensound-sunny.mp3"></audio>
        </div>
    );
};

export default BirthdayPage;
