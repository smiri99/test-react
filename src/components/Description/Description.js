import React from 'react';
import styles from './Description.module.css';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mainTitle: "Envie de vendre votre appartement ou votre maison?"};
    this.state = {secondTitle: "Agorim, l’allié de vos projets immobiliers"};
    this.state = {paragraph: {
      header: "Optez pour la solution la plus performante, choisissez l’ensemble des expertises nécessaires à la vente de votre propriété bruxelloise en toute tranquillité :",
      expertise: ["• Une équipe réactive et pluridisciplinaire à taille humaine",
        "• Une valorisation optimale de votre bien",
        "• Des technologies de pointe: visites virtuelles, drones, home staging 3D, etc.",
        "• Un appui administratif, juridique et urbanistique",
        "• Des honoraires de vente réduits",
        "• Et bien plus encore…"]    
    }
    
  }
  }

  render() {
    return (
      <div className={styles.descriptionCard}>   
        <h1>{this.state.mainTitle}</h1>
        <h3>{this.state.secondTitle}</h3>
        <p>{this.state.paragraph.header}</p>
        {this.state.paragraph.expertise
            .map(el => { 
              return <p>{el}</p>
            })
        }
        
      </div>
  );
  }
}

export default Description;
