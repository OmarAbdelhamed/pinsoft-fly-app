import React, { useState } from 'react';

function FlyTicketInsurance() {
  const [isInsuranceSelected, setIsInsuranceSelected] = useState(false);

  const handleInsuranceClick = () => {
    setIsInsuranceSelected(!isInsuranceSelected);
  };

  return (
    <div className='border p-10 relative shadow-xl bg-white rounded-lg h-auto max-w-[1200px] flex flex-col justify-center items-center'>
      <div className=' flex flex-col justify-center items-center py-10 pb-10 relative w-[600px] '>
        <h2 className='text-3xl font-bold mb-4 font-Headlines '>
          Flight Insurance
        </h2>
        <div className='mb-4 flex items-center justify-center cursor-pointer'>
          <div
            className={`w-4 h-4 mr-2 border border-gray-400 rounded-full flex-shrink-0 focus:outline-none ${
              isInsuranceSelected ? 'bg-blue-500 border-blue-500' : ''
            }`}
            onClick={handleInsuranceClick}
          >
            {isInsuranceSelected && (
              <div className='w-2 h-2 bg-white rounded-full m-auto' />
            )}
          </div>
          <label
            htmlFor='sigorta'
            className={`text-black ${
              isInsuranceSelected ? 'text-blue-500 ' : ''
            }`}
          >
            I want to Include an Insurance
          </label>
        </div>
        <div className='absolute bottom-0 right-0 m-2 flex items-center'>
          <p className='text-sm mr-2'>(2 Kg) Toplam Fiyat =</p>
          <p className='text-lg font-bold'>47 TL</p>
        </div>
        <div className='absolute bottom-0 left-0'>
          <button className='text-blue-500 py-2 px-4 rounded'>
            Detaylara Göz At
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlyTicketInsurance;
