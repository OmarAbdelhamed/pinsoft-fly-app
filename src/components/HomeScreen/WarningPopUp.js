import React, { useState, useEffect } from "react";
const WarningPopUp = ({ onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Automatically close the popup after 10 seconds
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, 10000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  return (
    <>
      {show && (
        <div className="warning-popup">
          <div className="warning-content">
            <button className="close-button" onClick={handleClose}>
              X
            </button>
            <p>Please select all filters before searching for flights.</p>
            <button onClick={onClose}>OK</button>
          </div>
        </div>
      )}
    </>
  );
};

export default WarningPopUp;
