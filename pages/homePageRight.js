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

        if (pos/vh > 1 && pos/vh < 4) {
            imgRow.style.display = "none";
        }
        else {
            imgRow.style.display = "flex";
        }
    });
    return <div id="imgRow">
        <img id="imgFrame" src="../content/bioImg1.png" alt="Headshot of Jonah"></img>
    </div>
}

export default function HomePageRight() {
    return <>
        <IdImg />
        <div className="placeHolder"></div>
        <About />
        <div id="fadePlaceHolder"></div>
        <div id="endOfFade"></div>
        </>
}