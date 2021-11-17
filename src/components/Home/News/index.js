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
          Bienvenue chez www.ldo-transports.com !
          C’est Noël avant l’heure pour LDO Transports avec la livraison,
          en ce mois de novembre, de notre site internet.
          Ce nouvel espace est l’occasion de vous présenter notre entreprise et nos services.
          Vous souhaitez rejoindre nos équipes ?
          Une page recrutement a été conçue pour faciliter notre rencontre et nos échanges.
          Elle vous permettra de visualiser nos offres d’emploi,
          de postuler en ligne et surtout de nous laisser vos coordonnées.

          Comme notre colibri, venez survoler ce site ou prendre le temps
          de vous poser sur une page et de nous laisser un message ou de
          nous parler de vos besoins en transport de marchandises. Bonne
          visite à tous et à bientôt !

        </p>
      </article>
    </div>
  );
}
