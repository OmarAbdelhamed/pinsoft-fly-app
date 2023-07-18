import React from 'react';

const Header = () => {
  return (
    <header className='flex justify-between bg-gray-100 py-[20px] px-[50px] shadow-md shadow-gray-400'>
      <a href='/' className='li'>logo</a>
      <nav>
        <ul className='flex justify-between'>
          <li>
            <a href='/' className='li'>Home</a>
          </li>
          <li>
            <a href='/' className='li'>About us</a>
          </li>
          <li>
            <a href='/' className='li'>FAQ</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
