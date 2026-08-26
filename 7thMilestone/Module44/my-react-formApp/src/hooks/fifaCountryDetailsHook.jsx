import React, { useEffect } from 'react';

const fifaCountryDetailsHook = () => {
    
    
        const dataPromise = fetch('https://github.com/openfootball/worldcup.json/blob/master/2026/worldcup.teams.json').then(res =>res.json());
    
    
    
    return (
        <div>
            <h3>Sisters</h3>
        </div>
    );
};

export default fifaCountryDetailsHook;