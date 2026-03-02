import { useState } from "react";

export default function Bawler() {
  const [bawl,setBawl] = useState(0);
  
    const addBawl = () => {
        const newRun = bawl + 1;
        setBawl(newRun);
    }   

const runsStyle = {
        
        border: '2px solid salmon'
        
    }


return (
     <div style={runsStyle}>
        <h3>Bawler: X </h3>
        <p>Bawl: {bawl} </p>
        <button onClick={addBawl}>Add Bawl</button>
    </div>
    )

}