import React, { use, useState } from 'react';
import Country from './Country/Country'; 
import './countries.css'




const Countries = ({countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    
    const countries = use(countriesPromise );

    const handelVisitedCountries= (country) =>{
        // console.log("Country visited arrey", country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries);
    }

    const travelledCountries = visitedCountries.length;
    const handelNotVisited = 250 - travelledCountries; 


    return (
        <div>
            <h1>Travelling Countries: {countries.length}</h1>
            <p>Travelled: {visitedCountries.length} </p>
            
            <ol>
                {
                        visitedCountries.map(country => <li>{country.name.common} </li>)
                }
            </ol>
            
            <p>Not Travelled: {handelNotVisited} </p>
            
            <div className='countries'>
                {
                 countries.map(country => <Country 
                    key={country.cca3} 
                    handelVisitedCountries={handelVisitedCountries}
                    country={country}></Country>) 
                }
            </div>
            
        </div>
    );
};

export default Countries;



//-----------------

