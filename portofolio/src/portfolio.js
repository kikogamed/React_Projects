import "./portfolio.css";
import Heading from "./sectionHeading.tsx";
import marketing1 from "./imgs/port1.jpg";
import design1 from "./imgs/port2.jpg";
import development1 from "./imgs/port3.jpg";
import marketing2 from "./imgs/port4.jpg";
import design2 from "./imgs/port5.jpg";
import development2 from "./imgs/port6.jpg";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";



function Portfolio() {
    
    const srcs = [
        [marketing1, "marketing"], [design1, "design"], [development1, "development"],
        [marketing2, "marketing"], [design2, "design"], [development2, "development"]
    ];

    const imgsRefs = useRef([]);


    const clickAll = () => {
        imgsRefs.current.forEach(e => {
            e.style.display = "block";
        });
    }

    const clickDesign = () => {
        imgsRefs.current.forEach(e => {
            if(e.getAttribute("category") === "design"){
                e.style.display = "block";
                e.classList.add("aos-animate");
            }
            else e.style.display = "none";
        });
    }

    const clickDevelopment = () => {
        imgsRefs.current.forEach(e => {
            if(e.getAttribute("category") === "development") {
                e.style.display = "block";
                e.classList.add("aos-animate");
            }
            else e.style.display = "none";
        });
    }

    const clickMarketing = () => {
        imgsRefs.current.forEach(e => {
            if(e.getAttribute("category") === "marketing") {
                e.style.display = "block";
                e.classList.add("aos-animate");
            }
            else e.style.display = "none";
        });
    }

    useEffect(() => {
        imgsRefs.current.forEach((e) => {
            window.addEventListener("scroll", () => {
                if(window.scrollY + e.offsetHeight + 200 >= e.offsetTop) {
                    e.classList.add("aos-animate");
                }
            });
        })
    });

    return (
        <div className="portfolio" id="portfolio">
            <Heading name="Portfolio"></Heading>

            <div className="categories" data-aos="zoom-in-down" data-aos-duration="1000">
                <button onClick={clickAll} >All</button>
                <button onClick={clickMarketing}>Marketing</button>
                <button onClick={clickDesign}>Design</button>
                <button onClick={clickDevelopment}>Development</button>
            </div>

            <div className="works" >
                {[...Array(6)].map((_, i) => {
                    return (
                        <div 
                            className="img-box"
                            ref={e => {imgsRefs.current[i] = e}} 
                            data-aos="fade-up" 
                            data-aos-duration="500" 
                            category={`${srcs[i][1]}`}
                        >
        
                            <div className="img">
                                <img 
                                    src={srcs[i][0]} 
                                    alt={`${srcs[i][1]}Img`}>
                                </img>
                            </div>   
                            <div className="hovery">
                                <p>Brex Logo</p>
                                <p>Brand</p>
                                <FontAwesomeIcon icon={faEye} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Portfolio;