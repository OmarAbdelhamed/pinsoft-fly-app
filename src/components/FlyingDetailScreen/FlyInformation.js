import React from "react";

const FlyInformation = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border border-black p-10 relative">
        <h2 className="text-4xl mb-4">Uçuş Bilgileri</h2>
        <div className="absolute top-0 right-0">
          <button className="text-blue-500 py-2 px-4 rounded">
            Uçuş Kuralları
          </button>
        </div>
        <div className="flex">
          <div className="flex-1">
            <p className="mb-4">
              Havayolu
            </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Örnek.jpg" alt="Thy Logo" className="w-12 h-12 inline-block mr-2" />
            <p className="mb-4">Thy</p>
          </div>
          <div className="flex-1 ml-4">
            <p className="mb-4">Kaynak No</p>
            <p className="mb-4">XQ 185</p>
          </div>
          <div className="flex-1 ml-4">
            <p className="mb-4">Kalkış</p>
            <p className="mb-4">21:30</p>
            <p className="mb-4">IST</p>
            <p className="mb-4">14 Temmuz, Cuma</p>
          </div>
          <div className="flex-1 ml-4">
            <p className="mb-4">Süre</p>
            <p className="mb-4">2:30</p>
          </div>
          <div className="flex-1 ml-4">
            <p className="mb-4">Varış</p>
            <p className="mb-4">00:00</p>
            <p className="mb-4">ANT</p>
            <p className="mb-4">15 Temmuz, Cumartesi</p>
          </div>
        </div>
        <p className="text-xs text-left absolute bottom-0 left-0 mb-8 ml-8">
          Sadece el bagaj hakkınız bulunmaktadır.
          <button className="text-blue-500 ml-3">
            Ekstra Bagaj
          </button>
        </p>
      </div>
    </div>
  );
};

export default FlyInformation;
