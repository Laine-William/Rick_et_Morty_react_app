// Importe les npm install et les hooks
import React, { useEffect, 
                useState } from "react";

// Importe le style du personnage
import '../assets/styles/Personnage.scss';

// Importe le composant axios
import axios from "axios";

// Importe le useParams 
import { useParams } from 'react-router-dom';

// Importe les icones fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Importe les icones svg fontawesome
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

// Importe le composant Header
import Header from '../components/Header';

// Importe le composant Episode
import Episode from "../components/Episode";

// Importe le composant Footer
import Footer from "../components/Footer";

// Fonction fleche pour Personnage qui retoune une personnage
const Personnage = () => {

  // Id en parametre
  const {id} = useParams ();

  // Etat des episode
  const [episode , setEpisode] = useState ([]);
  
  // Etat des image
  const [image , setImage] = useState ();
  
  // Etat des name
  const [name , setName] = useState ('');
  
  // Etat de la location
  const [location , setLocation] = useState ('');
  
  // Etat de la description
  const [description , setDescription] = useState ('');

  // Fonction fleche pour useEffect qui retoune l'effet
  useEffect(() => {

    // Axios donne l'url de l'id et donne une reponse 
    axios.get (`https://rickandmortyapi.com/api/character/${id}`)
         .then (response => {
    
    // Modifier la reponse des donnees de l'episode
    setEpisode (response.data.episode)
    
    // Modifier la reponse des donnees de l'image
    setImage (response.data.image)
    
    // Modifier la reponse des donnees du nom
    setName (response.data.name)
    
    // Modifier la reponse des donnees du nom de la localisation
    setLocation (response.data.location.name)
    
    // Modifier la reponse des donnees du nom avec l'espece et le genre
    setDescription (response.data.name + ' est un specimen ' + response.data.species + ' de type ' + (response.data.gender).toLowerCase () + '.')
  })

  // Fonction fleche catch qui attrape l'erreur
  .catch (error => {

    // Affiche les erreurs
    console.log (error);
  })
  }, [])

  // Retourne le contenu
  return (
    
    <div>
      {/* En-tete */}
      <Header />
    
      <div className="container-details">

        {/* Image */}
        <img src = {image} className = "img-details"/>
  
          <div>
            {/* Titre */}
            <h2>{name}</h2>
        
            {/* Icone de la localisation avec la localisation */}
            <p><FontAwesomeIcon icon = {faLocationDot} /> {location}</p>
        
            {/* Description */}
            <p>{description}</p>
        
            {/* Ligne */}
            <hr/>
        
            {/* Titre des episodes */}
            <h3>Episodes : </h3>
        
            <ul>
              {/* Parcourt les episodes avec la méthode map */}
              {episode.map ((episode) => {

                // Retourne l'episode
                return <Episode episode = {episode} />
              })}
            </ul>
          </div>
      </div>

      {/* Pied de page */}
      <Footer />
    </div>
  )
}

export default Personnage