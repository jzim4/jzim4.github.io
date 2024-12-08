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
  return <p id="aboutBio">
    I'm originally from the suburbs of Philadelphia, and I'm currently a sophomore at Macalester College. I'm studying Computer Science and Psychology, and I have a passion for front-end development.
  </p>
}

export default function About() {
    return <div id="aboutRow" className="scrollSnapAlways">
        <h2>About</h2>
        <AboutBio/>
        <div id="aboutListsContainer">
          <Skills/>
          <Interests/>
        </div>
      </div>
  }

