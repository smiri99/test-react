import React from 'react';
import styles from './CatalogueMenu.module.css';

class CatalogueMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {btnState : true}
  }

  toggleClassMethod = (event) => {
    if(event.target.innerText.toUpperCase() === 'OUR LATEST SALES' && this.state.btnState === false){
      this.setState({btnState : (!this.state.btnState)});
    }
      
    else if(event.target.innerText.toUpperCase() === 'OUR LATEST RENTS' && this.state.btnState === true){
      this.setState({btnState : (!this.state.btnState)});
    }
  }

  render() {
    return (
      <div className={styles.CatalogueMenu}>   
        <ul>
          <li>
            <button 
              className={this.state.btnState === true ? styles.isSelected : styles.isNotSelected }
              onClick={(e) => this.toggleClassMethod(e)}>OUR LATEST SALES</button>
          </li>
          <li>
            <button 
              className={this.state.btnState === false ? styles.isSelected : styles.isNotSelected }
              onClick={(e) => this.toggleClassMethod(e)}>OUR LATEST RENTS</button>
          </li>
        </ul>
      </div>
  );
  }
}
export default CatalogueMenu;
