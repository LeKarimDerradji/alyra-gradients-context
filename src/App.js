import Home from './pages/Home'
import FullSreen from './pages/FullScreen'
import {Switch, Route } from "react-router"


function App() {

 
  return (
    <Switch>
      <Route exact path = '/'>
        <Home />
      </Route>
      <Route exact path ='/gradient/:id'/>
        <FullSreen />
      <Route/>
    </Switch>
  )
}

export default App
