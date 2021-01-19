import React, { useState } from 'react';
import { Router, Switch, Route } from "react-router-dom";
import queryString from 'query-string';
import { createBrowserHistory } from "history";
import './App.css';
import Menu from './components/Menu/Menu';
import Info from './pages/Info/Info';
import Contacts from './pages/Contacts/Contacts';
import Projects from './pages/Projects/Projects';
import packagedJson from '../package.json';

export default () => {
  const history = createBrowserHistory();

  const params = queryString.parse(history.location.search);

  const [hard, setHard] = useState(undefined !== params.hard);

  return (
    <div className={hard ? "App old-effect": "App"}>
      <div className="screen">
        <div className="old-effect-switch" onClick={() => setHard(!hard)}>OLD EFFECT [{hard ? "X": " "}]</div>
        <Router history={history}>
          <Menu/>
          <div className="content">
            <Switch>
              <Route exact path="/me" component={Info}/>
              <Route exact path="/me/projects" component={Projects}/>
              <Route exact path="/me/contacts" component={Contacts}/>
            </Switch>
          </div>
        </Router>
      </div>
      <div className="version">v{packagedJson.version}</div>
    </div>
  );
}

