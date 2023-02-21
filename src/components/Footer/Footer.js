// import { FaGithub } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import myIcon from "../../assets/images/memoji.png";
import "./Footer.scss";

const handleViewButtonClick = () => {
  window.open("https://github.com/Rebecca-Collins", "_blank");
};

const handleLinkButton = () => {
  window.open("https://www.linkedin.com/in/collins-rebecca/", "_blank");
};

const handleResumeButton = () => {
  window.open(
    "https://dvrfp7vt6y4co.cloudfront.net/0e963f9f-f7e9-4502-879f-992725cdf8a8/Rebecca%20Collins%20Resume.pdf",
    "_blank"
  );
};

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container footer__inner">
        <div className="footer__content">
          <img className="footer__memoji" src={myIcon} alt="Personal memoji" />
          <div className="footer__text-container">
            <p className="footer__heading">Rebecca Collins</p>
            <small className="footer__sub-heading">
              Full Stack <br /> Web Developer • © 2023
            </small>
          </div>
        </div>
        <div className="footer__icon-container">
          <div className="link github">
            <FaGithub className="spin" onClick={handleViewButtonClick} />
          </div>
          <div className="link linkedin">
            <FaLinkedinIn className="spin" onClick={handleLinkButton} />
          </div>
          <div className="link resume">
            <FaWpforms className="spin" onClick={handleResumeButton} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
