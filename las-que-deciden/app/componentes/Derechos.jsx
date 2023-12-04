'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Derechos(){
    
  const [isActive, setIsActive] = useState(false);
  const timeline = useRef();
  const timeline2 = useRef();
  const handleScroll = () => {
    [timeline,timeline2].forEach(ref => {
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

  const getImageSrc = (Ref, staticSrc, animatedSrc) => {
    return Ref.current && isActive ? animatedSrc : staticSrc;
  };

    return (
<>
<div className="max-w-full text-center text-red-600">
            <span className="text-2xl font-light leading-snug">LA HISTORIA<br/></span>
            <span className="text-6xl font-bold leading-tight">SOBRE DERECHOS Y REVOLUCIÓN</span>
<div className="text-center text-black text-2xl font-light tracking-wide mb-8">
La participación evoluciona junto al reconocimiento de derechos a lo largo de la historia. El más relevante: el derecho al voto.
</div>   
<Image src="/Derechos.png" width={1344.16} height={765} alt="Derechos" />
<span className="text-3xl font-light leading-tight">DERECHO AL SUFRAGIO FEMENINO A LO LARGO DE LATINOAMÉRICA</span>
<div className="mb-10 flex justify-center" ref={timeline}>
<Image
          src={getImageSrc(timeline, '/TimelineStatic.svg', '/VotosAn.png')}
          alt='timeline-votos'
          width={1318} 
          height={440} 
        />
</div>
<div className="w-[1132px] h-[492px] justify-center text-left items-start gap-[50px] inline-flex">
    <div className="w-[530px] h-[492px]"><span className="text-black text-2xl font-light tracking-wide">El </span><span className="text-red-600 text-2xl font-light tracking-wide">sufragio femenino en América Latina </span><span className="text-black text-2xl font-light tracking-wide">ha sido un proceso caracterizado por avances significativos a lo largo del tiempo. Aunque </span><span className="text-red-600 text-2xl font-light tracking-wide">Uruguay lideró el camino en 1927</span><span className="text-black text-2xl font-light tracking-wide"> al reconocer el derecho de voto a las mujeres, otros países de la región siguieron su ejemplo en décadas posteriores. <br/><br/>Argentina, en 1947, y México, en 1953, extendieron </span><span className="text-red-600 text-2xl font-light tracking-wide">el sufragio a las mujeres a nivel nacional</span><span className="text-black text-2xl font-light tracking-wide">. La lucha por la igualdad de derechos políticos también se vio reflejada en Chile en 1949, en Costa Rica en 1950 y en Bolivia en 1952.</span></div>
    <div className="w-[530px] h-[492px]"><span className="text-black text-2xl font-light tracking-wide">A pesar de estos logros, algunos países, como Paraguay, experimentaron </span><span className="text-red-600 text-2xl font-light tracking-wide">demoras significativas,</span><span className="text-black text-2xl font-light tracking-wide"> reconociendo el voto femenino recién en 1961. <br/><br/>Este proceso ilustra la diversidad de enfoques y tiempos en la región, reflejando tanto los avances como los desafíos persistentes en la consecución de la igualdad de género en el ámbito político en Latinoamérica.</span></div>
</div>
</div>  
</>
    );
}