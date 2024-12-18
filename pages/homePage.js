import React, { useEffect } from 'react';
import HomePageLeft from './homePageLeft.js';
import HomePageRight from './homePageRight.js';

function ScrollFadeAnimation() {
    useEffect(() => {
        const homePageElement = document.getElementsByClassName('homePageElement');       
        window.addEventListener('scroll', function () {
            const op = 1.5 - (window.scrollY/window.innerHeight)/2;
            for (let i of homePageElement) {
                i.style.opacity = op;
            }

            if (window.innerWidth <= 950 && window.scrollY > window.innerHeight) {
                document.getElementById("homeLeftColumn").style.opacity = 0;
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
                { opacity: 0, transform: 'translateX(-200px)' },
                { offset: 0.2, opacity: 0, transform: 'translateX(-200px)' },
                { opacity: 0.5, transform: 'translateX(-100px)' },
                { opacity: 1, transform: 'translateX(0)' }
            ], { duration: 2000 });

            name.animate([
                { opacity: 0, transform: 'translateX(-200px)' },
                { offset: 0.3, opacity: 0, transform: 'translateX(-200px)' },
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