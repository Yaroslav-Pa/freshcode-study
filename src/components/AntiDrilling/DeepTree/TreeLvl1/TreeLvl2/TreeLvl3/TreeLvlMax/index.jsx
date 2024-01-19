import React from 'react';

const TreeLvlMax = ({data, style, ...rest}) => {
  return (
    <div
        style={{
          border: '2px solid black',
          padding: '10px',
          ...style
        }}
      >
        <h1>TreeLvlMax</h1>
        <p>Data is: {data}</p>
        <div {...rest} />
      </div>
  );
}

export default TreeLvlMax;
