import './styles.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// import of the icon from the react-icon lib
import { GiTruck } from 'react-icons/gi';
import { BsBookHalf } from 'react-icons/bs';
import { FaRegNewspaper } from 'react-icons/fa';

export default function HomeNav() {
  return (
    <nav className="homeNavBar">
      <AnchorLink href="#activities" className="homeNavBar-ref">
        <GiTruck className="icon-anchor" />
      </AnchorLink>
      <AnchorLink href="#history" className="homeNavBar-ref">
        <BsBookHalf className="icon-anchor" />
      </AnchorLink>
      <AnchorLink href="#news" className="homeNavBar-ref">
        <FaRegNewspaper className="icon-anchor" />
      </AnchorLink>
    </nav>
  );
}
