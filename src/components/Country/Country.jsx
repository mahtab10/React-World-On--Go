import React, { use, useState } from 'react';
import './Country.css'

const Country = ({ country , handleVisitedCountry}) => {
    // console.log(country);


    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        // console.log(`Visited ${country.name.common}`);
        // setVisited(true)
        // system 1

        // if(visited){
        //     setVisited(false)
        // }else{
        //     setVisited(true)}

        // system 2
        // setVisited(visited ? false : true )

        //system 3
        setVisited(!visited)  
        handleVisitedCountry(country);  
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name : {country.name.common} </h3>
            <h3>Capital : Capital of {country.name.common} is "{country.capital.capital[0]}"</h3>
            <h3>Area : {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</h3>
            <h3>Population : {country.population.population}</h3>
            {/* <h3>Currencies : {country}</h3> */}

            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
                </button>

        </div>
    );
};

export default Country;