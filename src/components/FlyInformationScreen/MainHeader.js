import React from 'react'

function MainHeader() {
  return (
    <div className='main-header  flex flex-row justify-between'>
            <div>
            <h1 className='text-xl'>Uçuş Bilgileri</h1>
            </div>
            <div className='flex items-end'>
            <a href='#'><p className='text-xs text-sky-500'>Uçuş Kuralları</p> </a> 
            </div>
        </div>
  )
}

export default MainHeader