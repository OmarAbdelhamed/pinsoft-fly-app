import React, { useState, useEffect } from 'react';

const Header = () => {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <>
      <nav
        className={`max-w-auto m-auto px-[175px] py-4 flex items-center justify-between text-center sticky left-0 top-0 right-0  ${
          !top && `bg-white shadow-lg`
        } sm:px-[265px] lg:px-[300px] z-20  `}
      >
        <div className=' text-[1.5rem] font-semibold text-text-dark'>
          FLYBilet
        </div>
        <ul className=' list-none flex items-center gap-[2rem]'>
          <li className='li'>
            <a href='/'>Home</a>
          </li>
          <li className='li'>
            <a href='/'>About</a>
          </li>
          <li className='li'>
            <a href='/'>Offers</a>
          </li>
          <li className='li'>
            <a href='/'>Seats</a>
          </li>
          <li className='li'>
            <a href='/'>Destinations</a>
          </li>
        </ul>
        <button className='px-3 py-2 outline-none border-none text-lg font-medium text-white bg-primary-color rounded-2xl shadow-lg cursor-pointer transition duration-300 hover:bg-primary-color-dark max-h-[44px] min-w-[110px] hidden xl:inline-block '>
          <a href='#book' className=' scroll-smooth'>
            Book Now
          </a>
        </button>
      </nav>
    </>
  );
};

export default Header;
