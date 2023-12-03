import Image from 'next/image';

export default function Timeline() {
  return (
    <>
      <div className='flex min-h-screen flex-col items-center justify-between pt-2 px-24'>
        <div className="text-center text-black text-2xl font-light tracking-wide mb-8">América Latina tiene las venas abiertas desde tiempos pasados. Para entender el rol de las mujeres en la política actual, también hace falta entender el contexto histórico.</div>
        <div className="mb-8 flex justify-center">
          <Image
            src='/1970.svg'
            alt='timeline-1970'
            width={800} 
            height={440} 
          />
        </div>
        <div className="mb-8 flex justify-center">
          <Image
            src='/1980.svg'
            alt='timeline'
            width={800} 
            height={440} 
          />
        </div>
        <div className="mb-8 flex justify-center">
          <Image
            src='/1990.svg'
            alt='timeline'
            width={800} 
            height={440} 
          />
        </div>
      <div className="text-center text-black text-2xl font-light tracking-wide mb-8">Entre el 1970 y los 90’, Latinoamérica se vio combulsionada. De repente surgieron múltiples dictaduras cívico-militares, se recuperaron democracias y se comenzó a pensar en el continente que hoy conocemos.</div>
      <div className="max-w-full text-center text-red-600 text-5xl font-light leading-snug">LOS PROTAGONISTAS DE LA ÉPOCA, NO REPRESENTABAN MUCHA DIVERSIDAD</div>
      </div>
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
