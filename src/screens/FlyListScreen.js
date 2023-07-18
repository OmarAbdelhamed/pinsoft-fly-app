import { useEffect, useState } from "react";
import FlyList from "../components/FlyListScreen/FlyList";
import axios from "axios";


export default function FlyListScreen() {
  const [departureLegs ,setDepartureLegs] = useState([])
  const [returnLegs , setReturnLegs] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8000/departureLegs")
    .then(res => setDepartureLegs(res.data))
  },[])
  useEffect(()=>{
    axios.get("http://localhost:8000/returnLegs")
    .then(res => setReturnLegs(res.data))
  },[])
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
