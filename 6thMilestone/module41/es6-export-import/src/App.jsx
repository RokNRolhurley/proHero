
import { Suspense } from 'react';
import './App.css'
import { add, diff, div, mult } from './utils/math/math';
import Bottles from './componenets/Bottles/Bottles';


function App() {

  const bottlesPromise = fetch('bottles.json').then(res => res.json());

  //  const sum = add (2, 4);
  //  const sub = diff(12, 8);
  //  const goon= mult(3,3);
  //  const vag = div(84,4);
  // console.log(sum);

//   const bottles = [
// {id:1,name:"Hydro Flask Standard",brand:"Hydro Flask",capacity_ml:621,material:"Stainless Steel",price_usd:39.95},
// {id:2,name:"Nalgene Wide Mouth",brand:"Nalgene",capacity_ml:1000,material:"Tritan Plastic",price_usd:14.99},
// {id:3,name:"CamelBak Chute Mag",brand:"CamelBak",capacity_ml:750,material:"BPA-Free Plastic",price_usd:16.00},
// {id:4,name:"S'well Insulated Bottle",brand:"S'well",capacity_ml:500,material:"Stainless Steel",price_usd:35.00},
// {id:5,name:"Contigo Autoseal Chill",brand:"Contigo",capacity_ml:720,material:"Stainless Steel",price_usd:24.99}
// ];




  return (
    <>
      
      <h1>Awesome water bottles</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Suspense fallback='Loading .....'>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
