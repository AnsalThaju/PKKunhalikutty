import { motion } from 'framer-motion';
export default function Volunteer() {
  return (
    <div className='pt-24 min-h-screen flex items-center justify-center'>
      <div className='max-w-md w-full glass p-8 rounded-3xl'>
        <h1 className='text-3xl font-bold mb-6 text-center'>Join as a Volunteer</h1>
        <form className='space-y-4'>
          <input type='text' placeholder='Full Name' className='w-full p-3 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-slate-300' />
          <input type='email' placeholder='Email Address' className='w-full p-3 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-slate-300' />
          <input type='tel' placeholder='Phone Number' className='w-full p-3 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-slate-300' />
          <button className='w-full py-3 bg-kerala-green text-white rounded-lg font-bold'>Register Now</button>
        </form>
      </div>
    </div>
  );
}
