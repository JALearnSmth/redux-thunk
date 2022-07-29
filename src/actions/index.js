import axios from "axios";

export const getCountries = () => (dispatch) => {
  axios
    .get("https://restcountries.com/v3.1/region/europe")
    .then((response) =>
      dispatch({ type: "GET_COUNTRIES_SUCCES", payload: response.data })
    )
    .catch((error) =>
      dispatch({ type: "GET_COUNTRIES_ERROR", payload: error })
    );
};
