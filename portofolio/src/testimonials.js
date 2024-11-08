import "./testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import test1 from "./imgs/team-1.png"
import test2 from "./imgs/team-2.png"
import test3 from "./imgs/team-3.jpg"
import { useRef, useState } from "react";

function Testimonials() {

    const [team, setTeam] = useState([
        {name: "Alamin mosa", opacity: 1, photo: test1, title: "Fontend Developer", position: 0},
        {name: "GorkCoder", opacity: 0, photo: test2, title: "Backend Developer", position: -500},
        {name: "Body Ghobashy", opacity: 0, photo: test3, title: "React Developer", position: 500},
    ])


    const clickLeft = () => {
        let array = [];
        team.forEach((e, i) => {
            array[i] = e;
            if(e.position > 0)
                array[i].position = e.position - 1000;
            else if(e.position <= 0)    
                array[i].position = e.position + 500;

            if(array[i].position === 0) array[i].opacity = 1;
            else array[i].opacity = 0;
        })
        setTeam(array);
    }

    const clickRight = () => {
        let array = [];
        team.forEach((e, i) => {
            array[i] = e;
            if(e.position < 0)
                array[i].position = e.position + 1000;
            else if(e.position >= 0)    
                array[i].position = e.position - 500;

            if(array[i].position === 0) array[i].opacity = 1;
            else array[i].opacity = 0;
        })
        setTeam(array);
    }

    const element = useRef(null);
    const [scrollLeft, setScrollLeft] = useState(0);
    const isDown = useRef(false);
    const testmonials = useRef(null);
    const cardRefs = useRef([]);

    const mouseDown = (e) => {
        isDown.current = true;
        e.preventDefault();
    }

    const mouseUp = () => {
        if(scrollLeft < 300 && scrollLeft > -300 && scrollLeft !== 0) {
            element.current.style.transform = "translateX(0)";
            element.current.style.transition = ".5s";
        }
        isDown.current = false;
    }
    const mouseLeave = () => {
        if(scrollLeft < 220 && scrollLeft > -220 && scrollLeft !== 0) {
            element.current.style.transform = "translateX(0)";
            element.current.style.transition = ".5s";
        }
        isDown.current = false;
    }

    const mouseMove = (e) => {
        if(!isDown.current) return;
        cardRefs.current.forEach((ref, i) => {
            if(ref.style.opacity === '1') {
                ref.style.transition = ".1s";
                let l = ref.style.transform;
                let left = "";
                [...l].forEach(char => {
                    if((char >= 0 && char <= 9) || char === '-') {
                        left += char;
                    }
                })

                ref.style.transform = `translateX(${parseInt(left) + e.movementX}px)`;
                if(parseInt(left) + e.movementX >= 220) {
                    ref.style.transition = "1s";
                    clickRight();
                }
                else if(parseInt(left) + e.movementX <= -220) {
                    ref.style.transition = "1s";
                    clickLeft();
                }
                setScrollLeft(parseInt(left) + e.movementX);
                element.current = ref;
            }
        })

    }

    return (
        <div className="testimonials" id="testimonials">
            <div className="left-arrow" onClick={clickLeft}><FontAwesomeIcon icon={faChevronLeft} /></div>
            <div className="right-arrow" onClick={clickRight}><FontAwesomeIcon icon={faChevronRight} /></div>
            <div 
                className="slider"  
                ref={testmonials}
                onMouseDown={mouseDown}
                onMouseUp={mouseUp}
                onMouseMove={mouseMove}
                onMouseLeave={mouseLeave}
            >
                {team.map((e, i) => {
                    return(
                        <div 
                            className="test-card" 
                            style={{transform: `translateX(calc(${e.position}px))`, opacity: e.opacity}}
                            draggable="true"
                            key={i}
                            ref={e => {cardRefs.current[i] = e}}
                        >
                                <div data-aos="zoom-in-down" data-aos-duration= "1000"><FontAwesomeIcon icon={faQuoteRight}  /></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce
                                <br></br>faucibus ligula scelerisque, eleifend turpis in</p>
                                <div className="test-img" >
                                    <img src={e.photo} alt="teamMember"></img>
                                </div>
                                <h3>{e.name}</h3>
                                <p className="title" >{e.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Testimonials;