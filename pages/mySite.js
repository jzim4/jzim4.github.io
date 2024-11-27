import React from 'react';
import About from './about.js';
import MyWork from './myWork.js';
import Contact from './contact.js';

function Title() {
  return (
    <h1>
      Jonah Zimmer
    </h1>
  );
}

function IdImg() {
  window.addEventListener('scroll', function() {
    const pos = window.scrollY;
    const vh = window.innerHeight;
    console.log(pos/vh);

  
    if (pos/vh > 1 && pos/vh < 2) {
      document.getElementById('imgRow').style.visibility = 'hidden';
    } else {
      document.getElementById('imgRow').style.visibility = 'visible';
    }
  });
    return <div id="imgRow">
      <div id="imgFrame">
      </div>
    </div>
}

function Bio() {
    return <p id="bioText">I'm a self-taught front-end developer, with a passion for building beautiful, usable websites in React.js.</p>
}

function Buttons() {
  return <>
  <div id="buttonsContainer">
  <button>About</button>
  <button>My Work</button>
  <button>Contact</button>
  </div>
  </>
}

export default function MySite() {

    return <>
      <div id="homePageContainer">
        <div id="homeLeftColumn">
          <div id="bioTextContainer">
              <Title/>
              <Bio/>
              <Buttons/>
          </div>
        </div>
        <div id="homeRightColumn">
            <IdImg/>
            <div id="placeHolder"></div>
            <About/>
        </div>
      </div>
      <MyWork/>
      <Contact/>
      </>
}