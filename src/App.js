import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Menu from './components/Menu/Menu';
import Info from './pages/Info/Info';
import Skills from './pages/Skills/Skills';
import Hobbies from './pages/Hobbies/Hobbies'

function App() {
  return (
    <div className="App">
      <Router>
        <Menu/>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Info}/>
            <Route exact path="/skills" component={Skills}/>
            <Route exact path="/hobbies" component={Hobbies}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
