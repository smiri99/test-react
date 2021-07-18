import React from 'react';
import styles from './HomePage.module.css';

// Components
import Header from './../../components/Header/Header.js';
import Footer from './../../components/Footer/Footer.js';
import Description from './../../components/Description/Description.js';
import RatedCard from './../../components/RatedCard/RatedCard.js'
import ExpertiseCard from '../../components/ExpertiseCard/ExpertiseCard';
import CatalogueMenu from '../../components/CatalogueMenu/CatalogueMenu';
import CardComponent from '../../components/CardComponent/CardComponent';


class HomePage extends React.Component {

  render() {
    return (
      <div className={styles.container}>
        <img src="/images/chowcaseImage.png" alt="chowcase background" className={styles.showcaseImage}/>
        <section className={styles.showcaseSection}>
          <Header />
          <Description />
          <RatedCard />
          <ExpertiseCard />
        </section>
        <section className={styles.catalogueAndContactSection}>
          <CatalogueMenu />
          <div className={styles.cardsContainer}>
            <CardComponent image={"/images/toa-heftiba-662338-unsplash.png"} cap={"Old Vicarage"}/>
            <CardComponent image={"/images/orlova-maria-379663-unsplash.png"} cap={"Sunnyside House"}/>
            <CardComponent image={"/images/toa-heftiba-662338-unsplash.png"} cap={"Springfield House	"}/>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }
}


export default HomePage;
