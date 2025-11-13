import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import UserInput from "./components/UserInput";
import ResultsTable from "./components/ResultsTable/ResultsTable.jsx";

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

  const inputIsValid = values.duration >= 1;

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
      {inputIsValid ? (
        <inputResultsTable {...values} />
      ) : (
        <p className="center">Please enter a valid duration.</p>
      )}
    </>
  );
}

export default App;
