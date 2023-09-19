import { Component } from "react";

class ClassComponent extends Component {
  render() {
    const { food } = this.props;
    return (
      <>
        <div>
          좋아하는 음식: <span style={{ color: "red" }}>{food}</span>
        </div>
      </>
    );
  }
}

ClassComponent.defaultProps = {
  food: "떡볶이",
};

export default ClassComponent;
