import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { increment } from "./app/flyDataSlice";

function App() {
  const state = useSelector((state) => state.data.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>{state}</p>
      <button onClick={() => dispatch(increment())}>increment</button>
    </div>
  );
}

export default App;
