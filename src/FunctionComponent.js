import React from 'react';
import PropTypes from 'prop-types'; // react v15.5부터 외부 라이브러리로 이동

export const FunctionComponent = ({ name, children }) => {
  return (
    <div>
      {name} 함수형 컴포넌트
      <br /> children : {children}
    </div>
  );
};

FunctionComponent.defaultProps = { name: 'react' };

FunctionComponent.propTypes = {
  name: PropTypes.string,
};
