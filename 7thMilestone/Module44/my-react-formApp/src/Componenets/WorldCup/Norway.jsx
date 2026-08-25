import React from 'react';
import { useTeam } from '../../hooks/fifaTeamsHook';


const Norway = () => {
     const {players, playerDetails, loading, error} = useTeam(
        "Norway", 
        [8, 9]
    );
    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>


    const playerStyle={
            border: "1px solid #ddd",
            padding: "10px",
            margin: "10px 0",
    }


    return (

        <div>
            <h3>Team Norway</h3>
            <p>Star Player:</p>
            {playerDetails.map((p, i)=>(
            <p style={playerStyle} key={i}>{p.name} - #{p.number} -{p.position}</p>
            ))} 
        </div>
    );
};

export default Norway;