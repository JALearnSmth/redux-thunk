const INITAL_STATE = {
  countries: [],
};
export const reducers = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "GET_COUNTRIES_SUCCES":
      return { ...state, countries: action.payload };
    case "GET_COUNTRIES_ERROR":
      return { ...state };
    default:
      return state;
  }
};
