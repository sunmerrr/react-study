import './App.css';
import ClassComponent from './components/ComponentBasic/ClassComponent';
import ClassComponentCounter from './components/ComponentBasic/ClassComponentCounter';
import ClassEvent from './components/Event/ClassEvent';
import ClassRef from './components/Ref/ClassRef';
import FunctionComponent from './components/ComponentBasic/FunctionComponent';
import FunctionComponentCouter from './components/ComponentBasic/ClassComponentCounter';
import FunctionComponentSayHi from './components/ComponentBasic/FunctionComponentSayHi';
import FunctionEvent from './components/Event/FunctionEvent';

function App() {
  return (
    <div className="App">
      <h1>Ref</h1>
      <ClassRef />

      <hr />
      <h1>이벤트 핸들링</h1>
      <ClassEvent />
      <FunctionEvent />

      <hr />
      <h1>컴포넌트</h1>
      <ClassComponent favoriteNumber={2}>***여기에 children props가 들어갑니다***</ClassComponent>
      <FunctionComponent favoriteNumber={6}>***여기에 children props가 들어갑니다***</FunctionComponent>
      <ClassComponentCounter />
      <FunctionComponentCouter />
      <FunctionComponentSayHi />
    </div>
  );
}

export default App;
