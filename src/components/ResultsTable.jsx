import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

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
          const totalInterest = results
            .slice(0, index + 1)
            .reduce((sum, entry) => sum + entry.interest, 0);
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(result.valueEndOfYear - totalInterest)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
