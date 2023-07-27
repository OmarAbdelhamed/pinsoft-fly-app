import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import "@fontsource/vt323";
import Ticket from "../components/FlyTicket/Ticket";
import Footer from "../components/UI/footer";

const FlyTicketScreen = () => {
  const selectedDepFlight = useSelector(
    (state) => state.data.selectedDepFlight
  );
  const selectedRetFlight = useSelector(
    (state) => state.data.selectedRetFlight
  );

  const paidTickets = [selectedDepFlight, selectedRetFlight];
  console.log("paidtickets: ", paidTickets);

  return (
    <div>
      {paidTickets.map((leg, i) => {
        return <Ticket key={i} leg={leg} />
        ;
      })}
      <div className="mt-20">
        <Footer/>
      </div>
    </div>
  );
};

export default FlyTicketScreen;
