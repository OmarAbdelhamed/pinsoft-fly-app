import { useEffect, useState } from "react";
import FlyList from "../components/FlyListScreen/FlyList";
import axios from "axios";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { getDepartureLegs , getReturnLegs } from "../app/flyDataSlice";
import { useDispatch } from "react-redux";


export default function FlyListScreen() {

  const dispatch = useDispatch()
  const departureLegs = useSelector((state) => state.data.departureLegs)
  const returnLegs = useSelector((state) => state.data.returnLegs)

  useEffect(()=>{
    dispatch(getDepartureLegs())
  },[])
  
  useEffect(()=>{
    dispatch(getReturnLegs())
  },[])


  console.log(departureLegs);
  console.log(returnLegs);

  return (
    <div className="px-96">
      {departureLegs.map((leg, i) => {
        return (
          <FlyList
            key={i}
            airline={leg.airline}
            flightNo={leg.flightNo}
            depTime={leg.depTime}
            arrTime={leg.arrTime}
            price={leg.priceDetail.basePrice.amount}
            currency={leg.priceDetail.basePrice.currency}
          />
        );
      })}
      {returnLegs.map((leg, i) => {
        return (
          <FlyList
            key={i}
            airline={leg.airline}
            flightNo={leg.flightNo}
            depTime={leg.depTime}
            arrTime={leg.arrTime}
            price={leg.priceDetail.basePrice.amount}
            currency={leg.priceDetail.basePrice.currency}
          />
        );
      })}
    </div>
  );
}
