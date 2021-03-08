import './scss/Projet.scss';


export default function Projet({id, titre, desc, roles}) {
  return (
    <article className="Projet">
      <div className="Screenshot">
        <img src={`images/${id}.png`} alt='Screenshot'/>
      </div>
      <div className="info">
        <h2>{titre}</h2>
        <p>{desc}</p>
        <p>Rôles : {roles}</p>
      </div>
      
    </article>
  );
}