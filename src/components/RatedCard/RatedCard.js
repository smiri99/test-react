import React from 'react';
import styles from './RatedCard.module.css';

const RatedCard = () => (
  <div className={styles.RatedCard}>
    <h1>Gilles D. (Ixelles)</h1>  
    <h2>&#9733; &#9733; &#9733; &#9733; &#9733;</h2>
    <p>L’équipe Agorim est disponible, professionnelle, pleine de ressources et efficace. Ils nous ont accompagnés tout au long de la vente de notre appartement. En plus d’avoir fait ce qu’on attend d’une agence immobilière, ils nous ont apporté leur expertise juridique. On ne peut que la conseiller.</p>
  </div>
);

export default RatedCard;
