import { useEffect, useState } from 'react';
import FlyList from '../components/FlyListScreen/FlyList';
import axios from 'axios';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { getDepartureLegs, getReturnLegs } from '../app/flyDataSlice';
import { useDispatch } from 'react-redux';
import { getPorts } from '../app/flyDataSlice';

export default function FlyListScreen(props) {
  const dispatch = useDispatch();
  const departureLegs = useSelector((state) => state.data.departureLegs);
  const returnLegs = useSelector((state) => state.data.returnLegs);
  const Ports = useSelector((state) => state.data.Ports);

  useEffect(() => {
    dispatch(getDepartureLegs());
  }, []);

  useEffect(() => {
    dispatch(getPorts());
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
    <div className='lg:px-36 lg:m-4  pt-5'>
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
            depPort={leg.depPort}
            arrPort={leg.arrPort}
            ports={Ports}
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
            depPort={leg.depPort}
            arrPort={leg.arrPort}
            Ports={Ports}
          />
        );
      })}
    </div>
  );
}
