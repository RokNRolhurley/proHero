import React from 'react';
import RegionAmerica from './RegionAmerica';
import RegionEurope from './RegionEurpoe';


const Teams = () => {
    return (
        <div>
             <h3>List Of The Teams</h3> 
                
                <RegionAmerica></RegionAmerica>
                <RegionEurope></RegionEurope>
            
        </div>
    );
};

export default Teams;