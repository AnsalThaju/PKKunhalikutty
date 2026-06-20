import { motion } from 'framer-motion';
export default function Youth() {
  return (
    <div className='pt-24 min-h-screen max-w-7xl mx-auto px-4 text-center'>
      <h1 className='text-5xl font-bold mb-6 text-kerala-saffron'>Youth Connect</h1>
      <p className='max-w-2xl mx-auto text-lg mb-12'>Empowering the next generation with digital skills and startup ecosystems.</p>
      <div className='grid md:grid-cols-2 gap-8'>
        <div className='glass p-8 rounded-3xl text-left'>
          <h2 className='text-2xl font-bold mb-4'>Startup Mission</h2>
          <p>Incubating 10,000 new startups over the next decade.</p>
        </div>
        <div className='glass p-8 rounded-3xl text-left'>
          <h2 className='text-2xl font-bold mb-4'>Digital Kerala</h2>
          <p>Providing high-speed internet and tech education to every household.</p>
        </div>
      </div>
    </div>
  );
}
