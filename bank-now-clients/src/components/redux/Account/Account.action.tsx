import axios from "axios";
import {
  AUTH_ERROR,
  CREATE_SUCCESS,
  CREATE_FAIL,
  ACCOUNT_LOADED,
  ADD_SUCCESS,
  ADD_FAIL,
  TRANSFER_SUCCESS,
  TRANSFER_FAIL,
  VIEW_TRANSACTION,
  TRANSACTION_FAIL
} from "../types";
import setAuthToken from "../../../utils/setAuthToken";

interface formData {
  AccounType: string;
}
interface AmountType {
  amount: string;
  accountNumber: string;
}
type depositType = Pick<AmountType, "amount">;

export const loadAccount = () => async (dispatch: any) => {
  if (localStorage.getItem("Authorization")) {
    setAuthToken(localStorage.getItem("Authorization")!);
  }

  try {
    const res = await axios.get("/api/v1/account");
    dispatch({
      type: ACCOUNT_LOADED,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response
    });
    console.log(error.response);
  }
};

export const CreateAcc = (data: formData) => async (dispatch: any) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.post("/api/v1/account", data, config);
    // console.log(res);
    dispatch({
      type: CREATE_SUCCESS,
      payload: res.data
    });

    //  loadUsers();
  } catch (error) {
    dispatch({
      type: CREATE_FAIL,
      payload: error.response.data.errors
    });
    //  console.log(error.response.data.errors);
  }
};

export const AddMoney = (data: depositType) => async (dispatch: any) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.post("/api/v1/account/deposit", data, config);
    // console.log(res);
    dispatch({
      type: ADD_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: ADD_FAIL,
      payload: error.response.data.errors
    });
    // console.log(error.response.data.errors);
  }
};

export const transferMoney = (data: AmountType) => async (dispatch: any) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.post("/api/v1/account/transfer", data, config);
    // console.log(res);
    dispatch({
      type: TRANSFER_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: TRANSFER_FAIL,
      payload: error.response.data.errors
    });
     console.log(error.response.data.errors);
  }
};

export const getTransation = () => async (dispatch: any) => {
  if (localStorage.getItem("Authorization")) {
    setAuthToken(localStorage.getItem("Authorization")!);
  }

  try {
    const res = await axios.get("/api/v1/account/transactions");
    dispatch({
      type: VIEW_TRANSACTION,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: TRANSACTION_FAIL,
      payload: error.response
    });
    // console.log(error.response.data.errors);
  }
};

//  // Login User
//  export const Login = (data:loginData) => async (dispatch:any) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json"
//     }
//   };
//   try {
//     const res = await axios.post("/api/v1/auth/signin", data, config);
//     console.log(res.data.data[0]);
//     dispatch({
//       type: LOGIN_SUCCESS,
//       payload: res.data
//     });
//     loadUser();
//   } catch (error) {
//     dispatch({
//       type: LOGIN_FAIL,
//       payload: error.response.data
//     });
//     console.log(error.response);
//   }
// };

// // logout User
// export const LogOut = () => async (dispatch:any) => {
//   dispatch({ type: LOGOUT });
// };
