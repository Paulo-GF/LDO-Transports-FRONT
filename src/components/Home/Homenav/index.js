import './styles.scss';

// import of the icon from the react-icon lib
import { GiTruck } from 'react-icons/gi';
import { BsBookHalf } from 'react-icons/bs';
import { FaRegNewspaper } from 'react-icons/fa';

export default function HomeNav() {
  return (
    <nav className="homeNavBar">
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
