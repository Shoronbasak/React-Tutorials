import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// this file is used to bridge between html and app.jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>{/*strict mode is used for devlopment and optimazation purpose , the {App/} will run even if we remove the strict tag */}
    <App />{/*in root id tag which is linked to html we have rendered this app inside the html for viewing the js inside html page */}
  </StrictMode>,{/* is imported from react , and createRoot also , App.jsx is also an imported file */}
)
// so with this help we get coding capabalities with the help of html 


// in main function we can just write the fucntion() here only rather than writting it on the app.jsx rformat in <function name />, format as in the end jsx is kind of javascript only 
// and here the bundler helps (babel) to convert the jsx (javascript and html) syntax to convert to html syntax format like: <function name/> 
// html code is gone through an parsing method for 











