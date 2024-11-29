import React from 'react';

function Title() {
    return (
        <h1 id="h1">
            Jonah Zimmer
        </h1>
    );
}

function Bio() {
    window.addEventListener('scroll', function() {
        const pos = window.scrollY;
        const vh = window.innerHeight;

        if (pos/vh > 2) {
            document.getElementById('bioText').style.display = 'none';
        }
        else {
            document.getElementById('bioText').style.display = 'block';
        }
    });
    return <p id="bioText">I'm a self-taught front-end developer, with a passion for building beautiful, usable websites in React.js.</p>
}

function Buttons() {
    return <>
        <div id="buttonsContainer">
            <button>About</button>
            <button>My Work</button>
            <button>Contact</button>
        </div>
    </>
}

export default function HomePageLeft() {
    return <>
    <div id="homeLeftColumn">
        <div id="bioTextContainer" className="bioTextContainerHome">
            <Title />
            <Bio />
            <Buttons />
        </div>
    </div>
    </>
}