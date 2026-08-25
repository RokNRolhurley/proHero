import React, { useEffect, useState } from "react";

const Argentina = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

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
        const argentina = data.find(
          (team) => team.name === "Argentina"
          
        );

        setPlayers(argentina?.players || []);
        setLoading(false);
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
      <h3>Team Argentina</h3>
        
     
    </div>
  );
};

export default Argentina;