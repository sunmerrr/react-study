import React from 'react';
import PropTypes from 'prop-types'; // react v15.5부터 외부 라이브러리로 이동

export const FunctionComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      {name} 함수형 컴포넌트 공부하기
      <br />
      children : {children}
      <br />
      가장 좋아하는 숫자 : {favoriteNumber}
    </div>
  );
};

FunctionComponent.defaultProps = { name: 'react' };

FunctionComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired, // 필수로 받아와야 하는 값으로 지정
};
