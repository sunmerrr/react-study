import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ClassComponent extends Component {
  // class형 컴포넌트에서는 defaultProps와 propTypes를 클래스 내부에서 설정할 수도 있다.
  static defaultProps = {
    name: 'React Class Component',
  };

  static propTypes = {
    name: PropTypes.string,
    unsetNumber: PropTypes.number.isRequired,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, unsetNumber, favoriteNumber, children } = this.props;
    return (
      <div>
        <strong>{name} 공부하기</strong>
        <br />
        클래스형 컴포넌트의 children : {children}
        <br />
        가장 좋아하는 숫자 : {unsetNumber}(숫자가 없을때 에러 표시를 위함 - console창 확인)
        <br />
        가장 좋아하는 숫자 : {favoriteNumber}
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default ClassComponent;

// ClassComponent.defaultProps = { name: 'React Class Component' };

// ClassComponent.propTypes = {
//   name: PropTypes.string,
//   unsetNumber: PropTypes.number.isRequired,
//   favoriteNumber: PropTypes.number.isRequired,
// };
