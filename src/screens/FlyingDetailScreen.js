import React from "react";
import PriceDetail from "../components/FlyingDetailScreen/PriceDetail";
import PassengerDetail from "../components/FlyingDetailScreen/PassengerDetail";
import ContactDetail from "../components/FlyingDetailScreen/ContactDetail";
import BillDetail from "../components/FlyingDetailScreen/BillDetail";
import FlyInformation from "../components/FlyingDetailScreen/FlyInformation";
import FlyTicketInsurance from "../components/FlyingDetailScreen/FlyTicketInsurance";

const FlyingDetailScreen = () => {
  return (
    <div>
      <FlyInformation />
      <PriceDetail />
      <PassengerDetail />
      <ContactDetail />
      <BillDetail />
      <FlyTicketInsurance />
    </div>
  );
};

export default FlyingDetailScreen;
