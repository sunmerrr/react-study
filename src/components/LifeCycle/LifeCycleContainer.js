import { Component } from 'react';
import ComponentLifeCycle from './ComponentLifeCycle';
import ErrorBoundary from './ErrorBoundary';

function getRandomColor() {
  // 16777215 값은 hex로 ffffff 값임. 즉, 000000 ~ ffffff 까지 값을 반환하게 됨 (182p)
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export class LifeCycleContainer extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <ComponentLifeCycle color={this.state.color} />
        </ErrorBoundary>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default LifeCycleContainer;
