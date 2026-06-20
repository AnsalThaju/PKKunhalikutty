import { motion } from 'framer-motion';
import gallery1 from '../assets/images/gallery/IUML.jpeg';
import gallery2 from '../assets/images/gallery/images.jpg';
import gallery3 from '../assets/images/gallery/pk-kunhalikutty-1699557430.png';
import gallery4 from '../assets/images/gallery/P_K_Kunhalikutty_3x2.avif';

export default function Gallery() {
  const images = [gallery1, gallery2, gallery3, gallery4];

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Media Gallery</h1>
        <p className="text-slate-600 dark:text-slate-400">Capturing moments of leadership, campaigns, and community engagement.</p>
      </motion.div>

      <div className="columns-1 sm:columns-2 gap-6 space-y-6">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="break-inside-avoid relative group overflow-hidden rounded-2xl glass p-1 cursor-pointer"
          >
            <img 
              src={src} 
              alt={`Gallery image ${idx + 1}`} 
              className="w-full h-auto rounded-xl object-cover transform group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
              <span className="text-white font-medium border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">View Larger</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
