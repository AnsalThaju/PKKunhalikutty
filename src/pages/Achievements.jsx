import { motion } from 'framer-motion';
import { Target, TrendingUp, Zap } from 'lucide-react';
import { politicianData } from '../data/politicianData';

export default function Achievements() {
  const icons = [<Target size={32} className="text-kerala-green"/>, <TrendingUp size={32} className="text-kerala-saffron"/>, <Zap size={32} className="text-kerala-gold"/>];
  
  return (
    <div className="pt-24 pb-20 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Major Contributions</h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
          Transforming Kerala through pioneering industrial models and technological advancements.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {politicianData.majorContributions.map((contribution, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110">
              {icons[idx % icons.length]}
            </div>
            <div className="mb-6 relative z-10">
              {icons[idx % icons.length]}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">{contribution.title}</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed relative z-10">
              {contribution.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Animated Charts / Stats Section placeholder */}
      <div className="glass rounded-[3rem] p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-kerala-green/20 to-kerala-saffron/20 opacity-50" />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-8">Pioneering the IT Revolution</h2>
          <div className="flex flex-col md:flex-row justify-around items-center gap-8">
            <div className="p-6">
              <div className="text-5xl font-display font-bold text-kerala-green mb-2">3000+</div>
              <div className="text-lg text-slate-600 dark:text-slate-300">Akshaya e-Kendras</div>
            </div>
            <div className="p-6 border-y md:border-y-0 md:border-x border-slate-300 dark:border-slate-700">
              <div className="text-5xl font-display font-bold text-kerala-saffron mb-2">1st</div>
              <div className="text-lg text-slate-600 dark:text-slate-300">100% e-literate district (Malappuram)</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-display font-bold text-kerala-gold mb-2">Mega</div>
              <div className="text-lg text-slate-600 dark:text-slate-300">Food Parks Developed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
