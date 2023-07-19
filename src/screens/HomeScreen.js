import React from 'react';

import HomeForm from '../components/HomeScreen/HomeForm';

const HomeScreen = () => {
  return (
    <div className='px-[200px]'>
      <h5 className=' text-center text-2xl pt-2 '> FLYBilet</h5>
      <h1 className=' text-center text-4xl p-4'>
        {' '}
        Fly to the place of your dreams{' '}
      </h1>
      <div className=' bg-[#d9d9d9] rounded'>
        <h2 className='text-lg font-bold mb-4  text-center '>
          Search for Flights
        </h2>
        <HomeForm />
        <footer className='bg-gray-100 p-2 text-center'>
          <p>&copy; 2023 flyBilet Website. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default HomeScreen;
