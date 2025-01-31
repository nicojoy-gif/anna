
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const HowWeMet = () => {
    return (
        <section className="bg-pink-200 px-6 py-8">
              <Navbar />
            <motion.h2 
                className="text-3xl font-semibold text-pink-600"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                How We Met ✨
            </motion.h2>
            <motion.p 
                className="text-lg text-gray-700 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                We met in the most unexpected way, and from that moment on, I knew I was meant to be with you. Our first conversation felt so natural, like we had known each other for years. I can never forget that smile when we first locked eyes.
            </motion.p>
        </section>
    );
};

export default HowWeMet;
