import React from 'react';

function Skills() {
 return <ul><h3>Key Skills</h3>
 <li>GIT, HTML, CSS, JAVASCRIPT, REACT, CONTENTFUL ,
 FIREBASE, PYTHON, R, JAVA, MICROSOFT SUITE, GSUITE</li>
</ul>
}

function Interests() {
    return <ul><h3>Interests</h3>
    <li>Puzzles, knitting, crossword, baking, rock climbing, snowboarding, woodworking, soccer, tennis</li>
  </ul>
}

export default function About() {
    return <div id="aboutRow">
        <h2>About</h2>
        I'm originally from the suburbs of Philadelphia, and I'm currently a sophomore at Macalester College. I'm studying Computer Science and Psychology, and I have a passion for front-end development.
        <Skills/>
        <Interests/>
      </div>
  }

