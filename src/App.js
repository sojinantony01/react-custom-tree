import React, { Component } from 'react'
import Tree from './lib'
import './lib/tree.css'

const data = [
  {
      id: 1,
      name:'Parent 1',
      child: [
          {
              id: 1,
              name:'Parent 1.1',
              child: [
                  {
                      id: 2,
                      name:'Child 1',
                  }
              ]
          },
          {
              id: 2,
              name:'Parent 1.2',
              description:'',
              value:'',
              child: [
                  {
                      id: 3,
                      name:'Chid 2',
                  },
                  {
                      id: 4,
                      name:'Chid 3',
                  },
                  {
                      id: 5,
                      name:'Chid 4',
                  }
              ]
          }
      ]
  },
  {
      id: 6,
      name:'Parent 2',
      child: []
  }
]

const Child = props => <span>{props.name}</span>

class Parent extends Component {
  constructor(props) {
     super(props);
     this.state = {
      
     };
 }
 render () {
    return (
      <div>
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
    return (<div>
      <Tree
        data={data}
        onChidClick={(child) => console.log(child)}
        parentComponent={Parent}
        childComponent={Child}
        isDefaultOpen={true}
        />
                            
    </div>)
  }
}

export default App;