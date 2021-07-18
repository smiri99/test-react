import React from 'react';
import styles from './CardComponent.module.css';

class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "Une expertise totale, une présence locale" };
  }

  render() {
    return (
      <div className={styles.CardComponent}>
        <div className={styles.imgCard}>
          <img src={this.props.image} alt="exp" />
         <div className={styles.footerCard}>
         <h1 className={styles.cap}>{this.props.cap}</h1>
         <img  src="/images/Group 942.png" alt="exp" />
          

         </div>

        </div>


        


        

      </div>
    );
  }
}

export default CardComponent;
