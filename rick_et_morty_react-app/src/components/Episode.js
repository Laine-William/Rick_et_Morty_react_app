// Importe les npm install et les hooks
import React, { useEffect, 
                useState } from 'react';

// Importe le composant axios
import axios from 'axios';

// Fonction fleche pour Episode qui retoune une liste des episodes avec des proprietes
const Episode = (props) => {

  // Etat des names
  const [names , setName] = useState ()

  // Etat des episode
  const [episode , setEpisode] = useState ()

  // Etat des date de diffusion
  const [air_date , setAir_date] = useState ()

  // Fonction fleche pour useEffect qui retoune l'effet
  useEffect (() => {

    // Axios donne les proprietes et donne une reponse 
    axios.get (props.episode)
         .then (response => {

            // Modifier la reponse des donnees du nom
            setName (response.data.name)
      
            // Modifier la reponse des donnees des episodes
            setEpisode (response.data.episode)
      
            // Modifier la reponse des donnees des dates
            setAir_date (response.data.air_date)
    })

    // Fonction fleche catch qui attrape l'erreur
    .catch (error => {
    
      // Affiche les erreurs
      console.log (error);
    })
  }, [])
   
  // Retourne le contenu
  return (

    // Liste le nom, l'episode et la date de diffusion
    <li>
      <p>
        <b>{names}</b> - {episode} - date de diffusion {air_date}
      </p>
    </li>
  )
}

export default Episode