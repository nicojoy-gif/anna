import { motion } from 'framer-motion';
import Navbar from './Navbar';

const HowWeMet = () => {
    return (
        <section className="min-h-screen bg-pink-200 ">
            <Navbar />
            <motion.h2 
                className="text-4xl p-6 font-semibold text-pink-600 sm:text-5xl md:text-6xl"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                How We Met ✨
            </motion.h2>
            <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-gray-700 mt-6 px-6 md:px-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                Our journey began in the most unexpected way—on a dating site, of all places! I never imagined that clicking through profiles would lead me to the person I would share my life with. But there you were, standing out with your smile and your warmth. 
            </motion.p>
            <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-gray-700 mt-4 px-6 md:px-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                When we first matched, I remember feeling a sense of excitement and curiosity. We exchanged a few messages, and our conversation felt effortless, like we had known each other for years. The connection was undeniable, and I found myself eagerly waiting for our next chat.
            </motion.p>
            <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-gray-700 mt-4 px-6 md:px-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
            >
                But the moment that truly stole my heart was when we finally spoke on the phone for the first time. Your voice was so calming, and there was something in the way you laughed that made everything feel right. I knew, in that instant, that this was no ordinary connection.
            </motion.p>
            <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-gray-700 mt-4 px-6 md:px-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
            >
                We spent hours talking, learning about each other's lives, dreams, and passions. From that point on, it was clear—we were meant to be. The more I got to know you, the more I realized how perfect we were for each other. That first conversation, that first message, changed everything. 
            </motion.p>
            <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-gray-700 py-6 px-6 md:px-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3 }}
            >
                The rest, as they say, is history. Every day since then has been a beautiful chapter of our story, and I'm so grateful to have found you, in the most unexpected of ways.
            </motion.p>
        </section>
    );
};

export default HowWeMet;
