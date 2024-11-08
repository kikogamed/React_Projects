import "./services.css";
import Heading from "./sectionHeading.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faHandSparkles } from "@fortawesome/free-solid-svg-icons";
import { faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";
import { faUikit } from '@fortawesome/free-brands-svg-icons';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';




function Services() {

    return (
        <div className="services" id="services">
            
            <Heading name="Services"></Heading>

            <div className="cards">
                <div className="card" data-aos="flip-right" data-aos-duration="1000">
                    <FontAwesomeIcon icon={faGear} />
                    <h3 className="card-head">Creative Design</h3>
                    <p className="car-par">Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply</p>
                </div>
                <div className="card" data-aos="flip-right" data-aos-duration="1000">
                    <FontAwesomeIcon icon={faHandSparkles} />
                    <h3 className="card-head">Clean Code</h3>
                    <p className="car-par">Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply</p>
                </div>
                <div className="card" data-aos="flip-right" data-aos-duration="1000">
                    <FontAwesomeIcon icon={faTableCellsLarge} />
                    <h3 className="card-head">Responsive Design</h3>
                    <p className="car-par">Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply</p>
                </div>
                <div className="card" data-aos="flip-right" data-aos-duration="1000">
                    <FontAwesomeIcon icon={faUikit} />
                    <h3 className="card-head">Material UI</h3>
                    <p className="car-par">Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply</p>
                </div>
                <div className="card" data-aos="flip-right" data-aos-duration="1000">
                    <FontAwesomeIcon icon={faFontAwesome} />
                    <h3 className="card-head">Material UI Icons</h3>
                    <p className="car-par">Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply</p>
                </div>
                <div className="card" data-aos="flip-right" data-aos-duration="1000">
                    <FontAwesomeIcon icon={faHeadset} />
                    <h3 className="card-head">Awesome Support</h3>
                    <p className="car-par">Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply</p>
                </div>
            </div>
        </div>
    )
}

export default Services;