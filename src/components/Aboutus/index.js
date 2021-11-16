import './styles.scss';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Aboutus() {
  return (
    <div>
      <div className="aboutus-container">
        <div className="aboutus-card">
          <img src="https://github.com/Neemko.png" alt="Thomaspic" className="aboutus-card-profilepic" />
          <p>Thomas Capo</p>
          <p>Product Owner / Dev Back</p>
          <Link to={{ pathname: 'https://www.linkedin.com/in/thomas-capo/' }} target="_blank">
            <div className="linkedin">
              <div className="aboutus-card-icon-container"><FaLinkedin className="aboutus-card-icon" /></div>
              <div className="aboutus-card-link-container"> Linkedin </div>
            </div>
          </Link>
          <Link to={{ pathname: 'https://github.com/Neemko' }} target="_blank">
            <div className="github">
              <div className="aboutus-card-icon-container">
                <FaGithub className="aboutus-card-icon" />
              </div>
              <div className="aboutus-card-link-container"> Github </div>
            </div>
          </Link>
        </div>
        <div className="aboutus-card">
          <img src="https://github.com/Paulo-GF.png" alt="Paulopic" className="aboutus-card-profilepic" />
          <p>Paulo Goncalves Ferreira</p>
          <p>Lead Dev Back</p>
          <Link to={{ pathname: 'https://www.linkedin.com/in/paulo-goncalves-ferreira-812260107/' }} target="_blank">
            <div className="linkedin">
              <div className="aboutus-card-icon-container"><FaLinkedin className="aboutus-card-icon" /></div>
              <div className="aboutus-card-link-container"> Linkedin </div>
            </div>
          </Link>
          <Link to={{ pathname: 'https://github.com/Paulo-GF' }} target="_blank">
            <div className="github">
              <div className="aboutus-card-icon-container">
                <FaGithub className="aboutus-card-icon" />
              </div>
              <div className="aboutus-card-link-container"> Github </div>
            </div>
          </Link>
        </div>
        <div className="aboutus-card">
          <img src="https://github.com/HeleneLoriot.png" alt="Heleneopic" className="aboutus-card-profilepic" />
          <p>Hélène Loriot</p>
          <p>SCRUM Master / Dev Front</p>
          <Link to={{ pathname: 'https://www.linkedin.com/in/h%C3%A9l%C3%A8ne-loriot/' }} target="_blank">
            <div className="linkedin">
              <div className="aboutus-card-icon-container"><FaLinkedin className="aboutus-card-icon" /></div>
              <div className="aboutus-card-link-container"> Linkedin </div>
            </div>
          </Link>
          <Link to={{ pathname: 'https://github.com/HeleneLoriot' }} target="_blank">
            <div className="github">
              <div className="aboutus-card-icon-container">
                <FaGithub className="aboutus-card-icon" />
              </div>
              <div className="aboutus-card-link-container"> Github </div>
            </div>
          </Link>
        </div>
        <div className="aboutus-card">
          <img src="https://github.com/OdinAsgard.png" alt="Basilepic" className="aboutus-card-profilepic" />
          <p>Basile Marguerie</p>
          <p>GIT Master / Dev Front</p>
          <Link to={{ pathname: 'https://www.linkedin.com/in/basile-marguerie-b24579196/' }} target="_blank">
            <div className="linkedin">
              <div className="aboutus-card-icon-container"><FaLinkedin className="aboutus-card-icon" /></div>
              <div className="aboutus-card-link-container"> Linkedin </div>
            </div>
          </Link>
          <Link to={{ pathname: 'https://github.com/OdinAsgard' }} target="_blank">
            <div className="github">
              <div className="aboutus-card-icon-container">
                <FaGithub className="aboutus-card-icon" />
              </div>
              <div className="aboutus-card-link-container"> Github </div>
            </div>
          </Link>
        </div>
        <div className="aboutus-card">
          <img src="https://github.com/RemiHENRY0117.png" alt="Remipic" className="aboutus-card-profilepic" />
          <p>Rémi Henry</p>
          <p>Lead Dev Front</p>
          <Link to={{ pathname: 'https://www.linkedin.com/in/r%C3%A9mi-henry-923607220/' }} target="_blank">
            <div className="linkedin">
              <div className="aboutus-card-icon-container"><FaLinkedin className="aboutus-card-icon" /></div>
              <div className="aboutus-card-link-container"> Linkedin </div>
            </div>
          </Link>
          <Link to={{ pathname: 'https://github.com/RemiHENRY0117' }} target="_blank">
            <div className="github">
              <div className="aboutus-card-icon-container">
                <FaGithub className="aboutus-card-icon" />
              </div>
              <div className="aboutus-card-link-container"> Github </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
