import React, {useEffect} from 'react';

function Animate() {
    window.addEventListener('scroll', function () {

        if (window.scrollY < window.innerHeight * 3 - 50) {
            document.getElementById("homeLeftColumn").style.visibility = "visible";
            document.getElementById("bioTextContainer").classList.remove("bioTextContainerNav");
            document.getElementById("bioTextContainer").classList.add("bioTextContainerHome");
            document.getElementById('bioText').style.display = 'block';
            document.getElementById("h1").style.fontSize = "4em";
            document.getElementById("h1").style.width = "100%";
            document.getElementById("h1").style.marginBottom = "0";
            document.getElementById("buttonsContainer").style.marginLeft = "auto";
        }
        else {
            document.getElementById("homeLeftColumn").style.visibility = "hidden";
            document.getElementById("bioTextContainer").classList.add("bioTextContainerNav");
            document.getElementById("bioTextContainer").classList.remove("bioTextContainerHome");
            document.getElementById('bioText').style.display = 'none';
            document.getElementById("h1").style.fontSize = "2em";
            document.getElementById("h1").style.width = "fit-content";
            document.getElementById("h1").style.marginBottom = "unset";
            document.getElementById("buttonsContainer").style.marginLeft = "0";
        }
    });
}

function ButtonClickHandler() {
    useEffect(() => {
        const abt = document.getElementById("aboutButton");
        const work = document.getElementById("workButton");
        const contact = document.getElementById("contactButton");

        const aboutRow = document.getElementById("aboutRow");
        const workPage = document.getElementById("myWorkPage");
        const contactPage = document.getElementById("contactPage");

        abt.addEventListener("click", function() {
            aboutRow.scrollIntoView(true);
          });
        work.addEventListener("click", function() {
            workPage.scrollIntoView(true);
          });
        contact.addEventListener("click", function() {
            contactPage.scrollIntoView(true);
          });
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

function Buttons() {
    return <>
        <ButtonClickHandler/>
        <div id="buttonsContainer">
            <button id="aboutButton">About</button>
            <button id="workButton">My Work</button>
            <button id="contactButton">Contact</button>
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