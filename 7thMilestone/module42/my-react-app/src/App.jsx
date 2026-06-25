import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import PricingOption from './Components/PricingOption/PricingOption'
import ResultCharts from './Components/ResultCharts/ResultCharts'
import axios from 'axios'
import GradeChart from './Components/GradeChart/GradeChart'
import GoogleDocGrid from '../../../../../../Users/i9/Downloads/GoogleDocGrid'

const pricingPromise = fetch('/pricingData.json').then(res => res.json())
const marksPromise = axios.get('studentMarks.json')

function App() {
  

  return (
    <>
      
          {/* <h1 className="text-3xl font-bold text-center text-primary">Hello world!</h1> */}
      <header>
        <Navbar></Navbar>
      </header>
      
     <main>
        <Suspense fallback={<span className='loading loading-spinner loading-lg'></span>}>
            <PricingOption pricingPromise={pricingPromise}> </PricingOption>
        </Suspense>
        <Suspense fallback={<span></span>}>
          <GradeChart marksPromise={marksPromise}></GradeChart>
        </Suspense>

        <ResultCharts></ResultCharts>
        <test></test>
        <GoogleDocGrid></GoogleDocGrid>
        
     </main>
      

      

      

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
