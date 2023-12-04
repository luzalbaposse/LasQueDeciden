import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Animated = ({ staticImageUrl, animatedImageUrl, width, height }) => {
  const [loadAnimatedImage, setLoadAnimatedImage] = useState(false);
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setLoadAnimatedImage(true);
        window.removeEventListener('scroll', handleScroll);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Verificar si el componente está en el viewport al cargar la página

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef}>
      {loadAnimatedImage ? (
        <Image
          src={animatedImageUrl}
          alt="Imagen animada"
          width={width} 
          height={height} 
          layout="responsive"
        />
      ) : (
        <Image
          src={staticImageUrl}
          alt="Imagen estática"
          width={width} 
          height={height} 
          layout="responsive"
        />
      )}
    </div>
  );
};

export default Animated;
