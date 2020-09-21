import React from "react";

const CityFilter = () => {
    
    const forignCities = ["newyork" , "London" , "California" , "istanbul"];

    const shortListedCity = forignCities.filter(city => city.length > 6);


    return (
        <div>
            <ol>
                {shortListedCity.map(city => <li> {city}  </li>)}
            </ol>
        </div>
    )
}

export default CityFilter;