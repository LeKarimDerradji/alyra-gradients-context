import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"
import {GradientListContextProvider} from './context/GradientContext'
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import {BrowserRouter as Router} from 'react-router-dom'


ReactDOM.render(
  <Router>
  <GradientListContextProvider>
    <App />
  </GradientListContextProvider>
  </Router>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
