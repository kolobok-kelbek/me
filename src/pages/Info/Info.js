import React from 'react';
import Typewriter from 'typewriter-effect';
import './style.css';

export default () => {
  const info = {
    "Full name": "Krasnoshchekov Ilia",
    "Nickname": "kolobok kelbek",
    "Date of Burth": "11.02.1995",
    "Location": "Russia, St. Petersburg",
    "Core skill": "Backend development",
    "Main hobby": "Programming",
    "Github": "https://github.com/kolobok-kelbek"
  };

  return (
    <div className="InfoPage">
      <div className="info">
        <table className="description-table">
          <tbody>
            {Object.entries(info).map(([name, value], index) => (
              <tr key={index}>
                <td>{name}:</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>

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
      </div>
      <div className="avatar-block">
        <img className="avatar" src={process.env.PUBLIC_URL + '/images/me.jpeg'} alt="Avatar"/>
      </div>
    </div>
  );
}