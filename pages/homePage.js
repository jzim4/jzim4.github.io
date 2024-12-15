import React, { useEffect } from 'react';
import HomePageLeft from './homePageLeft.js';
import HomePageRight from './homePageRight.js';

function Animate() {

    useEffect(() => {
        const fadePlaceHolder = document.getElementById('fadePlaceHolder');
        const homePageElement = document.getElementsByClassName('homePageElement');
        
        window.addEventListener('scroll', function () {
            for (let i of homePageElement) {
                i.animate(
                    [
                        { opacity: 1 },
                        { opacity: 0 }
                    ],
                    {
                        timeline: new ViewTimeline({
                            subject: fadePlaceHolder,
                        })
                    }
                );
                if (window.scrollY/window.innerHeight >= 3) {
                    i.style.visibility = "hidden";
                  }
                else {
                    i.style.visibility = "visible";
                }
            }
        });
    }, []);
}

export default function HomePage() {
    return <>
        <Animate />
        <HomePageLeft />
        <HomePageRight />
    </>
}