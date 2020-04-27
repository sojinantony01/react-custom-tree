import React, { Component } from 'react'
import Tree from './lib'
import data from './data.json'


class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
       
      };
  }

  render() {
    return (<div className="tree-sample">
      <Tree
        data={data}
        onChidClick={(child) => console.log(child)}
        isDefaultOpen={this.props.open}
        />
                            
    </div>)
  }
}

export default App;