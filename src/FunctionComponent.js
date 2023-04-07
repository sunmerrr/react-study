import React from 'react';

export const FunctionComponent = (props) => {
  return <div>{props.name} 함수형 컴포넌트</div>;
};

FunctionComponent.defaultProps = { name: 'react' };
