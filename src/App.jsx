import { useState } from "react";
import Calculator from "../Components/Calculator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Calculator!</h1>
      <Calculator/>
    </>
  );
}

export default App;
