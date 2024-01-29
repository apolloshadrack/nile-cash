import React from 'react';
import '../styles/History.css';

const History = () => {
  const data = [
    { name: 'Obehi', date: '02/01/2024', amount: '100ghc', repaymentDate: '25/01/2024', expectedAmount: '110 ghc', status: 'Review' },
    { name: 'Andrew', date: '03/01/2024', amount: '100ghc', repaymentDate: '25/01/2024', expectedAmount: '110 ghc', status: 'Confirmed' },
    { name: 'Peris', date: '11/01/2024', amount: '100ghc', repaymentDate: '25/01/2024', expectedAmount: '110 ghc', status: 'Confirmed' },
    { name: 'Emmanuel', date: '10/01/2024', amount: '100ghc', repaymentDate: '25/01/2024', expectedAmount: '110 ghc', status: 'Confirmed' }
    // ... more data
  ];

  return (
    <div className="history">
      <h1>History</h1>
      <input type="text" className="search-input" placeholder="search" />
      
      <table className="history-table">
        <thead>
          <tr>
            <th>Names</th>
            <th>Disbursed Loans</th>
            <th>Amount</th>
            <th>Repayment Date</th>
            <th>Expected Amount(10%)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>{item.amount}</td>
              <td>{item.repaymentDate}</td>
              <td>{item.expectedAmount}</td>
              <td>
                <span className={`status ${item.status.toLowerCase()}`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
