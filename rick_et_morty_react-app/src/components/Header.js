// Importe les npm install
import React from 'react';

// Importe le style de l'entete
import '../assets/styles/Header.scss';

// Importe le logo (image)
import logo from '../assets/images/logo-rick-et-morty.png';

// Importe les liens avec une route
import { NavLink } from 'react-router-dom';

// Importe les icones fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Importe les icones svg fontawesome
import { faHtml5, 
         faCss3Alt, 
         faJs, 
         faReact } from '@fortawesome/free-brands-svg-icons';

// Fonction fleche pour Header qui retoune une entete
const Header = () => {

  // Retourne le contenu
  return (

  // Centre le texte
  <div className = 'text-center text-white'>
  
  {/* Lien de navigation avec une image */}
  <NavLink to = "/Home">
    <img className = 'logo-rick-et-morty' src = {logo}/>
  </NavLink>

      {/* Texte */}
      <p>Rick et Morty : apprentissage de react sans prise de tête.</p>

      {/* Logo HTML5 recolorise en hexadecimal */}
      <FontAwesomeIcon className = 'logo-header' icon = {faHtml5} color = '#ff4500' />

      {/* Logo CSS3 recolorise en hexadecimal */}
      <FontAwesomeIcon className = 'logo-header' icon = {faCss3Alt} color = '#334bff' />

      {/* Logo JS recolorise en hexadecimal */}
      <FontAwesomeIcon className = 'logo-header' icon = {faJs} color = '#ffff44' />

      {/* Logo ReactJS recolorise en hexadecimal */}
      <FontAwesomeIcon className = 'logo-header' icon = {faReact} color = '#74d4e0' />
    </div>
  )
}

export default Header
