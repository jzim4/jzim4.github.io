import React, { useEffect } from 'react';
import data from '../content/myWork.json' with { type: "json" };
import { Buttons } from './homePageLeft.js';

function ImgHoverAnimation() {
    useEffect(() => {
        const imgs = document.getElementsByClassName('workImg');
        const bigImg = document.getElementById('bigWorkImg');

        for (let i in imgs) {
            i.addEventListener('mouseover', function() {
                bigImg.src = i.src;
                bigImg.display = "block";
            })
        }
        
    }, []);

    
}

function AnimateWorks() {

    useEffect(() => {
        const works = document.getElementsByClassName('workContainer');

        formatWork(works);
        window.addEventListener('scroll', function () {
            formatWork(works);
        });
        addEventListener("resize", () => {
            formatWork(works);
        });

    }, []);

    function formatWork(works) {
        for (let i of works) {
            const top = i.getBoundingClientRect().top;
            const x = top/window.innerHeight;
            let op = -1 * Math.pow(1.8*x - 0.7, 2) + 1;
            if (op < 0) op = 0;
            i.style.opacity = op;
            i.style.transform = "translateY(" + (op * 30).toString() + "px)";
        }
    }
}

function Title() {
    return <h2 id="myWorkTitle">My Work</h2>
}
function Work({ work }) {
    return <div className="workPage">
        <div className="workContainer">
            <div className="workLeftCol">
                <div className="workDate">{work.date}</div>
                <img className="workImg" src={work.img} alt={"Screenshot of " + work.name}></img>
            </div>
            <div className="workRightCol">
                <h3 className="workTitle">{work.name}</h3>
                <p className="workDescr">{work.description}</p>
                <div className="workButtonsContainer">
                    <GithubLink work={work} />
                    <SiteLinkLink work={work} />
                </div>
            </div>
        </div>
    </div>
}

function GithubLink({ work }) {
    if (work.hasOwnProperty("github")) {
        return <a className="workExternalLink" href={work.github} target="_blank" rel="noopener noreferrer">Github Repo</a>
    }
    else return
}
function SiteLinkLink({ work }) {
    if (work.hasOwnProperty("siteLink")) {
        return <a className="workExternalLink" href={work.siteLink} target="_blank" rel="noopener noreferrer">Live Site</a>
    }
    else return
}

export default function MyWork() {
    let dataList = Object.entries(data);
    return <>
        <img id="bigWorkImg"></img>
        <AnimateWorks />
        <div id="navHeader">
            <h2>Jonah Zimmer</h2>
            <div id="navButtonsContainer">
                <Buttons />
            </div>
        </div>
        <div id="myWorkPage">
            <Title />
            <div id="myWorkContainer">
                {dataList.map((item) => (
                    <Work key={item[1].id} work={item[1]} />
                ))}
            </div>
        </div>
    </>
}