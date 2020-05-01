import React, { Component } from 'react'
import Tree from './lib';
import data from './data.json'

const code = `import React, { Component } from 'react'
import Tree from 'react-custom-tree';
import data from './data.json'


const Child = props = >  <div className='custom-child' >{props.name} </div >

class Parent extends Component {
  constructor(props) {
     super(props);
     this.state = {
      
     };
 }
 render () {
    return (
       <div className="custom-parent" >
         <span className="custom-open-icon" >
          {this.props.open ?  <i class="fa fa-caret-down" aria-hidden="true" > </i > :  <i class="fa fa-caret-right" aria-hidden="true" > </i >}
         </span >
        {this.props.name}
       </div >
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
    return ( <div className="tree-sample" >
       <Tree
        data={data}
        onChidClick={(child) = > console.log(child)}
        parentComponent={Parent}
        childComponent={Child}
        / >
                            
     </div >)
  }
}

export default App;`
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
        noLeftMargin:true,
        show:false
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
        <button onClick={()=>this.setState({show:!this.state.show})}>Show code</button>
          {this.state.show && <pre><code>
            {code}
          </code></pre> }             
    </div>)
  }
}

export default App;