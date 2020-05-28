import React from 'react';
import './Info.css';

function Info() {
  return (
    <img className="avatar" src={process.env.PUBLIC_URL + '/images/me.jpeg'}/>
  );
}

export default Info;