import React from "react";
import { connect } from "react-redux";

interface props {
  transactions: any;
  user: any;
}

const ViewTransactions: React.FC<props> = ({ transactions, user }) => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Amount</th>
            <th scope="col">Recipient</th>
            <th scope="col">Transaction Type</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 &&
            transactions.map((item: any, index: number) => (
              <tr key={item.id}>
                <th scope="row">{index}</th>
                <td>{item.amount}</td>
                <td>
                  {item.recipient === user.fullName ? "Self" : item.recipient}
                </td>
                <td>{item.transactionType}</td>
                <td>{new Date(item.createdAt).toDateString()}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  transactions: state.Account.transactions,
  user: state.Auth.user,
});

export default connect(mapStateToProps)(ViewTransactions);
