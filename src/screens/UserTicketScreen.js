import React,{useState,useEffect} from 'react'
import {
    MdArrowForwardIos
  } from 'react-icons/md';
import Ticket from '../components/FlyTicket/Ticket';
import { useDispatch, useSelector } from 'react-redux';
import {
    getDepartureLegs,
  } from '../../src/app/flyDataSlice.js';


const UserTicketScreen = () => {
    const departureLegs = useSelector((state) => state.data.departureLegs);
    const dispatch = useDispatch();
    const [dataDictionary, setDataDictionary] = useState({});

    useEffect(() => {
        dispatch(getDepartureLegs());
      }, []);
    
      useEffect(() => {

        departureLegs.forEach(leg => {
            setDataDictionary((prevData)=>({
                [leg.flightId]:false,
            }));
        });
        
      }, [departureLegs]);

    const ticketHandler = (flightId) => {
        setDataDictionary((prevData) => ({
            [flightId]: !prevData[flightId],
          }));
          console.log(dataDictionary)
      };

  return (
    <div className='user-ticket-container mt-10' >
        <div className='user-ticket-header flex justify-center'>
             <h1 className='font-bold text-[2.5rem] pb-3'>My Tickets</h1>
        </div>
        <div className='flex flex-col w-full'>
            <div className='grid grid-cols-7 font-bold bg-green-200 text-center border-b-2 text-lg border-slate-600'>
                <div className='border-r-2 border-slate-200 pr-4 py-2'>
                    <h3>Ticket Code</h3>
                </div>
                <div className=' pr-4 py-2 border-r-2 border-slate-200'>
                    <h3>Fly Date</h3>
                </div>
                <div className='border-r-2 border-slate-200 pr-4 py-2'>
                    <h3>Location</h3>
                </div>
                <div className='pr-4 py-2 border-r-2 border-slate-200'>
                    <h3>Target</h3>
                </div>
                <div className='border-r-2 border-slate-200 pr-4 py-2'>
                    <h3>Airline</h3>
                </div>
                <div className='pr-4 py-2 '>
                    <h3>Price</h3>
                </div>
            </div>
            {departureLegs.map((leg, i) => {
            return  <div className='grid grid-cols-7  border-b-2 ' key={i}>
            <div className='font-bold text-text-light  text-center px-2 py-2'>
                    <span>XYZ5T</span>
                </div>
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
                <div className='font-bold text-text-light text-center px-2 py-2'>
                     <span>{leg.priceDetail.salesPrice.amount} {leg.priceDetail.salesPrice.currency}</span>
                </div>
                <div className='font-bold text-text-light text-center flex px-2 py-2 justify-center items-end'>
                    <button  onClick={() => ticketHandler(leg.flightId)}>
                        { dataDictionary[leg.flightId] ? (<MdArrowForwardIos className='text-[1.5rem] hover:text-primary-color-dark cursor-pointer -rotate-90'/>)
                        : (<MdArrowForwardIos  className='text-[1.5rem] hover:text-primary-color-dark cursor-pointer rotate-90'/>)}
                         
                    </button>
                </div>
                 { dataDictionary[leg.flightId] ?(<div className='col-span-7 pb-3 '>
                <Ticket leg={leg} />
                </div>):null}
            </div>
            })}
        </div>
    </div>
  )
}

export default UserTicketScreen