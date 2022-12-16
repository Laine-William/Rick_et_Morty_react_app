// Importe les npm install et les hooks
import React, { useEffect, 
                useState } from 'react';

// Importe le style de la liste de cartes
import '../assets/styles/CardList.scss';

// Importe le composant carte
import Card from './Card';

// Importe le composant axios
import axios from 'axios';

// Fonction fleche pour CardList qui retoune une liste de cartes
const CardList = () => {

  // Etat des characters
  const [characters, setCharacters] = useState ([]);

  // Fonction fleche pour useEffect qui retoune l'effet
  useEffect (() => {

    // Axios recupere l'url et donne une reponse 
    axios.get ('https://rickandmortyapi.com/api/character')
         .then (response => {

            // Modifier la reponse des donnees pour les characters
            setCharacters (response.data.results);
    })

    // Fonction fleche catch qui attrape l'erreur
    .catch (error => {
    
      // Affiche les erreurs
      console.log (error);
    })
  }, []);

  // Retourne le contenu
  return (

    // Style des cards
    <div className = 'cards'>

      {/* Parcourt les characters avec la méthode map */}
      {characters.map ((character) => {

        // Retourne la carte avec un nom, id, localisation, image et un statut
        return <Card name = {character.name} 
                     key = {character.id} 
                     id = {character.id} 
                     location = {character.location.name} 
                     image = {character.image} 
                     status = {character.status}/>
        })}
      </div>
  )
}

export default CardList
