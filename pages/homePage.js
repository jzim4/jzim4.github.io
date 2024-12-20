import React, { useEffect } from 'react';
import HomePageLeft from './homePageLeft.js';
import HomePageRight from './homePageRight.js';

function ScrollFadeAnimation() {
    useEffect(() => {
        const homePageElement = document.getElementsByClassName('homePageElement'); 
        const dots = document.getElementsByClassName("homeDot");
        window.addEventListener('scroll', function () {
            const op = 1.5 - (window.scrollY/window.innerHeight)/2;
            for (let i of homePageElement) {
                i.style.opacity = op;
            }

            if (window.innerWidth <= 950 && window.scrollY > window.innerHeight) {
                document.getElementById("homeLeftColumn").style.opacity = 0;
            }

            for (let i of dots) {
                if (window.scrollY > window.innerHeight * 1.5) {
                    let scale = (window.scrollY - window.innerHeight * 1.5);
                    const trX = (i.style.left.slice(0, -2) - 20) * scale/20;
                    let trY = -0.1 * scale;
                    i.style.transform = "translate(" + trX + "px, " + trY + "px)";
                }
                else if ((window.scrollY > window.innerHeight * 3)) {
                    i.style.transform =  "translateY(0)";
                }
                else {
                    i.style.transform =  "translateY(0)";
                }
            }
        });
    }, []);
}

function SiteLoadAnimation() {
    useEffect(() => {

        if (window.innerWidth >= 950) {
            const idImg = document.getElementById("imgFrame");
            const name = document.getElementById("h1");
            const bioText = document.getElementById("bioTextContainer");
            const leftColumn = document.getElementById("homeLeftColumn");
            const aboutRow = document.getElementById("aboutRow");
    
            idImg.animate([
                { transform: 'translateX(100px)'},
                { transform: 'translateX(0)' }
            ], { duration: 1500 });

            aboutRow.animate([
                { transform: 'translateX(6vw)'},
                { transform: 'translateX(0)' }
            ], { duration: 1500 });
    
            leftColumn.animate([
                { width: "56vw" },
                { width: "50vw" }
            ], { duration: 1500 });
    
            bioText.animate([
                { marginRight: '200px' },
                { marginRight: '40px' }
            ], { duration: 2000 });

            name.animate([
                { opacity: 0, transform: 'translateX(-200px)' },
                { opacity: 1, transform: 'translateX(0)' }
            ], { duration: 2000 });
        }
    }, []);
}

export default function HomePage() {
    return <>
        <ScrollFadeAnimation />
        <SiteLoadAnimation/>
        <HomePageLeft />
        <HomePageRight />
    </>
}