import React from 'react';
import PropTypes from 'prop-types'; // react v15.5부터 외부 라이브러리로 이동

export const FunctionComponent = ({ name, unsetNumber, favoriteNumber, children }) => {
  return (
    <div>
      <strong>{name} 공부하기</strong>
      <br />
      함수형 컴포넌트의 children : {children}
      <br />
      가장 좋아하는 숫자 : {unsetNumber}(숫자가 없을때 에러 표시를 위함 - console창 확인)
      <br />
      가장 좋아하는 숫자 : {favoriteNumber}
      <br />
      <br />
      <br />
    </div>
  );
};

FunctionComponent.defaultProps = { name: 'React Function Component' };

FunctionComponent.propTypes = {
  name: PropTypes.string,
  unsetNumber: PropTypes.number.isRequired,
  favoriteNumber: PropTypes.number.isRequired, // 필수로 받아와야 하는 값으로 지정
};

export default FunctionComponent;
