// import styles
import './styles.scss';

export default function News() {
  return (
    <div id="map" className="mapArticle">
      <div className="mapArticle-mapContainer">
        <iframe className="mapArticle-mapContainer-frame" title="mapArticle-mapContainer-frame" src="https://www.google.com/maps/d/u/0/embed?mid=1kMDzfgeIneR1rWVtbutDJC9FeNbOAfX8" />
      </div>
      <div className="mapArticle-adressContainer">
        <div className="mapArticle-adressContainer-content">
          <p className="mapArticle-adressContainer-content-ldotitle"> LDO Transports</p>
          <p>LIEU-DIT PETINIOT</p>
          <p>46150 CATUS</p>
          <p>Tel : 06 66 25 29 92</p>
          <p>exploitation@ldo-transports.com</p>
        </div>
      </div>
    </div>
  );
}
