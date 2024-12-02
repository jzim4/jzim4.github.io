import React from 'react';

function Animate() {
    window.addEventListener('scroll', function () {
        const pos = window.scrollY;
        const vh = window.innerHeight;

        if (pos / vh < 3) {
            document.getElementById("bioTextContainer").classList.remove("bioTextContainerNav");
            document.getElementById("bioTextContainer").classList.add("bioTextContainerHome");
            document.getElementById('bioText').style.display = 'block';
            document.getElementById("h1").style.fontSize = "4em";
            document.getElementById("h1").style.width = "100%";
            document.getElementById("buttonsContainer").style.marginLeft = "auto";
        }
        else {
            document.getElementById("bioTextContainer").classList.add("bioTextContainerNav");
            document.getElementById("bioTextContainer").classList.remove("bioTextContainerHome");
            document.getElementById('bioText').style.display = 'none';
            document.getElementById("h1").style.fontSize = "2em";
            document.getElementById("h1").style.width = "fit-content";
            document.getElementById("buttonsContainer").style.marginLeft = "0";
        }
    });
}

function Title() {
    return (
        <h1 id="h1">
            Jonah Zimmer
        </h1>
    );
}

function Bio() {
    return <p id="bioText">I'm a self-taught front-end developer, with a passion for building beautiful, usable websites in React.js.</p>
}

function Buttons() {
    return <>
        <Animate />
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