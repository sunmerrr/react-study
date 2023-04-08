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
      fixedNumber: 2,
    };
  }
  render() {
    const { number, fixedNumber } = this.state; // state는 this.state로 조회 가능
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // 버튼 클릭시 일어날 이벤트를 설정해줌
          onClick={() => {
            // this.setState를 통해서 state값을 변경 가능
            // 인자로 전달된 객체 안에 들어있는 값만 바꿔 줌
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
