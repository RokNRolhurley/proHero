import { Suspense } from 'react';
import './App.css'
import Navbar from './Components/NavBar/Navbar';
import OngoingTicket from './Components/OngoingTicket/OngoingTicket';
import CustomerTickets from './Components/CustomerTickets/CustomerTickets';


const fetchtickets = async() => {
    const res = await fetch('/ticketdata.json');
    return res.json();
    // console.log(res);
    
  };


function App() {
  
  const ticketPromise = fetchtickets(); 
  
  return (
    <>
      
      <Navbar></Navbar>
      {/* <Suspense fallback={<div>Loading...</div>}>
         <OngoingTicket ticketPromise={ticketPromise}></OngoingTicket>
       </Suspense> */}

      <Suspense fallback={<div>Loading...</div>}>
      <CustomerTickets ticketPromise={ticketPromise}></CustomerTickets>
      </Suspense> 
          
    </>
  )
}

export default App
