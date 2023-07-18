import { useState } from "react";

const ResultTable = (props) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>

      <tbody>
        {props.calculated.map((yearly_data) => (
          <tr key={yearly_data.year}>
            <td>{yearly_data.year}</td>
            <td>{yearly_data.savingsEndOfYear}</td>
            <td>{yearly_data.yearlyInterest}</td>
            <td>
              {yearly_data.savingsEndOfYear -
                props.initial -
                yearly_data.yearlyContribution * yearly_data.year}
            </td>
            <td>
              {props.initial +
                yearly_data.yearlyContribution * yearly_data.year}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
