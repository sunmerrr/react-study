import './App.css';
import FunctionComponent from './components/ComponentBasic/FunctionComponent';
import FunctionComponentCouter from './components/ComponentBasic/ClassComponentCounter';
import FunctionComponentSayHi from './components/ComponentBasic/FunctionComponentSayHi';
import FunctionEvent from './components/Event/FunctionEvent';
import FunctionRef from './components/Ref/FunctionRef';
import FunctionMap from './components/Map/FunctionMap';
import State from './components/Hooks/State';
import HookContainer from './components/Hooks/HookContainer';
import ReducerCounter from './components/Hooks/ReducerCounter';
import ReducerInfo from './components/Hooks/ReducerInfo';
import Memo from './components/Hooks/Memo';

function FunctionApp() {
  return (
    <div className="App">
      <hr />
      <h1 style={{ color: 'green' }}>---------------Function----------------</h1>
      <h1>Built-in Hooks</h1>
      <State />
      <HookContainer />
      <ReducerCounter />
      <ReducerInfo />
      <Memo />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <h1>컴포넌트 반복</h1>
      <FunctionMap />

      <hr />
      <h1>Ref</h1>
      <FunctionRef />

      <hr />
      <h1>이벤트 핸들링</h1>
      <FunctionEvent />

      <hr />
      <h1>컴포넌트</h1>
      <FunctionComponent favoriteNumber={6}>***여기에 children props가 들어갑니다***</FunctionComponent>
      <FunctionComponentCouter />
      <FunctionComponentSayHi />
    </div>
  );
}

export default FunctionApp;
