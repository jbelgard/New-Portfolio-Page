import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div class = 'list-group list-group-horizontal px-4 py-5'>                
                <a href = 'https://www.linkedin.com/in/jason-belgard/' class = 'list-group-item list-group-item-action'><i class = 'fab fa-linkedin-in'> LinkedIn Profile</i></a>                
                <a href = 'https://twitter.com/jbelgard' class = 'list-group-item list-group-item-action'><i class = "fab fa-twitter"> Twitter Account</i></a>                
                <a href = 'https://www.instagram.com/jbelgard/' class = 'list-group-item list-group-item-action'><i class = "fab fa-instagram"> Instagram Profile</i></a>                
                <a href = 'https://github.com/jbelgard' class = 'list-group-item list-group-item-action'><i class = "fab fa-github"></i> GitHub Repositories</a>                    
            </div>
        )
    }
}

export default Contact
