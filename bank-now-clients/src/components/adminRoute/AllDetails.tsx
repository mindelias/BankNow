import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllUsersDetailsForAdmin } from "../redux/Auth/Auth.action";

interface props {
  getDetails: () => void;
  users: any[];
}

const AllDetails: React.FC<props> = ({ getDetails, users }) => {
  useEffect(() => {
    getDetails();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"> Name</th>
            <th scope="col">email</th>
            <th scope="col">phoneNumber</th>
            <th scope="col">Account Bal</th>
            <th scope="col">Account Number</th>
            <th scope="col">Account Type</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((item: any, index: number) => (
              <tr key={item.id}>
                <th scope="row">{index}</th>
                <td>{item.fullName}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>
                  {item.Accounts.map((value: any) => value.accountBalance)}
                </td>
                <td>
                  {item.Accounts.map((value: any) => value.accountNumber)}
                </td>
                <td>{item.Accounts.map((value: any) => value.accountType)}</td>
                <td>{new Date(item.createdAt).toDateString()}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  users: state.Auth.users,
});

export default connect(mapStateToProps, {
  getDetails: getAllUsersDetailsForAdmin,
})(AllDetails);
