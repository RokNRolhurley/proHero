import React, { use, useState } from 'react';
import Country from './Country/Country'; 
import './countries.css'




const Countries = ({countriesPromise }) => {
    
    const countries = use(countriesPromise );
    
    const [visitedCountries, setVisitedCountries] = useState([]);
    
    
    const handelVisitedCountries= (country) =>{
        // console.log("Country visited arrey", country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries);
    }

    const travelledCountries = visitedCountries.length;
    const handelNotVisited = 250 - travelledCountries; 

    
    const [visitedFlag, setVisitedFlag] = useState([])

    const handleVisitedFlag = (flag) => {
        // console.log('Flag is added', flag);
        const newVisitedFlags = [...visitedFlag, flag];
        setVisitedFlag(newVisitedFlags);
    }



    return (
        <div>
            <h1>Travelling Countries: {countries.length}</h1>
            <p>Travelled: {visitedCountries.length} </p>
            <div className='visited-flags-container'>
                {
                    visitedFlag.map((flag, index) => <img key={index}
                    src={flag}></img>)
                }
            </div>
            
            <ol>
                {
                        visitedCountries.map(country => <li> key={country.cca3}
                            {country.name.common} </li>)
                }
            </ol>
            
            <p>Not Travelled: {handelNotVisited} </p>
            
            <div className='countries'>
                {
                 countries.map(country => <Country 
                    key={country.cca3} 
                    handelVisitedCountries={handelVisitedCountries}
                    handleVisitedFlag={handleVisitedFlag}
                    country={country}></Country>) 
                }
            </div>
            
        </div>
    );
};

export default Countries;



//-----------------

