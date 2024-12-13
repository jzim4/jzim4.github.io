import React, {useEffect} from 'react';

function Animate() {
    window.addEventListener('scroll', function () {
        if (window.scrollY < window.innerHeight * 3 - 50) {
            document.getElementById("homeLeftColumn").style.visibility = "visible";
        }
        else {
            document.getElementById("homeLeftColumn").style.visibility = "hidden";
        }
    });
}

function ButtonClickHandler() {
    useEffect(() => {
        const abt = document.getElementsByClassName("aboutButton");
        const work = document.getElementsByClassName("workButton");
        const contact = document.getElementsByClassName("contactButton");

        const workPage = document.getElementById("myWorkPage");
        const contactPage = document.getElementById("contactPage");

        Array.from(abt).forEach(function(b) {
            b.addEventListener("click", function() {
                scrollTo(0, window.innerHeight);
              });
        })
        Array.from(work).forEach(function(b) {
            b.addEventListener("click", function() {
                workPage.scrollIntoView(true);
              });
        })
        Array.from(contact).forEach(function(b) {
            b.addEventListener("click", function() {
                workPage.scrollIntoView(true);
                contactPage.scrollIntoView(true);
              });
        })
    })
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

export function Buttons() {
    return <>
        <ButtonClickHandler/>
        <div className="buttonsContainer">
            <button className="aboutButton">About</button>
            <button className="workButton">My Work</button>
            <button className="contactButton">Contact</button>
        </div>
    </>
}

function OtherLinks() {
    return <div className="buttonsContainer">
        <a href="resume.pdf" target="_blank" rel="noopener noreferrer" download className="otherLink">Download Resume</a>
        <a href="https://github.com/jzim4" target="_blank" rel="noopener noreferrer" className="otherLink">Github</a>
    </div>
}

export default function HomePageLeft() {
    return <>
        <Animate />
        <div id="homeLeftColumn" className="homePageElement">
            <div id="bioTextContainer" className="bioTextContainerHome">
                <Title />
                <div id="homePagePlaceHolder"></div>
                <Bio />
                <Buttons />
                <OtherLinks/>
            </div>
        </div>
    </>
}