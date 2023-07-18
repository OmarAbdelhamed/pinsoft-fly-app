import React from "react";

const BillDetail = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Fatura Bilgileri</h2>
      <div className="mb-4">
        <input type="radio" name="" id="sahis" className="mr-2" />
        <label htmlFor="sahis" className="mr-4">
          Şahıs
        </label>
        <input type="radio" name="" id="sirket" className="mr-2" />
        <label htmlFor="sirket" className="mr-4">
          Şirket
        </label>
        <input type="radio" name="" id="sahisSirketi" className="mr-2" />
        <label htmlFor="sahisSirketi">Şahıs Şirketi</label>
      </div>
      <div>
        <input
          type="text"
          placeholder="İsim"
          className="border border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="text"
          placeholder="Soyisim"
          className="border border-gray-300 rounded-md py-2 px-4 mb-4  focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="text"
          placeholder="Tc Kimlik No"
          className="border border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring focus:border-blue-300"
        />
        <input type="radio" id="tcdegilim" className="mr-2" />
        <label htmlFor="tcdegilim">Tc vatandaşı değilim</label>

        <p>Fatura bilgilerinizin doğruluğunu kontrol ediniz!</p>
      </div>
    </div>
  );
};

export default BillDetail;
