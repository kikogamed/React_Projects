import { useEffect, useMemo, useRef} from "react";
import "./stats.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmileBeam } from "@fortawesome/free-solid-svg-icons";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faCode } from '@fortawesome/free-solid-svg-icons';




function Stats() {

    const happyRef = useRef(null);
    const projectsRef = useRef(null);
    const filesRef = useRef(null);
    const linesRef = useRef(null);

    const statsRef = useRef(null);
    const numLoadFlag = useRef(1);

    const happy = useMemo(() => <h3 ref={happyRef}>89</h3>, [])
    const projects = useMemo(() => <h3 ref={projectsRef}>231</h3>, [])
    const files = useMemo(() => <h3 ref={filesRef}>108</h3>, [])
    const lines = useMemo(() => <h3 ref={linesRef}>1446</h3>, [])
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const top = window.scrollY;
            const offset = statsRef.current.offsetTop;
            const height = statsRef.current.offsetHeight;
    
            if (top + height + 200 >= offset && numLoadFlag.current) {
                numLoadFlag.current = 0;

                let happy = 0;
                const happyVal = happyRef.current.innerHTML;
                const loadHappy = setInterval(() => {
                    happyRef.current.innerHTML = happy++;
                    if(happy > happyVal) clearInterval(loadHappy);
                }, 62);

                let projects = 0;
                const projectsVal = projectsRef.current.innerHTML;
                const loadProjects = setInterval(() => {
                    projectsRef.current.innerHTML = projects++;
                    if(projects > projectsVal) clearInterval(loadProjects);
                }, 26);

                let files = 0;
                const filesVal = filesRef.current.innerHTML;
                const loadFiles = setInterval(() => {
                    filesRef.current.innerHTML = files++;
                    if(files > filesVal) clearInterval(loadFiles);
                }, 55);

                let lines = 0;
                const linesVal = linesRef.current.innerHTML;
                const loadLines = setInterval(() => {
                    linesRef.current.innerHTML = lines++;
                    if(lines > linesVal) clearInterval(loadLines);
                }, 1);
            }  
        }) ;
    },[]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    });

    return (
        <div className="stats" id="stats" ref={statsRef}>

            <div className="stat" data-aos="zoom-in" data-aos-duration="500">
                <FontAwesomeIcon icon={faFaceSmileBeam} />
                {happy}
                <p>Happy Clients</p>
            </div>
            <div className="stat" data-aos="zoom-in" data-aos-duration="500">
                <FontAwesomeIcon icon={faFloppyDisk} />
                {projects}
                <p>Projects Completed</p>
            </div>
            <div className="stat" data-aos="zoom-in" data-aos-duration="500">
                <FontAwesomeIcon icon={faCircleDown} />
                {files}
                <p>Files Downloaded</p>
            </div>
            <div className="stat" data-aos="zoom-in" data-aos-duration="500">
                <FontAwesomeIcon icon={faCode} />
                {lines}
                <p>Lines of Code</p>
            </div>

        </div>
    )
}

export default Stats;