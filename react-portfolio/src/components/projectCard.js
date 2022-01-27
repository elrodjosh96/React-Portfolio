import React from "react";

export default function ProjectCard(props) {
    return (
        <div>
            <h1>{props.title}
            </h1>
            <p>{props.description}
            </p>
            <img src = {props.image}/>
            <a href={props.github}>Github</a>
        </div>
        
    )
}