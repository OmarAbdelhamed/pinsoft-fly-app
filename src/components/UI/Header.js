import React, { useState, useEffect } from 'react';
import { GiLibertyWing } from 'react-icons/gi';

const Header = () => {
  const [top, setTop] = useState(true);
  const [mobileNavbar, setMobileNavbar] = useState(true);
  const [toggleMobileNavbar, setToggleMobileNavbar] = useState(false);


  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
  

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  // if (mobileNavbar) {
  //   return (
  //     <div>
  //       <div className="flex  items-center justify-between px-8 mt-2">
  //         <div className=" text-[1.5rem] font-semibold justify-center text-text-dark">
  //           FLYBilet
  //         </div>
  //         <i
  //           onClick={() => setToggleMobileNavbar((prev) => !prev)}
  //           class="ri-menu-line text-2xl"
  //         ></i>
  //       </div>
  //       {toggleMobileNavbar && (
  //         <div className="text-xl w-full bg-[url('./../public/clouds.jpg')] text-center font-bold">
  //           <ul>
  //             <li >
  //               <a href="/">Home</a>
  //             </li>
  //             <li>
  //               <a href="/">About</a>
  //             </li>
  //             <li>
  //               <a href="/">Offers</a>
  //             </li>
  //             <li>
  //               <a href="/">Seats</a>
  //             </li>
  //             <li>
  //               <a href="/">Destinations</a>
  //             </li>
  //           </ul>
  //         </div>
  //       )}
  //     </div>
  //   );
  // }

  return (
    <>
      <nav
        className={`max-w-auto m-auto pl-10 md:px-[175px] py-4 flex items-center justify-between text-center sticky left-0 top-0 right-0  ${
          !top && `bg-white shadow-lg`
        } sm:px-[265px] lg:px-[300px] z-20  `}
      >
        <div className='text-[1.5rem] font-semibold justify-center items-center gap-1 text-primary-color-dark flex flex-row'>
          <GiLibertyWing  className=''/>
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
