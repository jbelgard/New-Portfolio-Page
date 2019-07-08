import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div class = 'container'>
                <nav id = 'navbar-one' class="navbar fixed-top navbar-expand-xl navbar-dark bg-dark">                    
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <div class="navbar-brand col">Jason Belgard</div>
                            <a class="nav-item nav-link" href="#home">Home</a>
                            <a class="nav-item nav-link" href="#about">About Jason</a>
                            <a class="nav-item nav-link" href="#projects">Jason's Projects</a>
                            <a class="nav-item nav-link" href="#contact">Contact Jason</a>
                            <a class="nav-item nav-link" href="#resume">Jason's Resume</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header
