import React, { useState } from 'react';
import './Menu.css';

function Item(props) {
  return (
    <li className={props.current === props.index ? "current" : ""} onClick={() => props.setCurrent(props.index)}>
      <div className="after"></div>
      <span>{props.name}</span>
      <div className="before"></div>
    </li>
  );
}

export default function Menu() {
  const [current, setCurrent] = useState(0);

  const items = ["INF0", "SKILLS", "HOBBIES", "fewfwq"];

  const rows = [];
  items.forEach((item, index) => rows.push(<Item name={item} current={current} index={index} setCurrent={setCurrent}/>));

  return (
    <menu className="Menu">
        {rows}
    </menu>
  );
}
