import React from "react";
import "./App.css";
import "./styles/global.css";
import Box from "./components/Box";

const tempMin = -20,
  tempMax = 40,
  heartMin = 80,
  heartMax = 180,
  stepsMin = 0,
  stepsMax = 50000;
export class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <p>Heart: {heartMin}</p>
          <p>Temprature {tempMin}</p>
          <p>Box: {stepsMin}</p>
          <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L" />
          <Box icon="directions_walk" color="black" value={3000} unit="steps" />
          <Box icon="favorite" color="red" value={120} unit="bpm" />
          <Box icon="wb_sunny" color="yellow" value={-10} unit="°C" />
        </div>
      </div>
    );
  }
}

export default App;
