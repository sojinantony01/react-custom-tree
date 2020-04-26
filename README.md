# react-tree
A react customizable tree component

## Getting Started

Package helps to build tree view using predefined JSON.
Supports custom child components

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
npm install react-tree

```
## demo
[Live demo](https://sojinantony01.github.io/react-tree/)

![alt text](https://raw.githubusercontent.com/sojinantony01/react-cron-generator/master/public/images/Screenshot%20from%202019-06-08%2000-31-31.png)

![alt text](https://raw.githubusercontent.com/sojinantony01/react-cron-generator/master/public/images/Screenshot%20from%202019-06-08%2000-31-57.png)


```
import React, { Component } from 'react'
import Tree from 'react-tree'
import 'react-tree/dist/tree.css'


class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
       
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




[Sojin Antony](https://github.com/sojinantony01)

