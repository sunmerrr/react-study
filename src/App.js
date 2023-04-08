import './App.css';
import ClassComponent from './ClassComponent';
import { FunctionComponent } from './FunctionComponent';

function App() {
  return (
    <>
      <h1>클래스형 컴포넌트</h1>
      <ClassComponent>***여기에 children props가 들어갑니다***</ClassComponent>
      <FunctionComponent favoriteNumber={6}>***여기에 children props가 들어갑니다***</FunctionComponent>
    </>
  );
}

export default App;
