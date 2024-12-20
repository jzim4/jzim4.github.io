import React, { useEffect } from 'react';

function AnimateDots() {
    useEffect(() => {
        let dot = document.getElementById("contactDot");
        let offset = document.getElementById("navHeader").clientHeight;
        window.addEventListener('scroll', function () {
            let rect = document.getElementById("contactPage").getBoundingClientRect();
            let x = (parseInt(dot.style.left.slice(0, -2)) - 20) * (rect.top - offset)/30;
            let tr = "translate(" + x + "px, " + x + "px)";
            dot.style.transform = tr;
            console.log(rect.top);
        });
    }, [])
}

function Dots() {
    return <>
    <AnimateDots />
        <div className="dot" id="contactDot" style={{
            top: '14vw',
            left: '10vw',
            width: '95vh',
            height: '95vh'
        }}> </div>
    </>
}

export default function Contact() {
    return <div id="contactPage">
        < Dots />
        <div id="contactContent">
            <h3 className="contactHeader">Get in touch!</h3>
            <div className="contactContainer">
                <a href="tel:484-347-7297" className="contactInfo">484-347-7297</a>
                <a href="mailto:jszimmer545@email.com" className="contactInfo">jszimmer545@gmail.com</a>
            </div>

            <h3 className="contactHeader">See More!</h3>
            <div className="contactContainer">
                <a target="_blank" rel="noopener noreferrer" className="contactInfo contactLink" href="https://github.com/jzim4">Github</a>
                <a className="contactInfo contactLink" href="resume.pdf" download="Jonah-Zimmer-Resume.pdf">Download resume</a>
            </div>
        </div>
    </div>
}