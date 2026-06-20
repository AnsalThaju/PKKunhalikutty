import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { politicianData } from '../data/politicianData';

export default function Events() {
  const eventsList = [
    {
      title: "Statewide Industrial Review Meeting",
      location: "Secretariat, Thiruvananthapuram",
      date: "July 15, 2026",
      time: "10:00 AM",
      desc: "Comprehensive review of the KINFRA projects and upcoming AI initiatives."
    },
    {
      title: "Public Outreach & Grievance Redressal",
      location: "Malappuram District Office",
      date: "July 22, 2026",
      time: "09:30 AM",
      desc: "Direct interaction with the citizens of Malappuram constituency."
    },
    {
      title: "Startup Mission Launch Event",
      location: "Infopark Kochi",
      date: "August 5, 2026",
      time: "11:00 AM",
      desc: "Inaugurating the new incubator facility for early-stage tech startups."
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Upcoming Events</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Join {politicianData.details.nickname} in public meetings and official events across Kerala.
        </p>
      </motion.div>

      <div className="space-y-6">
        {eventsList.map((evt, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center md:items-start gap-6 group hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex flex-col items-center justify-center p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl min-w-[120px]">
              <Calendar className="text-kerala-saffron mb-2" size={24} />
              <div className="text-center">
                <span className="block font-bold text-slate-900 dark:text-white text-sm">{evt.date.split(',')[0]}</span>
                <span className="block text-xs text-slate-500">{evt.date.split(',')[1]}</span>
              </div>
            </div>
            
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-kerala-green transition-colors">{evt.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">{evt.desc}</p>
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm font-medium text-slate-500">
                <span className="flex items-center gap-1"><MapPin size={16} className="text-kerala-green" /> {evt.location}</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1"><Clock size={16} className="text-kerala-gold" /> {evt.time}</span>
              </div>
            </div>
            
            <div className="shrink-0 w-full md:w-auto">
              <button className="w-full md:w-auto px-8 py-3 bg-white dark:bg-slate-700 hover:bg-kerala-green hover:text-white text-slate-900 dark:text-white border border-slate-200 dark:border-slate-600 rounded-full font-bold transition-colors">
                RSVP Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
