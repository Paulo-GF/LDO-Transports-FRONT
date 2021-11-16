import './styles.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// import of the icon from the react-icon lib
import { GiTruck } from 'react-icons/gi';
import { BsBookHalf } from 'react-icons/bs';
import { FaRegNewspaper } from 'react-icons/fa';
import imgHomeNav from '../../../assets/backgroundHomeNav.jpg';

export default function HomeNav() {
  // background image
  const homenavContentStyle = {
    backgroundImage: `url(${imgHomeNav})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <nav className="homeNavBar" style={homenavContentStyle}>
      <div className="homeNavBar-anchor-container">
        <div className="homeNavBar-anchor-container-icon-container">
          <AnchorLink href="#activities" className="homeNavBar-anchor-container-icon-container-ref">
            <GiTruck className="icon-anchor" />
          </AnchorLink>
        </div>
        <p className="homeNavBar-anchor-container-text">Nos activités</p>
      </div>
      <div className="homeNavBar-anchor-container">
        <div className="homeNavBar-anchor-container-icon-container">
          <AnchorLink href="#history" className="homeNavBar-anchor-container-icon-container-ref">
            <BsBookHalf className="icon-anchor" />
          </AnchorLink>
        </div>
        <p className="homeNavBar-anchor-container-text">Notre histoire</p>
      </div>
      <div className="homeNavBar-anchor-container">
        <div className="homeNavBar-anchor-container-icon-container">
          <AnchorLink href="#news" className="homeNavBar-anchor-container-icon-container-ref">
            <FaRegNewspaper className="icon-anchor" />
          </AnchorLink>
        </div>
        <p className="homeNavBar-anchor-container-text">Nos actualités</p>
      </div>
    </nav>
  );
}
