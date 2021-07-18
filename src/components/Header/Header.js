import React from 'react'; 
import styles from './Header.module.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {toggleLanguage: true};
  }

  toggleLanguageMethod = (event) => {
    if(event.target.innerText.toUpperCase() === 'FR' && !this.state.toggleLanguage)
      this.setState({toggleLanguage : (!this.state.toggleLanguage)});
    else if(event.target.innerText.toUpperCase() === 'EN' && this.state.toggleLanguage)
      this.setState({toggleLanguage : (!this.state.toggleLanguage)});
  }

  render() {
    return (
      <header>
        <figure>
          <img src="./images/Group 973.png" alt="Logo" />
          <figcaption>AGORIM<span>&reg;</span></figcaption>
        </figure>
        <ul className={styles.languages}>
          <li className={this.state.toggleLanguage === true ? styles.lanIsSelected : styles.lanIsNotSelected} onClick={(e) => this.toggleLanguageMethod(e)}>EN</li>
          <li className={this.state.toggleLanguage === false ? styles.lanIsSelected : styles.lanIsNotSelected} onClick={(e) => this.toggleLanguageMethod(e)}>FR</li>
        </ul>
      </header>
    );
  }
}

export default Header;
