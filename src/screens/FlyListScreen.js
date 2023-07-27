import FlyList from "../components/FlyListScreen/FlyList";
import { useNavigate } from "react-router";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
export default function FlyListScreen(props) {
  const navigate = useNavigate();

  const selectedDepFlight = useSelector(
    (state) => state.data.selectedDepFlight
  );
  const selectedRetFlight = useSelector(
    (state) => state.data.selectedRetFlight
  );

  const nextPageHandler = () => {
    navigate('/Details');
  };
  return (
    <>
      <div className="lg:px-36 lg:m-4  pt-5">
        <div>
          {selectedDepFlight !== undefined && (
            <div className="flex items-center">
              <BsFillArrowLeftCircleFill color="white" size={24} />
              <button onClick={props.handleSearchClick} className="text-left text-white font-bold text-xl ml-2">
                Change trip
              </button>
            </div>
          )}
          <h2 className="text-center text-4xl  mb-[50px] ">
            Departure Flights
          </h2>
        </div>

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
              type='dep'
              leg={leg}
            />
          );
        })}
        <br />
        <div className=''>
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
                  type='ret'
                  leg={leg}
                />
              </>
            );
          })}
        </div>
        <button onClick={nextPageHandler} className=' text-center '>
          Continue
        </button>{' '}
      </div>
    </>
  );
}
