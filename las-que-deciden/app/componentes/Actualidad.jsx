import React from "react";

export default function Actualidad(){
    return (
<>
<div className="max-w-full text-center text-red-600">
            <span className="text-2xl font-light leading-snug">LA ACTUALIDAD<br/></span>
            <span className="text-6xl font-bold leading-tight">LO QUE DICEN LAS ESTADÍSTICAS</span>
<div className="mt-10 mb-10 w-[1106px] p-2.5 bg-white border-4 border-red-600 flex-col justify-start items-center inline-flex">
    <div className="text-justify">
        <span className="text-red-600 text-2xl font-bold leading-10">CONCEPTOS CLAVE<br/>Índice de Poder: </span>
        <span className="text-black text-2xl font-light leading-tight">Capta hasta qué punto las mujeres disfrutan de libertades civiles, pueden participar en la sociedad civil y están representadas en la política. Va de 0 a 1, en donde 0 representa el no poder mientras que el 1 el pleno poder.<br/></span>
        <span className="text-rose-300 text-2xl font-bold leading-tight">Índice de Democracia: </span>
        <span className="text-black text-2xl font-light leading-tight">Capta en qué medida los líderes políticos son elegidos bajo sufragios legítimos en elecciones libres y justas, y en qué medida se garantizan las libertades de asociación y expresión. Varía de 0 a 1 (más democrático).</span>
    </div>
</div>

<iframe 
        src='https://flo.uri.sh/visualisation/15853384/embed' 
        title='Poder y Democracia' 
        className='flourish-embed-iframe' 
        frameborder='0' 
        scrolling='no' 
        style={{ width: '100%', height: '600px' }} 
        sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'
      ></iframe>
<div className="w-[1128px] h-[368px] text-left justify-start items-center gap-[50px] inline-flex">
    <div className="w-[539px] h-[368px] text-black text-2xl font-light tracking-wide">En general, existe una tendencia positiva en la relación entre el Índice de Democracia y el Índice de Poder. Los países con mayores niveles de democracia tienden a mostrar también mayores niveles de empoderamiento de las mujeres. Este patrón sugiere que el fortalecimiento de las instituciones democráticas puede influir positivamente en la participación y representación de las mujeres en la sociedad.<br/><br/></div>
    <div className="w-[539px] h-[366px] text-black text-2xl font-light tracking-wide">Aunque la tendencia general es positiva, existen variaciones notables entre los países. Por ejemplo, mientras Costa Rica lidera en ambos índices, Venezuela presenta un Índice de Democracia considerablemente bajo, lo que se refleja en su Índice de Poder. Estas diferencias subrayan la diversidad de situaciones políticas y sociales en la región.<br/></div>
</div>
</div>
</>
    );
}
