import './App.css'
import Counter from './Components/Counter/Counter'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import { Suspense, useState } from 'react'


const fetchplayers = async() => {
    const res = await fetch('/players.json');
    return res.json();
    
  };

function App() {
  const [toggle, setToggle] = useState(true);
  const playerPromise = fetchplayers();  

  return (
    <>
   
    <Navbar></Navbar>
   
    <div className="max-w-[1200px] mx-auto flex justify-between items-center">
      
      <div className=' justify-between items-center '>
          <span className="font-bold text-lg">Available Players</span>
          <button onClick={()=>setToggle(true)} className={`py-3 px-3 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle === true ? 'bg-[#E7FE29]': ''} `}>Available</button>
          <button onClick={()=>setToggle(false)} className={`py-3 px-3 border-1 border-gray-400 rounded-r-2xl border-l-0 ${toggle === false ? 'bg-[#E7FE29]': ''} `}>Selected<span> (0)</span></button>
      </div>
    </div>

    {
      toggle ===true? <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
    </Suspense> : <SelectedPlayers></SelectedPlayers>
    }
    
    
    
    
    </>
  )
}



export default App;
