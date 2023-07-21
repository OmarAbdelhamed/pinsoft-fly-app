import React from 'react';
import headImg from '../assets/img/header.jpg';
import HomeForm from '../components/HomeScreen/HomeForm';
import Footer from '../components/UI/footer';

const HomeScreen = () => {
  return (
    <>
      <header className=' max-w-[1200px] m-auto px-4 py-20 text-center text-[3rem] leading-[4rem] min-h-[100vh] flex flex-col justify-center items-center'>
        <h1 className=' text-center text-[5rem] font-bold text-text-dark leading-[4rem] font-Headlines  '>
          Find And Book
          <br />A Great Experience
        </h1>
        <img src={headImg} alt='header' className='w-[100%]' />
      </header>
      <div className='bg-first bg-cover bg-fixed  min-h-[100hv]'>
        <div
          id='book'
          className=' lg:px-[100px] relative min-h-[920px] flex flex-col justify-center gap-[200px]'
        >
          <h1 className=' text-center text-[2.5rem] mt-4 px-4 font-semibold  text-white  '>
            FLY to the place of your dreams
          </h1>
          <div className=''>
            <HomeForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeScreen;
