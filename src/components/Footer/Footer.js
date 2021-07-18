import React from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt } from 'react-icons/fa';


const Footer = () => (

  <div className={styles.footerContainer}>
    <img className={styles.logo} src="./images/Group 973.png" alt="Logo" />

    <footer className={styles.Footer}>
     <p className={styles.droits}>© 2020 Agorim. Tous droits réservés.</p>
      <div className={styles.SocialMedia}>
        <FaPhoneAlt />
        <p>+32485004002</p>
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
      </div>

    </footer>
  </div>

);


export default Footer;
