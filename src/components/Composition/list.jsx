import React from 'react';
function List(props) {
  const {children, listname} = props;
  return (
    <div>
      <h2>{listname}</h2>
      <ul>{children}</ul>
    </div>
  );
}

export default List;
