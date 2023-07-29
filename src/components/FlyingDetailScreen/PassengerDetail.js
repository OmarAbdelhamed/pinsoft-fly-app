import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDetail } from '../../app/flyDetailSlice';

const PassengerDetail = () => {
  const [KimlikType, setKimlikType] = useState('Tc Kimlik No');
  const [passengerDetail, setPassengerDetail] = useState({
    name: '',
    surname: '',
  });

  const dispatch = useDispatch();

  console.log(passengerDetail);
  useEffect(() => {
    dispatch(setDetail(passengerDetail));
  }, [passengerDetail, dispatch]);

  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    const alphabeticValue = inputValue.replace(/[^a-zA-ZğüşıöçĞÜŞİÖÇ\s]/g, '');
    setPassengerDetail({
      ...passengerDetail,
      name: alphabeticValue.slice(0, 25),
    });
  };

  const handleSurnameChange = (e) => {
    const inputValue = e.target.value;
    const alphabeticValue = inputValue.replace(/[^a-zA-ZğüşıöçĞÜŞİÖÇ\s]/g, '');
    setPassengerDetail({
      ...passengerDetail,
      surname: alphabeticValue.slice(0, 25),
    });
  };

  const handleKimlikInput = (e) => {
    if (e.target.checked === true) {
      setKimlikType('Passport No');
    } else {
      setKimlikType('Tc Kimlik No');
    }
  };

  return (
    <div className='border p-10 relative shadow-xl bg-white rounded-lg h-auto max-w-[1200px] flex flex-col justify-center items-center'>
      <h2 className='text-2xl font-bold mb-4 text-center'>Passenger Details</h2>
      <div className='w-[400px]'>
        <p>1. Passenger</p>
        <div className='flex flex-col justify-center gap-3 items-center relative'>
          <div className='absolute top-0 left-[75px]'>
            <div className=' flex flex-row'>
              <input type='radio' name='gender' id='Male' className=' mr-1' />
              <label htmlFor='' className='text-right'>
                Male
              </label>
              <input
                type='radio'
                name='gender'
                id='Female'
                className='mr-1 ml-3 '
              />
              <label htmlFor=''>Female</label>
            </div>
          </div>
          <div className='App flex justify-center items-center mt-[30px] '>
            <label className='relative cursor-pointer'>
              <input
                type='text'
                placeholder='Name'
                value={passengerDetail.name}
                onChange={handleNameChange}
                className='  w-[255px] h-[44px] text-[20px] p-2 text-slate-600 border-slate-400 border rounded border-opacity-50 outline-none focus:border-slate-400 placeholder-gray-300 placeholder-opacity-0 transition duration-200'
              />
              <span className='text-2xl  text-black text-opacity-50 bg-white absolute left-2 top-1 px-1 transition duration-200 input-text'>
                Name
              </span>
            </label>
          </div>
          <div className='App flex justify-center items-center '>
            <label className='relative cursor-pointer'>
              <input
                type='text'
                placeholder='Surname'
                value={passengerDetail.surname}
                onChange={handleSurnameChange}
                className='  w-[255px] h-[44px] text-[20px] p-2 text-slate-600 border-slate-400 border rounded border-opacity-50 outline-none focus:border-slate-400 placeholder-gray-300 placeholder-opacity-0 transition duration-200'
              />
              <span className='text-2xl  text-black text-opacity-50 bg-white absolute left-2 top-1 px-1 transition duration-200 input-text'>
                Surname
              </span>
            </label>
          </div>
          <div className='mb-4 flex flex-col min-w-[255px]'>
            <label htmlFor='date'></label>
            Date of birth
            <input
              type='date'
              name='date'
              id='date'
              className='border p-2  rounded'
            />
          </div>
          <div className='App flex justify-center items-center '>
            <label className='relative cursor-pointer'>
              <input
                type='text'
                inputMode='numeric'
                placeholder={KimlikType}
                className='  w-[255px] numberF appearance-none h-[44px] text-[20px] p-2 text-slate-600 border-slate-400 border rounded border-opacity-50 outline-none focus:border-slate-400 placeholder-gray-300 placeholder-opacity-0 transition duration-200'
              />
              <span className='text-2xl  text-black text-opacity-50 bg-white absolute left-2 top-1 px-1 transition duration-200 input-text'>
                {KimlikType}
              </span>
            </label>
          </div>
          <div className='mb-4 mr-6'>
            <input
              type='checkbox'
              name=''
              id=''
              className='mr-2'
              onChange={(e) => {
                handleKimlikInput(e);
              }}
            />
            <label htmlFor=''>Im not a Turkish citizen</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerDetail;
