import React from 'react';
import TreeLvl3 from './TreeLvl3';

const TreeLvl2 = (props) => {
  const { data, handleClick } = props;
  return (
    <div
      style={{
        border: '2px solid black',
        padding: '10px',
      }}
    >
      <h1>TreeLvl2</h1>
      <TreeLvl3 {...props} />
    </div>
  );
};

export default TreeLvl2;
