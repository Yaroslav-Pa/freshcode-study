import React from 'react';
import TreeLvlMax from './TreeLvlMax';

const TreeLvl3 = ({ handleClick, ...rest }) => {
  return (
    <div
      style={{
        border: '2px solid black',
        padding: '10px',
      }}
    >
      <h1>TreeLvl3</h1>
      <button onClick={handleClick}>Destroy Universe</button>
      <TreeLvlMax {...rest} />
    </div>
  );
};

export default TreeLvl3;
