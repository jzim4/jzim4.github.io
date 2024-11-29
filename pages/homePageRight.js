import React from 'react';
import About from './about.js';

function IdImg() {
    window.addEventListener('scroll', function() {
        const pos = window.scrollY;
        const vh = window.innerHeight;

        if (pos/vh > 1 && pos/vh < 2) {
        document.getElementById('imgRow').style.visibility = 'hidden';
        } else {
        document.getElementById('imgRow').style.visibility = 'visible';
        }
    });
    return <div id="imgRow" className="scrollSnapAlways">
    <div id="imgFrame">
    </div>
    </div>
}

export default function HomePageRight() {
  return <div id="homeRightColumn">
            <IdImg/>
            <div className="placeHolder scrollSnapAlways"></div>
            <About/>
            <div className="placeHolder"></div>
        </div>
}