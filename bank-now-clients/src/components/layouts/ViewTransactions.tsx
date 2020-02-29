import React, { useContext } from "react";
import { connect } from "react-redux";

interface props {
  transactions: any;
}

const ViewTransactions: React.FC<props> = ({ transactions }) => {
  return (
    <div className = 'container'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Amount</th>
            <th scope="col">Transaction Type</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0  &&
            transactions.map((item: any, index: number) => (
              <tr key={item.id}>
                <th scope="row">{index}</th>
                <td>{item.amount}</td>
                <td>{item.transactionType}</td>
                <td>{item.createdAt}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  transactions: state.Account.transactions
});

export default connect(mapStateToProps)(ViewTransactions);
