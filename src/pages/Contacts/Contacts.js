import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTelegram, faSkype } from '@fortawesome/free-brands-svg-icons';

export default () => {
  return (
    <div className="ContactsPage">
      <ul>
        <li>
          <a href="https://github.com/kolobok-kelbek" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> https://github.com/kolobok-kelbek
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kolobok-kelbek/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> https://www.linkedin.com/in/kolobok-kelbek/
          </a>
        </li>
        <li>
          <a href="tg://resolve?domain=kolobok_kelbek" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegram} /> @kolobok_kelbek
          </a>
        </li>
        <li>
          <a href="skype:kolobok_kelbek?userinfo" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSkype} /> kolobok_kelbek
          </a>
        </li>
        <li>
          <a href="mailto:dev_kelbek@mail.ru" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faAt} /> dev_kelbek@mail.ru
          </a>
        </li>
      </ul>
    </div>
  );
}
