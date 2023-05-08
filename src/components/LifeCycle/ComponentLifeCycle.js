import { Component } from 'react';

export class ComponentLifeCycle extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps --> ', 'nextProps: ', nextProps, 'prevState: ', prevState);
    if (nextProps !== prevState) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate --> ', 'nextProps: ', nextProps, 'nextState: ', nextState);
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    console.log('click number update button');
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate --> ', 'prevProps: ', prevProps, 'prevState: ', prevState);
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate --> ', 'prevProps: ', prevProps, 'prevState: ', prevState);
    if (snapshot) {
      console.log('color before updated --> ', 'snapshot: ', snapshot);
    }
  }

  render() {
    console.log('----------render----------');

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        {/* {this.props.missing.value} */}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default ComponentLifeCycle;
