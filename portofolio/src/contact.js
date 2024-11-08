import "./contact.css";
import Heading from "./sectionHeading.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


function Contact() {
    
    
    return (
        <div className="contact" id="contact">
            <Heading name="Keep In Touch"></Heading>

            <div className="contact-content">
                <form>
                    <div className="contact-name">
                        <input type="text" placeholder="Name"></input>
                    </div>
                    <div className="email">
                        <input type="email" placeholder="Email"></input>
                    </div>
                    <div className="subject">
                        <input type="text" placeholder="Subject"></input>
                    </div>
                    <textarea placeholder="Write What is in Your Mind..."></textarea>
                
                    <button>Submit</button>
                </form>

                <div className="info">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p className="contact-par">2651 Main Street, Suit 124</p>
                    <p className="contact-par">Seattle, WA, 98101</p>
                    <FontAwesomeIcon icon={faPhone} />
                    <p className="contact-par">0123456789</p>
                    <p className="contact-par">0345627891</p>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p className="contact-par">hello@thetheme.io</p>
                    <p className="contact-par">inf0@brex-theme.io</p>
                </div>
            </div>

        </div>
    )
}

export default Contact;