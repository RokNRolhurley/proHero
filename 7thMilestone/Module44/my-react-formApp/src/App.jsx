import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SimpleForm from './Componenets/SimpleForm/SimpleForm'
import FormAction from './Componenets/FormAction/FormAction'
import ControlledField from './Componenets/ControlledField/ControlledField'
import UncontrolledField from './Componenets/UncontrolledField/UncontrolledField'
import HookForm from './Componenets/HookForm/HookForm'
import ProductManagement from './Componenets/ProductManagement/ProductManagement'
import FamilyTree from './Componenets/FamilyTree/FamilyTree'
import ItemMangement from './Componenets/ItemManagement/ItemMangement'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      

      <h1>Explore React Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledField></ControlledField> */}
      {/* <UncontrolledField></UncontrolledField> */}
      {/* <HookForm></HookForm> */}
      {/*<ProductManagement></ProductManagement>*/}
      {/*<FamilyTree></FamilyTree>*/}
      <ItemMangement></ItemMangement>
      
      
      
      

      
    </>
  )
}

export default App
