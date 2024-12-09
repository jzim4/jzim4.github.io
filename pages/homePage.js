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