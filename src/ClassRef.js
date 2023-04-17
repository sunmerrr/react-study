import { Component } from 'react';

export class ClassRef extends Component {
  inputRef = React.createRef(); // 변수에 createRef()를 담아줌

  handleFocus = () => {
    this.inputRef.current.focus();
    // ref를 설정해준 DOM에 접근
    // this.refName.current로 조회 가능
  };

  render() {
    return (
      <div>
        <input ref={this.inputRef} />
        {/* 선언해준 변수를 ref를 달고자 하는 요소에 props로 넣어줌 */}
      </div>
    );
  }
}

export default ClassRef;
