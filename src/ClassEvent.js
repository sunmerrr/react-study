import React, { Component } from 'react';

export class ClassEvent extends Component {
  state = {
    message: '',
    userName: '',
  };

  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    alert('멧돼지: ' + this.state.message + ' 이름:' + this.state.userName);
    this.setState({ message: '', userName: '' });
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h2>클래스형 이벤트</h2>
        <input
          type="text"
          name="message"
          placeholder="write something here"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <input
          type="text"
          name="userName"
          placeholder="write your name here"
          value={this.state.userName}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <button onClick={this.handleClick}>확인</button>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default ClassEvent;
