import React from 'react';

const Child = (props) => {
  const Custom = props.custom;

  return (
    <div className="" onClick={() => props.onChidClick && props.onChidClick(props.data)}>
      {props.custom ? (
        <Custom {...props.data} />
      ) : (
        <div className="tree-child-component">{props.data.name}</div>
      )}
    </div>
  );
};

export default Child;

