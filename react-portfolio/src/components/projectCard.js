import React from "react";

export default function ProjectCard(props) {
    return (
        <div>
            <h1>{props.title}
            </h1>
            <p>{props.description}
            </p>
            <img src = {props.image}/>
            <p><a href={props.link}>Deployed link</a></p>
            <p><a href={props.github}>Github Repo link</a></p>
        </div>
        
    )
}