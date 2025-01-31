import { motion } from 'framer-motion';
import Navbar from './Navbar';

const ReasonsILoveYou = () => {
    return (
        <section className="min-h-screen bg-pink-100 text-center">
            <Navbar />
            <motion.h2 
                className="text-4xl py-6 font-semibold text-pink-600 sm:text-5xl md:text-6xl"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Reasons I Love You 💖
            </motion.h2>
            <motion.p
                className="text-lg sm:text-xl md:text-2xl text-gray-700 mt-4 px-6 md:px-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                You are not just my partner, you're my best friend, my confidant, and my greatest support. Here are just a few of the countless reasons why I love you:
            </motion.p>
            <motion.ul 
                className="list-inside list-decimal mt-8 px-4 text-lg sm:text-xl text-gray-700 space-y-4 mx-auto w-full max-w-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                <li><strong>You make me feel truly seen and loved:</strong> From the little things to the big moments, you always show me how much you care. Your attention and love make me feel like the most important person in the world.</li>
                <li><strong>Your smile brightens my day no matter what:</strong> No matter how challenging the day may be, seeing you smile fills me with joy and reminds me of how lucky I am.</li>
                <li><strong>We share the same dreams and ambitions:</strong> Whether we're talking about the future or taking on the present, your vision and determination inspire me every single day. Together, we are unstoppable.</li>
                <li><strong>Your kindness is unmatched, and your heart is gold:</strong> You have an incredible ability to empathize with others and always put people before yourself. The world is a better place because of your loving soul.</li>
                <li ><strong>Every moment with you is unforgettable:</strong> Whether we’re laughing, talking, or even just sitting in silence, every moment with you is precious and fills my heart with joy.</li>
            </motion.ul>
            <motion.div 
                className="mt-8 px-6 md:px-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
            >
                <p className="text-lg sm:text-xl text-gray-700 py-4">
                    These are just a few reasons why you mean the world to me, but I could write endless pages and still not capture the depth of my love for you. I am beyond grateful for you every day, and I can't wait to continue this beautiful journey together. 💕
                </p>
            </motion.div>
        </section>
    );
};

export default ReasonsILoveYou;
