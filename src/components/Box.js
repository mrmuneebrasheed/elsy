import React from "react";
import styled from "styled-components";
const StyledBox = styled.div`
  &:nth-child(n) {
    background: #aaaaaa;
  }
  &:nth-child(2n) {
    background: #cccccc;
  }
  & {
    height: 190px;
    padding: 8px;
    text-align: center;
  }
`;
class Box extends React.Component {
  render() {
    return (
      <StyledBox className="col-sm-3 col-6">
        <span
          class="material-icons"
          style={{ fontSize: 100, color: `${this.props.color}` }}
        >
          {this.props.icon}
        </span>
        <p>
          {this.props.value} : {this.props.unit}
        </p>
      </StyledBox>
    );
  }
}
export default Box;
