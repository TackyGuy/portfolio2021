import './scss/Main.scss';
import Intro from './intro';
import Projets from './Projets';
import Resume from './resume';
import Contacts from './contacts';

export default function Main() {
  return (
    <div className="Main">
        {/*Contenu principal, images porjets divise en 3 
          puis texte intro
          suivi d'un resume des competences
          finalement les contacts
        */}
        <Intro/>
        <Projets/>
        <Resume/>
        <Contacts/>
    </div>
  );
}
