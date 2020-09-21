import React, { Component } from "react";

class EventTarget extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name
        }
    }
        clickHandler = () => {
            this.setState( {
                name: "Ameen"
            } )
        }
    render() {
        return (
            <div>
                <h1> Change Props Using State (Class Component) </h1>
                <h3> {this.state.name} </h3>
                <br />
                <button onClick={this.clickHandler}> Click </button>
            </div>
        )
    }

}

export default EventTarget