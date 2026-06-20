import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { politicianData } from '../data/politicianData';
import newsImg from '../assets/images/about/pk-kunhalikutty-1699557430.png';

export default function News() {
  const newsItems = [
    {
      title: "Historic Victory in Malappuram",
      category: "Election 2026",
      desc: `Secured a massive victory margin of ${politicianData.election2026.victoryMargin} votes in the 16th Kerala Legislative Assembly elections.`,
      date: "May 15, 2026",
      image: newsImg
    },
    {
      title: "New Ministerial Portfolios Announced",
      category: "Government",
      desc: "Appointed as the Minister for Industries, IT, Artificial Intelligence, and Startups in the new cabinet.",
      date: "May 20, 2026",
      image: newsImg
    },
    {
      title: "Launch of Smart Kerala Initiative",
      category: "Development",
      desc: "Detailed the roadmap for integrating AI and modern tech into the public infrastructure across the state.",
      date: "June 2, 2026",
      image: newsImg
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">News & Press</h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
          Latest updates, press releases, and media coverage.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {newsItems.map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-3xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col"
          >
            <div className="h-48 bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-slate-900 text-xs font-bold rounded-full shadow backdrop-blur-sm">
                {item.date}
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-kerala-saffron mb-3">{item.category}</div>
                <h3 className="text-xl font-bold mb-3 leading-tight">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <button className="text-kerala-green font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Read Full Story <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
