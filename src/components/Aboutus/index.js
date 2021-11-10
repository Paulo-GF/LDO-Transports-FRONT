import './styles.scss';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Aboutus() {
  return (
    <div>
      <div className="aboutus-container">
        <div className="aboutus-card">
          <img src="https://github.com/Neemko.png" alt="Thomaspic" className="profilepic" />
          <p>Thomas Capo</p>
          <p>Product Owner</p>
          <div className="linkedin">
            <Link to={{ pathname: 'https://www.linkedin.com/in/thomas-capo/' }} target="_blank"><FaLinkedin /> Linkedin </Link>
          </div>
          <div className="github">
            <Link to={{ pathname: 'https://github.com/Neemko' }} target="_blank"><FaGithub /> Github </Link>
          </div>
        </div>
        <div className="aboutus-card">
          <img src="https://github.com/Paulo-GF.png" alt="" className="profilepic" />
          <p>Paulo Goncalves Ferreira</p>
          <p>Lead Dev Back</p>
          <div className="linkedin">
            <Link to={{ pathname: 'https://www.linkedin.com/in/paulo-goncalves-ferreira-812260107/' }} target="_blank"><FaLinkedin /> Linkedin </Link>
          </div>
          <div className="github">
            <Link to={{ pathname: 'https://github.com/Paulo-GF' }} target="_blank"><FaGithub /> Github </Link>
          </div>
        </div>
        <div className="aboutus-card">
          <img src="https://github.com/HeleneLoriot.png" alt="" className="profilepic" />
          <p>Helene Loriot</p>
          <p>SCRUM Master</p>
          <div className="linkedin">
            <Link to={{ pathname: 'https://www.linkedin.com/in/h%C3%A9l%C3%A8ne-loriot/' }} target="_blank"><FaLinkedin /> Linkedin </Link>
          </div>
          <div className="github">
            <Link to={{ pathname: 'https://github.com/HeleneLoriot' }} target="_blank"><FaGithub /> Github </Link>
          </div>
        </div>
        <div className="aboutus-card">
          <img src="https://github.com/OdinAsgard.png" alt="" className="profilepic" />
          <p>Basile Marguerie</p>
          <p>GIT Master</p>
          <div className="linkedin">
            <Link to={{ pathname: 'https://www.linkedin.com/in/basile-marguerie-b24579196/' }} target="_blank"><FaLinkedin /> Linkedin </Link>
          </div>
          <div className="github">
            <Link to={{ pathname: 'https://github.com/OdinAsgard' }} target="_blank"><FaGithub /> Github </Link>
          </div>
        </div>
        <div className="aboutus-card">
          <img src="https://github.com/RemiHENRY0117.png" alt="" className="profilepic" />
          <p>Remi Henry</p>
          <p>Lead Dev Front</p>
          <div className="linkedin">
            <Link to={{ pathname: 'https://www.linkedin.com/in/r%C3%A9mi-henry-923607220/' }} target="_blank"><FaLinkedin /> Linkedin </Link>
          </div>
          <div className="github">
            <Link to={{ pathname: 'https://github.com/RemiHENRY0117' }} target="_blank"><FaGithub /> Github </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
