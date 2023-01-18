import bandsite from "../../assets/images/bandsite.png";
import brainflix from "../../assets/images/brainflix.png";
import googleAccess from "../../assets/images/google-access.png";
import instock from "../../assets/images/instock.png";
import travelSite from "../../assets/images/travel-site.png";
import nitro from "../../assets/images/nitro.png";
import oceanside from "../../assets/images/oceanside.png";
import "./Projects.scss";

function Projects() {
  return (
    <section>
        <div className="project">
            <img className="project__image" src={bandsite} alt="bandsite project"/>
        </div>
        <div className="project">
            <img className="project__image" src={brainflix} alt="bandsite project"/>
        </div>
        <div className="project">
            <img className="project__image" src={googleAccess} alt="bandsite project"/>
        </div>
        <div className="project">
            <img className="project__image" src={nitro} alt="bandsite project"/>
        </div>
       
        <div className="project">
            <img className="project__image" src={travelSite} alt="bandsite project"/>
        </div>
        <div className="project">
            <img className="project__image" src={instock} alt="bandsite project"/>
        </div>
       
        <div className="project">
            <img className="project__image" src={oceanside} alt="bandsite project"/>
        </div>
    </section>
  )
}

export default Projects