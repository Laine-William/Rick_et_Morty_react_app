// Importe les npm install
import React from 'react';

// Importe le style de la carte
import '../assets/styles/Card.scss';

// Importe les liens avec une route
import { NavLink } from 'react-router-dom';

// Importe les icones fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Importe les icones svg fontawesome
import { faLocationDot, 
         faCross, 
         faArrowAltCircleRight, 
         faHeart, 
         faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';

// Fonction fleche pour Card qui retoune une carte avec des proprietes
const Card = (props) => {

  // Retourne le contenu
  return (

    // Id de la carte
    <div className = 'card' id = {props.id}>

      {/* Image de la carte */}
      <img className = 'card-image' src = {props.image}/>

        {/* Fonction fleche vide qui retoune le statut */}
        {(() => {

          // Si le statut est egale à dead
          if (props.status === "Dead") {

            // Retourne le contenu
            return (

              // Icone du statut  mort avec le nom
              <p className = 'card-name'>
                <FontAwesomeIcon icon = {faCross} /> {props.status} <br/>{props.name}
              </p>
            );

          // Sinon si le statut est egale à alive
          } else if (props.status === "Alive") {

            // Retourne le contenu
            return (

              // Icone du statut vivant avec le nom
              <p className = 'card-name'>
                <FontAwesomeIcon icon = {faHeart} /> {props.status} <br/>{props.name}
              </p>
            );

          // Sinon on retourne aucun statut
          } else {

            // Retourne le contenu
            return (

              // Icone du statut aucun avec le nom
              <p className = 'card-name'>
                <FontAwesomeIcon icon = {faSkullCrossbones} /> {props.status} <br/>{props.name}
              </p>
            );
          }
        })()}

        {/* Icone de la localisation */}
        <p className = 'card-location'>
          <FontAwesomeIcon icon = {faLocationDot} /> {props.location}
        </p>
        
        {/* Texte de fin */}
        <div className = 'text-end'>

          {/* Lien de navigation vers le details */}
          <NavLink to = {`/details/${props.id}`}>

            {/* Bouton details avec un icone */}
            <button className = 'card-btn'>
              Details <FontAwesomeIcon icon = {faArrowAltCircleRight} />
            </button>
          </NavLink>
        </div>
    </div>
  )
}

export default Card

