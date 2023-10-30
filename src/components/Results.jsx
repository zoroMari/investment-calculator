import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Results({ values }) {
  const valuesForResults = {
    initialInvestment: values[0].value,
    annualInvestment: values[1].value,
    expectedReturn: values[2].value,
    duration: values[3].value,
  }
  const annualData = calculateInvestmentResults(valuesForResults);
  const initialInvestment = annualData[0].valueEndOfYear -  annualData[0].interest - annualData[0].annualInvestment;

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
        {
          annualData.map((item) => {
            const {year, initialInvestment, interest, valueEndOfYear, annualInvestment} = item;
            const totalInterest = valueEndOfYear - annualInvestment * year - initialInvestment;
            const totalAmountInvested = valueEndOfYear - totalInterest;

            return (
              <tr key={year}>
                <td>{year}</td>
                <td>{formatter.format(valueEndOfYear)}</td>
                <td>{formatter.format(interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            ) 
          })
        }
      </tbody>
    </table>
  );
}
