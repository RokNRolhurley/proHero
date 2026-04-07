import './App.css'
import Counter from './Components/Counter/Counter'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import { Suspense } from 'react'


const fetchplayers = async() => {
    const res = await fetch('/players.json');
    return res.json();
    
  };

function App() {

  const playerPromise = fetchplayers();  

  return (
    <>
   
    <Navbar></Navbar>
    

    <Banner></Banner>
    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
    </Suspense>
    <SelectedPlayers></SelectedPlayers>
    
    <section id="center">
        <Counter  ></Counter>
    </section>

    </>
  )
}

export default App
