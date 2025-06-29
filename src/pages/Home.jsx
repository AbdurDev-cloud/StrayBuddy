import { FaMapMarkerAlt, FaCamera, FaHandsHelping } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';


export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen pt-20...">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/src/assets/bg-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4 text-center">
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

<motion.button
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.3, delay: 0.8 }}
  className="mt-10 bg-blue-600 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
>

  Report To Save
</motion.button>

        </div>
      </div>

      {/* Vision Section */}
      <motion.section
      classname="mt-20"
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
    <h2 className="text-3xl font-bold mb-10">How It Works</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
      {/* Step 1 */}
      <motion.div
  className="bg-white shadow-lg p-6 rounded-lg"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <FaMapMarkerAlt className="text-4xl text-blue-600 mb-4 mx-auto" />
  <h3 className="text-xl font-semibold mb-2">Spot a Stray</h3>
  <p>Notice an animal in need or distress around your locality.</p>
</motion.div>


      {/* Step 2 */}
     <motion.div
  className="bg-white shadow-lg p-6 rounded-lg"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <FaCamera className="text-4xl text-blue-600 mb-4 mx-auto" />
  <h3 className="text-xl font-semibold mb-2">Report with a Photo</h3>
  <p>Take a photo and report it using StrayBuddy with the location.</p>
</motion.div>


      {/* Step 3 */}
      <motion.div
  className="bg-white shadow-lg p-6 rounded-lg"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <FaHandsHelping className="text-4xl text-blue-600 mb-4 mx-auto" />
  <h3 className="text-xl font-semibold mb-2">Help Arrives</h3>
  <p>Nearby rescuers and NGOs are alerted instantly to respond.</p>
</motion.div>

    </div>
  </>
</section>


    </>
  );
}
