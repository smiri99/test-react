import React from 'react';
import styles from './RatedCard.module.css';

class RatedCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {paragraph: "L’équipe Agorim est disponible, professionnelle, pleine de ressources et efficace. Ils nous ont accompagnés tout au long de la vente de notre appartement. En plus d’avoir fait ce qu’on attend d’une agence immobilière, ils nous ont apporté leur expertise juridique. On ne peut que la conseiller."};
  }

  render() {
    return (
      <div className={styles.RatedCard}>
        <div>
          <h1>Gilles D. (Ixelles)</h1>  
          <h2>&#9733; &#9733; &#9733; &#9733; &#9733;</h2>
        </div>
        <div>
          <p>{this.state.paragraph}</p>
          <ul>
            <li><img src="/icons/rightArrow.png" alt="arrow pointing to the right"/></li>
            <li><img src="/icons/leftArrow.png" alt="arrow pointing to the left"/></li>
          </ul>
        </div>
        
      </div>
  );
  }
}

export default RatedCard;
