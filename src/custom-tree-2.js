import React, { Component } from 'react'
import Tree from './lib';
import data from './data.json'


const Child = props => <div className='custom-child-2'>{props.name}</div>

class Parent extends Component {
  constructor(props) {
     super(props);
     this.state = {
     };
 }
 render () {
    return (
      <div className="custom-parent-2">
        {this.props.name}
        <span className="custom-open-icon-2  font-22">
          {this.props.open ? <i class="fa fa-caret-down" aria-hidden="true"></i> : <i class="fa fa-caret-right" aria-hidden="true"></i>}
        </span>
      </div>
    )
 }
}


class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        noLeftMargin:true
      };
  }

  render() {
    return (<div className="tree-sample">
      <button onClick={() => this.setState({noLeftMargin: !this.state.noLeftMargin})}>{this.state.noLeftMargin ? 'Add' : 'Remove'} left margin</button>
      <Tree
        data={data}
        onChidClick={(child) => console.log(child)}
        parentComponent={Parent}
        childComponent={Child}
        noLeftMargin={this.state.noLeftMargin}
        />
                            
    </div>)
  }
}

export default App;