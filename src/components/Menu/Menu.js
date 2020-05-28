import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Menu.css';

function Item(props) {
  return (
      <li>
        <Link to={props.route} className={props.current === props.index ? "current" : ""} onClick={() => props.setCurrent(props.index)}>
          <div className="after"></div>
          <span>{props.name}</span>
          <div className="before"></div>
        </Link>
      </li>
  );
}

export default function Menu() {
  let location = useLocation();

  const items = {"INF0": "/", "SKILLS": "/skills", "HOBBIES": "/hobbies"};

  let currentFromUrl = 0;
  let count = 0;

  for (let [name, route] of Object.entries(items)) {
    if (route === location.pathname) {
      currentFromUrl = count;
      break;
    }

    count ++;
  }

  const [current, setCurrent] = useState(currentFromUrl);

  const rows = [];
  count = 0;
  for (let [name, route] of Object.entries(items)) {
    rows.push(<Item name={name} current={current} route={route} index={count} setCurrent={setCurrent}/>);
    count++;
  }

  return (
    <menu className="Menu">
        {rows}
    </menu>
  );
}
