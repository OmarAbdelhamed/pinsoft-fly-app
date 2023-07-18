import React from 'react'

function TicketInformation() {
  return (
    <div className="fly-content divide-x divide-slate-100  flex w-6/7 flex-row justify-between mt-3">
    <div className="airline-brand ">
        <span className='font-bold'> Havayolu</span>
        <div className="brand flex items-center mt-2">
            <img src="https://seeklogo.com/images/T/turkish-airlines-logo-1E368810A4-seeklogo.com.png" alt="" className='w-12 h-12 mr-2'/>
            <span>THY</span>
        </div>
    </div>
    <div className="tail-no pl-2">
        <span className='font-bold'>Kuyruk No</span>
        <div className='flex items-center justify-center mt-5 '>
            <span>TK 1361</span>
        </div>
        
    </div>
    <div className="departure text-center pl-2 ">
        <span className='font-bold'>Kalkış</span>
        <div className='flex items-center justify-center flex-col mt-4'>
            <span >21:45</span>
            <span>IST</span>
            <span>17 Temmuz, Pazartesi</span>
        </div>
    </div>
    <div className="time text-center pl-2 ">
        <span className='font-bold'>Süre</span>
        <div className='flex items-center justify-center flex-col mt-4'>
            <span>2 sa 35 dk</span>
            <span>Direkt</span>
        </div>
    </div>
    <div className="land text-center pl-2">
        <span className='font-bold'>Varış</span>
        <div className='flex items-center justify-center flex-col mt-4'>
            <span>23:20</span>
            <span>BER</span>
            <span>17 Temmuz, Pazartesi</span>
        </div>
    </div>
    <div className='baggage pl-2 '>
            <span className='font-bold'>Bagaj</span>
            <div className='flex items-center justify-center mt-4'>
                <span>El Bagajı</span>
            </div>
    </div>
</div>
  )
}

export default TicketInformation