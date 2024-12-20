import React, { useEffect } from 'react';

function AnimateDots() {
    useEffect(() => {
        let dots = document.getElementsByClassName("contactDot");
        let offset = document.getElementById("navHeader").clientHeight;
        window.addEventListener('scroll', function () {
            let rect = document.getElementById("contactPage").getBoundingClientRect();
            for (let i of dots) {
                let x = (parseInt(i.style.left.slice(0, -2)) - 20) * (rect.top - offset)/30;
                let tr = "translate(" + x + "px, " + x + "px)";
                i.style.transform = tr;
                console.log(rect.top);
            }
        });
    }, [])
}

function Dots() {
    return <>
    <AnimateDots />
        <div className="dot contactDot" style={{
            top: '0.5vw',
            left: '3vw',
            width: '15vw',
            height: '15vw'
        }}> </div>
        <div className="dot contactDot" style={{
            top: '60vh',
            left: '30vw',
            width: '40vw',
            height: '40vw'
        }}> </div>
        <div className="dot contactDot" style={{
            top: '5vh',
            left: '40vw',
            width: '20vw',
            height: '20vw'
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