
import { SiChinasouthernairlines } from 'react-icons/si';
import { useDispatch } from 'react-redux';
import {
  addSelectedDepFlight,
  addSelectedRetFlight,
} from '../../app/flyDataSlice';
export default function FlyList({
  flightNo,
  depTime,
  arrTime,
  price,
  currency,
  airline,
  depPort,
  arrPort,
  type,
  leg,
}) {
  const [depTimeSaat, depTimeDakika] = depTime.split(':');
  const [arrTimeSaat, arrTimeDakika] = arrTime.split(':');

  const depTarih = new Date();
  depTarih.setHours(depTimeSaat, depTimeDakika, 0);

  const arrTarih = new Date();
  arrTarih.setHours(arrTimeSaat, arrTimeDakika, 0);

  const farkMilisaniye = arrTarih.getTime() - depTarih.getTime();

  const farkSaat = Math.floor(farkMilisaniye / (1000 * 60 * 60));
  const farkDakika = Math.floor((farkMilisaniye / (1000 * 60)) % 60);
  const sure = `${farkSaat} sa ${farkDakika} dk`;

  const dispatch = useDispatch();

  const handleSelection = () => {
    if (type === 'dep') {
      dispatch(addSelectedDepFlight(leg));
    } else {
      dispatch(addSelectedRetFlight(leg));
    }
  };

  return (
    <div
      onClick={handleSelection}
      className=' cursor-pointer bg-white w-[350px] md:w-auto mb-2 border-2 border-slate-300  lg:min-h-[140px]  lg:p-4 rounded-lg md:hover:scale-[105%] hover:transition-all ease-in-out  lg:m-4 grid grid-cols-3 items-center place-content-center text-center backdrop-blur-sm bg-white/90 '
    >
      <div className='text-2xl flex flex-row justify-center items-center gap-3'>
        <SiChinasouthernairlines className='text-3xl text-yellow-300' />
        {airline}
      </div>
      <div className='flex flex-row justify-between'>
        <div className=' flex flex-col text-2xl gap-4 text-right'>
          <span>
            {depTimeSaat}:{depTimeDakika}
          </span>
          <span>{depPort}</span>
        </div>
        <div className='flex flex-col gap-1'>
          <div>{sure}</div>
          <div className='items-center text-center relative '>
            <span className='  after:content-[""] after:w-[8px] after:absolute after:-right-[0.01rem] after:top-[1.29rem] after:h-[1px] after:block after:bg-black  after:-rotate-45 before:content-[""] before:w-[8px] before:absolute before:-right-[0.01rem] before:top-[0.86rem] before:h-[1px] before:block before:bg-black  before:rotate-45   '>
              ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
            </span>
          </div>
          <div>{flightNo}</div>
        </div>
        <div className=' flex flex-col text-2xl gap-4 text-left'>
          <span>
            {arrTimeSaat}:{arrTimeDakika}
          </span>
          <div className='flex flex-row'>
            <span>{arrPort}</span>
          </div>
        </div>
      </div>

      <div className='text-3xl w-auto h-auto'>
        {price} <span className='text-xl'>{currency}</span>
      </div>
    </div>
  );
}
