import React, { Component } from 'react';
import Child from './child';
import Parent from './parent';
class Tree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open:false
        };
    }

    getTree(data) {
        if(data && data.length) {
            return this.getParentsAndChild(data)
        }
        return <p></p>

    }
    getParentsAndChild(data) {
        return data.map(d => {
            if(d.child && d.child.length) {
                return  (
                    <div className={this.props.noLeftMargin ? '' : 'tree-margin-left-15'} key={d.id}>
                        <Parent {...this.props} data={d} custom={this.props.parentComponent} />
                    </div>  
                    )
            } else {
                return (
                    <div className={this.props.noLeftMargin ? '' : 'tree-margin-left-15'} key={d.id}>
                        <Child onChidClick={this.props.onChidClick} data={d} custom={this.props.childComponent}/>
                    </div>
                )
            }
        })
    }


    render() {
        return  ( 
            <div className="">
                { this.getTree(this.props.data)}
            </div>
              
        );
    }
}


export default Tree;