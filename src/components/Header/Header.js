import React from 'react';
import styles from './Header.module.css';

const Header = (props) => (
  <header>
    <figure>
      <img src="./images/Group 973.png" alt="Logo" />
      <figcaption>AGORIM<span>&reg;</span></figcaption>
    </figure>
    <ul className={styles.languages}>
      <li className={styles.lanIsSelected}>EN</li>
      <li>FR</li>
    </ul>
  </header>
);

export default Header;
