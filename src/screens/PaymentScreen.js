import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PaymentScreen = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [iban, setIban] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCVC] = useState("");
  const [nameSurname, setNameSurname] = useState("");
  const [installments, setInstallments] = useState("");

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [paymentOption, setPaymentOption] = useState("");

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleIbanChange = (event) => {
    setIban(event.target.value);
  };

  const handleExpiryChange = (event) => {
    setExpiry(event.target.value);
  };

  const handleCVCChange = (event) => {
    setCVC(event.target.value);
  };

  const handleNameSurnameChange = (event) => {
    setNameSurname(event.target.value);
  };

  const handleInstallmentChange = (event) => {
    const { value } = event.target;
    setInstallments(value);
  };

  const handleAcceptTermsChange = (event) => {
    setAcceptTerms(event.target.checked);
  };

  const handlePaymentOptionClick = (option) => {
    setPaymentOption(option);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ödeme işlemi için gerekli adımları burada gerçekleştirin
    // Ödeme işlemi tamamlandığında kullanıcıyı bilgilendirin
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="w-full max-w-lg p-8 border-2 border-gray-300 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center">Ödeme Bilgileri</h2>
        <div className="flex justify-between mb-8 ">
          <div
            className={`payment-option ${
              paymentOption === "card" ? "active" : ""
            } border-2 border-gray-300 rounded-lg p-4 cursor-pointer ${
              paymentOption === "card" ? "bg-gray-200" : "bg-transparent"
            }`}
            onClick={() => handlePaymentOptionClick("card")}
          >
            <h3 className="m-0">Kredi Kartı / Banka Kartı</h3>
          </div>
          <div
            className={`payment-option ${
              paymentOption === "transfer" ? "active" : ""
            } border-2 border-gray-300 rounded-lg p-4 cursor-pointer ${
              paymentOption === "transfer" ? "bg-gray-200" : "bg-transparent"
            }`}
            onClick={() => handlePaymentOptionClick("transfer")}
          >
            <h3 className="m-0">Kolay Havale</h3>
          </div>
          <div
            className={`payment-option ${
              paymentOption === "papara" ? "active" : ""
            } border-2 border-gray-300 rounded-lg p-4 cursor-pointer ${
              paymentOption === "papara" ? "bg-gray-200" : "bg-transparent"
            }`}
            onClick={() => handlePaymentOptionClick("papara")}
          >
            <h3 className="m-0">Papara</h3>
          </div>
        </div>
        {paymentOption === "card" && (
          <div className="card-details">
            <label>Kart Numarası</label>
            <input
              type="text"
              value={cardNumber}
              onChange={handleCardNumberChange}
              className="border-2 border-gray-300 rounded-lg p-2 w-full mb-4"
            />
            <div className="card-details-row">
              <div className="card-details-item">
                <label>Ay/Yıl</label>
                <div className="flex items-center">
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                    className="border-2 border-gray-300 rounded-lg p-2 w-full"
                  />
                </div>
              </div>
              <div className="card-details-item">
                <label>Güvenlik Kodu</label>
                <br />
                <input
                  type="text"
                  value={cvc}
                  onChange={handleCVCChange}
                  className="border-2 border-gray-300 rounded-lg p-2 w-[100px]"
                />
              </div>
            </div>
          </div>
        )}
        {paymentOption === "transfer" && (
          <div className="transfer-details">
            <label>IBAN Numarası</label>
            <input
              type="text"
              value={iban}
              onChange={handleIbanChange}
              className="border-2 border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
        )}
        {paymentOption === "papara" && (
          <div className="papara-details">
            <label>Hesap Numarası</label>
            <input
              type="text"
              value={iban}
              onChange={handleIbanChange}
              className="border-2 border-gray-300 rounded-lg p-2 w-full mb-4"
            />
            <div className="name-surname-details">
              <label>Ad-Soyad</label>
              <input
                type="text"
                value={nameSurname}
                onChange={handleNameSurnameChange}
                className="border-2 border-gray-300 rounded-lg p-2 w-full"
              />
            </div>
          </div>
        )}
        {paymentOption !== "transfer" && (
          <>
            <h3>Taksit Seçenekleri</h3>
            <div className="installments">
              <label>
                <input
                  type="radio"
                  name="installment"
                  value="single"
                  checked={installments === "single"}
                  onChange={handleInstallmentChange}
                />
                Tek Çekim
              </label>
              <label>
                <input
                  type="radio"
                  name="installment"
                  value="threeMonths"
                  checked={installments === "threeMonths"}
                  onChange={handleInstallmentChange}
                />
                3 Ay
              </label>
              <label>
                <input
                  type="radio"
                  name="installment"
                  value="sixMonths"
                  checked={installments === "sixMonths"}
                  onChange={handleInstallmentChange}
                />
                6 Ay
              </label>
            </div>
          </>
        )}
        <div className="terms">
          <label>
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={handleAcceptTermsChange}
            />
            Tüm koşulları kabul ediyorum
          </label>
        </div>
        <h3>
          Toplam Ödenecek Tutar<p className="font-bold">40$</p>
        </h3>
        <button
          type="submit"
          className="w-full bg-green-500 text-white border-0 rounded-lg py-2 mt-4 cursor-pointer"
        >
          Ödemeyi Tamamla
        </button>
      </form>
    </div>
  );
};

export default PaymentScreen;
