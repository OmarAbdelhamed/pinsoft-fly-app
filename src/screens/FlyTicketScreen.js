import React from 'react'



const FlyTicketScreen = () =>  {
  return (
    <div className="fly-information-container w-full mt-10 flex flex-col justify-center items-center">
        <div className="main-container w-5/6  flex flex-col   shadow-2xl  ">
        <div className='flex w-full items-center grid grid-cols-4 gap-2 bg-[#fa205a] h-20 rounded-t-lg '>
          <div className=' col-start-1 col-span-3 flex justify-between border-r-4 border-dashed border-[#ffd1dd]'>
            <img src='https://www.pngkit.com/png/full/114-1144795_airplane-logo-airplane-vector-png-white.png'alt='plane' className='w-[50px] h-[50px] ml-20 '></img>
            <span className='flex items-center font-bold text-2xl text-white'>Havayolu Adı</span>
            <span className='flex items-center font-bold text-2xl mr-4 text-white'>Biniş Kartı</span>
          </div>
          <div className='flex justify-center col-span-1'>
          <span className=' font-bold text-2xl text-white'>Biniş Kartı</span>
          </div>
        </div>
        <div className='flex w-full h-72 grid  grid-cols-4 gap-2'>
          <div className='col-start-1 col-span-3 pl-20 flex flex-col border-r-4 border-dashed border-[#ffd1dd]'>
            <div className='grid grid-cols-4 grid-rows-2 mt-5'>
                <div className='passenger-name flex flex-col  '>
                  <span className='font-bold'>Yolcu Adı:</span>
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
                  <span>Yok</span>
                </div>
            
            <div className='source flex flex-col mt-2'>
                  <span className='font-bold'>Konum:</span>
                  <span>İSTANBUL</span>
             </div>
             <div className='destination flex flex-col mt-2'>
                  <span className='font-bold'>Hedef:</span>
                  <span>BERLİN</span>
             </div>
             <div className='date flex flex-col mt-2'>
                  <span className='font-bold'>Tarih:</span>
                  <span>19.07.2023</span>
             </div>
             <div className='luggage flex flex-col mt-2'>
                  <span className='font-bold'>Bagaj:</span>
                  <span>Yok</span>
             </div>
             </div>
            
            <div className='bottom-container grid grid-cols-3  flex  flex-row mt-5'>
            <div className='departure flex flex-col  text-center text-[#fa205a]'>
                  <span className='font-bold text-2xl'>Kalkış</span>
                  <span className='text-xl'>21:45</span>
                  <span className='text-xl'>19 Temmuz, Çarşamba</span>
             </div>
             <div className='time flex flex-col text-center text-[#fa205a]'>
                  <span className='font-bold text-2xl'>Süre</span>
                  <span className='text-xl'>2 sa 35 dk</span>
             </div>
             <div className='land flex flex-col  text-center text-[#fa205a]'>
                  <span className='font-bold text-2xl'>Varış</span>
                  <span className='text-xl'>23:20</span>
                  <span className='text-xl'>19 Temmuz, Çarşamba</span>
             </div>
            </div>
          
          </div>



          <div className='col-span-1'>
           <div className='passenger-name flex flex-col mt-2'>
                  <span className='font-bold '>Yolcu Adı:</span>
                  <span className='text-lg'>Melihcan Şimşek</span>
            </div>
            <div className='source flex flex-row items-center'>
                  <span className='font-bold '>Konum: </span>
                  <span className='text-lg'>İstanbul IST</span>
             </div>
             <div className='destination flex flex-row items-center'>
                  <span className='font-bold '>Hedef: </span>
                  <span className='text-lg'>Berlin BER</span>
             </div>
             <div className='grid grid-cols-2 grid-rows-3 mt-3'>
                <div className='flex flex-col'>
                    <span className='font-bold text-sm'>Kuyruk No:</span>
                    <span>XQ 185</span>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold text-sm'>Tarih:</span>
                    <span>19.07.2023</span>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold text-sm'>Sigorta</span>
                    <span>Yok</span>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold text-sm'>Bagaj:</span>
                    <span>Yok</span>
                </div>
               
               
                <div className='flex flex-col'>
                    <span className='font-bold text-sm'>Kalkış</span>
                    <span>21:45</span>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold text-sm'>Varış</span>
                    <span>23:20</span>
                </div>
             </div>
          </div>
        </div>
        <div className='flex w-full grid grid-cols-4 gap-2 bg-[#fa205a] h-6 rounded-b-lg'>
            <div className='col-start-1 col-span-3 border-r-4 border-dashed border-[#ffd1dd]'>

            </div>
        </div>
        
        
     </div>
</div>
  )
}

export default FlyTicketScreen