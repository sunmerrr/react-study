import React from 'react';

export const FunctionComponent = (props) => {
  return (
    <div>
      {props.name} 함수형 컴포넌트
      <br /> children : {props.children}
    </div>
  );
};

FunctionComponent.defaultProps = { name: 'react' };
