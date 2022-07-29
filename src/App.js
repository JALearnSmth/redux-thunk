import React, { useEffect } from "react";
import "./styles.css";
import { connect } from "react-redux";
import { getCountries } from "./actions";
const App = (props) => {
  useEffect(() => {
    props.getCountries();
  }, []);

  return (
    <div className="App">
      {props.countries &&
        props.countries.map((country) => {
          return (
            <div key={country.name.common}>
              <h3 style={{ color: "green" }}>{country.name.common}</h3>
              <p>
                <img
                  src={country.flags.png}
                  alt={country.name.common}
                  style={{ width: "100px" }}
                />
              </p>
              <h4 style={{ color: "#ed2938" }}>{country.capital[0]}</h4>

              <hr />
            </div>
          );
        })}
    </div>
  );
};
const mapStateProps = (state) => {
  return {
    countries: state.countries,
  };
};

export default connect(mapStateProps, { getCountries })(App);
