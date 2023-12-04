import React, { useState } from 'react';
import CongressCard from './CongressCard';

const CongressCardContainer = ({ data }) => {
  const [visibleCount, setVisibleCount] = useState(6); // Número inicial de tarjetas visibles

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6); 
  };

  return (
    <div className="flex flex-col items-center w-full h-full mb-[10px]">
      <div className="grid grid-cols-3">
        {data.slice(0, visibleCount).map((countryData, index) => (
          <div key={index} className="m-5">
            <CongressCard countryData={countryData} />
          </div>
        ))}
      </div>
      {/* {visibleCount < data.length && (
        <button className="mt-4 p-2 bg-red-600 text-white relative z-10" onClick={loadMore}>
          Ver más
        </button>
      )} */}
    </div>
  );
};

export default CongressCardContainer;
