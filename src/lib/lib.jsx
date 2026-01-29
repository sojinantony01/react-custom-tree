import React from 'react';
import Child from './child.jsx';
import Parent from './parent.jsx';

const Tree = (props) => {
  const getTree = (data) => {
    if (data && data.length) {
      return getParentsAndChild(data);
    }
    return null;
  };

  const getParentsAndChild = (data) => {
    return data.map((d) => {
      if (d.child && d.child.length) {
        return (
          <div className={props.noLeftMargin ? '' : 'tree-margin-left-15'} key={d.id}>
            <Parent {...props} data={d} custom={props.parentComponent} />
          </div>
        );
      } else {
        return (
          <div className={props.noLeftMargin ? '' : 'tree-margin-left-15'} key={d.id}>
            <Child onChidClick={props.onChidClick} data={d} custom={props.childComponent} />
          </div>
        );
      }
    });
  };

  return <div className="">{getTree(props.data)}</div>;
};

export default Tree;

