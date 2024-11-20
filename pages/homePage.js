import React from 'react';

function Title() {
  return (
    <h1>
      Jonah Zimmer
    </h1>
  );
}

function IdImg() {
    return <div id="imgFrame">
      <div id="bioImg"></div>
    </div>
}

function Bio() {
    return <p id="bioText">I'm a self-taught front-end developer, with a passion for building beautiful, usable websites in React.js.</p>
}

function ContactButton() {
  return <button onclick="document.getElementById('contact').scrollIntoView()" className="button" id="contactButton">Contact Me</button>  
}
function RepoButton() {
  return <button onclick="document.getElementById('repo').scrollIntoView()" className="button" id="repoButton">My Work</button>  
}

export default function HomePage() {
    return <>
        <div id="bioColumn">
          <div id="bioTextContainer">
              <Title/>
              <Bio/>
              <div id="homePageButtons">
                <ContactButton/>
                <RepoButton/>
              </div>
          </div>
        </div>
        <div id="imgColumn">
            <IdImg/>
        </div>
      </>
        
}