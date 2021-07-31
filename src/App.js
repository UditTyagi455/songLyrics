import React from "react";
import Header from "./Component/Header";
import Lyrics from "./Component/Lyrics";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Search from "./Component/Search";

const App =() =>{

  return(
    <Router>
      
      <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/component/lyrics/:id" component={Lyrics}/>
        <Route path="/search" component={Search}/>
      </Switch>
    </Router>
    
  )
}
export default App;