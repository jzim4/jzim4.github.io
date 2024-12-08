import React, { useEffect } from 'react';
import data from '../myWork.json' with { type: "json" };

function AnimateWorks() {

    useEffect(() => {
        const works = document.getElementsByClassName('workContainer');

        for (let i of works) {
            i.animate(
                [
                    { opacity: 0, transform: "translateY(-30%)" },
                    { opacity: 0.2, transform: "translateY(-10%)" },
                    { opacity: 1, transform: "translateY(0%)" },
                    { opacity: 0.2, transform: "translateY(10%)" },
                    { opacity: 0, transform: "translateY(30%)" }
                ],
                {
                    timeline: new ViewTimeline({
                        subject: i,
                    })
                }
            );
        }
    });
}

function Title() {
    return <h2 id="myWorkTitle">My Work</h2>
}
function Work({ work }) {
    return <div className="workPage">
        <div className="workContainer">
            <h3 className="workTitle">{work.name}</h3>
            <img className="workImg" src={work.img}></img>
            <div className="workTextContainer">
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
        <AnimateWorks />
        <div id="myWorkPage" className="scrollSnapNormal scrollSnapMargin">
            <Title />
            <div id="myWorkContainer">
                {dataList.map((item) => (
                    <Work key={item[1].id} work={item[1]} />
                ))}
            </div>
        </div>
    </>
}