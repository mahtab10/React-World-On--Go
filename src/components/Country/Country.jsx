import React from 'react';
import './Country.css'

const Country = ({ country }) => {
    console.log(country);

    const handleVisited = () => {
        console.log(`Visited ${country.name.common}`);
    }

    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name : {country.name.common} </h3>
            <h3>Capital : Capital of {country.name.common} is "{country.capital.capital[0]}"</h3>
            <h3>Area : {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</h3>
            <h3>Population : {country.population.population}</h3>
            {/* <h3>Currencies : {country}</h3> */}
            <button onClick={handleVisited}>Not visited</button>

        </div>
    );
};

export default Country;