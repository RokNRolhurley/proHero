import React, { useState } from 'react';
import './country.css'

const Country = ({country, handelVisitedCountries, handleVisitedFlag}) => {
    // console.log(country)
    const [visited, setVisited] = useState(false);
    // console.log(handelVisitedCountries);

const handelVisited = () => {
    // if(visited === true){
    //     setVisited(false)
    // }
    // else{
    //     setVisited(true);
    // }
    setVisited(!visited);
    handelVisitedCountries(country);
    
}

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>Name: {country.name.common}</h3>
            <img src={country.flags.png}></img> 
            <p>Official: {country.name.official}</p>
            <p>Independent: {country.independent ? 'Free' : 'Not Free'}</p>  
            <button 
                className={visited ? 'btn-visited' : 'btn-not-visited'} 
                onClick={handelVisited}>
                {visited ? 'Visited' : 'Not visited'}
            </button> 
            <button onClick={() => handleVisitedFlag(country.flags.png)}>Add Visited Flag</button>            
        </div>
    );
};

export default Country;