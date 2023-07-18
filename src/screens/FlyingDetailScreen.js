import React from "react";
import PriceDetail from "../components/FlyingDetailScreen/PriceDetail";
import PassengerDetail from "../components/FlyingDetailScreen/PassengerDetail";
import ContactDetail from "../components/FlyingDetailScreen/ContactDetail";
import BillDetail from "../components/FlyingDetailScreen/BillDetail";

const FlyingDetailScreen = () => {
  return (
    <div>
      <PriceDetail />
      <PassengerDetail />
      <ContactDetail />
      <BillDetail />
    </div>
  );
};

export default FlyingDetailScreen;
