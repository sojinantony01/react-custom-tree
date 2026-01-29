import React, { useState } from 'react';
import Tree from './lib.jsx';

const Parent = (props) => {
  const [open, setOpen] = useState(props.isDefaultOpen ? true : false);
  const Custom = props.custom;

  return (
    <div className="">
      <div onClick={() => setOpen(!open)}>
        {props.custom ? (
          <Custom {...props.data} open={open} />
        ) : (
          <div className="tree-parent-component">
            <span>{open ? '-' : '+'}</span>
            <span>{props.data.name}</span>
          </div>
        )}
      </div>
      {open && <Tree {...props} data={props.data.child} />}
    </div>
  );
};

export default Parent;

