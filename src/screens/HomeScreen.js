import React, { useState } from 'react';
import FlyList from '../components/FlyListScreen/FlyList';
import FlyListScreen from './FlyListScreen';

const HomeScreen = () => {
  const [ticketType, setTicketType] = useState('');
  const [isSearch , setIsSearch] = useState(false)

  const ticketTypeHandler = (e) => {
    setTicketType(e.target.value);
  };

  return (
    <div className='px-[160px]'>
      <h5 className=' text-center text-2xl pt-2 '> FLYBilet</h5>
      <h1 className=' text-center text-4xl p-4'>
        {' '}
        Fly to the place of your dreams{' '}
      </h1>
      <div className=' bg-[#d9d9d9] rounded'>
        <h2 className='text-lg font-bold mb-4  text-center '>
          Search for Flights
        </h2>
        <form className='flex flex-row gap-4 max-w-auto mb-4 '>
          <label for='trip'>Trip Type:</label>
          <select
            id='trip'
            name='trip'
            required
            onChange={ticketTypeHandler}
            className='border border-gray-300 rounded-md p-2'
          >
            <option value='one-way'>One-way</option>
            <option value='round-trip'>Round Trip</option>
          </select>
          <label for='from'>From:</label>
          <input
            type='text'
            id='from'
            name='from'
            required
            className='input'
            placeholder='from'
          />

          <label for='to'>To:</label>
          <input
            type='text'
            id='to'
            name='to'
            required
            className='input'
            placeholder='to'
          />

          <label for='date'>Date:</label>
          <input type='date' id='date' name='date' required className='input' />

          {ticketType === 'round-trip' && (
            <>
              <label htmlFor='returnDate'>Return Date:</label>
              <input
                type='date'
                id='returnDate'
                name='returnDate'
                required
                className='border border-gray-300 rounded-md p-2'
              />
            </>
          )}

          <label for='passengers'>Number of Passengers:</label>
          <input
            type='number'
            id='passengers'
            name='passengers'
            min='1'
            required
            className='input'
          />

          <button
            type='button'
            className='bg-gray-900 text-white p-2 rounded-md'
            onClick={()=>setIsSearch(true)}
          >
            Search
          </button>
        </form>
        {isSearch && <FlyListScreen />}
        <footer class='bg-gray-100 p-2 text-center'>
          <p>&copy; 2023 flyBilet Website. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default HomeScreen;
