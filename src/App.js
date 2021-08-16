import React from "react";
import "./App.css";
import "./styles/global.css";
import styled from "styled-components";
import Box from "./components/Box";

const tempMin = -20,
  tempMax = 40,
  heartMin = 80,
  heartMax = 180,
  stepsMin = 0,
  stepsMax = 50000;

const StyledBox = styled(Box)`
  color: black;
`;

const boxes = [
  { icon: "local_drink", color: "#3A85FF", value: 1.5, unit: "L" },
  { icon: "directions_walk", color: "black", value: 3000, unit: "steps" },
  { icon: "favorite", color: "red", value: 120, unit: "bpm" },
  { icon: "wb_sunny", color: "yellow", value: -10, unit: "°C" },
];
export class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <p>Heart: {heartMin}</p>
          <p>Temprature: {tempMin}</p>
          <p>Box: {stepsMin}</p>
          {boxes.map((box) => (
            <Box
              icon={box.icon}
              color={box.color}
              value={box.value}
              unit={box.unit}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
