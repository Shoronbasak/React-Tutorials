import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chai from './Chai'

function App() {
  const [count, setCount] = useState(0)
  const username = "chai aur code"

  return (
    <>{/*<-this is react fragment as we have to use the react jsx code in an single tag only so rather than getting the whole code inside an div just used an empty tag which is called react fragment  for returning the jsx code so basically its inside an single element we are returning multiple elements(remember this is done in App.jsx only as this file is only responsible for the web viewing)*/}
      <div>{/* App.jsx just imports this jsx code(javascript formated html code to the final main html page with the help of main.jsx )*/}
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
          count is {count}{username}{/*the username here is an [javascript expresion] which will get here only the javascript end result and not an algo ,     and the count here is stateVariable*/}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Chai/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
// this line is used so that we can export the file from here and import it , where we wanna use it
export default App














