import React, { useState } from 'react';
import CongressCard from './CongressCard.jsx';

const CardsPerPage = 4;

const Carousel = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(data.length / CardsPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    );
  };

  const startIndex = currentPage * CardsPerPage;
  const endIndex = startIndex + CardsPerPage;

  return (
    <div className="w-[1194.32px] h-[854.35px] justify-center items-center gap-[121px] inline-flex">
      <button onClick={prevPage}>Anterior</button>
      <div className="w-[1194.32px] h-[854.35px] justify-center items-center gap-[121px] inline-flex">
        {data.slice(startIndex, endIndex).map((countryData, index) => (
          <div key={index} className="grid grid-cols-2 grid-rows-2">
            <CongressCard countryData={countryData} />
          </div>
        ))}
      </div>
      <button onClick={nextPage}>Siguiente</button>
    </div>
  );
};

export default Carousel;
