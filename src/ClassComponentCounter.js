import React, { Component } from 'react';

export class ClassComponentCounter extends Component {
  // 컴포넌트에 state를 설정할때 constructor에 메서드를 작성하여 설정해야 함.
  constructor(props) {
    // super() 함수를 통해서 현재 컴포넌트가 상속받고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출해줌
    super(props);
    // state의 초기값 설정
    // 객체 형식이어야 함
    this.state = {
      number: 0,
    };
  }
  render() {
    const { number } = this.state; // state는 this.state로 조회 가능
    return (
      <div>
        <h1>{number}</h1>
        <button
          // 버튼 클릭시 일어날 이벤트를 설정해줌
          onClick={() => {
            // this.setState를 통해서 state값을 변경
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default ClassComponentCounter;
