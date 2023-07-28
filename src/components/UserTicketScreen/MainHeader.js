import React from 'react'

const MainHeader = ()=> {
  return (
             <div className='grid grid-cols-5 font-bold bg-green-200 text-center border-b-2 text-lg border-slate-600'>
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
            </div>
    
  )
}

export default MainHeader