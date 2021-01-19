import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import queryString from 'query-string';
import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';
import Menu from './components/Menu/Menu';
import Info from './pages/Info/Info';
import Contacts from './pages/Contacts/Contacts';
import packagedJson from '../package.json';

function App() {
  const history = createBrowserHistory();

  const params = queryString.parse(history.location.search);

  const [hard, setHard] = useState(undefined !== params.hard);

  return (
    <div className={hard ? "App old-effect": "App"}>
      <div className="screen">
        <div className="old-effect-switch" onClick={() => setHard(!hard)}>OLD EFFECT [{hard ? "X": " "}]</div>
        <div className="version">v{packagedJson.version}</div>
        <Router history={history}>
          <Menu/>
          <div className="content">
            <Switch>
              <Route exact path="/me" component={Info}/>
              <Route exact path="/me/contacts" component={Contacts}/>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
