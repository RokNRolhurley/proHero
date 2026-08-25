import { useEffect, useState } from "react";

export const useTeam = (teamName, selectedIndexes = []) => {
  const [players, setPlayers] = useState([]);
  const [playerDetails, setPlayerDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        const team = data.find((t) => t.name === teamName);

        if (!team) {
          setError(`Team "${teamName}" not found`);
          setLoading(false);
          return;
        }

        const details = selectedIndexes.map((i) => {
          const p = team.players[i];
          return {
            number: p.number,
            name: p.name,
            position: p.pos,
          };
        });

        setPlayers(team.players);
        setPlayerDetails(details);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, [teamName, selectedIndexes]);

  return { players, playerDetails, loading, error };
};
