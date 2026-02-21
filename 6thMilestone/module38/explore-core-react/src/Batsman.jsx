import { useState } from "react";
export default function Batsman(){

    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);

    const addSingle = () => {
        const newRun = runs + 1;
        setRuns(newRun);
    }

    const addFour = () => {
        const newRun = runs + 4;
        setRuns(newRun);
    }

    const addSix = () => {
        const newRun = runs + 6;
        const updateSixes = sixes + 1; 
        setSixes(updateSixes);
        setRuns(newRun);
    }

    const runsStyle = {
        
        border: '2px solid salmon'
        
    }
    return(
        <div style={runsStyle}>
            <h3>Batsman: Sakil </h3>
            {
                runs > 50 && <p> You Score: 50 </p>
            }
            <p><small>Six: {sixes}</small></p>
            <p>Score: {runs} </p>
            <button onClick={addSingle} >Single</button>
            <button onClick={addFour}>Four</button>
            <button onClick={addSix}>Six</button>
        </div>
    )
}