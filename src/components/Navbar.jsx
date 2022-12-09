import React from 'react'

import "../css/app.css"

export default function Navbar() {
    return (
        <nav id="nav-wrap">
            <ul id="nav" className="nav">
                <li><button id="home-btn" onClick={() => document.getElementById("home").scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
                }>Home</button></li>
                <li><button id="about-btn" onClick={() => document.getElementById("about").scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })}>About</button></li>
                <li><button id="resume-btn" onClick={() => document.getElementById("resume").scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })}>Resume</button></li>
                <li><button id="portfolio-btn" onClick={() => document.getElementById("portfolio").scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })}>Works</button></li>
            </ul>
        </nav>
    );
}
