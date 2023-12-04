import React, { useState } from 'react';

const CongressCard = ({ countryData }) => {
  if (!countryData || !countryData.years) {
    return <div>Datos no disponibles.</div>;
  }
  const initialYear = countryData.years[0];
  const initialWidthObj = countryData.widths.find(w => w.year === initialYear);
  const initialImageObj = countryData.images.find(img => img.year === initialYear);

  const [selectedYear, setSelectedYear] = useState(initialYear);
  const [width, setWidth] = useState(initialWidthObj ? initialWidthObj.width : 0);
  const [imageUrl, setImageUrl] = useState(initialImageObj ? initialImageObj.url : '');
  const [showTooltip, setShowTooltip] = useState(false);

  const handleYearChange = (event) => {
    const year = parseInt(event.target.value);
    setSelectedYear(year);

    const newWidthObj = countryData.widths.find(w => w.year === year);
    setWidth(newWidthObj ? newWidthObj.width : 0);

    const newImageObj = countryData.images.find(img => img.year === year);
    setImageUrl(newImageObj ? newImageObj.url : '');
  };

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  return (
    <div className="p-6 flex flex-col items-center bg-white text-center overflow-hidden p-4">
      <select
        className="mb-2 p-2 border border-red-600 ml-[-400px] text-red-600 font-light"
        value={selectedYear}
        onChange={handleYearChange}
      >
        {countryData.years.map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
      <img src={imageUrl} alt={`${countryData.countryName} Congress`} className="mt-4" />
      <div className="relative w-full">
      <div className="font-2xl mt-5 text-black font-bold uppercase">{countryData.countryName}</div>
        <div className="mt-5 bg-red-600 bg-opacity-20 h-8 overflow-hidden" onMouseEnter={handleMouseEnter} 
             onMouseLeave={handleMouseLeave} >
          <div className="bg-red-600 h-full" onMouseEnter={handleMouseEnter} 
             onMouseLeave={handleMouseLeave} style={{ width: `${width}%` }}></div>
        </div>
        {showTooltip && (
          <div className="absolute -mt-8 ml-2 p-2 bg-white border border-red-600 text-sm">
            Porcentaje de Mujeres en el Congreso: {width}%
          </div>
        )}
      </div>
    </div>
  );
};

export default CongressCard;
