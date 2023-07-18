import React from "react";

const PriceDetail = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">Fiyat Detayı</h2>
      <div>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="px-4 py-2">Yolcu Tipi</th>
              <th className="px-4 py-2">Fiyat</th>
              <th className="px-4 py-2">Vergi/Harç</th>
              <th className="px-4 py-2">Hizmet Bedeli</th>
              <th className="px-4 py-2">Toplam</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-2">2 yetişkin</td>
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
