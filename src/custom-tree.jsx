import React from 'react';
import Tree from './lib';
import data from './data.json';

const Child = (props) => <div className="custom-child">{props.name}</div>;

const Parent = (props) => {
  return (
    <div className="custom-parent">
      <span className="custom-open-icon">
        {props.open ? (
          <i className="fa fa-caret-down" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-caret-right" aria-hidden="true"></i>
        )}
      </span>
      {props.name}
    </div>
  );
};

const CustomTree = () => {
  return (
    <div className="tree-sample">
      <Tree
        data={data}
        onChidClick={(child) => console.log('Child clicked:', child)}
        parentComponent={Parent}
        childComponent={Child}
      />
    </div>
  );
};

export default CustomTree;

