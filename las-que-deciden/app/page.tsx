'use client'
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import Titulo from '@/app/componentes/Titulo.jsx';
import Estadistica from '@/app/componentes/Estadistica.jsx';
import Ultimos from '@/app/componentes/Ultimos.jsx';
import Timeline from '@/app/componentes/Timeline.jsx';
import Congreso from '@/app/componentes/Congreso.jsx';
import Derechos from '@/app/componentes/Derechos.jsx';
import Actualidad from '@/app/componentes/Actualidad.jsx';
import NoEstamos from '@/app/componentes/NoEstamos.jsx';
import CTA from '@/app/componentes/CTA.jsx';

function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.main
      className="flex w-full min-h-screen bg-white flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
    <motion.div style={{ scaleX: scrollYProgress, transformOrigin: '0% 0%' }} className="fixed top-0 left-0 w-full h-4 bg-red-600 z-50" />

      <motion.div
        className="pt-2 px-24 pb-0 mb-0"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Titulo />
      </motion.div>
      <div style={{ position: 'relative', width: '100%' }}>
        <Image
          src="/Portada.png"
          layout="responsive"
          width={1920}
          height={1080}
          alt="Portada" />
        <motion.div
          className="p-24 absolute bottom-[-190px] z-10 flex items-center justify-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Estadistica />
        </motion.div>
      </div>
      <motion.div
        className="mt-32 pt-2 px-24 pb-0 mb-0"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Ultimos />
      </motion.div>
      <motion.div
        className="mt-5 pt-2 px-24 pb-0 mb-0"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Timeline />
      </motion.div>
      <motion.div
        className="mt-5 pt-2 px-24 pb-0 mb-0"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Congreso />
      </motion.div>
      <motion.div
        className="mt-5 pt-2 px-24 pb-0 mb-0"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Derechos />
      </motion.div>
      <motion.div
        className="mt-5 pt-2 px-24 pb-0 mb-0"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Actualidad />
      </motion.div>
      <motion.div
        className="mt-5 pt-2 px-24 pb-0 mb-0"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <NoEstamos />
      </motion.div>
      <motion.div
        className="mt-5 pt-2 px-24 pb-0 mb-0"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <CTA />
      </motion.div>

    </motion.main>
  );
}

export default Home;
