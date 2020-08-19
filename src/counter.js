import React from "react";
export default class extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        this.climb= this.climb.bind(this);
    }
    climb(){
        this.setState({
            count:this.state.count +2
        })
    }
    render(){
        return(
            <div>
            <div onClick={this.climb}>clickme</div>
            <h1>{this.state.count}</h1>
            </div>
        )
    }
}