import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedRoute from '../components/UI/AnimatedRoute';
import { AnimatePresence } from 'framer-motion';
import Select from 'react-select';
import axios from 'axios';

const RegisterScreen = () => {
  const [fullname, setfullname] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [Date, setDate] = useState('');
  const [error, setError] = useState('');
  const [KimlikNo, setKimlikNo] = useState('');
  const [KimlikType, setKimlikType] = useState('Tc Kimlik No');

  const handleFullnameChange = (e) => {
    const inputValue = e.target.value;
    const alphabeticValue = inputValue.replace(/[^a-zA-ZğüşıöçĞÜŞİÖÇ\s]/g, ''); // Sadece harf ve boşluk karakterlerini al
    setfullname(alphabeticValue.slice(0, 25));
  };

  const Userinfo = {
    fullname: fullname,
    phone: phone,
    country: country,
    email: email,
    password: password,
    gender: gender,
    Date: Date,
  };
  console.log(Userinfo);

  const GenderTypes = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
  ];

  const navigate = useNavigate();

  const handlePhoneChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, ''); // Sadece sayıları al
    const formattedValue = numericValue.replace(
      /(\d{1,2})(\d{1,3})(\d{1,3})(\d{1,2})/,
      '+$1 $2 $3 $4'
    );
    setPhone(formattedValue.slice(0, 16));
  };

  const handleAddressChange = (e) => {
    setCountry(e.target.value.toString());
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value.toString());
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value.toString());
  };
  const handleDateChange = (e) => {
    setDate(e.target.value.toString());
  };

  const handleGenderChange = (e) => {
    setGender(e);
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    return passwordPattern.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullname || !phone || !country || !email || !password) {
      setError('Please fill out all fields.');
    } else if (!validatePassword(password)) {
      setError(
        'Password must be at least 8 characters long and contain at least one uppercase letter and one digit.'
      );
    } else {
      setError('');
      console.log({
        Userinfo,
      });
      /* axios
        .post('http://localhost:8181/auth/register', {
          fullName: fullname,
          phone: phone,
          country: country,
          email: email,
          password: password,
          gender: gender.value,
          dateOfBirth: Date,
          indentificationNumber: KimlikNo,
        })

        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        ); */

      navigate('/login');
    //}
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      height: 43,
      minWidth: 255,
    }),
  };

  const handleKimlikInput = (e) => {
    if (e.target.checked === true) {
      setKimlikType('Passport No');
    } else {
      setKimlikType('Tc Kimlik No');
    }
  };

  const handlekimlikChange = (e) => {
    setKimlikNo(e.target.value);
  };

  return (
    <>
      <div className='absolute mt-[89px]  top-0 left-0 w-full h-screen backdrop-blur-sm bg-black/30'>
        <div className='bg-third bg-cover  bg-no-repeat min-h-screen flex items-center justify-center '>
          <AnimatePresence mode='wait'>
            <AnimatedRoute>
              <div className='flex justify-center items-center my-20'>
                <div className='w-[500px]  max-w-md p-4 backdrop-blur-sm bg-white/60 rounded-lg shadow-lg'>
                  <h2 className='text-5xl font-bold mb-4 text-center font-Headlines'>
                    SignUp
                  </h2>
                  {error && <div className='text-red-500 mb-4'>{error}</div>}
                  <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                      <label
                        htmlFor='fullname'
                        className='block font-bold mb-2'
                      >
                        Full Name:
                      </label>
                      <input
                        type='text'
                        id='fullname'
                        value={fullname}
                        onChange={handleFullnameChange}
                        placeholder='Elon Musk'
                        className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300'
                      />
                    </div>

                    <div className='mb-4'>
                      <label htmlFor='phone' className='block font-bold mb-2'>
                        Phone:
                      </label>
                      <input
                        type='text'
                        id='phone'
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder='+90 555 555 55 55'
                        className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300'
                      />
                    </div>
                    <div className='mb-4'>
                      <label htmlFor='country' className='block font-bold mb-2'>
                        Country:
                      </label>
                      <input
                        type='text'
                        id='country'
                        value={country}
                        onChange={handleAddressChange}
                        placeholder='America'
                        className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300'
                      />
                    </div>
                    <div className=''>
                      <label className='block font-bold mb-2'>
                        {KimlikType}:
                      </label>
                      <input
                        type='text'
                        inputMode='numeric'
                        value={KimlikNo}
                        onChange={handlekimlikChange}
                        placeholder='Your ID number'
                        className='  w-full font-normal px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300'
                      />
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
                    <div className='mb-4'>
                      <label
                        htmlFor='trip'
                        className='font-Headlines text-gray-700'
                      >
                        Gender:
                        <Select
                          options={GenderTypes}
                          id='trip'
                          placeholder='Please select your trip type'
                          value={gender}
                          required
                          className=' row-start-1'
                          onChange={handleGenderChange}
                          styles={customStyles}
                        ></Select>
                      </label>
                    </div>
                    <div className='mb-4'>
                      <label htmlFor='date' className='block font-bold mb-2'>
                        Date of birth:
                      </label>

                      <input
                        type='date'
                        name='date'
                        id='date'
                        onChange={handleDateChange}
                        className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300'
                      />
                    </div>
                    <div className='mb-4'>
                      <label htmlFor='email' className='block font-bold mb-2'>
                        Email:
                      </label>
                      <input
                        type='email'
                        id='email'
                        value={email}
                        onChange={handleEmailChange}
                        placeholder='elonmusk@example.com'
                        className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300'
                      />
                    </div>
                    <div className='mb-4'>
                      <label
                        htmlFor='password'
                        className='block font-bold mb-2'
                      >
                        Password:
                      </label>
                      <input
                        type='password'
                        id='password'
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder='Enter your password'
                        className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300'
                      />
                    </div>
                    <button
                      type='submit'
                      onClick={(e) => {
                        handleSubmit(e);
                      }}
                      className='w-full px-4 py-2  bg-primary-color text-white rounded-lg  hover:scale-[105%] hover:bg-primary-color-light'
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </AnimatedRoute>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default RegisterScreen;
