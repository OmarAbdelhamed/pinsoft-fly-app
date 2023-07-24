import React, { useState, useEffect } from 'react';
import { GiLibertyWing } from 'react-icons/gi';
import userAvatar from '../../assets/img/UserAvatar.png';
import {
  MdLogout,
  MdAirplaneTicket,
  MdSupervisedUserCircle,
} from 'react-icons/md';

const Header = () => {
  const [top, setTop] = useState(true);
  const [mobileNavbar, setMobileNavbar] = useState(true);
  const [toggleMobileNavbar, setToggleMobileNavbar] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

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
          <GiLibertyWing className='' />
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
        <div>
          <button type='button' onClick={handleOpen}>
            <img
              src={userAvatar}
              alt='user'
              className='min-w-[50px] p-2 min-h-[50px]  h-[50px] w-[50px] rounded-full border-2 hover:bg-slate-200 cursor-pointer'
            />
          </button>
          <div className='dropdown flex flex-col absolute  '>
            {open ? (
              <ul className='menu  text-left bg-white cursor-pointer rounded-lg border w-auto p-2 '>
                <li className='menu-item px-2 py-2 hover:bg-[#23265f] hover:text-white m-1 rounded-lg'>
                  <div className='flex flex-row items-center gap-1'>
                    <MdSupervisedUserCircle className='text-xl' />
                    <span>Profile</span>
                  </div>
                </li>
                <hr className='' />
                <li className='menu-item px-2 py-2  hover:bg-[#23265f] hover:text-white m-1 rounded-lg'>
                  <div className='flex flex-row items-center gap-1'>
                    <MdAirplaneTicket className='text-xl' />
                    <span>Tickets</span>
                  </div>
                </li>
                <hr />
                <li className='menu-item px-2 py-2 hover:bg-[#23265f] hover:text-white m-1 rounded-lg'>
                  <div className='flex flex-row items-center gap-1'>
                    <MdLogout className='text-xl' />
                    <span>Logout</span>
                  </div>
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
