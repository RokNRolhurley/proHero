import React from 'react';
import { useTeam } from '../../hooks/fifaTeamsHook';

const CapeVarde = () => {

    const { players, playerDetails, loading, error } = useTeam(
    "Cape Verde",
    [8, 9] // pick any two players
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;    

  const playerStyle={
            border: "1px solid #ddd",
            padding: "10px",
            margin: "10px 0",
    }

    return (
        <div>
            <h3>Team Cape Varde</h3>
            <p>Star Player:</p>
            {playerDetails.map((p, i)=>(
            <p style={playerStyle} key={i}>{p.name} - #{p.number} -{p.position}</p>
            ))} 
        </div>
    );
};

export default CapeVarde;