import React from 'react';
import Tree from './lib';
import data from './data.json';

const SimpleTree = ({ open }) => {
  return (
    <div className="tree-sample">
      <Tree
        data={data}
        onChidClick={(child) => console.log('Child clicked:', child)}
        isDefaultOpen={open}
      />
    </div>
  );
};

export default SimpleTree;

