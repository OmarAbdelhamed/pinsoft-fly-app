import React, { useState } from 'react';
import PriceDetail from '../components/FlyingDetailScreen/PriceDetail';
import PassengerDetail from '../components/FlyingDetailScreen/PassengerDetail';
import ContactDetail from '../components/FlyingDetailScreen/ContactDetail';
import BillDetail from '../components/FlyingDetailScreen/BillDetail';
import FlyInformation from '../components/FlyingDetailScreen/FlyInformation';
import FlyTicketInsurance from '../components/FlyingDetailScreen/FlyTicketInsurance';

const FlyingDetailScreen = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className=' border border-black p-10 mt-[170px] relative rounded-lg h-auto max-w-[1200px] m-auto  flex flex-col justify-center items-center'>
      {currentStep === 1 && <FlyInformation />}
      {currentStep === 2 && <PriceDetail />}
      {currentStep === 3 && <PassengerDetail />}
      {currentStep === 4 && <ContactDetail />}
      {currentStep === 5 && <BillDetail />}
      {currentStep === 6 && <FlyTicketInsurance />}

      <div className='mt-4 '>
        {currentStep > 1 && <button onClick={handlePrevious}>Previous</button>}
        {currentStep < 6 && <button onClick={handleNext}>Next</button>}
      </div>
    </div>
  );
};

export default FlyingDetailScreen;
