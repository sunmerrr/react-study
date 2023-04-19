import React from 'react';

const FunctionMap = () => {
  const names = ['snowman', 'ice', 'snow', 'wind'];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);

  return (
    <div>
      <ul>{nameList}</ul>
    </div>
  );
};

export default FunctionMap;
