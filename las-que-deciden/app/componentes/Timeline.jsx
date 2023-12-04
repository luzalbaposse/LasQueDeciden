'use client'
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

export default function Timeline() {

  const [isActive, setIsActive] = useState(false);
  const ref1970 = useRef();
  const ref1980 = useRef();
  const ref1990 = useRef();

  const handleScroll = () => {
    // Activar la animación cuando la imagen entra en el viewport
    [ref1970, ref1980, ref1990].forEach(ref => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsActive(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // La función que determina la fuente de la imagen
  const getImageSrc = (yearRef, staticSrc, animatedSrc) => {
    return yearRef.current && isActive ? animatedSrc : staticSrc;
  };

  return (
    <>
      <div className='flex min-h-screen flex-col items-center justify-between pt-2 px-24'>
        <div className="text-center text-black text-2xl font-light tracking-wide mb-8">América Latina tiene las venas abiertas desde tiempos pasados. Para entender el rol de las mujeres en la política actual, también hace falta entender el contexto histórico.</div>
        {/* 1970 */}
        <div className="mb-10 flex justify-center" ref={ref1970}>
        <Image
          src={getImageSrc(ref1970, '/milNueveSetentaStatic.svg', '/milNueveSetenta.png')}
          alt='timeline-1970'
          width={800} 
          height={440} 
        />
      </div>
        <div className="mt-[-280px] w-full h-full flex justify-center items-center">
          <Image
            src='/Tanque.png'
            alt='timeline'
            width={700} 
            height={440}
          />
          </div>
          <div className="mt-[50px] mb-[50px]"></div>
          {/* 1980 */}
          <div className="mb-10 flex justify-center" ref={ref1980}>
            <Image
              src={getImageSrc(ref1980, '/milNueveOchentaStatic.svg', '/milNueveOchenta.png')}
              alt='timeline-1980'
              width={800} 
              height={440} 
            />
          </div>
        <div className="mt-[-390px] w-full h-full flex ml-[60px] justify-center items-center">
          <Image
            src='/Alfonsin.png'
            alt='timeline'
            width={400} 
            height={605}
          />
          </div>
           <div className="mt-[-25px] w-full h-full flex ml-[60px] justify-center items-center">
          <Image
            src='/AlfonsinAsume.png'
            alt='timeline'
            width={400} 
            height={605}
          />
             </div>
          {/* 1990 */}
          <div className="mt-[50px] mb-[50px]"></div>
          <div className="mb-10 flex justify-center" ref={ref1990}>
            <Image
              src={getImageSrc(ref1990, '/milNueveNoventaStatic.svg', '/milNueveNoventa.png')}
              alt='timeline-1990'
              width={800} 
              height={440} 
            />
          </div>
        <div className="mt-[-335px] w-full h-full flex justify-center items-center">
          <Image
            src='/Hugo.png'
            alt='timeline'
            width={440} 
            height={484}
          />
          </div>
          <div className="ml-[30px] mt-[-15px] w-full h-full flex justify-center items-center">
          <Image
            src='/HugoAsume.png'
            alt='timeline'
            width={350} 
            height={484}
          />
          </div>
          <div className="mt-[50px] mb-[50px]"></div>
      <div className="text-center text-black text-2xl font-light tracking-wide mb-8">Entre el 1970 y los 90’, Latinoamérica se vio combulsionada. De repente surgieron múltiples dictaduras cívico-militares, se recuperaron democracias y se comenzó a pensar en el continente que hoy conocemos.</div>
      <div className="max-w-full text-center text-red-600 text-5xl font-light leading-snug">LOS PROTAGONISTAS DE LA ÉPOCA, NO REPRESENTABAN MUCHA DIVERSIDAD</div>
      </div>
      <div className="w-full h-full text-center text-black text-[40px] font-light">LO QUE SE VE DESDE LOS 90s</div>
      <iframe 
        src='https://flo.uri.sh/visualisation/15598209/embed' 
        title='Jefa de Estado Mujer' 
        className='flourish-embed-iframe' 
        frameborder='0' 
        scrolling='no' 
        style={{ width: '100%', height: '600px' }} 
        sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'
      ></iframe>
      <div className="w-[1132px] h-[369px] justify-center items-start gap-[50px] inline-flex">
    <div className="w-[530px] h-[369px] text-black text-2xl font-light tracking-wide">La evolución de mujeres en roles de liderazgo en América Latina, específicamente en la posición de Jefa de Estado entre 1990 y 2022, revela una transformación significativa en la última década. A partir de 2007, Argentina, Chile, Nicaragua y Panamá se han destacado al tener mujeres en esta posición, siendo Argentina especialmente notable por mantener este liderazgo femenino de manera continua. </div>
    <div className="w-[530px] h-[246px] text-black text-2xl font-light tracking-wide">Sin embargo, la ausencia de mujeres en este rol en otras naciones indica una disparidad persistente en la región. Estos datos reflejan no solo avances, sino también la necesidad de un mayor impulso hacia la equidad de género en la esfera política de América Latina.</div>
</div>
    </>
  );
}
