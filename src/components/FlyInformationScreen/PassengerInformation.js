import React from 'react'

function PassengerInformation() {
  return (
    <div className='passenger-information border-t-2 border-slate-600 mt-2 pb-2'>
    <table>
     <thead>
    <tr className="border-b-2 border-gray-300">
       <th className="px-4 py-2">Yolcu No</th>
       <th className="px-4 py-2">Yolcu Tipi</th>
       <th className="px-4 py-2">İsim</th>
       <th className="px-4 py-2">Soyisim</th>
       <th className="px-4 py-2">Cinsiyet</th>
       <th className="px-4 py-2">Doğum Tarihi</th>
       <th className="px-4 py-2">Tc Kimlik No</th>
     </tr>
     </thead>
     <tbody>
     <tr className="border-b border-gray-300">
       <td className="px-4 py-2 text-center">1</td>
       <td className="px-4 py-2 text-center">Yetişkin</td>
       <td className="px-4 py-2 text-center">
         Melihcan
       </td>
       <td className="px-4 py-2 text-center">
         Şimşek
       </td>
       <td className="px-4 py-2 text-center">
         Erkek
       </td>
       <td className="px-4 py-2 text-center">
         02.02.2002
       </td>
       <td className="px-4 py-2 text-center">
         111********
       </td>
     </tr>
     </tbody>
    </table>
 </div>
  )
}

export default PassengerInformation