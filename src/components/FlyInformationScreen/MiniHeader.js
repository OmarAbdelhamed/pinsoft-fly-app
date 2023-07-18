import React from 'react'

function MiniHeader() {
  return (
    <div className="mini-header  flex mt-2">
    <div className="source-destination mr-4">
        <span>İstanbul -> Berlin</span>
    </div>
    <span className='mr-4'>/</span>
    <div className="fly-date">
        <span>17 Temmuz 2023</span>
    </div>
    </div>
  )
}

export default MiniHeader