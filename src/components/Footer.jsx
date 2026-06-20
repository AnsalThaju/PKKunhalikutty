import { Link } from 'react-router-dom';
import { Globe, MessageCircle, Camera, Video, MapPin, Phone, Mail } from 'lucide-react';
import { politicianData } from '../data/politicianData';

export default function Footer() {
  const { contactDetails, details } = politicianData;

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-display font-bold text-white flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-kerala-green rounded-lg flex items-center justify-center text-white text-xl">
                PK
              </div>
              <span>Kunhalikutty</span>
            </Link>
            <p className="text-sm text-slate-400 mb-6">
              {details.currentPosition}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-kerala-green hover:text-white transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-kerala-green hover:text-white transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-kerala-green hover:text-white transition-colors">
                <Camera size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-kerala-green hover:text-white transition-colors">
                <Video size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-kerala-gold transition-colors">About Leader</Link></li>
              <li><Link to="/achievements" className="hover:text-kerala-gold transition-colors">Achievements</Link></li>
              <li><Link to="/projects" className="hover:text-kerala-gold transition-colors">Development Projects</Link></li>
              <li><Link to="/news" className="hover:text-kerala-gold transition-colors">News & Media</Link></li>
              <li><Link to="/gallery" className="hover:text-kerala-gold transition-colors">Media Gallery</Link></li>
            </ul>
          </div>

          {/* Campaigns */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Get Involved</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/volunteer" className="hover:text-kerala-gold transition-colors">Become a Volunteer</Link></li>
              <li><Link to="/events" className="hover:text-kerala-gold transition-colors">Upcoming Events</Link></li>
              <li><Link to="/contact" className="hover:text-kerala-gold transition-colors">Contact Offices</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-kerala-green shrink-0 mt-0.5" />
                <span>{contactDetails.legislativeAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-kerala-green shrink-0" />
                <span>{contactDetails.phones[0]}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-kerala-green shrink-0" />
                <span>{contactDetails.officialEmail}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-center text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} {details.fullName}. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
