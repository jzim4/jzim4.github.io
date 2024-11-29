import React, {useEffect} from 'react';
import HomePageLeft from './homePageLeft.js';
import HomePageRight from './homePageRight.js';


function Animate() {
  console.log("animate");
  window.addEventListener('scroll', function() {
      const element = document.getElementById("bioTextContainer");
      const pos = window.scrollY;
      const vh = window.innerHeight;

      if (pos/vh < 2) {
          element.classList.add('bioTextContainerHome');
          element.classList.remove('bioTextContainerNav');
      } else {
          element.classList.remove('bioTextContainerHome');
          element.classList.add('bioTextContainerNav');
      }
  });

  useEffect(() => {
      const element = document.getElementById('homePageContainer');
      const scrollTimeline = new ScrollTimeline({
          source: document.scrollingElement,
          orientation: "block",
      });

      const bodyHeight = document.body.clientHeight; 
      const startOffset = (window.innerHeight * 1) / bodyHeight;
      const endOffset = (window.innerHeight * 1.9) / bodyHeight;
      console.log(startOffset);

      const animation = element.animate (
          [
              {
                  opacity: "1",
                  offset: startOffset
              },
              {
                  opacity: "0",
                  offset: endOffset
              },
              {
                  opacity: "0",
                  offset: 1
              }
          ],
          {
              duration: 1,
              timeline: scrollTimeline,
          }
      );
    }, []);
  
}

  export default function HomePage() {
    return <>
        <Animate/>
        <div id="homePageContainer">
            <HomePageLeft/>
            <HomePageRight/>
        </div>
    </>
  }