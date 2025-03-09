import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons"; 
import "../styles/Heading.css";

const Heading = () => {
  return (
    <div className="Head">
      <FontAwesomeIcon icon={faMicrosoft} size="3x" className="logo"/>
      
        <nav>
          <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li className="contact-btn" >Contact</li>
                      <li>Projects</li>
          </ul>
        </nav>
      
    </div>
  );
}

export default Heading
