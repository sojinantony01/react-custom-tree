import React, { Component } from 'react'
import Tree from './lib';
import data from './data.json'


const Child = props => <div className='custom-child'>{props.name}</div>

class Parent extends Component {
  constructor(props) {
     super(props);
     this.state = {
      
     };
 }
 render () {
    return (
      <div className="custom-parent">
        <span className="custom-open-icon">
          {this.props.open ? <i class="fa fa-caret-down" aria-hidden="true"></i> : <i class="fa fa-caret-right" aria-hidden="true"></i>}
        </span>
        {this.props.name}
      </div>
    )
 }
}


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
        parentComponent={Parent}
        childComponent={Child}
        />
                            
    </div>)
  }
}

export default App;