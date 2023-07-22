import React from 'react';
import headImg from '../assets/img/header.jpg';
import HomeForm from '../components/HomeScreen/HomeForm';
import Footer from '../components/UI/footer';
import { GiLibertyWing } from 'react-icons/gi';
import { MdArrowDropDownCircle } from 'react-icons/md';

const HomeScreen = () => {
  //makes the scrolling smooth
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });

  return (
    <>
      <header className=' max-w-[1200px] m-auto px-4 py-20 text-center text-[3rem] leading-[4rem] min-h-[100vh] flex flex-col justify-center items-center'>
        <h1 className=' text-center text-[5rem] font-bold text-text-dark leading-[4rem] font-Headlines  '>
          Find And Book
          <br />A Great Experience
        </h1>
        <img src={headImg} alt='header' className='w-[100%]' />
        <a href='#book' className=''>
          <MdArrowDropDownCircle className='relative top-10 h-[75px] w-[75px] text-primary-color-dark animate-bounce' />
        </a>
      </header>
      <div className='bg-first bg-cover bg-fixed  min-h-[100hv]'>
        <div
          id='book'
          className=' lg:px-[100px] relative min-h-[920px] flex flex-col items-center justify-center gap-[140px]'
        >
          <div className='flex flex-row items-center justify-center mt-10'>
            <GiLibertyWing className='text-[200px] drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]  shadow-white rounded-3xl text-white' />
            <h1 className=' text-center text-[4rem] mt-4 px-4 font-semibold leading-[60px] w-[500px] text-white font-Headlines  '>
              FLY to the place of your dreams
            </h1>
          </div>
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
