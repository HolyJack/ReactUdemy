import Table from "../UI/Table";
import styles from "./CalculatorResult.module.css"

// DO NOT MODIFY WITHOUT MODIFING calculateHandler function !!!
const heading = [
  "Year",
  "Total Savings",
  "Interest (Year)",
  "Total Interest",
  "Invested Capital",
];

const CalculatorResult = (props) => {
  if (props.data === null) {
    return <p className={styles["result__fallback"]}>No investment calculated yet.</p>;
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted

    const yearlyData = []; // per-year results

    const initialSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    let currentSavings = initialSavings;
    let totalInterest = 0;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      const currentInvestment = initialSavings + yearlyContribution * i;

      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;

      // ORDDER MATTERS AND DETERMINED IN heading variable ABOVE
      yearlyData.push([
        i + 1, //Year
        formatter.format(currentSavings), // Total Savings
        formatter.format(yearlyInterest), // Interest (Year)
        formatter.format(totalInterest), // Total Interest
        formatter.format(currentInvestment), // Invested Capital
      ]);
    }

    return yearlyData;
  };

  const calculatedData = calculateHandler(props.data);

  return <Table className={styles["result"]} heading={heading} rows={calculatedData} />;
};

export default CalculatorResult;
