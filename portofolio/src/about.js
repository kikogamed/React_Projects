import { useEffect } from "react";
import "./about.css";
import man from "./imgs/man.png";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
    useEffect(() => {
        Aos.init();
        Aos.refresh()
    },[]);

    return(
        <div className="about" id="about">
            <div className="image" data-aos="fade-right" data-aos-duration="1000"><img alt="random" src={man}></img></div>
            <div className="txt">
                <h2 className="heading" data-aos="zoom-in-down" data-aos-duration="1000">About Me</h2>
                <p className="about-p" data-aos="zoom-in-down" data-aos-duration="1000">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>
                <p className="about-p" data-aos="zoom-in-down" data-aos-duration="1000">magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>
                <div>
                    <button className="about-btn" data-aos="zoom-in-down">Read More</button>
                    <button className="about-btn" data-aos="zoom-in-down">Contact Me</button>
                </div>
            </div>
        </div>
    );
}

export default About;