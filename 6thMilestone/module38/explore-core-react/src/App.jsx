import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './Todo';
import Actor from './actors';
import Singer from './Singer';
import Library from './Library';
import Counter from './Counter';
import Batsman from './Batsman';


function App() {
  
  function handleClick(){
    alert('I am clicked')
  }

  const handleClick3 = () => {alert('clicked 3')}
  
  const handleAdd5 = (num) => {
    const newNum = num +5; 
    alert(newNum);
  }

  
  // const [count, setCount] = useState(0)

  // const actors = ['Teddy', 'Andrew', 'Pine', 'Jack', 'Andy', 'Robin'];

  // const singers = [
  //   {id: 1, name: 'George', age: 25},
  //   {id: 2, name: 'Amy', age: 23},
  //   {id: 3, name: 'Rock', age: 25}
  // ];
  
  // const books = [
  //   {id: 1, name: 'Math', Price: 28},
  //   {id: 2, name: 'English', Price: 20},
  //   {id: 3, name: 'History', Price: 20},
  //   {id: 3, name: 'Physics', Price: 30}
  // ];



  return (
    <>
      
      <Counter></Counter>

      <Batsman></Batsman>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      <h2>React Core Concept</h2>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
        & Edited by me
        {/* <Person></Person>
        <Student name="John Doe" dept="Physics"></Student>
        <Developer name="Nord" tech="JS"></Developer>
        <Developer name="Owen" tech="Python"></Developer>
        <Developer name="Link" tech="Java"></Developer>
        <Sports></Sports>
        <Player name="Sakil" runs="500"></Player>
        <Player name="Mahbub" runs="500"></Player> */}
      </p>
      {/* <ToDo task="Learn React" isDone={true} time = "30 minutes"></ToDo>     */}
      {/* <ToDo task="Revise React" isDone={true} time = "1 hr"></ToDo>     */}
      {/* <ToDo task="Emplement React" isDone={false}></ToDo>  */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2(){alert('clicked 2')}}>Click me2</button>
      <button onClick={handleClick3}>Click me3</button>
      <button onClick={() => alert('click 4')}>Click me4</button>

      <button onClick={() => handleAdd5(20)}>Click Add 5</button>

        <h1>React Core concepts</h1>

        {/* <Library books={books}></Library> */}
       
        {
          // singers.map(singer => <Singer key={singer.id} singer ={singer}></Singer>)
        }

        

        {
          //actors.map(actor => <Actor actor={actor}></Actor>)
        }

    </>
  )

          
          

}

function Person (){

  const age = 17;
  const name = 'Jam';

  return(
  <p>
    I'm a person: {name} {age}
  </p>
  )
}

function Sports (){
  return (
    <div>
      <h3>Cricket</h3>
      <ul>
        <li>Bat</li>
        <li>Ball</li>
      </ul>
      <h3>Playing and losing</h3>
    </div>
  )
}

function Student (props){
  const studentStyle = {
    color: 'red',
    textAlign: 'left'
  }
  return (
    <div className='student'>
      <h4>Student</h4>
      <p style={studentStyle}>Name: {props.name} </p>
      <p style={studentStyle}>Department: {props.dept} </p>
    </div>
  )
}

function Developer (props){
  console.log(props)
  return(
    <div style={{
      border: '2px solid green',
      borderRadius: '20px'
    }}>
        <h3>Developer: {props.name}</h3>
        <p>Technology: {props.tech}</p>
    </div>
    
  )
}

function Player ({name, runs}){
  return(
    <div>
      <h3>Name: {name}</h3>
      <p>Run: {runs}</p>
    </div>
  )
}

export default App
