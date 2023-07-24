import { useState } from "react";
import styles from './CalculatorForm.module.css'

const CalculatorForm = (props) => {
  const [enteredCurrentSavings, setEnteredCurrentSavings] = useState("");
  const [enteredYearlyContrib, setEnteredYearlyContrib] = useState("");
  const [enteredExpectedReturn, setEnteredExpectedReturn] = useState("");
  const [enteredDuration, setDuration] = useState("");

  const currentSavingsChangeHandler = (event) => {
    setEnteredCurrentSavings(event.target.value);
  };

  const yearlyContribChangeHandler = (event) => {
    setEnteredYearlyContrib(event.target.value);
  };

  const expectedReturnChangeHandler = (event) => {
    setEnteredExpectedReturn(event.target.value);
  };

  const durationChangeHandler = (event) => {
    setDuration(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userInput = {
      "current-savings": enteredCurrentSavings,
      "yearly-contribution": enteredYearlyContrib,
      "expected-return": enteredExpectedReturn,
      duration: enteredDuration,
    };
    props.onSubmitData(userInput);
  };

  const resetHandler = (event) => {
    event.preventDefault();

    setEnteredCurrentSavings("");
    setEnteredExpectedReturn("");
    setEnteredYearlyContrib("");
    setDuration("");

    props.onSubmitData(null);
  }

  return (
    <form className={styles["form"]} onSubmit={submitHandler} onReset={resetHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={enteredCurrentSavings}
            onChange={currentSavingsChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={enteredYearlyContrib}
            onChange={yearlyContribChangeHandler}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={enteredExpectedReturn}
            onChange={expectedReturnChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={enteredDuration}
            onChange={durationChangeHandler}
          />
        </p>
      </div>
      <p className={styles["actions"]}>
        <button type="reset" className={styles["buttonAlt"]}>
          Reset
        </button>
        <button type="submit" className={styles["button"]}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default CalculatorForm;
