import React from "react";


const City = () => {
    
    const cityArray = ["karachi" , "lahore" , "islamabad" , "quetta", "peshawar"];

    return (
        <div>
            <ul>
                {cityArray.map(city =>  (<li> {city} </li>))}
            </ul>
        </div>
    )
}

export default City