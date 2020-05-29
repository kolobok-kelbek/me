import React from 'react';
import Typewriter from 'typewriter-effect';
import './Info.css';

function Row(props) {
  return (
    <tr>
      <td>{props.name}:</td>
      <td>{props.value}</td>
    </tr>
  );
}

function Info() {
  const info = {
    "Full name": "Krasnoshchekov Ilia",
    "Nickname": "kolobok kelbek",
    "Date of Burth": "11.02.1995",
    "Location": "Russia, St. Petersburg",
    "Core skill": "Backend development",
    "Main hobby": "Programming",
    "Github": "https://github.com/kolobok-kelbek"
  };

  const rows = [];
  for (let [name, value] of Object.entries(info)) {
    rows.push(<Row name={name} value={value}/>);
  }

  return (
    <div className="InfoPage">
      <div className="info">
        <table className="description-table">
          <tbody>
            {rows}
          </tbody>
        </table>
        
        <p>
          <Typewriter className="description"
            options={{
              delay: 40
            }}
            onInit={(typewriter) => {
              typewriter.typeString('Interested in backend development, programming languages, web architectures. ' +
              'Like new technologies, but sympathetic to Legacy. In free time, develop one of pet projects or learn something new.')
                .start();
            }}
          />
        </p>
      </div>
      <div className="avatar-block">
          <img className="avatar" src={process.env.PUBLIC_URL + '/images/me.jpeg'}/>
        </div>
    </div>
  );
}

export default Info;