import React from 'react';
import styles from './Formulaire.module.css';
import emailjs from 'emailjs-com';
function Formulaire() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ey2aqna', 'template_f4uwfo7', e.target, 'user_mE6AYeueyUt096xAeoipe')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div className={styles.Formulaire}>
      <div className={styles.disc}>
        <p className={styles.title}>  Faites appel à nos experts! </p>
        <p className={styles.pp}>Nos conseils sont gratuits et sans engagement.
          Complétez ce formulaire, nous vous recontactons
          dans les 24h.</p>
        <p className={styles.pp}>Votre demande concerne :
          <p>- Une question liée à un projet en cours
            / à un futur projet</p>
          - Une estimation gratuite</p>
      </div>

      <form onSubmit={sendEmail}>
        <div className={styles.first} >
          <div className={styles.prenom}>
            <label>
              Prénom :
            </label>
            <input type="text" placeholder="Entre Votre prénom" name="prenom" />

          </div>
          <div className={styles.nom}>
            <label >
              Nom :
            </label>
            <input type="text" placeholder="Entre Votre nom" name="nom" />
          </div>
        </div>
        <div className={styles.tel}>
          <label>
            Numero télephone :
          </label>
          <input type="text" placeholder="Entrez Votre numéro de téléphone" name="tel" />
        </div>
        <div className={styles.email}>
          <label>
            E-mail :
          </label>
          <input type="text" placeholder="Entrez Votre mail" name="email" />
        </div>
        <input type="submit" value="Contactez-moi" />
      </form>

    </div>
  );

}

export default Formulaire;
