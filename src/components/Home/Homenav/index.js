import './styles.scss';

const HomeNav = () => (
  <nav className="homeNavBar">
    <a href="#section_further_down" className="homeNavBar-ref">
      Nos activités
    </a>
    <a href="#section_further_down" className="homeNavBar-ref">
      Notre Histoire
    </a>
    <a href="#section_further_down" className="homeNavBar-ref">
      Nos Actus
    </a>
  </nav>
);

export default HomeNav;

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
