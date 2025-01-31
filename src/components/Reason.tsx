
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const ReasonsILoveYou = () => {
    return (
        <section className="px-6 py-8">
              <Navbar />
            <motion.h2 
                className="text-3xl font-semibold text-pink-600"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Reasons I Love You 💖
            </motion.h2>
            <motion.ul 
                className="list-disc mt-4 text-lg text-gray-700 space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <li>You make me feel truly seen and loved.</li>
                <li>Your smile brightens my day no matter what.</li>
                <li>We share the same dreams and ambitions.</li>
                <li>Your kindness is unmatched, and your heart is gold.</li>
                <li>Every moment with you is unforgettable.</li>
            </motion.ul>
        </section>
    );
};

export default ReasonsILoveYou;
