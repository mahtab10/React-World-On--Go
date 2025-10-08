import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountry = (country) => {
        // console.log(country);
        // setVisitedCountries([...visitedCountries, country.name.common])
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <div >
            <h1>In the countries : {countries.length}</h1>
            <h3>Total Country visited : {visitedCountries.length}</h3>

            <ol>
                {
                    visitedCountries.map((country, index) => <li key={index}>{country.name.common}</li>)
                }
            </ol>

            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountry = {handleVisitedCountry} ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
