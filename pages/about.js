import React from 'react';

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

function Interests() {
  return <ul className="aboutList"><h3>Interests</h3>
    <li>Puzzles</li>
    <li>Knitting</li>
    <li>Crossword</li>
    <li>Biking</li>
    <li>Knitting</li>
    <li>Baking</li>
    <li>Climbing</li>
    <li>Snowboarding</li>
    <li>Tennis</li>
  </ul>
}

function AboutBio() {
  return <>
    <p className="aboutBio">
      Hi, I’m Jonah, a detail-oriented and creative web developer with a passion for building intuitive and visually engaging web applications. I enjoy crafting seamless user experiences and solving technical challenges with precision and efficiency.
    </p>
    <p className="aboutBio">
      Beyond my technical pursuits, I value meaningful connections and strive to maintain balance in all aspects of life. I believe in approaching everything with thoughtfulness and care.
    </p>
    <p className="aboutBio">
      I thrive on simplicity, clarity, and a hands-on approach to problem-solving, making every project an opportunity to learn, grow, and deliver impactful results. Let’s create something amazing together!
    </p>
  </>
}

export default function About() {
  return <div id="aboutRow" className="homeRightColumn scrollSnapAlways">
    <h2>About</h2>
    <AboutBio />
    <div id="aboutListsContainer">
      <Skills />
      <Interests />
    </div>
  </div>
}

