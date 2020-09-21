import React from "react";

const TodoList = (props) => {
    
    let todoStyle = {
        color: "white",
        backgroundColor: "blue",
        padding: "20px",
        margin: "10px"


    }

    return (
        <div>
            <ul>
                {props.value.map(todo => ( <li style={todoStyle}> {todo} </li>))}
            </ul>
        </div>
    )
}

export default TodoList