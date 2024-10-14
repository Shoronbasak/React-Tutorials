// react updates on multiple places in UI on clicking just one button or making changes for one variable , means if we make changes in the variable it will make changes in UI 
// UI updates and changes are done by react
// the tree parsing in react is done by babel
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  let [counter, mangoCounter] = useState(15)
  //               ^ this should be in camel case
  // the [] has the variables and the useState is the Hooks
  
  const addValue = () => {
    if (counter <= 19){// so that after 20 no values will get added
        counter = counter + 1
    }
    console.log("value added",counter);//here what react does is it gets the changed value for the variable counter and makes the changes
    mangoCounter(counter)
  }
// watch chai code react part 4 for more 
  const removeValue = () => {
     if (counter >= 1){// so that after 0 no values will come in minus
       counter = counter - 1 
      }// this functions are connected to the hooks variables which when ever gets changed in the value , the value will be changed in the whole react page without giving any references like we do in js with js Dom for each components  


    mangoCounter(counter)
    mangoCounter(counter)
    mangoCounter(counter)//here the last mangoCounter will only execute and other 2 above line will be ignored
    console.log("value Removed",counter);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>
        Add Value{counter}</button>
      
      <br />

      <button
      onClick={removeValue}>
        Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App

// explanation
// https://drive.google.com/file/d/1lM5Atbp7ntaeqEi6vw1i9RK18xj-WtNu/view?usp=sharing


















