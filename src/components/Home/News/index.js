// import styles
import './styles.scss';

// import images
import image from '../../../assets/yellowRoad.jpg';

export default function News() {
  return (
    <div id="news" className="news">
      <h2 className="news-title">Nos actualités</h2>
      <article className="news-article">
        <div className="news-article-imageContainer">
          <img className="news-article-image" src={image} alt="truck1" />
        </div>
        <p className="news-article-content">
          LDO c’est le L de Laurent et le DO de Dogan, les deux actionnaires
          de la SAS LDO Transports.
          Laurent, c’est 20 ans d’expérience en direction administrative et financière.
          Dogan, c’est 17 ans d’expérience dans le transport, de chauffeur SPL
          à directeur des opérations.
          C’est aussi 7 ans de travail en commun au sein d’une entreprise
          de transport spécialisée dans
          la traction avant de prendre des chemins différents.

          Ensuite, les aléas de la vie font que les chemins se croisent à nouveau.
          L’envie, la maturité et la complémentarité permettent de dessiner
          les contours d’une route commune.

          Cet oiseau, ces ailes, c’est évidemment la liberté d’entreprendre mais surtout
          celle de pouvoir porter, pour nos clients, notre savoir-faire
          et notre vision du transport de marchandises.
          Pourquoi le colibri ?
          Parce que c’est le seul oiseau au monde capable de voler en marche arrière ce qui
          est assez pratique pour une mise à quai ou l’accrochage d’une remorque ?
          Parce qu’il est capable de voler jusqu’à 97km/h ? C’est un peu trop rapide
          pour un PTRA de 44 tonnes…
          Non. Le colibri est également connu à travers une légende amérindienne.
          Un jour, la foudre déclenche un incendie dans une forêt. Les animaux assistent,
          impuissants, au désastre. Seul un colibri fait des allers-retours et arrose les
          flammes de quelques gouttes à l’aide de son bec. Le colibri est alors interpellé
          par des animaux : « Petit colibri, tu es complètement fou, ce n’est pas avec ces
          quelques gouttes d’eau que tu vas éteindre l’incendie ! ». Le petit colibri se
          retourne et dit : « Oui, vous avez raison. Mais je fais ma part ».
          La morale de cette histoire trouve une résonance évidente aujourd’hui face au
          réchauffement climatique et aux enjeux environnementaux que nous devons relever.
          Elle nous interpelle également, de manière plus générale, sur ce que nous sommes
          capables de réaliser ensemble.
          Chez LDO nous sommes tous des colibris et, collectivement, nous écrivons
          aujourd’hui notre histoire et celle de nos clients.
        </p>
      </article>
    </div>
  );
}
