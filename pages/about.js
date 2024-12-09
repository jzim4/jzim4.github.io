import React, { useEffect } from 'react';

function Animate() {
  useEffect(() => {
    const myWorkPage = document.getElementById('myWorkPage');
    const aboutRow = document.getElementById('aboutRow');

    window.addEventListener('scroll', function () {
      
    });
}, []);
}

function Skills() {
  return <ul className="aboutList"><h3>Key Skills</h3>
    <li>GIT</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>JAVASCRIPT</li>
    <li>REACT</li>
    <li>CONTENTFUL</li>
    <li>FIREBASE</li>
    <li>PYTHON</li>
    <li>R</li>
    <li>JAVA</li>
    <li>MICROSOFT SUITE</li>
    <li>GSUITE</li>
  </ul>
}

function AboutBio() {
  return <>
    <p className="aboutBio">
      Hi, I’m Jonah, a detail-oriented and creative web developer with a passion for building intuitive and visually engaging web applications. I enjoy crafting seamless user experiences and solving technical challenges with precision and efficiency.
    </p>
    <p className="aboutBio">
      Beyond my technical pursuits, I value meaningful connections and strive to maintain balance in all aspects of life. I love playing tennis and rock climbing as well as spending time with my four crazy dogs.
    </p>
    <p className="aboutBio">
      I thrive on clarify and a hands-on problem-solving, making every project an opportunity to learn, grow, and deliver impactful results. Let’s create something amazing together!
    </p>
  </>
}

export default function About() {
  return <div id="aboutRow" className="homeRightColumn scrollSnapAlways">
    <Animate/>
    <h2>About</h2>
    <AboutBio />
    <div id="aboutListsContainer">
      <Skills />
    </div>
  </div>
}

