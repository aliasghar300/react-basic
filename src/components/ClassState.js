import React, { Component } from "react";

class ClassState extends Component {
    
    state = {
        message: "Hello from Class Component"
    }

    ClickHandler = () => {
        this.setState({
            message: "This Message is Rendered Using this.setState"
        })
    }
    
    render() {
            
        return (
            <div>
                <h1>Class Component</h1>
                <h2> {this.state.message} </h2>
                <br/>
                <button onClick={this.ClickHandler}> Click Me </button>
            </div>
        )
            
        
    }

}

export default ClassState