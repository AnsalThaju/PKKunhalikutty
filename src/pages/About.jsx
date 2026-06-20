import { motion } from 'framer-motion';
import { BookOpen, Users, MapPin, Award } from 'lucide-react';
import { politicianData } from '../data/politicianData';
import aboutImage from '../assets/images/about/pk-kunhalikutty-1699557430.png';
// 1. Import your second image here
import aboutImage2 from '../assets/images/about/pkImg.jpg'; 

export default function About() {
  const { details, family, education, careerTimeline } = politicianData;

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-kerala-green dark:text-white">Biography & Vision</h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
          A legacy of leadership, dedicated to the prosperity and harmony of Kerala.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
        
        {/* Left Column: Images stacked vertically */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-6 sticky top-28"
        >
          {/* First Image */}

      <div className="rounded-3xl overflow-hidden glass p-2 hidden md:block">
            <img 
              src={aboutImage2} 
              alt={`${details.fullName} secondary`} 
              className="w-full h-auto rounded-2xl object-cover shadow-sm"
              loading="lazy"
            />
          </div>


  {/* Second Image */}
<div className="rounded-3xl overflow-hidden glass p-2 h-[500px]">
  <img
    src={aboutImage}
    alt={details.fullName}
    className="w-full h-full rounded-2xl object-cover shadow-sm"
    loading="lazy"
  />
</div>
          
        
    
        </motion.div>
        
        {/* Right Column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">{details.fullName}</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-4">
              Known affectionately as "{details.nickname}", {details.officialName} is a prominent leader of the {details.party}. 
              Currently serving as the {details.currentPosition}.
            </p>
          </div>

          {/* Personal Details */}
          <div className="grid grid-cols-2 gap-6">
            <div className="glass p-5 rounded-2xl">
              <div className="flex items-center gap-3 mb-2 text-kerala-green">
                <MapPin size={20} />
                <h3 className="font-bold">Origins</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Born {details.birthDate} in {details.birthPlace}</p>
            </div>
            <div className="glass p-5 rounded-2xl">
              <div className="flex items-center gap-3 mb-2 text-kerala-saffron">
                <Users size={20} />
                <h3 className="font-bold">Family</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Son of {family.father} & {family.mother}. Married to {family.spouse} with {family.children}.
              </p>
            </div>
          </div>

          {/* Education & Languages */}
          <div className="space-y-4 glass p-6 rounded-3xl">
            <h3 className="text-xl font-bold flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
              <BookOpen size={20} className="text-kerala-green" /> Education & Languages
            </h3>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
              {education.map((edu, idx) => (
                <li key={idx}>{edu}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {details.languages.map((lang, idx) => (
                <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="space-y-4 glass p-6 rounded-3xl">
            <h3 className="text-xl font-bold flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
              <Award size={20} className="text-kerala-saffron" /> Personal Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {details.interests.map((interest, idx) => (
                <span key={idx} className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-600 dark:text-slate-300">
                  {interest}
                </span>
              ))}
            </div>
          </div>

        </motion.div>
      </div>

      {/* Interactive Timeline */}
      <div className="mb-20">
        <h2 className="text-4xl font-display font-bold text-center mb-16">Political Journey</h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-kerala-green before:to-transparent">
          {careerTimeline.map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              key={i} 
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-kerala-green text-white shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform hover:scale-110">
                <BookOpen size={20} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass p-6 rounded-2xl hover:-translate-y-1 transition-transform">
                <div className="flex items-center justify-between space-x-2 mb-2">
                  <div className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</div>
                  <time className="font-display font-bold text-2xl text-kerala-saffron/80">{item.year}</time>
                </div>
                <div className="text-slate-600 dark:text-slate-300">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}