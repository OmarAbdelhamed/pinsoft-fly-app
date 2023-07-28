import React,{useState,useEffect} from 'react'
import {
    MdArrowForwardIos
  } from 'react-icons/md';
import Ticket from '../components/FlyTicket/Ticket';
import { useDispatch, useSelector } from 'react-redux';
import {
    getDepartureLegs,
  } from '../../src/app/flyDataSlice.js';
import MainHeader from '../components/UserTicketScreen/MainHeader';


const UserTicketScreen = () => {
    const departureLegs = useSelector((state) => state.data.departureLegs);
    const dispatch = useDispatch();
    const [dataDictionary, setDataDictionary] = useState({});

    useEffect(() => {
        dispatch(getDepartureLegs());
      }, []);
    
      useEffect(() => {
        let updateData = {};
        departureLegs.forEach(leg => {
            updateData[leg.flightId] = false;
        });
        setDataDictionary(updateData)
        
      }, [departureLegs]);

    const ticketHandler = (flightId) => {
        setDataDictionary((prevData) => {
            const updateData = Object.assign({},prevData);
            updateData[flightId] = !updateData[flightId];
            return updateData;
          });
      };
      
  return (
    <div className='user-ticket-container mt-10' >
        <div className='user-ticket-header flex justify-center'>
             <h1 className='font-bold text-[2.5rem] pb-3'>My Tickets</h1>
        </div>
        <div className='flex flex-col w-full'>
            <MainHeader/>
            {departureLegs.map((leg, i) => {
            return  <div className='grid grid-cols-5  border-b-2 ' key={i}>
                <div className='font-bold text-text-light text-center px-2 py-2'>
                     <span>{leg.flightDate}</span>
                </div>
                
                <div className='font-bold text-text-light text-center px-2 py-2'>
                     <span>{leg.depPort}</span>
                </div>
                <div className='font-bold text-text-light text-center px-2 py-2'>
                     <span>{leg.arrPort}</span>
                </div>
                <div className='font-bold text-text-light text-center px-2 py-2'>
                    <span>{leg.airline}</span>
                </div>
                <div className='font-bold text-text-light text-center flex px-2 py-2 justify-center items-end'>
                    <button  onClick={() => ticketHandler(leg.flightId)}>
                        { dataDictionary[leg.flightId] ? (<MdArrowForwardIos className='text-[1.5rem] hover:text-primary-color-dark cursor-pointer -rotate-90'/>)
                        : (<MdArrowForwardIos  className='text-[1.5rem] hover:text-primary-color-dark cursor-pointer rotate-90'/>)}
                         
                    </button>
                </div>
                 { dataDictionary[leg.flightId] ?(<div className='col-span-5 pb-3 '>
                <Ticket leg={leg} />
                </div>):null}
            </div>
            })}
        </div>
    </div>
  )
}

export default UserTicketScreen