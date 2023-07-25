import { useEffect, useState } from "react";

import FlyList from '../components/FlyListScreen/FlyList';

export default function FlyListScreen(props) {
  return (
    <div className='lg:px-36 lg:m-4  pt-5'>
      {props.filteredDepartureLegs.map((leg, i) => {
        return (
          <FlyList
            key={i}
            leg = {leg}
            airline={leg.airline}
            flightNo={leg.flightNo}
            depTime={leg.depTime}
            arrTime={leg.arrTime}
            price={leg.priceDetail.basePrice.amount}
            currency={leg.priceDetail.basePrice.currency}
            date={leg.flightDate}
            depPort={leg.depPort}
            arrPort={leg.arrPort}
          />
        );
      })}
      <br />
      <h2 className='text-center text-4xl  mb-[50px] '>Return Flights</h2>

      {props.filteredReturnLegs.map((leg, i) => {
        return (
          <>
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
            />
          </>
        );
      })}
    </div>
  );
}
