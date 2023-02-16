import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import myIcon from "../../assets/images/memoji.png"
import "./Footer.scss";

function Footer() {

   
  return (
    <footer className="footer">
        {/* <div> */}
    <img className="footer__memoji" src={myIcon} alt="Personal memoji"/>
    <div className="footer__content">
      <p className="footer__heading">Rebecca Collins</p>
      <small className="footer__sub-heading">Full Stack <br/> Web Developer • © 2023</small>
    </div>
        {/* </div> */}
        <div>
          <FaGithub/>
        </div>
        <div>
          <FaLinkedinIn/>
        </div>
    </footer>
  )
}

export default Footer