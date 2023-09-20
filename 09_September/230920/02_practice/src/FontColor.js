import { Component } from "react";

class FontColor extends Component {
  state = { text: "검정색 글씨", color: "black" };

  handleRed = () => {
    this.setState(() => ({ text: "빨간색 글씨", color: "red" }));
  };
  handleBlue = () => {
    this.setState(() => ({ text: "파란색 글씨", color: "blue" }));
  };
  render() {
    const { text, color } = this.state;

    return (
      <div>
        <h1 style={{ color }}>{text}</h1>
        <button onClick={this.handleRed}>RED</button>
        <button onClick={this.handleBlue}>BLUE</button>
      </div>
    );
  }
}

export default FontColor;
