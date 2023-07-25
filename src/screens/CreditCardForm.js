import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

const CreditCardForm = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <div className='-mt-2'>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form className='flex flex-col items-center justify-center '>
        <div className='  mb-3 mt-4 '>
          <input
            type='tel'
            name='number'
            className=' w-[255px]  border focus:border-none rounded-lg h-[44px] p-2'
            placeholder='Card Number'
            pattern='[\d| ]{16,22}'
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className=' mb-3 '>
          <input
            type='text'
            name='name'
            className=' w-[255px] border rounded-lg h-[44px] p-2'
            placeholder='Name'
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className='mb-3 '>
          <div className='col-6'>
            <input
              type='tel'
              name='expiry'
              className=' w-[255px] border rounded-lg h-[44px] p-2'
              placeholder='Valid Thru'
              pattern='\d\d/\d\d'
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className='col-6 mb-1 mt-3 '>
            <input
              type='tel'
              name='cvc'
              className='form-control text-lg border rounded-lg w-[50px] h-[35px] p-2'
              placeholder='CVC'
              pattern='\d{3,4}'
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreditCardForm;
