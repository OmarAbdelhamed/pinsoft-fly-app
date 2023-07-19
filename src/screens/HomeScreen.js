import React from 'react';
import headImg from '../assets/img/header.jpg';
import HomeForm from '../components/HomeScreen/HomeForm';
import Footer from '../components/UI/footer';

const HomeScreen = () => {
  return (
    <>
      <header className=' max-w-[1200px] m-auto px-4 py-20 text-center text-[3rem] leading-[4rem] min-h-[920px] flex flex-col justify-center items-center'>
        <h1 className=' text-center text-[2.5rem] font-bold text-text-dark leading-[4rem]  '>
          Find And Book
          <br />A Great Experience
        </h1>
        <img src={headImg} alt='header' className='w-[100%]' />
      </header>
      <div className='bg-first bg-no-repeat bg-cover'>
        <div
          id='book'
          className='px-[200px] relative min-h-[920px] flex flex-col justify-center gap-[200px]'
        >
          <h1 className=' text-center text-[2.5rem] font-semibold  text-white  '>
            FLY to the place of your dreams
          </h1>
          <div className=' bg-[#d9d9d9] rounded p-4 '>
            <h2 className='text-lg font-bold mb-4  text-center '>
              Search for Flights
            </h2>
            <HomeForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeScreen;
