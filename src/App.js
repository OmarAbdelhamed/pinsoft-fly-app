import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { increment } from "./app/flyDataSlice";
import FlyingDetailScreen from "./screens/FlyingDetailScreen";
import FlyInformationScreen from "./screens/FlyInformationScreen";

function App() {
  const state = useSelector((state) => state.data.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {/* <FlyingDetailScreen /> */}
      {/* <FlyInformationScreen/> */}
      {/* <h1>Hello World</h1>
      <p>{state}</p>
      <button onClick={() => dispatch(increment())}>increment</button> */}
    </div>
  );
}

export default App;
