# react-custom-tree
A fully customizable tree component

## Getting Started

Component helps to build tree structure view in your design using predefined JSON.
Supports custom child and parent components.


## Demo
[Live demo](https://sojinantony01.github.io/react-custom-tree/)


### Sample JSON
```
data = [
    {
        id: 1,
        name:'Parent 1',
        child: [
            {
                id: 1,
                name:'Parent 1.1',
                ...
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
                ...
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
        ...
        child: []
    }
]
```
```
npm install react-custom-tree

```

## Basic usage
```
import React, { Component } from 'react'
import Tree from 'react-custom-tree'
import data from './data.json'

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        data:data
      };
  }

  render() {
    return (<div>
      <Tree
        data={this.state.data}
        onChidClick={(child) => console.log(child)}
        />
                            
    </div>)
  }
}

export default App;

```
## props

| Prop | Description | Default | Mandatory
| --- | --- | -- | -- |
| data | JSON Data   | [] |  Yes |
| onChidClick | Handle child click |  non clickable | No
| childComponent | Custom child component | Inbuilt component | No
| parentComponent | Custom Parent component | Inbuilt component | No
| isDefaultOpen | Open all parent components in tree | false | No
| noLeftMargin | remove parent and child left margin | false | No

## Custom  Child and Parent Component sample

```
import React, { Component } from 'react'
import Tree from 'react-custom-tree';
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
          {this.props.open ? <i className="fa fa-caret-down" aria-hidden="true"></i> : <i className="fa fa-caret-right" aria-hidden="true"></i>}
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
```

Check live demo for examples
[Live demo](https://sojinantony01.github.io/react-custom-tree/)

[Sojin Antony](https://github.com/sojinantony01)

## Acknowledgments

[Viswanath Lekshmanan](https://viswanathl.in/)