export default function FlyList({
  flightNo,
  depTime,
  arrTime,
  price,
  currency,
  airline,
}) {
  const [depTimeSaat, depTimeDakika] = depTime.split(":");
  const [arrTimeSaat, arrTimeDakika] = arrTime.split(":");

  const depTarih = new Date();
  depTarih.setHours(depTimeSaat, depTimeDakika, 0);

  const arrTarih = new Date();
  arrTarih.setHours(arrTimeSaat, arrTimeDakika, 0);

  const farkMilisaniye = arrTarih.getTime() - depTarih.getTime();

  const farkSaat = Math.floor(farkMilisaniye / (1000 * 60 * 60));
  const farkDakika = Math.floor((farkMilisaniye / (1000 * 60)) % 60);
  const sure = `${farkSaat} sa ${farkDakika} dk`;
  console.log(farkMilisaniye);

  return (
    <div className="bg-white p-4 border-2 border-black m-4">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Havayolu</th>
            <th className="p-2">Kuyruk No</th>
            <th className="p-2">Kalkış</th>
            <th className="p-2">Süre</th>
            <th className="p-2">Varış</th>
            <th className="p-2">Fiyat (kişi)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="p-2">{airline}</td>
            <td className="p-2">{flightNo}</td>
            <td className="p-2">{depTime}</td>
            <td className="p-2">{sure}</td>
            <td className="p-2">{arrTime}</td>
            <td className="p-2">{`${price} ${currency}`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
