import React from "react";
import "./section-heading.css";

type HeadingParams = {
    name: String;
}

function Heading(props: HeadingParams) {

    return (
        <h2 className="heading"
            data-aos="zoom-in-down"
            data-aos-duration="1000"
        >
            {props.name}
        </h2>
    )
}

export default Heading;