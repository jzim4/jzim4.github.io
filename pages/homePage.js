import React, { useEffect } from 'react';
import HomePageLeft from './homePageLeft.js';
import HomePageRight from './homePageRight.js';


function Animate() {

    useEffect(() => {
        const fadePlaceHolder = document.getElementById('fadePlaceHolder');
        const homePageContainer = document.getElementById('homePageContainer');
        const bioTextContainer = document.getElementById("bioTextContainer");
        const myWorkPage = document.getElementById("myWorkPage");
        const aboutRow = document.getElementById("aboutRow");

        let faded = false;

        let lastScrollTop = window.scrollY;
        let scrollDir = 0;

        window.addEventListener('scroll', function () {
            let currentScrollTop = window.scrollY; 
            if (currentScrollTop > lastScrollTop) {
                scrollDir = 1;
            } else if (currentScrollTop < lastScrollTop) {
                scrollDir = -1;
            }
            lastScrollTop = currentScrollTop;



            const phBox = fadePlaceHolder.getBoundingClientRect();

            if (phBox.top >= window.innerHeight) {
                bioTextContainer.classList.add('bioTextContainerHome');
                bioTextContainer.classList.remove('bioTextContainerNav');
            } else {
                bioTextContainer.classList.remove('bioTextContainerHome');
                bioTextContainer.classList.add('bioTextContainerNav');
            }

            const myWorkBox = myWorkPage.getBoundingClientRect();
            const aboutBox = aboutRow.getBoundingClientRect();
        
            if (!faded && phBox.top < window.innerHeight && scrollDir == 1) {
                faded = true;
                homePageContainer.animate(
                    [
                        { opacity: 1 },
                        { opacity: 0.3, offset: 0.3 },
                        { opacity: 0 }
                    ],
                    {
                        duration: 600,
                        easing: 'ease-out'
                    }
                );
                this.setTimeout(() => {
                    console.log("animation end");
                    myWorkPage.scrollIntoView(true);
                }, 600)
                homePageContainer.style.opacity = 0;
            }
        
            else if (faded && phBox.top == 0 && scrollDir == -1) {
                faded = false;
                aboutRow.scrollIntoView(true);
                homePageContainer.animate(
                    [
                        { opacity: 0 },
                        { opacity: 0.7, offset: 0.3 },
                        { opacity: 1 }
                    ],
                    {
                        duration: 600,
                        easing: 'ease-out'
                    }
                );
                homePageContainer.style.opacity = 1;
            }
        });
    }, []);
}

export default function HomePage() {
    return <>
        <Animate />
        <div id="homePageContainer">
            <HomePageLeft />
            <HomePageRight />
        </div>
    </>
}