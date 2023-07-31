import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import FlyListScreen from '../../screens/FlyListScreen';
import WarningPopUp from './WarningPopUp';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPorts,
  getDepartureLegs,
  getReturnLegs,
} from '../../app/flyDataSlice';

const HomeForm = () => {
  const [ticketType, setTicketType] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [selectedOptionFrom, setSelectedOptionFrom] = useState();
  const [selectedOptionTo, setSelectedOptionTo] = useState();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedReturnDate, setSelectedReturnDate] = useState('');
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [filteredDepartureLegs, setFilteredDepartureLegs] = useState([]);
  const [filteredReturnLegs, setFilteredReturnLegs] = useState([]);

  const departureLegs = useSelector((state) => state.data.departureLegs);
  const returnLegs = useSelector((state) => state.data.returnLegs);

  const selectedDepFlight = useSelector(
    (state) => state.data.selectedDepFlight
  );
  const selectedRetFlight = useSelector(
    (state) => state.data.selectedRetFlight
  );

  //passengers dropdown starts here
  const popupRef = useRef();

  useEffect(() => {
    if (selectedDepFlight !== undefined) {
      setFilteredDepartureLegs([selectedDepFlight]);
    }
  }, [selectedDepFlight]);
  useEffect(() => {
    if (selectedRetFlight !== undefined) {
      setFilteredReturnLegs([selectedRetFlight]);
    }
  }, [selectedRetFlight]);

  const incrementCount = (type) => {
    if (type === 'adult') {
      setAdultCount((prevCount) => prevCount + 1);
    } else if (type === 'child') {
      setChildCount((prevCount) => prevCount + 1);
    }
  };

  const decrementCount = (type) => {
    if (type === 'adult' && adultCount > 1) {
      setAdultCount((prevCount) => prevCount - 1);
    } else if (type === 'child' && childCount > 0) {
      setChildCount((prevCount) => prevCount - 1);
    }
  };

  const totalCount = adultCount + childCount;

  const handleOutsideClick = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  //passengers dropdown ends here

  const dispatch = useDispatch();
  const portList = useSelector((state) => state.data.ports);

  useEffect(() => {
    dispatch(getPorts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getDepartureLegs());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getReturnLegs());
  }, [dispatch]);

  const customStyles = {
    control: (base) => ({
      ...base,
      height: 43,
      minWidth: 255,
    }),
  };

  const ports = portList.map((p) => ({
    label: p.explanation,
    value: p.code,
  }));

  const TktTypes = [
    { value: 'One Way', label: 'One-Way' },
    { value: 'Round-Trip', label: 'Round-Trip' },
  ];

  const ticketTypeHandler = (data) => {
    setTicketType(data);
  };

  function handleSelectFrom(data) {
    setSelectedOptionFrom(data);
  }

  function handleSelectTo(data) {
    setSelectedOptionTo(data);
  }
  function handleSelectedDate(e) {
    setSelectedDate(e.target.value);
  }
  function handleSelectedReturnDate(e) {
    setSelectedReturnDate(e.target.value);
  }

  const filteredOptionsTo = ports.filter(
    (p) => p.value !== selectedOptionFrom?.value
  );
  const filteredOptionsFrom = ports.filter(
    (p) => p.value !== selectedOptionTo?.value
  );

  const handleWarningClose = () => {
    setShowWarning(false);
  };

  const handleSearchClick = () => {
    if (!selectedOptionFrom || !selectedOptionTo || !selectedDate) {
      setShowWarning(true);
    } else {
      const filteredDepLegs = departureLegs.filter(
        (leg) =>
          leg.depPort.code === selectedOptionFrom.value &&
          leg.arrPort.code === selectedOptionTo.value &&
          leg.flightDate === selectedDate
      );

      const filteredRetLegs =
        ticketType.value === 'One Way'
          ? returnLegs.filter(
              (leg) =>
                leg.depPort.code === selectedOptionFrom.value &&
                leg.arrPort.code === selectedOptionTo.value &&
                leg.flightDate === selectedDate
            )
          : returnLegs.filter(
              (leg) =>
                leg.arrPort.code === selectedOptionFrom.value &&
                leg.depPort.code === selectedOptionTo.value &&
                leg.flightDate === selectedReturnDate
            );

      setFilteredDepartureLegs(filteredDepLegs);
      setFilteredReturnLegs(filteredRetLegs);
      console.log(filteredDepLegs);
      console.log(filteredRetLegs);
      setIsSearch(true);
    }
  };
  return (
    <>
      <div className='bg-[#d9d9d9] w-[360px] rounded py-4 my-3 px-2 h-auto w-auto mx-auto backdrop-blur-sm bg-white/30'>
        <h2 className='md:text-5xl text-4xl font-bold mb-4 text-center text-gray-100 font-Headlines'>
          Search for Flights
        </h2>
        <form className='grid grid-flow-row px-4 grid-cols-1 grid-rows-7 md:grid-cols-4 md:grid-rows-2 items-center gap-6 max-w-auto mb-4 bg-transparent place-items-center  '>
          <label htmlFor='trip' className='font-Headlines text-gray-700'>
            Trip Type:
            <Select
              options={TktTypes}
              id='trip'
              defaultValue={TktTypes[0]}
              placeholder='Please select your trip type'
              value={ticketType}
              required
              className=' '
              onChange={ticketTypeHandler}
              styles={customStyles}
            ></Select>
          </label>

          <label htmlFor='from' className='font-Headlines text-gray-700'>
            From:
            <Select
              isClearable
              options={filteredOptionsFrom}
              placeholder='select your destination'
              value={selectedOptionFrom}
              className=''
              onChange={handleSelectFrom}
              isSearchable={true}
              styles={customStyles}
            />
          </label>

          <label htmlFor='to' className='font-Headlines text-gray-700'>
            To:
            <Select
              isClearable
              options={filteredOptionsTo}
              placeholder='select your destination'
              value={selectedOptionTo}
              className=''
              onChange={handleSelectTo}
              isSearchable={true}
              styles={customStyles}
            />
          </label>

          <label htmlFor='date' className='font-Headlines text-gray-700 flex flex-col '>
            Date:
            <input
              type='date'
              id='date'
              name='date'
              onChange={(event) => {
                handleSelectedDate(event);
              }}
              required
              className=' border border-gray-300 rounded-md p-2 min-w-[255px]'
            />
          </label>

          {(ticketType.label === 'Round-Trip' && (
            <>
              <label
                htmlFor='returnDate'
                className='font-Headlines  text-gray-700 flex flex-col'
              >
                Return Date:
                <input
                  type='date'
                  id='returnDate'
                  name='returnDate'
                  onChange={(event) => {
                    handleSelectedReturnDate(event);
                  }}
                  required
                  className=' border border-gray-300 rounded-md p-2   min-w-[255px] '
                />
              </label>
            </>
          )) || (
            <>
              <label
                htmlFor='returnDate'
                className='font-Headlines  text-gray-700 flex flex-col '
              >
                Return Date:
                <input
                  type='text'
                  id='returnDate'
                  placeholder='One Way'
                  name='returnDate'
                  disabled
                  className='border border-gray-300 rounded-md p-2  min-w-[255px]'
                />
              </label>
            </>
          )}

          <div>
            <div className=''>
              <label
                htmlFor='total-count'
                className='font-medium text-gray-700 font-Headlines '
              >
                Passengers
              </label>
              <input
                id='total-count'
                name='total-count'
                type='text'
                className=' block w-full px-2 py-1 mt-1 text-base border border-gray-300 rounded-md cursor-pointer h-[43px] min-w-[255px]'
                value={totalCount}
                readOnly
                onClick={() => setShowPopup(!showPopup)}
              />
              {showPopup && (
                <div
                  className='absolute bg-white border border-gray-300 rounded-md shadow-lg'
                  style={{
                    width: '255px',
                    margin: '6px 0',
                    padding: '5px',
                  }}
                  ref={popupRef}
                >
                  <div className='flex justify-between items-center p-2'>
                    <label
                      htmlFor='adult-popup-select'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Adult
                    </label>
                    <div className='flex items-center'>
                      <button
                        type='button'
                        className='px-2 py-1 text-base border border-gray-300 rounded-l-md focus:outline-none hover:bg-[#1a0f8228]'
                        onClick={() => decrementCount('adult')}
                      >
                        -
                      </button>
                      <span className='px-4 py-1 text-base border-t border-b border-gray-300'>
                        {adultCount}
                      </span>
                      <button
                        type='button'
                        className='px-2 py-1 text-base border border-gray-300 rounded-r-md focus:outline-none hover:bg-[#1a0f8228]'
                        onClick={() => incrementCount('adult')}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className='flex justify-between p-2 items-center'>
                    <label
                      htmlFor='child-popup-select'
                      className='block text-sm font-medium text-gray-700 '
                    >
                      Child
                    </label>
                    <div className='flex items-center'>
                      <button
                        type='button'
                        className='px-2 py-1 text-base border border-gray-300 rounded-l-md focus:outline-none hover:bg-[#1a0f8228]'
                        onClick={() => decrementCount('child')}
                      >
                        -
                      </button>
                      <span className='px-4 py-1 text-base border-t border-b border-gray-300'>
                        {childCount}
                      </span>
                      <button
                        type='button'
                        className='px-2 py-1 text-base border border-gray-300 rounded-r-md focus:outline-none hover:bg-[#1a0f8228]'
                        onClick={() => incrementCount('child')}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className='md:col-span-2 '>        
          <button
            type='button'
            className='bg-primary-color hover:bg-primary-color-dark transition ease-linear  text-white p-2 rounded-full  min-w-[300px] mt-6 '
            onClick={handleSearchClick}
          >
            Search
          </button>
          </div> 
        </form>
      </div>
      {showWarning && <WarningPopUp onClose={handleWarningClose} />}
      {isSearch && (
        <div className='bg-[#d9d9d9] w-[360px] rounded py-4 my-3 px-2  lg:w-auto mx-auto backdrop-blur-sm bg-white/30 mt-[100px]'>
          <FlyListScreen
            filteredDepartureLegs={filteredDepartureLegs}
            filteredReturnLegs={filteredReturnLegs}
            Ports={portList}
            handleSearchClick={handleSearchClick}
          />
        </div>
      )}
    </>
  );
};

export default HomeForm;
