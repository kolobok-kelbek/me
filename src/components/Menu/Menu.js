import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import './style.css';

export default () => {
  let location = useLocation();

  const items = {"INF0": "/me", "PROJECTS": "/me/projects", "CONTACTS": "/me/contacts"};

  let currentFromUrl = 0;
  let count = 0;

  for (let item of Object.entries(items)) {
    if (item.route === location.pathname) {
      currentFromUrl = count;
      break;
    }

    count ++;
  }

  const [current, setCurrent] = useState(currentFromUrl);

  return (
    <menu className="Menu">
        {Object.entries(items).map(([name, route], index) => (
          <li key={index}>
            <Link to={route} className={current === index ? "current" : ""} onClick={() => setCurrent(index)}>
              <div className="after"></div>
              <span>{name}</span>
              <div className="before"></div>
            </Link>
          </li>
        ))}
    </menu>
  );
}
