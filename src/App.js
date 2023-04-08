import './App.css';
import ClassComponent from './ClassComponent';
import ClassComponentCounter from './ClassComponentCounter';
import { FunctionComponent } from './FunctionComponent';

function App() {
  return (
    <>
      <h1>클래스형 컴포넌트</h1>
      <ClassComponent favoriteNumber={2}>***여기에 children props가 들어갑니다***</ClassComponent>
      <FunctionComponent favoriteNumber={6}>***여기에 children props가 들어갑니다***</FunctionComponent>
      <ClassComponentCounter />
    </>
  );
}

export default App;
