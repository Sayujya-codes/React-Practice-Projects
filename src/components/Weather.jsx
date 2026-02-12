import React from "react";

const Weather = (props) => {
  if (props.temp < 15) {
    return <h1>"It's cold outside!"</h1>;
  } else if (props.temp > 15 && props.temp < 25) {
    return <h1>"It's nice outside!"</h1>;
  } else return <h1>It's hot outside!</h1>;
};

export default Weather;
