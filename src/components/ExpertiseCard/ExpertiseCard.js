import React from 'react';
import styles from './ExpertiseCard.module.css';


class ExpertiseCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "Une expertise totale, une présence locale"};
  }

  render() {
    return (
    <div className={styles.ExpertiseCard}>
      <p>{this.state.title}</p>
      <div>
        <img src="/images/expertiseImages/Group 1905.png" alt="exp"/>
        <img src="/images/expertiseImages/Group 1904.png" alt="exp"/>
        <img src="/images/expertiseImages/Group 1903.png" alt="exp"/>
        <img src="/images/expertiseImages/Group 1902.png" alt="exp"/>
        <img src="/images/expertiseImages/Group 1901.png" alt="exp"/>
        <img src="/images/expertiseImages/Group 1900.png" alt="exp"/>
        <img src="/images/expertiseImages/Group 1899.png" alt="exp"/>
      </div>
    </div>
  );
  }
}

export default ExpertiseCard;
