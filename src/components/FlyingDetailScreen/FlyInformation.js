import React from 'react';
import { SiChinasouthernairlines } from 'react-icons/si';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

const FlyInformation = () => {
  const selectedFlight = useSelector((state) => state.data.selectedDepFlight);
  const selectedRetFlight = useSelector(
    (state) => state.data.selectedRetFlight
  );
  console.log(Object.values(selectedRetFlight).length === 0);
  return (
    <>
      <div className='border p-10 relative shadow-xl bg-white rounded-lg h-auto max-w-[1200px] flex flex-col justify-center items-center'>
        <h1 className='text-5xl font-bold mb-4 text-center text-slate-800 font-Headlines'>
          Make Sure You Choose The right Flight
        </h1>
        <div>
          <h1 className='text-xl font-bold text-center text-slate-800 font-Headlines'>
            One Way Ticket
          </h1>
          <div className=' bg-white w-[350px] md:w-auto mb-2 border-2 border-slate-300  lg:min-h-[140px]  lg:p-4 rounded-lg   lg:m-4 grid grid-cols-3 items-center place-content-center text-center '>
            <div className='text-2xl w-[250px] flex flex-row justify-center items-center gap-3'>
              <SiChinasouthernairlines className='text-3xl text-yellow-300' />
              {selectedFlight.airline}
            </div>
            <div className='flex flex-row justify-between items-center relative -left-[50px]'>
              <div className=' flex flex-col text-2xl gap-4 text-right'>
                <span>{selectedFlight.depTime}</span>
                <span>{selectedFlight.depPort}</span>
                <span className='-mt-4 text-lg text-slate-600'>
                  {selectedFlight.depPort}
                </span>
              </div>
              <div className='flex flex-col gap-1 mx-4'>
                <div>{selectedFlight.flightDate}</div>
                <div className='items-center text-center relative '>
                  <span className='  after:content-[""] after:w-[8px] after:absolute after:-right-[0.01rem] after:top-[1.29rem] after:h-[1px] after:block after:bg-black  after:-rotate-45 before:content-[""] before:w-[8px] before:absolute before:-right-[0.01rem] before:top-[0.86rem] before:h-[1px] before:block before:bg-black  before:rotate-45   '>
                    ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
                  </span>
                </div>
                <div>{selectedFlight.flightNo} </div>
              </div>
              <div className=' flex flex-col text-2xl gap-4 text-left'>
                <span>{selectedFlight.arrTime}</span>
                <span>{selectedFlight.arrPort}</span>
                <span className='-mt-4 text-lg text-slate-600'>
                  {selectedFlight.arrPort}
                </span>
              </div>
            </div>

            <div className='text-3xl w-auto h-auto'>
              {selectedFlight.passengerPrices[0].priceDetail.basePrice.amount}
              <span className='text-xl'>EUR</span>
            </div>
          </div>
        </div>
        {(Object.values(selectedRetFlight).length !== 0 && (
          <>
            <h1 className='text-xl font-bold  text-center text-slate-800 font-Headlines'>
              Return Ticket
            </h1>
            <div className=' bg-white w-[350px] md:w-auto mb-2 border-2 border-slate-300  lg:min-h-[140px]  lg:p-4 rounded-lg   lg:m-4 grid grid-cols-3 items-center place-content-center text-center '>
              <div className='text-2xl w-[250px] flex flex-row justify-center items-center gap-3'>
                <SiChinasouthernairlines className='text-3xl text-yellow-300' />
                {selectedRetFlight.airline}
              </div>
              <div className='flex flex-row justify-between items-center relative -left-[50px]'>
                <div className=' flex flex-col text-2xl gap-4 text-right'>
                  <span>{selectedRetFlight.depTime}</span>
                  <span>{selectedRetFlight.depPort}</span>
                  <span className='-mt-4 text-lg text-slate-600'>
                    {selectedRetFlight.depPort}
                  </span>
                </div>
                <div className='flex flex-col gap-1 mx-4'>
                  <div>{selectedRetFlight.flightDate}</div>
                  <div className='items-center text-center relative '>
                    <span className='  after:content-[""] after:w-[8px] after:absolute after:-right-[0.01rem] after:top-[1.29rem] after:h-[1px] after:block after:bg-black  after:-rotate-45 before:content-[""] before:w-[8px] before:absolute before:-right-[0.01rem] before:top-[0.86rem] before:h-[1px] before:block before:bg-black  before:rotate-45   '>
                      ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
                    </span>
                  </div>
                  <div>{selectedRetFlight.flightNo} </div>
                </div>
                <div className=' flex flex-col text-2xl gap-4 text-left'>
                  <span>{selectedRetFlight.arrTime}</span>
                  <span>{selectedRetFlight.arrPort}</span>
                  <span className='-mt-4 text-lg text-slate-600'>
                    {selectedRetFlight.arrPort}
                  </span>
                </div>
              </div>

              <div className='text-3xl w-auto h-auto'>
                {
                  selectedRetFlight.passengerPrices[0].priceDetail.basePrice
                    .amount
                }
                <span className='text-xl'>EUR</span>
              </div>
            </div>
          </>
        )) || (
          <h1 className='text-xl font-bold  text-center text-slate-800 font-Headlines'>
            Your did not select Round trip
          </h1>
        )}
      </div>
    </>
  );
};

export default FlyInformation;
