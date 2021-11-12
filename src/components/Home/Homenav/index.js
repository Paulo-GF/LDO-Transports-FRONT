import './styles.scss';

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
      <a href="#activities" className="homeNavBar-ref">
        <GiTruck className="icon-anchor" />
      </a>
      <a href="#history" className="homeNavBar-ref">
        <BsBookHalf className="icon-anchor" />
      </a>
      <a href="#news" className="homeNavBar-ref">
        <FaRegNewspaper className="icon-anchor" />
      </a>
    </nav>
  );
}
