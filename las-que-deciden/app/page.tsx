// Importar los módulos necesarios
"use client";
import Image from 'next/image';
import { motion, useScroll } from "framer-motion";



// Componente Home
function Home(){
  // Obtener scrollYProgress usando useScroll
  const { scrollYProgress } = useScroll();
  

  // Devolver el contenido principal
  return (
    <main className="relative bg-white">
      {/* Barra azul animada basada en el scroll */}
      <motion.div className="h-1 bg-[#DB3F28]" style={{ scaleX: scrollYProgress }} />
      {/* Logo */}
      <Image src="/LasQueDeciden.svg" layout="responsive" width={1800} height={900} alt="Logo" />
      {/* Texto introductorio */}
      <div className="flex items-center justify-center max-w-[1133px] text-center text-black text-xl font-light tracking-wide">
    En la historia política de Latinoamérica, las voces de las mujeres han sido cruciales, aunque no siempre han tenido el espacio que merecen. Desde los primeros pasos hacia la independencia de los países de la región, la lucha por los derechos políticos de las mujeres ha sido un capítulo polémico y constante.
    <br/><br/>
    Desde las pioneras que marcaron el camino hasta las contemporáneas que continúan desafiando barreras, este recorrido visual nos invita a reflexionar sobre la importancia de la representación femenina en el corazón mismo de la política latinoamericana.
</div>
      <div className="relative">
      {/* Imagen de las presidentes */}
      <Image src="/Presidents.png" layout="responsive" width={2095.1} height={1080} alt="Presidentes" />
      
     {/* Contenedor de estadísticas */}
     <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1169px] h-[243px] p-5 bg-white border-8 border-red-600 justify-center items-center gap-2.5 inline-flex">
          <div className="text-center">
            <span className="text-red-600 text-lg font-light font-condensed leading-[82.64px]">
              DE LOS 17 PRESIDENTES DE AMÉRICA LATINA<br/>
            </span>
            <span className="text-red-600 text-lg font-bold font-condensed leading-[114.59px]">
              SOLAMENTE 2 SON MUJERES
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
