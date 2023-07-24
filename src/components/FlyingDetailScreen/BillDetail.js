import React, { useState } from 'react';

const BillDetail = () => {
  const [KimlikType, setKimlikType] = useState('Tc Kimlik No');

  const handleKimlikInput = (e) => {
    if (e.target.checked === true) {
      setKimlikType('Passport No');
    } else {
      setKimlikType('Tc Kimlik No');
    }
  };

  return (
    <div className=''>
      <h2 className='text-2xl text-center font-bold mb-4 font-Headlines'>
        Billing Information
      </h2>
      <div className='mb-4'>
        <input type='radio' name='h' id='sahis' className='mr-1' />
        <label htmlFor='sahis' className='mr-4'>
          Individual
        </label>
        <input type='radio' name='h' id='sirket' className='mr-1' />
        <label htmlFor='sirket' className='mr-4'>
          Company
        </label>
        <input type='radio' name='h' id='sahisSirketi' className='mr-1' />
        <label htmlFor='sahisSirketi'>Student</label>
      </div>
      <div className='flex flex-row gap-2 items-center justify-center'>
        <input
          type='text'
          placeholder='Name'
          className='border border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring focus:border-blue-300'
        />
        <input
          type='text'
          placeholder='Surname'
          className='border border-gray-300 rounded-md py-2 px-4 mb-4  focus:outline-none focus:ring focus:border-blue-300'
        />
        <input
          type='text'
          placeholder={KimlikType}
          className='border border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring focus:border-blue-300'
        />
        <input
          type='checkbox'
          id='tcdegilim'
          onChange={(e) => {
            handleKimlikInput(e);
          }}
          className=''
        />
        <label htmlFor='tcdegilim'>Im not a Turkish citizen</label>
      </div>
      <div>
        <h2 className='text-2xl font-semibold mb-6'>Billing Address</h2>
        <form>
          <div className='mb-4'>
            <label
              htmlFor='address'
              className='block text-sm font-medium text-gray-700'
            >
              Address
            </label>
            <input
              type='text'
              id='address'
              className='mt-1 p-2 w-full border rounded-md'
              placeholder='123 Main St'
            />
          </div>
          <div className='grid grid-cols-2 gap-4 mb-4'>
            <div>
              <label
                htmlFor='city'
                className='block text-sm font-medium text-gray-700'
              >
                City
              </label>
              <input
                type='text'
                id='city'
                className='mt-1 p-2 w-full border rounded-md'
                placeholder='New York'
              />
            </div>
            <div>
              <label
                htmlFor='zip'
                className='block text-sm font-medium text-gray-700'
              >
                ZIP Code
              </label>
              <input
                type='text'
                id='zip'
                className='mt-1 p-2 w-full border rounded-md'
                placeholder='10001'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='country'
              className='block text-sm font-medium text-gray-700'
            >
              Country
            </label>
            <input
              type='text'
              id='country'
              className='mt-1 p-2 w-full border rounded-md mb-4'
              placeholder='United States'
            />
          </div>
        </form>
      </div>

      <p>Make Sure every information you write here is right!</p>
    </div>
  );
};

export default BillDetail;
