import React from "react";

const ContactDetail = () => {
  return (
    <div className="p-4 rounded-lg">
      <p className="text-lg font-bold mb-4">İletişim Bilgileri</p>
      <div className="flex mb-4">
        <div className="mr-2 flex-wrap">
          <input
            type="text"
            name=""
            id=""
            className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Email"
          />
        </div>
        <div className="ml-2 flex-wrap">
          <input
            type="tel"
            name=""
            id=""
            className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Telefon"
          />
        </div>
      </div>
      <div className="flex items-center mb-4">
        <input type="radio" name="" id="" className="mr-2" />
        <label htmlFor="" className="text-sm">
          Fırsat ve kampanyalardan haberdar olmak istiyorum
        </label>
      </div>
    </div>
  );
};

export default ContactDetail;
