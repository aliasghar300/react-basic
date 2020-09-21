import React, { useState } from "react";

const FunctionState = () => {
    
   const [message,setMessage] = useState("Hello from Function Component")

    const ClickHandler = () => {
        setMessage("This Message Is Rendered Using useState")
    }

    return (
        <div>
            <h1>Functional State</h1>
            <h2> {message} </h2>
            <br />
            <button onClick={ClickHandler}> Click Me </button>
        </div>
    )

}

export default FunctionState