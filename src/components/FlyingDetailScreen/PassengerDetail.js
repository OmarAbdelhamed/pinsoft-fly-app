import React from "react";

const PassengerDetail = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Yolcu Bilgileri</h2>
      <p>1. Yetiskin</p>
      <div className="flex flex-wrap">
        <div className="mb-4 mr-6">
          <input type="radio" name="" id="" className="mr-2" />
          <label htmlFor="">Kadin</label>
        </div>
        <div className="mb-4 mr-6">
          <input type="radio" name="" id="" className="mr-2" />
          <label htmlFor="">Erkek</label>
        </div>
        <div className="mb-4 mr-6">
          <input
            type="text"
            name=""
            id=""
            className="border p-2"
            placeholder="Isim"
          />
        </div>
        <div className="mb-4 mr-6">
          <input
            type="text"
            name=""
            id=""
            className="border p-2"
            placeholder="Soyisim"
          />
        </div>
        <div className="mb-4 mr-6">
          <label htmlFor="">Dogum Tarihi</label>
          <input type="date" name="" id="" className="border p-2" />
        </div>
        <div className="mb-4 mr-6">
          <input
            type="text"
            name=""
            id=""
            className="border p-2"
            placeholder="TC Kimlik"
          />
        </div>
        <div className="mb-4 mr-6">
          <input type="radio" name="" id="" className="mr-2" />
          <label htmlFor="">Tc Vatandasi Degilim</label>
        </div>
      </div>
    </div>
  );
};

export default PassengerDetail;
