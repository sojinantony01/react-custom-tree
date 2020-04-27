import React, { Component } from 'react'
import SimpleTree from './simple-tree';
import CustomTree from './custom-tree';
import CustomTreeTwo from './custom-tree-2';
import CustomTreeThree from './custom-tree-3'
import './app.css'
class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
       
      };
  }

  render() {
    return (
      <div className="container">
        <h2>Simple Usage</h2>
        <SimpleTree />
        <h2>Default Open</h2>
        <SimpleTree open/>
        <h2>Custom Parent & Child Component 1</h2>   
        <CustomTree />
        <h2>Custom Parent & Child Component 2</h2>   
        <CustomTreeTwo />
        <h2>Custom Parent & Child Component 3</h2>   
        <CustomTreeThree />
      </div>)
  }
}

export default App;