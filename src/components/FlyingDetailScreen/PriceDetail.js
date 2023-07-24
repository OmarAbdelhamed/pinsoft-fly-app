import React from "react";

const PriceDetail = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-semibold mb-4 text-center font-Headlines">Price Details</h2>
      <div>
        <table className=" text-left w-[600px] ">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="px-4 py-2">Passenger Type</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Taxes</th>
              <th className="px-4 py-2">Service</th>
              <th className="px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-2">2 Adults</td>
              <td className="px-4 py-2">
                2990,99<span>₺</span>
              </td>
              <td className="px-4 py-2">
                957,50<span>₺</span>
              </td>
              <td className="px-4 py-2">
                455.89<span>₺</span>
              </td>
              <td className="px-4 py-2">
                3955,99<span>₺</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceDetail;
