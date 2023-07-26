import FlyList from "../components/FlyListScreen/FlyList";
import { useNavigate } from "react-router";
export default function FlyListScreen(props) {
  const navigate = useNavigate();

  const nextPageHandler = () => {
    navigate("/Details");
  };
  return (
    <>
      <div className="lg:px-36 lg:m-4  pt-5">
        {props.filteredDepartureLegs.map((leg, i) => {
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
              type="dep"
              leg={leg}
            />
          );
        })}
        <br />
        <h2 className="text-center text-4xl  mb-[50px] ">Return Flights</h2>

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
                type="ret"
                leg={leg}
              />
            </>
          );
        })}
      </div>
      <button onClick={nextPageHandler}>Continue</button>
    </>
  );
}
