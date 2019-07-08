import React, { Component } from 'react'

import Me from '../../images/me.jpg';

export class About extends Component {
    render() {
        return (
            <div class = 'media'>
                <img src = {Me} class = 'align-self-center mx-5' alt = 'me' />
                <div class = 'media-body'>
                    <h1 id = 'about' class = 'my-2 text-center'>About Jason</h1>
                    <p class = 'py-4'>
                    Welcome to my portfolio site.  It will be constantly updated with new projects as I make more and more side projects.  I have several still in the design stage and I will have one more Build Week project through school.
                    </p>
                    <p class = 'py-4'>
                        So more about me, well my name is Jason Belgard and I'm looking to get started in the software development and engineering field.  I have lots of experience in other fields but not much in Software.  I am finishing my core curriculum at Lambda School and it's been amazing.  I am also supplementing my formal school with side projects and self study with freecodecamp.  I am currently participating in the 100 Days of Code challenge and I love doing that.  I am learning Full Stack Web Development at Lambda School and have completed my front-end part of the curriculum and have started the back-end section.  
                    </p>
                    <p>
                        I am also a father of 3 wonderful kids and married to the love of my life.  We have been married for almost 15 years and have enjoyed the adventure that we have been on as a family.  I love to travel, am active as an adult Volunteer with Scouts, BSA and on saturdays I can be found cheering on one of my favorite college football teams.  
                    </p>
                    <p>
                        I am excited to get to know you and your organization and see how I can fit.  I'm a hard worker and dependable.  I'm willing to do what is needed to get the project done and I'm always up to learn something new.  If I'm working on a project and I'm stuck on an error or problem, I'm not afraid to try new things and ask for help.
                    </p>
                </div>
            </div>
        )
    }
}

export default About
