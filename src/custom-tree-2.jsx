import React, { useState } from 'react';
import Tree from './lib';
import data from './data.json';

const codeExample = `import React from 'react';
import Tree from 'react-custom-tree';
import data from './data.json';

const Child = (props) => (
  <div className='custom-child'>{props.name}</div>
);

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

const App = () => {
  return (
    <div className="tree-sample">
      <Tree
        data={data}
        onChidClick={(child) => console.log(child)}
        parentComponent={Parent}
        childComponent={Child}
      />
    </div>
  );
};

export default App;`;

const Child = (props) => <div className="custom-child-2">{props.name}</div>;

const Parent = (props) => {
  return (
    <div className="custom-parent-2">
      {props.name}
      <span className="custom-open-icon-2 font-22">
        {props.open ? (
          <i className="fa fa-caret-down" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-caret-right" aria-hidden="true"></i>
        )}
      </span>
    </div>
  );
};

const CustomTreeTwo = () => {
  const [noLeftMargin, setNoLeftMargin] = useState(true);
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="tree-sample">
      <div className="controls">
        <button onClick={() => setNoLeftMargin(!noLeftMargin)}>
          {noLeftMargin ? 'Add' : 'Remove'} left margin
        </button>
        <button onClick={() => setShowCode(!showCode)}>
          {showCode ? 'Hide' : 'Show'} code
        </button>
      </div>
      
      <Tree
        data={data}
        onChidClick={(child) => console.log('Child clicked:', child)}
        parentComponent={Parent}
        childComponent={Child}
        noLeftMargin={noLeftMargin}
      />
      
      {showCode && (
        <pre className="code-block">
          <code>{codeExample}</code>
        </pre>
      )}
    </div>
  );
};

export default CustomTreeTwo;

