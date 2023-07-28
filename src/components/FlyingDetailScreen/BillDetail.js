import React, { useState } from 'react';

const BillDetail = () => {
  const [KimlikType, setKimlikType] = useState('Tc Kimlik No');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country ,setCountry] = useState('');


  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    const alphabeticValue = inputValue.replace(/[^a-zA-ZğüşıöçĞÜŞİÖÇ\s]/g, '');
    setName(alphabeticValue.slice(0,25));
  };

  const handleSurnameChange = (e) => {
    const inputValue = e.target.value;
    const alphabeticValue = inputValue.replace(/[^a-zA-ZğüşıöçĞÜŞİÖÇ\s]/g, '');
    setSurname(alphabeticValue.slice(0,25));
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCityChange = (e) => {
    const inputValue = e.target.value;
    const alphabeticValue = inputValue.replace(/[^a-zA-ZğüşıöçĞÜŞİÖÇ\s]/g, '');
    setCity(alphabeticValue.slice(0,25))
  };

  const handleZipCodeChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, '');
    setZipCode(numericValue.slice(0,5))
  }
  
  const handleCountryChange = (e) => {
    const inputValue = e.target.value;
    const alphabeticValue = inputValue.replace(/[^a-zA-ZğüşıöçĞÜŞİÖÇ\s]/g, '');
    setCountry(alphabeticValue.slice(0,25));
  };

  const handleKimlikInput = (e) => {
    if (e.target.checked === true) {
      setKimlikType('Passport No');
    } else {
      setKimlikType('Tc Kimlik No');
    }
  };

  return (
    <div className="border p-10 relative shadow-xl bg-white rounded-lg h-auto max-w-[1200px] flex flex-col justify-center">
      <h2 className='text-4xl text-center font-bold mb-4 font-Headlines'>
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
          value={name}
          onChange={handleNameChange}
          className='border border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring focus:border-blue-300'
        />
        <input
          type='text'
          placeholder='Surname'
          value={surname}
          onChange={handleSurnameChange}
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
        <h2 className='text-3xl font-semibold mb-6 text-center font-Headlines'>
          Billing Address
        </h2>
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
              value={address}
              onChange={handleAddressChange}
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
                value={city}
                onChange={handleCityChange}
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
                value={zipCode}
                onChange={handleZipCodeChange}
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
              value={country}
              onChange={handleCountryChange}
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
