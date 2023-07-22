import React from 'react';
import 'remixicon/fonts/remixicon.css';
import { GiLibertyWing } from 'react-icons/gi';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-t from-black to-[#1a0f39] shadow-inner '>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-20 max-w-[1200px] m-auto px-20 py-4'>
        <div className='text-extra-light'>
          <h3 className='text-xl font-semibold mb-3 flex items-center gap-1'><GiLibertyWing  className=''/>FLYBilet</h3>
          <p>
            Where Excellence Takes Flight. With a strong commitment to customer
            satisfaction and a passion for air travel.
          </p>
          <br />
          <p>
            From friendly smiles to state-of-the-art aircraft, we connect the
            world, ensuring safe, comfortable, and unforgettable experiences.
          </p>
        </div>
        <div className='text-extra-light'>
          <h4 className='text-lg font-semibold mb-3'>INFORMATION</h4>
          <p>Home</p>
          <p>About</p>
          <p>Offers</p>
          <p>Seats</p>
          <p>Destinations</p>
        </div>
        <div className='text-extra-light'>
          <h4 className='text-lg font-semibold mb-3'>CONTACT</h4>
          <p>Support</p>
          <p>Media</p>
          <p>Socials</p>
        </div>
      </div>
      <div className='flex items-center justify-around  gap-4 border-t border-gray-200 p-2 section__container'>
        <p className='text-xs text-center text-extra-light'>
          Copyright © 2023 FLYBilet. All rights reserved.
        </p>
        <div className='flex items-center gap-4'>
          <span className='text-xl text-extra-light'>
            <i className='ri-facebook-fill'></i>
          </span>
          <span className='text-xl text-extra-light'>
            <i className='ri-twitter-fill'></i>
          </span>
          <span className='text-xl text-extra-light'>
            <i className='ri-instagram-line'></i>
          </span>
          <span className='text-xl text-extra-light'>
            <i className='ri-youtube-fill'></i>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
