import React, { Component } from "react";
import TodoList from "./TodoList";

class OnChange extends Component {
    constructor(props){
        super(props)
        this.state = ({
            name: " ",
            todo: []
        })
        

    }

        Clickit = (event) => {
            event.preventDefault()
            let todo = this.state.todo
            let input = this.state.name
            todo.push(input);

            
            this.setState({
                name: "",
                todo : todo
                
            })
        }
        ChangeHandler = (event) => {
            this.setState({
                name: event.target.value
            })
        }

    render() {
        return (
            <div>
                <h1> OnChange / TODO Component (Class Component)  </h1>
                <h2>{this.state.name}</h2>
                <br />
                <form onSubmit={this.Clickit}>
                <input type="text" value={this.state.name} onChange={this.ChangeHandler} />
                <button> Click It </button> 
                </form>
                <TodoList value={this.state.todo}/>
            </div>
        )
    }
}

export default OnChange