import './scss/Intro.scss';
import banner from './imgs/banner.png';

export default function Intro() {
  return (
    <div className="Intro">
        {/*Contenu principal, images porjets divise en 3 
          puis texte intro
        */}
        <div className='Banner'></div>
        <div className="introDesc">
          <h2>Salut !</h2>
          <p>SITE NON TERMINÉ, problèmes avec la barre de navigation</p>
          <p className="introDesc">Je m'appelle Guy Ilunga Boucher et je suis un programmeur. J'adore la progrmmation orientée objet, les jeux-vidéos et les mangas !</p>
        </div>
        
    </div>
  );
}
