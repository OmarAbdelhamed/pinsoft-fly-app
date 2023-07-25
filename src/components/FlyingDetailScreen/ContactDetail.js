import React from 'react';

const ContactDetail = () => {
  return (
    <div className='p-14 rounded-lg'>
      <p className='text-2xl font-bold mb-4 text-center'>Contact Information</p>
      <div className='flex flex-col justify-center gap-3 items-center mb-4'>
        <div className='App flex justify-center items-center '>
          <label className='relative cursor-pointer'>
            <input
              type='email'
              placeholder='Email'
              className='  w-[255px] h-[44px] text-[20px] p-2 text-slate-600 border-slate-400 border-2 rounded-lg border-opacity-50 outline-none focus:border-primary-color-dark placeholder-gray-300 placeholder-opacity-0 transition duration-200'
            />
            <span className='text-2xl cursor-text  text-black text-opacity-50 bg-transparent absolute left-2 top-1 px-1 transition duration-200 input-text'>
              Email
            </span>
          </label>
        </div>
        <div className='App flex justify-center items-center '>
          <label className='relative cursor-pointer'>
            <input
              type='tel'
              placeholder='Phone Number'
              className='  w-[255px] h-[44px] text-[20px] p-2 text-slate-600 border-slate-400 border-2 rounded-lg border-opacity-50 outline-none focus:border-primary-color-dark placeholder-gray-300 placeholder-opacity-0 transition duration-200'
            />
            <span className='text-2xl cursor-text  text-black text-opacity-50 bg-transparent absolute left-2 top-1 px-1 transition duration-200 input-text'>
              Phone Number
            </span>
          </label>
        </div>
      </div>
      <div className='flex items-center mb-4'>
        <input type='radio' name='' id='' className='mr-2' />
        <label htmlFor='' className='text-sm'>
          Fırsat ve kampanyalardan haberdar olmak istiyorum
        </label>
      </div>
    </div>
  );
};

export default ContactDetail;
