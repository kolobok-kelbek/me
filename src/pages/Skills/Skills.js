import React from 'react';
import './Skills.css';
import SkillLevel from '../../components/SkillLevel/SkillLevel';
import Note from '../../components/Note/Note';

function Row(props) {
    return (
        <tr>
            <td>{props.name}:</td>
            <td><SkillLevel points={props.value}/></td>
        </tr>
    );
}

function Skills() {
    const info = {
        "OOP": 8,
        "Functional programming": 2,
        "Backend": 8,
        "Frontend": 5,
        "DevOps": 4,
        "Algorithms": 3,
        "Architecture": 3,
        "Testing": 6,
    };

    const rows = [];
    for (let [name, value] of Object.entries(info)) {
        rows.push(<Row name={name} value={value}/>);
    }

    return (
        <div className="SkillsPage">
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
            <div className="skill-page-note">
                <Note title="Help">
                    Levels:
                    <ul>
                        <li>1 - know very superficially / little knowledge of theory</li>
                        <li>2 - little practice with pet projects</li>
                        <li>3 - can solve a simple tasks</li>
                        <li>4 - use from time to time</li>
                        <li>5 - use in professional development</li>
                        <li>6 - actively use</li>
                        <li>7 - know the nuances</li>
                        <li>8 - can teach</li>
                        <li>9 - extensive experience in professional development</li>
                        <li>10 - expert/master</li>
                    </ul>
                </Note>
            </div>
        </div>
    );
}

export default Skills;
