import React from 'react';
import './Contacts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faDev } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTelegram, faSkype, faGoogle } from '@fortawesome/free-brands-svg-icons';

function Contacts() {
  return (
    <div className="ContactsPage">
      <ul>
        <li>
          <a href="https://github.com/kolobok-kelbek" target="_blank">
            <FontAwesomeIcon icon={faGithub} /> https://github.com/kolobok-kelbek
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kolobok-kelbek/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} /> https://www.linkedin.com/in/kolobok-kelbek/
          </a>
        </li>
        <li>
          <a href="tg://resolve?domain=kolobok_kelbek" target="_blank">
            <FontAwesomeIcon icon={faTelegram} /> @kolobok_kelbek
          </a>
        </li>
        <li>
          <a href="skype:kolobok_kelbek?userinfo" target="_blank">
            <FontAwesomeIcon icon={faSkype} /> kolobok_kelbek
          </a>
        </li>
        <li>
          <a href="mailto:dev_kelbek@mail.ru" target="_blank">
            <FontAwesomeIcon icon={faAt} /> dev_kelbek@mail.ru
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contacts;
