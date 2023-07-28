import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedRoute from '../components/UI/AnimatedRoute';
import { AnimatePresence } from 'framer-motion';

const RegisterScreen = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleFirstnameChange = (e) => {
    const inputValue = e.target.value;
    const alphabeticValue = inputValue.replace(/[^a-zA-ZğüşıöçĞÜŞİÖÇ\s]/g, ''); // Sadece harf ve boşluk karakterlerini al
    setFirstname(alphabeticValue.slice(0,25));
  };

  const handleLastnameChange = (e) => {
    const inputValue = e.target.value;
    const alphabeticValue = inputValue.replace(/[^a-zA-ZğüşıöçĞÜŞİÖÇ\s]/g, ''); // Sadece harf ve boşluk karakterlerini al
    setLastname(alphabeticValue.slice(0,25));
  };

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
    setAddress(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    return passwordPattern.test(password);
  };

  const redirectToLogin = () => {
    navigate('/login');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !phone || !address || !email || !password) {
      setError('Please fill out all fields.');
    } else if (!validatePassword(password)) {
      setError(
        'Password must be at least 8 characters long and contain at least one uppercase letter and one digit.'
      );
    } else {
      setError('');
      console.log({
        firstname,
        lastname,
        phone,
        address,
        email,
        password,
      });
      redirectToLogin();
    }
  };

  const navigate = useNavigate();
  
  return (
    <>
      <div className='absolute mt-[89px]  top-0 left-0 w-full h-screen backdrop-blur-sm bg-black/30'></div>
      <div className='bg-third bg-cover  bg-no-repeat min-h-screen flex items-center justify-center '>
        <AnimatePresence mode='wait'>
          <AnimatedRoute>
            <div className='flex justify-center items-center'>
              <div className='w-[500px]  max-w-md p-4 backdrop-blur-sm bg-white/60 rounded-lg shadow-lg'>
                <h2 className='text-5xl font-bold mb-4 text-center font-Headlines'>
                  SignUp
                </h2>
                {error && <div className='text-red-500 mb-4'>{error}</div>}
                <form onSubmit={handleSubmit}>
                  <div className='mb-4'>
                    <label htmlFor='firstname' className='block font-bold mb-2'>
                      First Name:
                    </label>
                    <input
                      type='text'
                      id='firstname'
                      value={firstname}
                      onChange={handleFirstnameChange}
                      placeholder='Elon'
                      className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300'
                    />
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='lastname' className='block font-bold mb-2'>
                      Last Name:
                    </label>
                    <input
                      type='text'
                      id='lastname'
                      value={lastname}
                      onChange={handleLastnameChange}
                      placeholder='Musk'
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
                    <label htmlFor='address' className='block font-bold mb-2'>
                      Address:
                    </label>
                    <input
                      type='text'
                      id='address'
                      value={address}
                      onChange={handleAddressChange}
                      placeholder='California / America'
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
                    <label htmlFor='password' className='block font-bold mb-2'>
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
                    onClick={handleSubmit}
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
    </>
  );
};

export default RegisterScreen;
