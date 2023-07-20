import { useEffect, useState } from 'react';
import FlyList from '../components/FlyListScreen/FlyList';
import axios from 'axios';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { getDepartureLegs, getReturnLegs } from '../app/flyDataSlice';
import { useDispatch } from 'react-redux';

export default function FlyListScreen(props) {
  const dispatch = useDispatch();
  const departureLegs = useSelector((state) => state.data.departureLegs);
  const returnLegs = useSelector((state) => state.data.returnLegs);

  useEffect(() => {
    dispatch(getDepartureLegs());
  }, []);

  useEffect(() => {
    dispatch(getReturnLegs());
  }, []);

  let filteredDepartureLegs = departureLegs.filter(
    (leg) =>
      leg.depPort === props.from.value &&
      leg.arrPort === props.to.value &&
      leg.flightDate === props.Date
  );
  let filteredReturnLegs = returnLegs.filter(
    (leg) =>
      leg.depPort === props.from.value &&
      leg.arrPort === props.to.value &&
      leg.flightDate === props.Date
  );

  return (
    <div className='lg:px-36 lg:m-4 '>
      {filteredDepartureLegs.map((leg, i) => {
        return (
          <FlyList
            key={i}
            airline={leg.airline}
            flightNo={leg.flightNo}
            depTime={leg.depTime}
            arrTime={leg.arrTime}
            price={leg.priceDetail.basePrice.amount}
            currency={leg.priceDetail.basePrice.currency}
            date={leg.flightDate}
          />
        );
      })}
      {filteredReturnLegs.map((leg, i) => {
        return (
          <FlyList
            key={i}
            airline={leg.airline}
            flightNo={leg.flightNo}
            depTime={leg.depTime}
            arrTime={leg.arrTime}
            price={leg.priceDetail.basePrice.amount}
            currency={leg.priceDetail.basePrice.currency}
            date={leg.flightDate}
          />
        );
      })}
    </div>
  );
}
