import React, { useState, useEffect } from 'react';
const WarningPopUp = ({ onClose }) => {
  const [show, setShow] = useState(true);

  // useEffect(() => {
  //   // Automatically close the popup after 10 seconds
  //   const timer = setTimeout(() => {
  //     setShow(false);
  //     onClose();
  //   }, 10000);

  //   return () => clearTimeout(timer);
  // }, [onClose]);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  return (
    <>
      {show && (
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg- z-50 '>
          <div
            className='absolute top-0 left-0 w-full h-full backdrop-blur-sm bg-white/30'
            onClick={handleClose}
          ></div>
          <div className=' relative top-0 left-0 flex flex-col items-center w-[500px]  p-10 bg-white rounded-md shadow-md'>
            <button
              className='absolute text-red-600 max-w-[1px] max-h-[1px] flex items-center justify-center rounded-full text-center bg-white border border-red-600 top-2 right-2 cursor-pointer p-3'
              onClick={handleClose}
            >
              X
            </button>
            <p>Please select all filters before searching for flights.</p>
            <button
              onClick={onClose}
              className=' mt-5 bg-primary-color text-white rounded-xl min-h-[40px] text-center min-w-[150px] flex items-center justify-center '
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WarningPopUp;
