import { motion } from 'framer-motion';
import { Cpu, Factory, Lightbulb, TrendingUp } from 'lucide-react';

export default function Projects() {
  const roadmaps = [
    { title: "Smart Kerala", desc: "Integration of modern technology into public infrastructure and services for seamless citizen experiences.", icon: <Lightbulb />, progress: "65%" },
    { title: "Industrial Corridors", desc: "Expanding KINFRA projects to create specialized manufacturing and export zones across the state.", icon: <Factory />, progress: "80%" },
    { title: "AI & Startup Mission", desc: "Fostering an ecosystem for artificial intelligence and nurturing 10,000 new startups over the next decade.", icon: <Cpu />, progress: "45%" },
    { title: "Technology Roadmap", desc: "Building high-speed digital networks and establishing IT parks in emerging tier-2 cities.", icon: <TrendingUp />, progress: "60%" }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-kerala-saffron">Development & Vision</h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
          Strategic initiatives driving Kerala's transition into a modern, technologically advanced state.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {roadmaps.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-8 rounded-3xl group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-kerala-green group-hover:bg-kerala-green group-hover:text-white transition-colors duration-300">
                {project.icon}
              </div>
              <h3 className="text-2xl font-bold">{project.title}</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              {project.desc}
            </p>
            <div>
              <div className="flex justify-between text-sm font-bold mb-2">
                <span>Implementation Progress</span>
                <span className="text-kerala-saffron">{project.progress}</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-3 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: project.progress }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-gradient-to-r from-kerala-green to-kerala-saffron h-full rounded-full"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
