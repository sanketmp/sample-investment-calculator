import React, { useState } from "react";

const Form = (props) => {
  const DEMO_INPUT={
    "current-savings": "",
    "yearly-contribution": "",
    "expected-return": "",
    "duration": "",
  }

  
  const [inputs, setInputs] = useState(DEMO_INPUT);

  const inputchangeHandler = (input, value) => {
    setInputs((prev) => {
      return { ...prev, [input]: +value };
    });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.onCalculate(inputs);
      }}
      className="form"
    >
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) => {
              inputchangeHandler("current-savings", event.target.value);
            }}
            value={inputs["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) => {
              inputchangeHandler("yearly-contribution", event.target.value);
            }}
            value={inputs["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) => {
              inputchangeHandler("expected-return", event.target.value);
            }}
            value={inputs["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) => {
              inputchangeHandler("duration", event.target.value);
            }}
            value={inputs["duration"]}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button
          onClick={() => {
            setInputs(DEMO_INPUT);
          }}
          type="reset"
          className="buttonAlt"
        >
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
