import { Component } from "react";

class DisplayNone extends Component {
  // state = { visibility: "visible" };
  state = { visibility: true };

  handleDisappear = () => {
    // this.setState(() => ({
    //   visibility: "hidden",
    // }));
    this.setState((prevState) => ({
      visibility: !prevState.visibility,
    }));
  };

  render() {
    const { visibility } = this.state;

    return (
      <div>
        {/* <button onClick={this.handleDisappear}>사라지기</button> */}
        <button onClick={this.handleDisappear}>
          {visibility ? "사라지기" : "보여지기"}
        </button>
        <h1>{visibility && "하이 헬로"}</h1>
      </div>
    );
  }
}

export default DisplayNone;
