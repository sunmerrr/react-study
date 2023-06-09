import React, { Component } from 'react';
import './Ref.css';

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

  // ref를 통해서 scroll event 다루기
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.scrollRef;
    this.scrollRef.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative',
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)',
    };

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
        <div
          style={style}
          ref={(ref) => {
            this.scrollRef = ref;
          }}
        >
          <div style={innerStyle}></div>
        </div>
      </div>
    );
  }
}

export default ClassRef;
