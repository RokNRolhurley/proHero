import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import PricingOption from './Components/PricingOption/PricingOption'

const pricingPromise = fetch('/pricingData.json').then(res => res.json())

function App() {
  

  return (
    <>
      
          {/* <h1 className="text-3xl font-bold text-center text-primary">Hello world!</h1> */}
      <header>
        <Navbar></Navbar>
      </header>
      
     <main>
        <Suspense fallback={<span cla></span>}>
            <PricingOption pricingPromise={pricingPromise}> </PricingOption>
        </Suspense>
     </main>
      

      

      

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
