import projetsData from './data/projets.json';
import Projet from './Projet';
import './scss/Projets.scss';

export default function Projets() {
  return (
    <div className="Projets">
        <h2>Mes Projets</h2>
        <ul className="GallerieProjets">
            {
                projetsData.map( 
                projet =>  <li><Projet key={projet.id} {...projet} /></li>
                )
            }
        </ul>
    </div>
    
  );
}
