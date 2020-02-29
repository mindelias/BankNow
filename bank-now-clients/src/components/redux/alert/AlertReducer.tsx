import {SET_ALERT, REMOVE_ALERT} from '../types'

export interface Istate {
    id: string;
    msg: string;
    type: string;
  }
  const initialState: Istate[] = []
  function AlertReducer(state = initialState, action: any) {
    switch (action.type) {
      case SET_ALERT:
        return [...state, action.payload];
      case REMOVE_ALERT:
        return state.filter(alert => alert.id !== action.payload);
  
      default:
        return state;
    }
  }
  
  export default AlertReducer;