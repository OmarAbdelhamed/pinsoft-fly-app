import React from "react";
import PriceDetail from "../components/FlyingDetailScreen/PriceDetail";
import PassengerDetail from "../components/FlyingDetailScreen/PassengerDetail";
import ContactDetail from "../components/FlyingDetailScreen/ContactDetail";

const FlyingDetailScreen = () => {
  return (
    <div>
      <PriceDetail />
      <PassengerDetail />
      <ContactDetail />
    </div>
  );
};

export default FlyingDetailScreen;
