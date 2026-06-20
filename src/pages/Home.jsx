import { motion } from 'framer-motion';
import { ArrowRight, Activity, Users, Award, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

export default function Home() {
  const stats = [
    { label: "Years of Service", value: "40+", icon: <Activity className="text-kerala-green w-8 h-8 mb-4" /> },
    { label: "Development Projects", value: "500+", icon: <Award className="text-kerala-saffron w-8 h-8 mb-4" /> },
    { label: "Lives Touched", value: "1M+", icon: <Users className="text-kerala-gold w-8 h-8 mb-4" /> },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Vision Statement Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white leading-tight">
              A Vision Rooted in <br/>
              <span className="text-kerala-green">Kerala's Heritage</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              We believe in a future where technological advancement and cultural heritage walk hand in hand. 
              Our mission is to empower the youth, build sustainable infrastructure, and ensure inclusive growth for every citizen of Kerala.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-kerala-green font-bold hover:gap-4 transition-all">
              Read the Full Vision <ArrowRight size={20} />
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-3xl overflow-hidden glass p-2"
          >
            <img 
              src="https://i0.wp.com/www.commonwealthunion.com/wp-content/uploads/2026/05/Image.jpg-2.jpeg?w=1280&ssl=1" 
              alt="Kerala Landscape" 
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Achievement Counters */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-kerala-green rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-kerala-saffron rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="glass !bg-white/10 !border-white/10 p-8 rounded-3xl text-center backdrop-blur-xl"
              >
                <div className="flex justify-center">{stat.icon}</div>
                <div className="text-5xl font-display font-bold mb-2">{stat.value}</div>
                <div className="text-slate-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates / News Carousel Equivalent */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Latest Updates</h2>
            <p className="text-slate-600 dark:text-slate-400">Stay informed with recent initiatives and news.</p>
          </div>
          <Link to="/news" className="hidden md:flex items-center gap-2 text-kerala-green font-bold hover:underline">
            View All News
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col"
            >
              <div className="h-56 bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-157${i}696958-c5049b866f6f?auto=format&fit=crop&q=80&w=600`} 
                  alt="News" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-kerala-saffron mb-3">Development</div>
                  <h3 className="text-2xl font-bold mb-3 leading-tight">New Smart City Project Initiated</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                    Transforming urban infrastructure with sustainable technologies to bring Kerala into the modern era.
                  </p>
                </div>
                <button className="text-kerala-green font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Read More &rarr;
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link to="/news" className="inline-flex items-center gap-2 text-kerala-green font-bold">
            View All News <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="py-24 bg-kerala-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Be Part of the Change</h2>
            <p className="text-xl text-emerald-100 mb-10 leading-relaxed">
              Join thousands of volunteers across Kerala working towards a brighter, more inclusive future. Your contribution matters.
            </p>
            <Link 
              to="/volunteer" 
              className="inline-block px-10 py-4 bg-white text-kerala-green rounded-full font-bold text-lg hover:bg-emerald-50 transition-colors shadow-xl"
            >
              Become a Volunteer
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="glass p-12 rounded-[3rem] shadow-2xl">
          <div className="w-16 h-16 bg-kerala-green/10 text-kerala-green rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail size={32} />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Stay Connected</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter to receive the latest updates on campaigns, events, and development projects directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-6 py-4 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-kerala-green transition-colors"
            />
            <button 
              type="submit" 
              className="px-8 py-4 bg-kerala-saffron hover:bg-kerala-saffron/90 text-white rounded-full font-bold transition-colors shadow-lg shadow-kerala-saffron/30 whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
