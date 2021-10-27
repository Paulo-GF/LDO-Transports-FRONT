import './styles.scss';

export default function HomeNav() {
  return (
    <nav className="homeNavBar">
      <a href="#section_further_down" className="homeNavBar-ref">
        
      </a>
      <a href="#section_further_down" className="homeNavBar-ref">
        
      </a>
      <a href="#section_further_down" className="homeNavBar-ref">
        
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
