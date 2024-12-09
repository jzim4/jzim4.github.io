import React from 'react';
import About from './about.js';

function IdImg() {
    window.addEventListener('scroll', function () {
        const pos = window.scrollY;
        const vh = window.innerHeight;
        const imgRow = document.getElementById('imgRow');
        if (pos / vh > 2) {
            imgRow.style.marginTop = '36px';
        }
        else {
            imgRow.style.marginTop = '0';
        }
    });
    return <div id="imgRow" className="scrollSnapNormal">
        <div id="imgFrame">
        </div>
    </div>
}

export default function HomePageRight() {
    return <div id="homeRightColumn">
        <IdImg />
        <div className="placeHolder scrollSnapAlways"></div>
        <About />
        <div id="fadePlaceHolder"></div>
        <div id="endOfFade" className="scrollSnapAlways"></div>
    </div>
}