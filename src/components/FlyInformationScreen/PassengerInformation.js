import React from 'react'

function PassengerInformation() {
  return (
    <div className='passenger-information border-t-2 border-slate-600 mt-2 pb-2'>
    <table className='w-full text-left'>
     <thead>
    <tr className="border-b-2 border-gray-300">
       <th className="md:pr-4 py-2">Yolcu No</th>
       <th className="md:pr-4 py-2">Yolcu Tipi</th>
       <th className="md:pr-4 py-2">İsim</th>
       <th className="md:pr-4 py-2">Soyisim</th>
       <th className="md:pr-4 py-2">Cinsiyet</th>
       <th className="md:pr-4 py-2">Doğum Tarihi</th>
       <th className="md:pr-4 py-2">Tc Kimlik No</th>
     </tr>
     </thead>
     <tbody>
     <tr className="border-b border-gray-300">
       <td className="md:pr-4 py-2">1</td>
       <td className="md:pr-4 py-2">Yetişkin</td>
       <td className="md:pr-4 py-2">
         Melihcan
       </td>
       <td className="md:pr-4 py-2">
         Şimşek
       </td>
       <td className="md:pr-4 py-2">
         Erkek
       </td>
       <td className="md:pr-4 py-2">
         02.02.2002
       </td>
       <td className="md:pr-4 py-2">
         111********
       </td>
     </tr>
     </tbody>
    </table>
 </div>
  )
}

export default PassengerInformation