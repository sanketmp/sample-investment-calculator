import { useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import ResultTable from "./components/ResultTable/ResultTable";

const App = () => {
  const [userInputs, setUserInputs] = useState(null);

  const calculateHandler = (userInputs) => {
    //lifting the state up
    setUserInputs(userInputs);
  };

  const yearlyData = [];

  if (userInputs) {
    let currentSavings = +userInputs["current-savings"];
    const yearlyContribution = +userInputs["yearly-contribution"];
    const expectedReturn = +userInputs["expected-return"] / 100;
    const duration = +userInputs["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <>
      <Header />
      <Form onCalculate={calculateHandler} />
      {userInputs ? (
        <ResultTable
          calculated={yearlyData}
          initial={userInputs["current-savings"]}
        />
      ) : (
        <p style={{textAlign:"center"}}>Not yet calculated</p>
      )}
    </>
  );
};

export default App;
