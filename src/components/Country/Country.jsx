import React from 'react';

const Country = ({country}) => {
    console.log(country);
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name : {country.name.common} </h3>
            <h3>Capital : Capital of {country.name.common} is "{country.capital.capital[0]}"</h3>
            <h3>Area : {country.area.area}</h3>
            <h3>Population : {country.population.population}</h3>
            {/* <h3>Currencies : {country}</h3> */}
        </div>
    );
};

export default Country;