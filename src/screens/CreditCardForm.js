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
    if (name === 'name') {
      const cleanedValue = value.replace(/[^a-zA-ZğüşıöçĞÜŞİÖÇ\s]/g, '');
      setState((prev) => ({ ...prev, [name]: cleanedValue }));
    } else if (name === 'expiry') {
      const cleanedValue = value.replace(/\D/g, '');
      const formattedValue = cleanedValue.slice(0, 4).replace(/(\d{2})/, '$1/');
      setState((prev) => ({ ...prev, [name]: formattedValue }));
    } else if (name === 'number') {
      const cleanedValue = value.replace(/\D/g, '');
      const truncatedValue = cleanedValue.slice(0, 16);
      const formattedValue = truncatedValue.replace(/(\d{4})/g, '$1 ').trim();
      setState((prev) => ({ ...prev, [name]: formattedValue }));
    } else {
      const cleanedValue = value.replace(/\D/g, '');
      const truncatedValue = cleanedValue.slice(0, 3);
      const formattedValue = truncatedValue.replace(/(\d{3})/g, '$1 ').trim();
      setState((prev) => ({ ...prev, [name]: formattedValue }));
    }
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
        className
      />
      <form className='grid grid-flow-row grid-cols-2 gap-2 place-content-center  items-center  '>
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
            value={state.number}
          />
        </div>
        <div className=' mb-3 mt-4 '>
          <input
            type='text'
            name='name'
            className=' w-[255px] border rounded-lg h-[44px] p-2'
            placeholder='Name'
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            value={state.name}
          />
        </div>
        <div className='mb-3 '>
          <div className=''>
            <input
              type='tel'
              name='expiry'
              className=' w-[255px] border rounded-lg h-[44px] p-2'
              placeholder='Valid Thru'
              pattern='\d\d/\d\d'
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              value={state.expiry}
            />
          </div>
          <div className=' mb-1 mt-3 '>
            <input
              type='tel'
              name='cvc'
              className='form-control text-lg border rounded-lg w-[50px] h-[35px] p-2'
              placeholder='CVC'
              pattern='\d{3,4}'
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              value={state.cvc}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreditCardForm;
