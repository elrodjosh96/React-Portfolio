import React from "react";
import ProjectCard from "../projectCard";

export default function Projects() {
    var projects = [
        {title: 'Flasher', 
        image: 'https://avatars.githubusercontent.com/u/88386990?v=4', github: 'https://github.com/elrodjosh96'}, 
        {title: 'Project Title'}, 
        {title: 'Project Title'}
    ]
    var projectContainer = projects.map(project => {
        return (
            <ProjectCard title={project.title}
            image={project.image}
            github={project.github}/>
            
        )
    })
    return (
        <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
      <h1>Here are some Projects I've made!</h1>
    <div class="card">
      <div class="card-body">
        {projectContainer}
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        {projectContainer}
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        {projectContainer}
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        {projectContainer}
      </div>
    </div>
  </div>
</div>
    )
}