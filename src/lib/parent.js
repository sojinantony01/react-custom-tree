import React, { Component } from 'react';
import Tree from './lib'
class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open:props.isDefaultOpen ? true : false
        };
    }



    render() {
        let Custom = this.props.custom
        return  ( 
            <div className="" >
                <div onClick={() => this.setState({open : !this.state.open})}>
                {this.props.custom ? <Custom {...this.props.data}/> : 
                    <div >
                        <span>{this.state.open ? '-' : '+'}</span>
                        <span>{this.props.data.name}</span>
                    </div>
                }
                </div>
                {this.state.open && <Tree {...this.props} data={this.props.data.child} />}
            </div>
              
        );
    }
}


export default Parent;