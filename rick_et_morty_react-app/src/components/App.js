// Importe le style de l'application
import '../assets/styles/App.css';

// Importe le style de l'application
import '../assets/styles/App.scss';

// Importe le composant accueil
import Home from '../pages/Home';

// Importe le style du detail du personnage
import Personnage from '../pages/Personnage';

// Importe les routes
import { BrowserRouter, 
         Routes, 
         Route } from 'react-router-dom';

// Fonction fleche pour App qui retoune l'application avec les routes accueil, details et autres
const App = () => {

  // Retourne le contenu
  return (
    
    <div>

      {/* Route internet */}
      <BrowserRouter>

        {/* Routes */}
        <Routes>

          {/* Route pour l'accueil */}
          <Route path = "/home" element = {<Home />} />

          {/* Route pour le detail du personnage */}
          <Route path = "/details/:id" element = {<Personnage />} />

          {/* Route pour tous les autres qui retourne à l'accueil */}
          <Route path = "*" element = {<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
