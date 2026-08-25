import React, { useEffect, useState } from 'react';

const USA = () => {

    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [playerDetails, setPlayerDetails] = useState([]);


    useEffect(() => {
        fetch(
          "https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.squads.json"
        )
          .then((res) => {
            if (!res.ok) {
              throw new Error(`HTTP Error: ${res.status}`);
            }
            return res.json();
          })
          .then((data) => {
            const USA = data.find((team) => team.name === "United States");
    
            // const playerDetails = (USA?.players || [])
            const playerDetails = [
                USA.players[9],
                USA.players[10],
            ]
            .map(player => ({
            number: player.number,
            name: player.name,
            position: player.pos
            }));
            // console.log(USA.players);
            // console.log(playerDetails);
            
            setPlayers(USA?.players || []);
            setPlayerDetails(playerDetails);
            setLoading(false);
        
            //Grab player details 
        //     const playerDetails = [
        //     USA.players[0],
        //     // USA.players[10],
        //     ].map(player => ({
        //     number: player.number,
        //     name: player.name, 
        //     position:player.position}));
           
          })
          .catch((err) => {
            console.error(err);
            setLoading(false);
          });
      }, []);
    
      if (loading) {
        return <p>Loading...</p>;
        
      }

       const playerStyle={
            border: "1px solid #ddd",
            padding: "10px",
            margin: "10px 0",
    }



    return (
        <div>
            <h3>Team USA</h3>
            <p>Star Player:</p>
            {playerDetails.map((p, i)=>(
            <p style={playerStyle} key={i}>{p.name} - #{p.number} -{p.position}</p>
            ))} 
        </div>
    );
};

export default USA;