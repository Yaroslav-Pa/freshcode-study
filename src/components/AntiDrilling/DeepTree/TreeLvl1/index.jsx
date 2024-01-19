import React from 'react';
import TreeLvl2 from './TreeLvl2';

const TreeLvl1 = (props) => {
  const { data, handleClick } = props;
  return (
    <div
      style={{
        border: '2px solid black',
        padding: '10px',
      }}
    >
      <h1>TreeLvl1</h1>
      {/* <TreeLvl2 data={data} handleClick={handleClick}/> */}
      <TreeLvl2 {...props} />
    </div>
  );
};

// const treeLvl2Props = {
//   ...props
// }

export default TreeLvl1;
