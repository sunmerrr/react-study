import { Component } from 'react';
import './App.css';
import ClassComponent from './components/ComponentBasic/ClassComponent';
import ClassComponentCounter from './components/ComponentBasic/ClassComponentCounter';
import ClassEvent from './components/Event/ClassEvent';
import ClassRef from './components/Ref/ClassRef';

export class ClassApp extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{ color: 'green' }}>---------------Class----------------</h1>
        <h1>Ref</h1>
        <ClassRef ref={(ref) => (this.scrollBoxRef = ref)} />
        <button
          onClick={() => {
            this.scrollBoxRef.scrollToBottom();
          }}
        >
          맨 밑으로
        </button>

        <hr />
        <h1>이벤트 핸들링</h1>
        <ClassEvent />

        <hr />
        <h1>컴포넌트</h1>
        <ClassComponent favoriteNumber={2}>***여기에 children props가 들어갑니다***</ClassComponent>
        <ClassComponentCounter />
      </div>
    );
  }
}

export default ClassApp;
