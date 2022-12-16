// Importe les npm install
import React from 'react';

// Importe le composant CardList
import CardList from '../components/CardList';

// Importe le composant Header
import Header from '../components/Header';

// Importe le composant Footer
import Footer from '../components/Footer';

// Fonction fleche pour Home qui retoune l'accueil avec l'en-tete, le corps et le pied de page
const Home = () => {
  
  // Retourne le contenu
  return (
    
    <div>

      {/* En-tete */}
      <Header />

      {/* Liste des cartes */}
      <CardList />

      {/* Pied de page */}
      <Footer />
    </div>
  )
}

export default Home
