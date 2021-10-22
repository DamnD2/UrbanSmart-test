import { SET_USERNAME } from "../actions/userNameAction";

const initialState = { userName: '' };

export const userNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return { ...state, userName: action.payload };
    default:
      return state;
  }
};
