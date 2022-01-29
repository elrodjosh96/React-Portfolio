import React from "react";
import ProjectCard from "../projectCard";

export default function Projects() {
    var projects = [
        {title: 'Flasher', 
        image: 'https://avatars.githubusercontent.com/u/88386990?v=4', link: 'https://github.com/elrodjosh96'}, 
        {title: 'Project Title'}, 
        {title: 'Project Title'}
    ]
    var projectContainer = projects.map(project => {
        return (
            <ProjectCard title={project.title}
            image={project.image}
            link={project.github}/>
            
        )
    })
    return (
        <div class="row row-cols-1 row-cols-md-2 g-4">
            
  <div class="col">
  <h1>Here are some Projects I've made!</h1>
    <div class="card">
      <div class="card-body">
        <ProjectCard
        title='Flasher'
        // image='https://github.com/beattygraphics/Group-Project-2/raw/main/public/assets/images/flasher-homepage.png'
        description='Flasher is a full-stack web application that serves as a flashcard study companion for Bootcamp students. Drawing inspiration from similar products like Quizlet, Flasher allows the user to navigate through decks of flashcards pertaining to their current area of study all the way from basic HTML to the popular Javascript library React. Users also have the ability to create new cards and contribute to the cohorts collective learning experience.'
        github='https://flasherquiz.herokuapp.com/'/>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
      <ProjectCard
        title='Tech Blog'
        // image='https://github.com/elrodjosh96/Tech-Blog/raw/main/public/assets/logintechblog.png'
        description='Tech Blog is a simple to use web app where a user can sign up and create posts about anything and everything tech related! This was built using mysql, Handlebars and JavaScript.'
        github='https://tech-blog-je.herokuapp.com/'/>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
      <ProjectCard
        title='Social Network API'
        // image='https://avatars.githubusercontent.com/u/88386990?v=4'
        description='This back-end network API allows you to view users by ID and create a new user. It also allows you view and create thoughts and comment on others thoughts. You can also add friends to your user profile and filter byt user ID, thought ID and even delete a user, friend and thought.'
        github='https://www.youtube.com/watch?v=qYf2GPBMagI'/>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
      <ProjectCard
        title='Employee Tracker'
        // image='https://avatars.githubusercontent.com/u/88386990?v=4'
        description='This employee tracker system allows you to get track of your employees roles, salary, job titles and manager status. It even allows you to create new employees and add the corresponding fields to their employee id for. It was built using mySQL, Inquierer, Express.JS and JavaScript.'
        github='https://www.youtube.com/watch?v=bXU1HbT0KnU'/>
      </div>
    </div>
  </div>
</div>
    )
}