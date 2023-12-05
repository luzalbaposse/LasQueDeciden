'use client';
import CongressCardContainer from './CongressCardContainer.jsx';
import React, { useState, useEffect } from 'react';

export default function Congreso(){
    const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

    return (
<div className="max-w-full text-center text-red-600">
            
            <span className="text-2xl font-light leading-snug">Y SI NO SON JEFAS DE ESTADO, ¿DÓNDE ESTÁN?<br/></span>
            <span className="text-6xl font-bold leading-tight">LAS MUJERES EN EL CONGRESO<br/></span>
            <span className="text-2xl font-light leading-snug">EL CONTRASTE: 1990 VERSUS 2022<br/></span>
            <div className="flex items-center justify-center h-screen">
  <div className="text-center w-full h-full mb-[200px] mt-[200px]">
  <CongressCardContainer data={data} />

  </div>
</div>
<div className="mt-[80px] w-[1132px] h-[698px] text-left justify-center items-start gap-[50px] inline-flex">
    <div className="w-[530px] h-[698px] text-black text-2xl font-light tracking-wide">En las últimas décadas, la representación de mujeres en los congresos de varios países de América Latina ha experimentado notables transformaciones. En la década de 1990, los porcentajes de mujeres en el parlamento eran generalmente bajos, oscilando entre 5.6% y 36.9%. Estas cifras reflejaban un panorama donde las mujeres estaban subrepresentadas en la toma de decisiones políticas.<br/> <br/><br/>Sin embargo, al llegar al año 2022, se evidencian avances significativos en la inclusión de mujeres en la política de la región. Los porcentajes actuales varían entre 17.5% y 50.0%, reflejando un progreso sustancial en la representación femenina en comparación con la década de 1990. </div>
    <div className="w-[530px] h-[698px] text-black text-2xl font-light tracking-wide">Países como México, Argentina, y Bolivia han logrado aumentos notables, alcanzando o superando el 40% de representación femenina.<br/><br/>Este cambio puede atribuirse a diversas iniciativas y movimientos que abogan por la igualdad de género y la participación activa de las mujeres en la esfera política. A pesar de estos avances, persisten desafíos, y es crucial mantener el impulso para garantizar una representación equitativa y diversa en los órganos legislativos. La comparación entre los años 90 y 2022 destaca el progreso significativo, pero también subraya la importancia continua de trabajar hacia sociedades más inclusivas y equitativas.</div>
</div>
</div>    

    );
}