import uuid from "uuid";

import { SET_ALERT, REMOVE_ALERT } from "../types";

// const initialState: [] = [];

// Set Alert
export const Alert = (msg: string, type: string, timeout = 5000) => async (
  dispatch: any
) => {

  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, type, id }
  });
  setTimeout(
    () => dispatch({ type: REMOVE_ALERT, payload: id }),

    timeout
  );
};
