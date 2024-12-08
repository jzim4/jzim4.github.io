import React from 'react';

export default function Contact() {
    return <div id="contactPage" className="scrollSnapAlways scrollSnapMargin">
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
}