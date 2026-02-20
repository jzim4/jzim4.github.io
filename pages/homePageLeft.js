import React, {useEffect} from 'react';

function Animate() {
    window.addEventListener('scroll', function () {
        if (window.scrollY < window.innerHeight * 3 - 50) {
            document.getElementById("homeLeftColumn").style.display = "flex";
        }
        else {
            document.getElementById("homeLeftColumn").style.display = "none";
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
        <a href="Jonah Zimmer Resume.pdf" target="_blank" rel="noopener noreferrer" download className="otherLink">Download Resume</a>
        <a href="https://github.com/jzim4" target="_blank" rel="noopener noreferrer" className="otherLink">Github</a>
    </div>
}

function Dots() {
    return <>
    <div className="dot homeDot leftHomeDot" style={{
        top: '6vw',
        left: '2vw',
        width: '30vw',
        height: '30vw'
    }}> </div>
    <div className="dot homeDot leftHomeDot" style={{
        top: '0.5vw',
        left: '3vw',
        width: '15vw',
        height: '15vw'
    }}> </div>
    <div className="dot homeDot rightHomeDot" id="rightBottomHomeDot" style={{
        top: '60vh',
        left: '35vw',
        width: '40vw',
        height: '40vw'
    }}> </div>
    <div className="dot homeDot rightHomeDot" style={{
        top: '5vh',
        left: '40vw',
        width: '20vw',
        height: '20vw'
    }}> </div>
    </>
}

export default function HomePageLeft() {
    return <>
        <Animate />
        <div id="homeLeftColumn" className="homePageElement">
            <Dots/>
            <div id="bioTextContainer">
                <Title />
                <img id="homePageSmallImg" src="../content/bioImg1.png"></img>
                <Bio />
                <Buttons />
                <OtherLinks/>
            </div>
        </div>
    </>
}