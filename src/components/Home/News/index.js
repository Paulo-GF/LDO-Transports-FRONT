// import styles
import './styles.scss';

// import images
import image from '../../../assets/gifTruck.gif';

export default function News() {
  return (
    <div id="news" className="news">
      <h2 className="news-title">Nos actualités</h2>
      <article className="news-article">
        <div className="news-article-imageContainer">
          <img className="news-article-image" src={image} alt="truck1" />
        </div>
        <p className="news-article-content">
          En ce mois de novembre, nous nous sommes fait un cadeau de Noël un peu en avance: un nouveau site web, tout beau, tout neuf.
          Le but: vous présenter notre entreprise et nos services. 
          Ce site est à l’image de nos valeurs: convivial, accueillant et professionnel. 
          Il se veut un lien direct entre vous et nous. 
          Nous vous proposons également une section recrutement pour vous présenter nos offres d’emplois à destination des chauffeurs routiers. Vous pourrez désormais postuler à nos offres directement en ligne.
          Le but encore: des contacts plus directs entre nous et des échanges facilités. 
          Donc bienvenue à vous sur notre site, entrons en contact, volez d’une page à l’autre, soyons tous LDO, soyons tous des colibris.  
        </p>
      </article>
    </div>
  );
}
