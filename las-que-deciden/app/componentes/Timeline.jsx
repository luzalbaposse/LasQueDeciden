import Image from 'next/image'

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
  </div>
      </> 
    );
  }