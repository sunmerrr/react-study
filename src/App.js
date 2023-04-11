import './App.css';
import ClassComponent from './ClassComponent';
import ClassComponentCounter from './ClassComponentCounter';
import { FunctionComponent } from './FunctionComponent';
import { FunctionComponentCouter } from './FunctionComponentCounter';
import { FunctionComponentSayHi } from './FunctionComponentSayHi';

function App() {
  return (
    <div className="App">
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
