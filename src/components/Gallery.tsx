
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const Gallery = () => {
    return (
        <section className="px-6 py-8">
              <Navbar />
            <motion.h2 
                className="text-3xl font-semibold text-pink-600"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Our Memories 📸
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                <img src="https://source.unsplash.com/300x200/?love,couple" alt="Memory 1" className="rounded-lg shadow-md" />
                <img src="https://source.unsplash.com/300x200/?vacation,couple" alt="Memory 2" className="rounded-lg shadow-md" />
                <img src="https://source.unsplash.com/300x200/?anniversary,couple" alt="Memory 3" className="rounded-lg shadow-md" />
            </div>
        </section>
    );
};

export default Gallery;
