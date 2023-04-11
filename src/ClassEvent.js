import React, { Component } from 'react';

export class ClassEvent extends Component {
  state = {
    message: '',
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
          onChange={(e) => this.setState({ message: e.target.value })}
        />
      </div>
    );
  }
}

export default ClassEvent;
