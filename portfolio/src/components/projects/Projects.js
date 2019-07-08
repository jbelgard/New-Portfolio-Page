import React, { Component } from 'react'


export class Projects extends Component {
    render() {
        return (
            <div class = 'main py-5'>
                <div class = 'media px-5'>
                    <a class="btn btn-dark px-lg-5 align-middle" href="https://zen-lovelace-c6db65.netlify.com/" role="button">View Project</a>
                    <div class = 'media-body px-4'>
                        <h5 class = 'mt-0 mb-1 text-center'>Build Week One Project</h5>
                        <p>My first Build Week project.  I was the UI Developer so I built the marketing/landing page for our app.  I used HTML, CSS and JavaScript.  The project was an app to find legislation that did not get passed on it's first attempt through the House and Senate.  It looked then at that legislation and the legislation as it was written as the same thing did pass.</p>
                    </div>
                    <a class="btn btn-dark px-lg-5 align-middle" href="https://github.com/lambda-zombie-legislation-detector/jbelgard-UI" role="button">View GitHub</a>
                </div>
                <div class = 'media px-5'>
                    <a class="btn btn-dark px-lg-5 align-middle" href="https://gallant-mahavira-ccc78f.netlify.com/" role="button">View Project</a>
                    <div class = 'media-body px-4'>
                        <h5 class = 'mt-0 mb-1 text-center'>Build Week Two Project</h5>
                        <p>This was my second Build Week project.  I was the Front-End Developer so I built the bones of the actual app.  I used React, various react libraries and frameworks and vanilla JavaScript.  This project achieved the MVP that was requested by the client and school.  It let a user login or register to store the data that they would then input of thier budgeted expenses and income as it comes in.  It then kept that data and displayed it and how much of a deficit or surplus that the user had.  It is targeted at Domestic Violence Survivors so it has a list of anticipated expenses and possible income.</p>
                    </div>
                    <a class="btn btn-dark px-lg-5 align-middle" href="https://github.com/dvs-tool-20190624/dvs-react-app" role="button">View GitHub</a>
                </div>
                <div class = 'media px-5'>
                    <a class="btn btn-dark px-lg-5 align-middle" href="https://sad-liskov-d364f5.netlify.com/" role="button">View Project</a>
                    <div class = 'media-body px-4'>
                        <h5 class = 'mt-0 mb-1 text-center'>Memory Game</h5>
                        <p>This was a side project that I did for one of my kids.  They are big into soccer so with the Women's World Cup being played, I made a memory card game.  It uses HTML, CSS and JavaScript.</p>
                    </div>
                    <a class="btn btn-dark px-lg-5 align-middle" href="https://github.com/jbelgard/memory-card-game" role="button">View GitHub</a>
                </div>
                <div class = 'media px-5'>
                    <a class="btn btn-dark px-lg-5 align-middle" href="https://jasonssimongame.netlify.com/" role="button">View Project</a>
                    <div class = 'media-body px-4'>
                        <h5 class = 'mt-0 mb-1 text-center'>Simon Game</h5>
                        <p>This was another side project that I did for another one of my kids.  It is a remake of the popular 80's game: Simon.  I enjoyed it as a kid and teen so I made it for my daughter and she really enjoys it.  It uses HTML, CSS and JavaScript.</p>
                    </div>
                    <a class="btn btn-dark px-lg-5 align-middle" href="https://github.com/jbelgard/Simon-Game" role="button">View GitHub</a>
                </div>
                <div class = 'media px-5'>
                    <a class="btn btn-dark px-lg-5 align-middle" href="https://tictactoegamejasonbelgard.netlify.com/" role="button">View Project</a>
                    <div class = 'media-body px-4'>
                        <h5 class = 'mt-0 mb-1 text-center'>Unbeatable Tic Tac Toe</h5>
                        <p>This was yet another side project.  I did it for myself and so I wanted to make it difficult.  Everyone knows and loves to play Tic Tac Toe and so it's always fun.  I added an unbeatable AI script that I found for it.  This was built using HTML, CSS, JavaScript and React.</p>
                    </div>
                    <a class="btn btn-dark px-lg-5 align-middle" href="https://github.com/jbelgard/tictactoe" role="button">View GitHub</a>
                </div>
            </div>
        )
    }
}

export default Projects
