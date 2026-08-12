import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SimpleForm from './Componenets/SimpleForm/SimpleForm'
import FormAction from './Componenets/FormAction/FormAction'
import ControlledField from './Componenets/ControlledField/ControlledField'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      

      <h1>Explore React Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      <ControlledField></ControlledField>

      
    </>
  )
}

export default App
