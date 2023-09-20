import { Component } from "react";

class Counter extends Component {
  // 생성자 이용하는 방식
  /* constructor(props) {
    super(props);
    
    this.state = { count: 0 };
    // 바인딩
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    // this.setState({ count: this.state.count + 1 });
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  handleDecrement() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  } */

  state = { count: 0 };

  // setState는 호출 직후에 상태가 바로 업데이트 되지 않는다
  // 리액트는 여러 setState 호출을 일괄처리한다

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
