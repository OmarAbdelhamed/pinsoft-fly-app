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

  return (
    <>
      <nav
        className={`max-w-auto m-auto pl-10 md:px-[175px] py-4 flex items-center justify-between text-center sticky left-0 top-0 right-0  ${
          !top && `bg-white shadow-lg`
        } sm:px-[265px] lg:px-[300px] z-[1000]  `}
      >
        <a href='/home'>
          <div className='text-[1.5rem] font-semibold justify-center items-center gap-1 text-primary-color-dark flex flex-row'>
            <GiLibertyWing className='' />
            FLYBilet
          </div>
        </a>
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
                <li className='menu-item  hover:bg-[#23265f] hover:text-white m-1 rounded-lg'>
                  <a href='/profile'>
                    <div className='flex flex-row items-center gap-1 px-2 py-2'>
                      <MdSupervisedUserCircle className='text-xl' />
                      <span>Profile</span>
                    </div>
                  </a>
                </li>

                <hr className='' />
                <li className='menu-item hover:bg-[#23265f] hover:text-white m-1 rounded-lg'>
                  <a href='/mytickets'>
                    <div className='flex flex-row items-center gap-1 px-2 py-2'>
                      <MdAirplaneTicket className='text-xl' />
                      <span>Tickets</span>
                    </div>
                  </a>
                </li>
                <hr />
                <li className='menu-item hover:bg-[#23265f] hover:text-white m-1 rounded-lg'>
                  <a href='/login'>
                    <div className='flex flex-row items-center gap-1  px-2 py-2 '>
                      <MdLogout className='text-xl' />
                      <span>Logout</span>
                    </div>
                  </a>
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
