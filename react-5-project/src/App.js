import Header from "./components/Header/Header";
import CalculatorForm from "./components/CalculatorForm/CalculatorForm";
import CalculatorResult from "./components/CalculatorResult/CalculatorResult";
import { useState } from "react";

function App() {
  const [submitedData, setSubmitedData] = useState(null);

  const submitDataHandler = (submitedData) => {
    setSubmitedData(submitedData);
  };

  return (
    <div>
      <Header />
      <CalculatorForm onSubmitData={submitDataHandler} />
      <CalculatorResult data={submitedData} />
    </div>
  );
}

export default App;
