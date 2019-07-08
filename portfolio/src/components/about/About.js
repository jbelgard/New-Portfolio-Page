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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Curabitur gravida arcu ac tortor dignissim convallis aenean. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Rhoncus est pellentesque elit ullamcorper dignissim cras. Urna nec tincidunt praesent semper feugiat. Aliquet bibendum enim facilisis gravida. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Sapien et ligula ullamcorper malesuada proin. Platea dictumst quisque sagittis purus sit amet volutpat consequat mauris. Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Viverra adipiscing at in tellus integer feugiat.
                    </p>
                </div>
            </div>
        )
    }
}

export default About
