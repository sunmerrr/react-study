import React, { Component } from 'react';

export class ClassEvent extends Component {
  state = {
    message: '',
  };

  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  handleChange = (e) => {
    this.setState({ message: e.target.value });
  };

  handleClick = () => {
    alert(this.state.message);
    this.setState({ message: '' });
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
