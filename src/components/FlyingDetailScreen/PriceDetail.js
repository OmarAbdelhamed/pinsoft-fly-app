import React from 'react';
import { useSelector } from 'react-redux';

const PriceDetail = () => {

  const selectedFlight = useSelector((state) => state.data.selectedDepFlight);
  const selectedRetFlight = useSelector((state) => state.data.selectedRetFlight);
  return (
    <>
      <div className='border p-10 relative shadow-xl bg-white rounded-lg h-auto max-w-[1200px] flex flex-col justify-center items-center'>
        <div className='flex flex-col'>
          <h2 className='text-3xl font-semibold mb-4 text-center font-Headlines'>
            Price Details
          </h2>
          <div>
            <table className=' text-left w-[600px] '>
              <thead>
                <tr className='border-b-2 border-gray-300'>
                  <th className='px-4 py-2'>Passenger Type</th>
                  <th className='px-4 py-2'>Price</th>
                  <th className='px-4 py-2'>Taxes</th>
                  <th className='px-4 py-2'>surcharge</th>
                  <th className='px-4 py-2'>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-gray-300'>
                  <td className='px-4 py-2'>1 Adults</td>
                  <td className='px-4 py-2'>
                    {selectedFlight.passengerPrices[0].priceDetail.basePrice.amount}<span>₺</span>
                  </td>
                  <td className='px-4 py-2'>
                  {selectedFlight.passengerPrices[0].priceDetail.totalTax.amount}<span>₺</span>
                  </td>
                  <td className='px-4 py-2'>
                  {selectedFlight.passengerPrices[0].priceDetail.surcharge.amount}<span>₺</span>
                  </td>
                  <td className='px-4 py-2'>
                  {selectedFlight.passengerPrices[0].priceDetail.salesPrice.amount}<span>₺</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceDetail;
