import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedRoute from '../components/UI/AnimatedRoute';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function emailHandler(e) {
    setEmail(e.target.value);
  }
  function passwordHandler(e) {
    setPassword(e.target.value);
  }

  const homeHandler = () => {
    navigate('/home');
  };

  return (
    <>
      <div className='absolute mt-[89px]  top-0 left-0 w-full h-screen backdrop-blur-sm bg-black/30'></div>
      <div className='bg-third bg-cover   bg-no-repeat min-h-screen flex items-center justify-center '>
        <AnimatePresence mode='wait'>
          <AnimatedRoute>
            <div className='flex flex-col mt-36 justify-center items-center'>
              <div className='p-4 -mt-[150px] backdrop-blur-sm bg-white/60 shadow-xl relative rounded-lg border flex flex-col justify-center items-center w-[500px] h-[400px]'>
                <p className='text-[40px]  font-bold mb-10 text-center font-Headlines'>
                  Login to your Account
                </p>
                <form>
                  <div className='flex flex-col justify-center gap-3 items-center mb-4'>
                    <div className='App flex justify-center items-center '>
                      <label className='relative cursor-pointer'>
                        <input
                          type='email'
                          placeholder='Email'
                          onChange={emailHandler}
                          className='  w-[255px] h-[44px] text-[20px] p-2 text-slate-600 border-slate-400 border-2 rounded-lg border-opacity-50 outline-none focus:border-none placeholder-gray-300 placeholder-opacity-0 transition duration-200'
                        />
                        <span className='text-2xl cursor-text  text-black text-opacity-50 bg-transparent absolute left-2 top-1 px-1 transition duration-200 input-text'>
                          Email
                        </span>
                      </label>
                    </div>
                    <div className='App flex justify-center items-center '>
                      <label className='relative cursor-pointer'>
                        <input
                          type='Password'
                          placeholder='Password'
                          onChange={passwordHandler}
                          className='  w-[255px] h-[44px] text-[20px] p-2 text-slate-600 border-slate-400 border-2 rounded-lg border-opacity-50 outline-none focus:border-none placeholder-gray-300 placeholder-opacity-0 transition duration-200'
                        />
                        <span className='text-2xl cursor-text  text-black text-opacity-50 bg-transparent absolute left-2 top-1 px-1 transition duration-200 input-text'>
                          Password
                        </span>
                      </label>
                    </div>
                  </div>
                </form>
                <div className=' -mt-3 mb-4'>
                  <input type='checkbox' name='' id='' className='mr-2' />
                  <label htmlFor='' className='text-sm'>
                    Remember Me
                  </label>
                </div>
                <button
                  onClick={homeHandler}
                  type='submit'
                  className=' text-center  w-[255px] h-[44px] bg-primary-color p-2 text-white rounded-md m-1 hover:scale-[105%] hover:bg-primary-color-light'
                >
                  Login
                </button>
                <Link to='/register' className=' text-primary-color'>
                  Create account
                </Link>
              </div>
            </div>
          </AnimatedRoute>
        </AnimatePresence>
      </div>
    </>
  );
}
