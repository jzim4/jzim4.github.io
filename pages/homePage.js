import React from 'react';
import About from './about.js';
import MyWork from './homePage.js'

function Title() {
  return (
    <h1>
      Jonah Zimmer
    </h1>
  );
}

function IdImg() {
    return <div id="imgRow">
      <div id="imgFrame">
      </div>
    </div>
}

function Bio() {
    return <p id="bioText">I'm a self-taught front-end developer, with a passion for building beautiful, usable websites in React.js.</p>
}

export default function HomePage() {
    return <>
      <div id="homePageContainer">
        <div id="homeLeftColumn">
          <div id="bioTextContainer">
              <Title/>
              <Bio/>
          </div>
        </div>
        <div id="homeRightColumn">
            <IdImg/>
            <div id="placeHolder"></div>
            <About/>
        </div>
      </div>
      <MyWork/>
      </>
}