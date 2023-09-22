import { Component } from "react";

// 자식 컴포넌트
class MyComponent extends Component {
  // 생성될 때
  componentDidMount() {
    console.log("⭕ Mount!");
  }

  // 업데이트될 때
  componentDidUpdate() {
    console.log("✅ Update!");
  }

  // 제거될 때
  componentWillUnmount() {
    console.log("❌ Unmount!");
  }

  render() {
    return (
      <>
        <div>My Component {this.props.number}</div>
      </>
    );
  }
}

// 부모 컴포넌트
export default class LifeCycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  };

  chageNumber = () => {
    this.setState({ number: this.state.number + 1 });
  };

  changeVisible = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <>
        <h3>LifeCycle 클래스형 컴포넌트</h3>
        <button onClick={this.chageNumber}>PLUS</button>
        <button onClick={this.changeVisible}>ON/OFF</button>
        {this.state.visible && <MyComponent number={this.state.number} />}
      </>
    );
  }
}
