import React from 'react';
import './style.css';

export default (props) => {
  return (
    <div className="Note">
        <div className="note-title-wrapper">
            <div className="note-title">
                <div className="note-title-after"></div>
                <span className="note-title-text">{props.title}</span>
                <div className="note-title-before"></div>
            </div>
        </div>
        <p className="note-content">
            {props.children}
        </p>
    </div>
  );
}

