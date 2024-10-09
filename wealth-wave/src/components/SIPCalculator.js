import { useState } from "react";
import sip from "./sip.jpg"
import Navigation from "./Navigation";
function SIPCalculator() {
    const [monthlyInvestment, setMonthlyInvestment] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [years, setYears] = useState('');
    const [investedAmount, setInvestedAmount] = useState(null)
    const [futureValue, setFutureValue] = useState(null);
  
    const calculateSIP = (e) => {
      e.preventDefault();
      const P = parseFloat(monthlyInvestment);
      const r = parseFloat(interestRate) / 100 / 12;
      const n = parseInt(years) * 12;
  
      const FV = P * (((1 + r) ** n - 1) / r) * (1 + r);

      setInvestedAmount(monthlyInvestment*(parseInt(years)*12))
  
      setFutureValue(FV.toFixed(2));
    };
  
    return (
      <>
      <Navigation />
      <img src={sip} style={{width: "25%", height: "25%",marginLeft: "35%", marginTop: "5%"}}></img>
      <div className="sip-calculator">
        <h2>SIP Calculator</h2>
        <form onSubmit={calculateSIP}>
          <div>
            <label>Monthly Investment (₹):</label>
            <input
              type="number"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Annual Interest Rate (%):</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Investment Period (years):</label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              required
            />
          </div>
          <button type="submit">Calculate</button>
        </form>
        {futureValue !== null && (
          <div className="result">
             <h3>Invested Ammount: ₹{investedAmount}</h3>
            <h3>Future Value: ₹{futureValue}</h3>
          </div>
        )}
      </div>
      </>
    );
   
}

export default SIPCalculator
