import React from 'react'
import Footer from '../components/UI/footer';
import planeIcon from '../assets/img/TicketAirplane.png';
import "@fontsource/vt323";



const FlyTicketScreen = () =>  {
  return (
    <div>
    <div className="fly-information-container   w-full mt-10 flex flex-col justify-center items-center">
        <div className="main-container flex flex-col shadow-2xl  ">
        <div className='flex w-full items-center grid grid-cols-4 gap-2 bg-[#fa205a] h-20 rounded-t-lg '>
          <div className=' col-start-1 col-span-4 md:col-span-3 flex justify-between items-center h-20 border-none md:border-r-4 md:border-dashed md:border-[#ffd1dd]'>
            <img src={planeIcon} alt='plane' className='w-[50px] h-[50px]  md:ml-20 '></img>
            <span className='flex items-center font-bold   text-2xl text-white'>SunExpress</span>
            <span className='flex items-center font-bold   text-2xl mr-4 text-white'>Biniş Kartı</span>
          </div>
          <div className='flex justify-center col-span-1 hidden md:block lg:block '>
          <span className=' font-bold text-2xl text-white'>Biniş Kartı</span>
          </div>
        </div>
        <div className='flex w-full sm:h-80 md:h-72 grid  grid-cols-4 gap-2'>
          <div className='col-start-1  col-span-4 md:col-span-3  flex flex-col  border-none md:border-r-4 md:border-dashed md:border-[#ffd1dd]'>
            <div className='grid grid-cols-4 sm:pl-4 md:pl-20 grid-rows-2 mt-3 font-ticket   sm:text-[1.1rem] md:text-[1.1rem] lg:text-[1.3rem]'>
                <div className='passenger-name flex flex-col  '>
                  <span className='font-bold '>Yolcu Adı:</span>
                  <span>MELİHCAN ŞİMŞEK</span>
                </div>
                <div className='passenger-type flex flex-col '>
                  <span className='font-bold'>Yolcu Tipi:</span>
                  <span >YETİŞKİN</span>
                </div>
                <div className='tail-no flex flex-col '>
                  <span className='font-bold'>Kuyruk No:</span>
                  <span>XQ 185</span>
                </div>
                <div className='insurance flex flex-col '>
                  <span className='font-bold'>Uçuş Sigortası:</span>
                  <span>YOK</span>
                </div>
            <div className='source flex flex-col mt-2'>
                  <span className='font-bold'>Konum:</span>
                  <span>DÜSSELDORF</span>
             </div>
             <div className='destination flex flex-col mt-2'>
                  <span className='font-bold'>Hedef:</span>
                  <span>ANTALYA</span>
             </div>
             <div className='date flex flex-col mt-2'>
                  <span className='font-bold'>Tarih:</span>
                  <span>19.07.2023</span>
             </div>
             <div className='luggage flex flex-col mt-2'>
                  <span className='font-bold'>Bagaj:</span>
                  <span>YOK</span>
             </div>
             </div>
            
            <div className='bottom-container grid grid-cols-5  flex  flex-row mt-5 font-ticket '>
            <div className='departure col-start-2 flex flex-col  text-center text-[#fa205a]'>
                  <span className='font-bold  sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem]'>Kalkış</span>
                  <span className='sm:text-[1.1rem] md:text-[1.1rem] lg:text-[1.3rem]'>21:45</span>
                  <span className='sm:text-[1.1rem] md:text-[1.1rem] lg:text-[1.3rem]'>19 Temmuz, Çarşamba</span>
             </div>
             <div className='time flex flex-col text-center text-[#fa205a]'>
                  <span className='font-bold sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem]'>Süre</span>
                  <span className='sm:text-[1.1rem] md:text-[1.1rem] lg:text-[1.3rem]'>2 sa 35 dk</span>
             </div>
             <div className='land flex flex-col  text-center text-[#fa205a]'>
                  <span className='font-bold sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem]'>Varış</span>
                  <span className=' sm:text-[1.1rem] md:text-[1.1rem] lg:text-[1.3rem]'>23:20</span>
                  <span className='sm:text-[1.1rem] md:text-[1.1rem] lg:text-[1.3rem]'>19 Temmuz, Çarşamba</span>
             </div>
            </div>
          
          </div>



          <div className='col-span-1 font-ticket hidden md:block lg:block '>
           <div className='passenger-name flex flex-col mt-2'>
                  <span className='font-bold sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] '>Yolcu Adı:</span>
                  <span className=' sm:text-[1rem] md:text-[1.2rem] lg:text-[1.5rem]'>Melihcan Şimşek</span>
            </div>
            <div className='source flex flex-row'>
                  <span className='font-bold pr-1 sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] '>Konum: </span>
                  <span className='sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem]'>Düsseldorf DUS</span>
             </div>
             <div className='destination flex flex-row '>
                  <span className='font-bold pr-1 sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem]'>Hedef: </span>
                  <span className='sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem]'>Antalya AYT</span>
             </div>
             <div className='grid grid-cols-2 grid-rows-3 mt-1'>
                <div className='flex flex-col'>
                    <span className='font-bold text-[1rem]'>Kuyruk No:</span>
                    <span className='sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem]'>XQ 185</span>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold text-[1rem]'>Tarih:</span>
                    <span className='sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem]'>19.07.2023</span>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold text-[1rem]'>Sigorta</span>
                    <span className='sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem]'>Yok</span>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold text-[1rem]'>Bagaj:</span>
                    <span className='sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem]'>Yok</span>
                </div>
               
               
                <div className='flex flex-col'>
                    <span className='font-bold text-[1rem]'>Kalkış</span>
                    <span className='sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem]'>21:45</span>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold text-[1rem]'>Varış</span>
                    <span className='sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem]'>23:20</span>
                </div>
             </div>
          </div>
        </div>
        <div className='flex w-full grid grid-cols-4 gap-2 bg-[#fa205a] h-6 rounded-b-lg'>
            <div className='col-start-1 sm:col-span-4 md:col-span-3 sm:border-none md:border-r-4 md:border-dashed md:border-[#ffd1dd]'>

            </div>
        </div>
        
        
     </div>
</div>
<div className='mt-20'>
<Footer/>
</div>

</div>
  )
}

export default FlyTicketScreen