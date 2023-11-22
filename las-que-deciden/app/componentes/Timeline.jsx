import Image from 'next/image';

export default function Timeline() {
  return (
    <>
      <div className='flex min-h-screen flex-col items-center justify-between pt-2 px-24'>
        <div className="text-center text-black text-2xl font-light tracking-wide mb-8">América Latina tiene las venas abiertas desde tiempos pasados. Para entender el rol de las mujeres en la política actual, también hace falta entender el contexto histórico.</div>
        <div className="mb-8 flex justify-center">
          <Image
            src='/1970.png'
            alt='timeline'
            width={800} 
            height={440} 
          />
        </div>
        <div className="mb-8 flex justify-center">
          <Image
            src='/1980.png'
            alt='timeline'
            width={800} 
            height={440} 
          />
        </div>
        <div className="mb-8 flex justify-center">
          <Image
            src='/1990.png'
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
        title='Interactive or visual content' 
        className='flourish-embed-iframe' 
        frameborder='0' 
        scrolling='no' 
        style={{ width: '100%', height: '600px' }} 
        sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'
      ></iframe>
      <div style={{ width: '100%!;margin-top:4px!important;text-align:right!important;' }}>
        <a 
          className='flourish-credit' 
          href='https://public.flourish.studio/visualisation/15598209/?utm_source=embed&utm_campaign=visualisation/15598209' 
          target='_top' 
          style={{ textDecoration: 'none!important' }}
        >
          <img 
            alt='Made with Flourish' 
            src='https://public.flourish.studio/resources/made_with_flourish.svg' 
            style={{ width: '105px!important;height:16px!important;border:none!important;margin:0!important;' }} 
          />
        </a>
      </div>
      <div className="text-center text-black text-2xl font-light tracking-wide mb-8 mt-8">La evolución de mujeres en roles de liderazgo en América Latina, específicamente en la posición de Jefa de Estado entre 1990 y 2022, revela una transformación significativa en la última década. A partir de 2007, Argentina, Chile, Nicaragua y Panamá se han destacado al tener mujeres en esta posición, siendo Argentina especialmente notable por mantener este liderazgo femenino de manera continua. Sin embargo, la ausencia de mujeres en este rol en otras naciones indica una disparidad persistente en la región. Estos datos reflejan no solo avances, sino también la necesidad de un mayor impulso hacia la equidad de género en la esfera política de América Latina.</div>

    </>
  );
}
