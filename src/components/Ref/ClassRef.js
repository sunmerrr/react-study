import React, { Component } from 'react';
import './ClassRef.css';

export class ClassRef extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
    this.inputRef.focus();
  };

  inputRef = React.createRef(); // 변수에 createRef()를 담아줌

  render() {
    return (
      <div>
        {/* <input ref={this.inputRef} /> */}
        {/* 선언해준 변수를 ref를 달고자 하는 요소에 props로 넣어줌 */}
        <input
          ref={(ref) => {
            this.inputRef = ref;
          }}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ClassRef;
