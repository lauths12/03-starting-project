import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultsTable from "./components/ResultsTable";

function App() {
  const [values, setValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChangeValues(valueName, newValue) {
    setValues((prevValue) => {
      return {
        ...prevValue,
        [valueName]: newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <section id="user-input">
        <div className="input-group">
          <UserInput
            valueName="initialInvestment"
            valueLabel="initial investment"
            initialValue={values.initialInvestment}
            onChangeValue={handleChangeValues}
          />
          <UserInput
            valueName="annualInvestment"
            valueLabel="annual investment"
            initialValue={values.annualInvestment}
            onChangeValue={handleChangeValues}
          />
        </div>
        <div className="input-group">
          <UserInput
            valueName="expectedReturn"
            valueLabel="expected return"
            initialValue={values.expectedReturn}
            onChangeValue={handleChangeValues}
          />
          <UserInput
            valueName="duration"
            valueLabel="duration"
            initialValue={values.duration}
            onChangeValue={handleChangeValues}
          />
        </div>
      </section>
      <ResultsTable {...values} />
    </>
  );
}

export default App;
