import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { politicianData } from '../data/politicianData';

export default function Contact() {
  const { contactDetails } = politicianData;

  return (
    <div className="pt-24 pb-20 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Get in Touch</h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
          We are here to listen. Reach out to our offices for any inquiries, support, or to share your ideas for Kerala's development.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact Information */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="glass p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <MapPin className="text-kerala-green" /> Official Addresses
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-500 mb-1">Legislative Address</h4>
                <p className="font-medium">{contactDetails.legislativeAddress}</p>
              </div>
              <div className="h-px w-full bg-slate-200 dark:bg-slate-800" />
              <div>
                <h4 className="font-bold text-slate-500 mb-1">Permanent Address</h4>
                <p className="font-medium">{contactDetails.address}</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <Phone className="text-kerala-saffron" /> Phone
              </h3>
              <ul className="space-y-2 font-medium">
                {contactDetails.phones.map((phone, i) => (
                  <li key={i}>{phone} (Mobile)</li>
                ))}
                {contactDetails.landlines.map((ll, i) => (
                  <li key={i}>{ll} (Office)</li>
                ))}
                <li>{contactDetails.secretariat} (Secretariat)</li>
              </ul>
            </div>
            <div className="glass p-8 rounded-3xl space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Mail className="text-kerala-gold" /> Email
                </h3>
                <ul className="space-y-2 font-medium text-sm break-all">
                  <li><a href={`mailto:${contactDetails.officialEmail}`} className="hover:text-kerala-green">{contactDetails.officialEmail}</a></li>
                  <li><a href={`mailto:${contactDetails.personalEmail}`} className="hover:text-kerala-green">{contactDetails.personalEmail}</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
                  <Clock className="text-kerala-green" /> Visiting Hours
                </h3>
                <p className="font-medium text-sm">{contactDetails.visitingHours}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass p-10 rounded-[3rem]"
        >
          <h3 className="text-3xl font-bold mb-8">Send a Message</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-bold mb-2 text-slate-600 dark:text-slate-400">First Name</label>
                <input type="text" className="w-full p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-kerala-green transition-colors" placeholder="John" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-bold mb-2 text-slate-600 dark:text-slate-400">Last Name</label>
                <input type="text" className="w-full p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-kerala-green transition-colors" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-slate-600 dark:text-slate-400">Email Address</label>
              <input type="email" className="w-full p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-kerala-green transition-colors" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-slate-600 dark:text-slate-400">Your Message</label>
              <textarea rows="5" className="w-full p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-kerala-green transition-colors resize-none" placeholder="How can we help you?"></textarea>
            </div>
            <div className="flex gap-4">
              <button type="button" className="w-full py-4 bg-kerala-green hover:bg-kerala-green/90 text-white rounded-full font-bold shadow-lg shadow-kerala-green/30 transition-all active:scale-95">
                Send Message
              </button>
              <button type="button" className="shrink-0 w-14 h-14 bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105" title="WhatsApp Us">
                <MessageSquare size={24} />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
