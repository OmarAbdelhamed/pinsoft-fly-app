import React, { useState } from 'react';
import PriceDetail from '../components/FlyingDetailScreen/PriceDetail';
import PassengerDetail from '../components/FlyingDetailScreen/PassengerDetail';
import ContactDetail from '../components/FlyingDetailScreen/ContactDetail';
import BillDetail from '../components/FlyingDetailScreen/BillDetail';
import FlyInformation from '../components/FlyingDetailScreen/FlyInformation';
import FlyTicketInsurance from '../components/FlyingDetailScreen/FlyTicketInsurance';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import AnimatedComp from '../components/UI/AnimatedComp';
import AnimatedRoute from '../components/UI/AnimatedRoute';
import { AnimatePresence } from 'framer-motion';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

const FlyingDetailScreen = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [previousStep, setPreviousStep] = useState(0);

  const selectedDepFlight = useSelector(
    (state) => state.data.selectedDepFlight
  );
  const selectedRetFlight = useSelector(
    (state) => state.data.selectedRetFlight
  );

  console.log(selectedDepFlight);
  console.log(selectedRetFlight);

  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate('/home');
  };
  const NextPageHandler = () => {
    navigate('/Payment');
  };

  const handleNext = () => {
    setPreviousStep(currentStep);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setPreviousStep(currentStep);
    setCurrentStep((prevStep) => prevStep - 1);
  };
  return (
    <>
      <AnimatedRoute>
        <div className='bg-second bg-cover bg-fixed bg-no-repeat min-h-[90.6vh] flex items-center justify-center'>
          <AnimatePresence mode='wait' reset>
            <AnimatedComp
              key={currentStep}
              direction={currentStep < previousStep ? 'prev' : 'next'}
            >
              <div className='flex flex-col justify-center items-center '>
                {currentStep === 1 && <ContactDetail />}
                {currentStep === 2 && <PassengerDetail />}
                {currentStep === 3 && <FlyInformation />}
                {currentStep === 4 && <BillDetail />}
                {currentStep === 5 && <PriceDetail />}
                {currentStep === 6 && <FlyTicketInsurance />}

                <div className='mt-4 flex flex-row'>
                  {currentStep > 1 && (
                    <button
                      onClick={handlePrevious}
                      className='bg-primary-color p-2 text-white rounded-md mx-1 flex flex-row-reverse items-center gap-1 hover:scale-[105%] hover:bg-primary-color-light'
                    >
                      Go Back
                      <AiOutlineArrowLeft />
                    </button>
                  )}
                  {currentStep === 1 && (
                    <button
                      onClick={goBackHandler}
                      className='bg-primary-color p-2 text-white rounded-md mx-1 flex flex-row-reverse items-center gap-1 hover:scale-[105%] hover:bg-primary-color-light'
                    >
                      Go Back
                      <AiOutlineArrowLeft />
                    </button>
                  )}
                  {currentStep < 6 && (
                    <button
                      onClick={handleNext}
                      className='bg-primary-color p-2 text-white rounded-md mx-1 flex flex-row items-center gap-1 hover:scale-[105%] hover:bg-primary-color-light'
                    >
                      Next
                      <AiOutlineArrowRight />
                    </button>
                  )}
                  {currentStep === 6 && (
                    <button
                      onClick={NextPageHandler}
                      className='bg-primary-color p-2 text-white rounded-md mx-1 flex flex-row items-center gap-1 hover:scale-[105%] hover:bg-primary-color-light'
                    >
                      Go to payment
                      <AiOutlineArrowRight />
                    </button>
                  )}
                </div>
              </div>
            </AnimatedComp>
          </AnimatePresence>
        </div>
      </AnimatedRoute>
    </>
  );
};

export default FlyingDetailScreen;
