import { FaMapMarkerAlt, FaCamera, FaHandsHelping } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import how1 from '../assets/how1.jpg';
import how2 from '../assets/how2.png';
import how3 from '../assets/how3.jpg';


export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        {        /* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/src/assets/bg-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60  flex flex-col justify-center items-center text-white z-10 px-4 text-center">
          <motion.h1
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-4xl md:text-6xl font-bold mb-4"
>
  Help Stray Animals. Right From Where You Are.
</motion.h1>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, delay: 0.4 }}
>
  <TypeAnimation
    sequence={[
      'Report. Rescue. Repeat.',
      2000,
      'Stray lives matter ❤️',
      2000,
      'One click can save a life.',
      2000,
    ]}
    speed={50}
    wrapper="span"
    repeat={Infinity}
    className="text-xl md:text-2xl font-medium mb-6"
  />
</motion.div>
<motion.div
initial={{opacity:0,scale:0.95}}
animate={{opacity:1,scale:1}}
transition={{duration:1.3,delay:0.8}}
>
  <Link to="/report">
    <button className="mt-6 bg-blue-600 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300">
      Report To save
    </button>
  </Link>
      </motion.div>

        </div>
      </div>

      {/* Vision Section */}
      <motion.section
     
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8,ease: 'easeInOut' }}
  viewport={{ once: true }}
  className="bg-white text-gray-800 px-6 py-12 md:py-20"
>
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Why StrayBuddy Exists
    </h2>
    <p className="text-lg leading-relaxed">
      Every day, thousands of stray animals suffer silently on our streets—injured, hungry, and helpless.
      StrayBuddy was built to change that. We believe that compassion starts with awareness and action.
      Through our compassionate and easy-to-use platform, anyone can report an animal in distress
       in just a few simple steps—empowering everyday citizens to become rescuers.
      Whether it's a limping dog outside your gate or a kitten trapped in traffic, your report can set off
      a chain of rescue, care, and recovery. Our mission is to bridge the gap between good-hearted citizens
      and animal rescue volunteers — because saving a life should never be complicated.
      <br /><br />
      Join us in creating a safer, kinder world for every stray.
    </p>
  </div>
</motion.section>

{/* How It Works Section */}
<section className="py-16 bg-gray-100 text-center">
  <>
    <motion.h2 className="text-3xl font-bold mb-10"
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{duration:0.7}}
  >How It Works</motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
  {/* Card 1 */}
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.6 }}
    className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
  >
    <img
      src={how1}
      alt="Spot a Stray"
      className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-4">
      <FaMapMarkerAlt className="text-3xl mb-2" />
      <h3 className="text-xl font-semibold">Spot a Stray</h3>
      <p className="text-sm mt-2 text-center">Notice an animal in need or distress around your locality.</p>
    </div>
  </motion.div>

  {/* Card 2 */}
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
  >
    <img
      src={how2}
      alt="Report with a Photo"
      className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-4">
      <FaCamera className="text-3xl mb-2" />
      <h3 className="text-xl font-semibold">Report with a Photo</h3>
      <p className="text-sm mt-2 text-center">Click a picture and upload it using our app.</p>
    </div>
  </motion.div>

  {/* Card 3 */}
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
  >
    <img
      src={how3}
      alt="Help Arrives"
      className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-4">
      <FaHandsHelping className="text-3xl mb-2" />
      <h3 className="text-xl font-semibold">Help Arrives</h3>
      <p className="text-sm mt-2 text-center">Nearby rescuers or NGOs are notified instantly.</p>
    </div>
  </motion.div>
</div>

  </>
</section>


    </>
  );
}
