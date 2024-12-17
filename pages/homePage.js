import React, { useEffect } from 'react';
import HomePageLeft from './homePageLeft.js';
import HomePageRight from './homePageRight.js';

function Animate() {

    function clamp(num, min, max) {
        return Math.max(min, Math.min(num, max));
    }

    useEffect(() => {
        const homePageElement = document.getElementsByClassName('homePageElement');       
        window.addEventListener('scroll', function () {
            let op = 1.5 - (window.scrollY/window.innerHeight)/2;
            if (op > 1 ) op = 1;
            if (op < 0) op = 0;
            op = clamp(op, 0, 1);
            for (let i of homePageElement) {
                i.style.opacity = op;
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