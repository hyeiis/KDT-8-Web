import { Component } from "react";
// import React from 'react'로 import 하게 되면 React.Component로 쓰면 된다
import PropTypes from "prop-types";

/* class형 컴포넌트
[형식] class 컴포넌트명 extends Component {} */

class ClassComponent extends Component {
  // class형 컴포넌트에서는 render 함수가 필수!

  render() {
    // const name = "홍길동";
    const { name } = this.props;
    return (
      <>
        <h2>Hello {name}</h2>
        <p>여기는 클래스형 컴포넌트입니다</p>

        {/* props */}
        <h4>{name}</h4>
      </>
    );
  }
}

ClassComponent.defaultProps = {
  name: "홍길동",
};

ClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
  // isRequired: 필수로 넣어야 하는 값.
  // isRequired가 있는데 defaultProps가 없으면 오류가 난다

  // 만약, type을 number로 하면 콘솔창에 오류는 나지만, 실행에 문제는 없다
};

export default ClassComponent;
