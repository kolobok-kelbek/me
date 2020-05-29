import React from 'react';
import './SkillLevel.css';

function SkillLevel(props) {

    const points = props.points <= 10
        ? (props.points < 0 ? 0 : props.points)
        : 10;
    const level = points * 10;

    return (
        <div className="box">
            <div className="level-right-border"></div>
            <div className="level">
                <div className="value" style={{width: `calc(${level}% - 4px)`}}></div>
            </div>
            <div className="points">
                {points}
            </div>
        </div>
    );
}

export default SkillLevel;
