import React, { useEffect } from 'react';
import HomePageLeft from './homePageLeft.js';
import HomePageRight from './homePageRight.js';


function Animate() {

    useEffect(() => {
        const fadePlaceHolder = document.getElementById('fadePlaceHolder');
        const homePageContainer = document.getElementById('homePageContainer');

        window.addEventListener('scroll', function () {
            homePageContainer.animate(
                [
                    { opacity: 1 },
                    { opacity: 0 }
                ],
                {
                    timeline: new ViewTimeline({
                        subject: fadePlaceHolder,
                    })
                }
            );

            // CURRENTLY ACTS WONKY ASF IF I DO IT LIKE THIS
            // if (window.scrollY >= window.innerHeight) {
            //     aboutRow.style.position = "fixed";
            //     aboutRow.style.top = "0";
            //     aboutRow.style.right = "0";
            //     console.log("fixed")
            // }
            // else {
            //     aboutRow.style.position = "relative";
            // }
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