import React from 'react';

export const FunctionComponent = ({ name, children }) => {
  return (
    <div>
      {name} 함수형 컴포넌트
      <br /> children : {children}
    </div>
  );
};

FunctionComponent.defaultProps = { name: 'react' };
