import React,{useState} from 'react'
import {
    MdArrowForwardIos
  } from 'react-icons/md';
import Ticket from '../components/FlyTicket/Ticket';


const UserTicketScreen = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
      };


  return (
    <div className='user-ticket-container mt-10'>
        <div className='user-ticket-header flex justify-center'>
             <h1 className='font-bold text-[2.5rem] pb-3'> My Tickets</h1>
        </div>
        <div className='flex flex-col w-full'>
            <div className='grid grid-cols-7 font-bold bg-green-200 text-center border-b-2 text-lg border-slate-600'>
                <div className='border-r-2 border-slate-200 pr-4 py-2'>
                    <h3>Ticket Code</h3>
                </div>
                <div className='border-r-2 border-slate-200 pr-4 py-2'>
                    <h3>Airline</h3>
                </div>
                <div className='border-r-2 border-slate-200 pr-4 py-2'>
                    <h3>Location</h3>
                </div>
                <div className='pr-4 py-2 border-r-2 border-slate-200'>
                    <h3>Target</h3>
                </div>
                <div className=' pr-4 py-2 border-r-2 border-slate-200'>
                    <h3>Fly Date</h3>
                </div>
                <div className='pr-4 py-2 '>
                    <h3>Price</h3>
                </div>
            </div>
            <div className='grid grid-cols-7  border-b-2 '>
            <div className='font-bold text-text-light  text-center px-2 py-2'>
                    <span>XYZ5T</span>
                </div>
                <div className='font-bold text-text-light text-center px-2 py-2'>
                    <span>SunExpress</span>
                </div>
                <div className='font-bold text-text-light text-center px-2 py-2'>
                     <span>Antalya</span>
                </div>
                <div className='font-bold text-text-light text-center px-2 py-2'>
                     <span>Düsseldorf</span>
                </div>
                <div className='font-bold text-text-light text-center px-2 py-2'>
                     <span>26.07.2023</span>
                </div>
                <div className='font-bold text-text-light text-center px-2 py-2'>
                     <span>3500 EUR</span>
                </div>
                <div className='font-bold text-text-light text-center flex px-2 py-2 justify-center items-end'>
                    <button>
                    <MdArrowForwardIos  className='text-[1.5rem] hover:text-primary-color-dark cursor-pointer rotate-90'/>
                    </button>
                </div>
                {/* <div className='col-span-7 pb-3'>
                    <Ticket />
                </div> */}
            </div>
        </div>

    </div>
  )
}

export default UserTicketScreen