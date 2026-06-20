import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { politicianData } from '../data/politicianData';
import heroImage from '../assets/images/hero/pk-kunhalikutty-1699557430.png';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-kerala-green/20 blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-kerala-saffron/20 blur-[120px] animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-300 dark:border-slate-700 mb-6">
            <span className="w-2 h-2 rounded-full bg-kerala-green animate-pulse" />
            <span className="text-sm font-medium">16th Kerala Legislative Assembly</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            <span className="block text-3xl md:text-4xl text-slate-500 mb-2">{politicianData.details.fullName}</span>
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-kerala-green to-kerala-saffron">
              Future Together
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-lg leading-relaxed">
            {politicianData.details.currentPosition}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/about"
              className="px-8 py-4 bg-kerala-green hover:bg-kerala-green/90 text-white rounded-full font-medium flex items-center gap-2 transition-transform hover:scale-105"
            >
              Explore Vision <ArrowRight size={20} />
            </Link>
            <button className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-kerala-green text-slate-900 dark:text-white rounded-full font-medium flex items-center gap-2 transition-all group">
              <span className="w-8 h-8 rounded-full bg-kerala-green/10 flex items-center justify-center group-hover:bg-kerala-green group-hover:text-white transition-colors">
                <Play size={16} fill="currentColor" />
              </span>
              Watch Story
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden glass relative">
            <img
              src={heroImage}
              alt={politicianData.details.fullName}
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
            
            {/* Stats Card Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-8 left-8 right-8 glass rounded-2xl p-6"
            >
              <div className="grid grid-cols-2 gap-4 text-center divide-x divide-white/20">
                <div>
                  <div className="text-2xl font-bold text-white">{politicianData.election2026.victoryMargin}</div>
                  <div className="text-xs text-slate-300">Victory Margin (2026)</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{politicianData.election2026.votesPolled}</div>
                  <div className="text-xs text-slate-300">Total Votes Polled</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
