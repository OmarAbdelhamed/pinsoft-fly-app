import React, { useState, useEffect } from 'react';
import { MdClose, MdArrowForwardIos } from 'react-icons/md';
import Ticket from '../components/FlyTicket/Ticket';
import { useDispatch, useSelector } from 'react-redux';
import { getDepartureLegs } from '../../src/app/flyDataSlice.js';
import MainHeader from '../components/UserTicketScreen/MainHeader';

const UserTicketScreen = () => {
  const departureLegs = useSelector((state) => state.data.departureLegs);
  const dispatch = useDispatch();
  const [dataDictionary, setDataDictionary] = useState({});

  useEffect(() => {
    dispatch(getDepartureLegs());
  }, [dispatch]);

  useEffect(() => {
    const updateData = {};
    departureLegs.forEach((leg) => {
      updateData[leg.flightId] = false;
    });
    setDataDictionary(updateData);
  }, [departureLegs]);

  const ticketHandler = (flightId) => {
    setDataDictionary((prevData) => {
      const updateData = Object.assign({}, prevData);
      updateData[flightId] = !updateData[flightId];
      return updateData;
    });
  };

  const closeHandler = () => {
    setDataDictionary((prevData) => {
      const updateData = {};
      Object.keys(prevData).forEach((key) => {
        updateData[key] = false;
      });
      return updateData;
    });
  };

  const checkDictionary = () => {
    return Object.values(dataDictionary).some((value) => value === true);
  };

  return (
    <div className='bg-fifth bg-cover bg-fixed bg-opacity-50  bg-no-repeat min-h-screen flex items-center justify-center -z-1'>
      <div className='flex flex-col  items-center my-10  h-auto'>
        <h1 className='font-bold text-[2.5rem] pb-3'>My Tickets</h1>

        <div className='w-[1200px] border shadow-xl'>
          <MainHeader />
          {departureLegs.map((leg) => {
            return (
              <div
                className='grid grid-cols-5 bg-white  border-b-2 '
                key={leg.id}
              >
                <div className='font-bold text-text-light text-center px-2 py-2'>
                  <span>{leg.flightDate}</span>
                </div>

                <div className='font-bold text-text-light text-center px-2 py-2'>
                  <span>{leg.depPort.code}</span>
                </div>
                <div className='font-bold text-text-light text-center px-2 py-2'>
                  <span>{leg.arrPort.code}</span>
                </div>
                <div className='font-bold text-text-light text-center px-2 py-2'>
                  <span>{leg.airline}</span>
                </div>
                <div className='font-bold text-text-light text-center flex px-2 py-2 justify-center items-end'>
                  <button onClick={() => ticketHandler(leg.flightId)}>
                    {dataDictionary[leg.flightId] ? (
                      <MdArrowForwardIos className='text-[1.5rem] hover:text-primary-color-dark cursor-pointer -rotate-90' />
                    ) : (
                      <MdArrowForwardIos className='text-[1.5rem] hover:text-primary-color-dark cursor-pointer rotate-90' />
                    )}
                  </button>
                </div>
                {dataDictionary[leg.flightId] ? (
                  <div className='col-span-5 pb-3 '>
                    <Ticket leg={leg} />
                  </div>
                ) : null}
              </div>
            );
          })}

          {checkDictionary() ? (
            <div className='flex w-full relative justify-center items-center bottom-0 pt-6'>
              <MdClose
                className='bg-slate-700 rounded-full text-white text-[4rem] p-4 animate-bounce cursor-pointer '
                onClick={closeHandler}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default UserTicketScreen;
