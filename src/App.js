import Home from './pages/Home'
import FullSreen from './pages/FullScreen'
import {Switch, Route, Redirect } from "react-router"


function App() {

 
  return (
    <Switch>
      <Route exact path = '/'>
        <Home />
      </Route>
      <Route path="/gradient/:id">
      <FullSreen />
      </Route>
         <Redirect to="/" />
    </Switch>
  )
}

export default App
