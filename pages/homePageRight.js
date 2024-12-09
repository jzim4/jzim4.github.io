import React from 'react';
import About from './about.js';

function IdImg() {
    window.addEventListener('scroll', function () {
        const pos = window.scrollY;
        const vh = window.innerHeight;

        if (pos / vh > 1 && pos / vh < 4) {
            document.getElementById('imgRow').style.visibility = 'hidden';
        } else {
            document.getElementById('imgRow').style.visibility = 'visible';
        }
        if (pos / vh > 1) {
            document.getElementById('imgRow').style.marginTop = '36px';
        }
        else {
            document.getElementById('imgRow').style.marginTop = '0';
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