import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }



    render() {
        let Custom = this.props.custom
        return  ( 
            <div className="" onClick={() => this.props.onChidClick(this.props.data)}>
                {this.props.custom ? <Custom {...this.props.data}/> : <div className="tree-child-component"> {this.props.data.name} </div>}
            </div>
              
        );
    }
}


export default Child;