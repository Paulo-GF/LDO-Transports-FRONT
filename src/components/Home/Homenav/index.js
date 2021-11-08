import './styles.scss';

// import of the icon from the react-icon lib
import { FaUserCircle } from 'react-icons/fa';

export default function HomeNav() {
  return (
    <nav className="homeNavBar">
      <a href="#activities" className="homeNavBar-ref">
        <FaUserCircle className="icon-anchor" />
      </a>
      <a href="#history" className="homeNavBar-ref">
        <FaUserCircle className="icon-anchor" />
      </a>
      <a href="#news" className="homeNavBar-ref">
        <FaUserCircle className="icon-anchor" />
      </a>
    </nav>
  );
}

// possible way to ref a certain article through a VanillaJS func
// document.getElementById('myElementSomewhere').scrollIntoView()

// possible way to ref a certain article through an HTML tag
/*
<!-- <a> élément liens vers la section ci-dessous -->
<p><a href="#section_further_down">
  Passez à la rubrique ci-dessous
</a></p>

<!-- Rubrique à relier -->
<h2 id="section_further_down">Section plus bas</h2>
*/
// hashlink to check
