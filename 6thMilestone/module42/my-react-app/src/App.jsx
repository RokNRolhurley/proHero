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

const playerPromise = fetchplayers();  

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(8000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);
  
  const removePlayer = (p) =>{
    const filterPlayer = purchasedPlayers.filter(ply => ply.player.id !== p.player.id);
    console.log(filterPlayer);
    setPurchasedPlayers(filterPlayer); 
    setAvailableBalance(availableBalance + parseInt(p.currentPrice.split("$").join("").split(",").join("")));
  }
  

  return (
    <>
   
    <Navbar availableBalance={availableBalance}></Navbar>
   
    <div className="max-w-[1200px] mx-auto flex justify-between items-center">
      <span className="font-bold text-lg">{
        toggle === true? 'Available Players': `Selected Players ( ${purchasedPlayers.length}/11 )`
      }</span>
      
      <div className=' font-bold'>
          <button onClick={()=>setToggle(true)} className={`py-3 px-3 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle === true ? 'bg-[#E7FE29]': ''} `}>Available</button>
          <button onClick={()=>setToggle(false)} className={`py-3 px-3 border-1 border-gray-400 rounded-r-2xl border-l-0 ${toggle === false ? 'bg-[#E7FE29]': ''} `}>Selected<span> ({purchasedPlayers.length})</span></button>
      </div>
    </div>

    {
      toggle ===true? <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playerPromise={playerPromise}></AvailablePlayers>
    </Suspense> : <SelectedPlayers removePlayer={removePlayer} purchasedPlayers={purchasedPlayers}></SelectedPlayers>
    }
    
    
    
    
    </>
  )
}



export default App;
