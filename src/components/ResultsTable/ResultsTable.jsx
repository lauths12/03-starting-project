import { calculateInvestmentResults } from "../../util/investment";
import { formatter } from "../../util/investment";
import "./ResultsTable.css"

export default function ResultsTable({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const results = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  console.log(results);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => {
          if (index === 0) {
            result.totalInterest = result.interest;
          } else {
            result.totalInterest =
              results[index - 1].totalInterest + result.interest;
          }
          const investedCapital = result.valueEndOfYear - result.totalInterest;
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(result.totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
