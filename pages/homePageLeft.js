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

        const aboutRow = document.getElementById("aboutRow");
        const workPage = document.getElementById("myWorkPage");
        const contactPage = document.getElementById("contactPage");

        Array.from(abt).forEach(function(b) {
            b.addEventListener("click", function() {
                aboutRow.scrollIntoView(true);
              });
        })
        Array.from(work).forEach(function(b) {
            b.addEventListener("click", function() {
                workPage.scrollIntoView(true);
              });
        })
        Array.from(contact).forEach(function(b) {
            b.addEventListener("click", function() {
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
        <div id="buttonsContainer">
            <button className="aboutButton">About</button>
            <button className="workButton">My Work</button>
            <button className="contactButton">Contact</button>
        </div>
    </>
}

export default function HomePageLeft() {
    return <>
        <Animate />
        <div id="homeLeftColumn">
            <div id="bioTextContainer" className="bioTextContainerHome">
                <Title />
                <Bio />
                <Buttons />
            </div>
        </div>
    </>
}