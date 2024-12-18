import React, { useEffect } from 'react';
import data from '../content/myWork.json' with { type: "json" };
import NavHeader from '../pages/navHeader.js'

function ImgHoverAnimation() {
    useEffect(() => {
        const imgs = document.getElementsByClassName('workImg');
        const bigImg = document.getElementById('bigWorkImg');
        const bigImgContainer = document.getElementById('bigWorkImgContainer');

        for (let i of imgs) {
            i.addEventListener('click', function () {
                bigImg.src = i.src;
                bigImgContainer.style.display = "block";
                document.body.style.overflow = "hidden";
            })
        }
        bigImgContainer.addEventListener('click', function () {
            bigImgContainer.style.display = "none";
            document.body.style.overflow = "scroll";
        })

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
            // if any part of the work is in the middle, opacity should be 1
            // if it's not there, fade to 0

            const rect = i.getBoundingClientRect();
            const header = document.getElementById("navHeader");
            const title = document.getElementById("myWorkTitle");
            const offset =  header.clientHeight + title.clientHeight;
            const center = window.innerHeight/2 + offset;

            let tr = 0;
            let op;
            if (rect.top <= center - 80 && rect.bottom >= center + 40) {
                op = 1;
            }
            else if (rect.top > center - 80) {
                op = 1.5 - (rect.top/(center-40));
                tr = ((center - 80) - (rect.top)) / 2;

            }
            else if (rect.bottom < center + 40) {
                op = (rect.bottom - offset)/(center + 40);
                tr = ((center + 40) - rect.bottom) / 3;
            }
            i.style.opacity = op;
            i.style.transform = "translateY(" + tr +"px)";
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
                <div className="workButtonsContainer">
                    <GithubLink work={work} />
                    <SiteLinkLink work={work} />
                </div>
            </div>
            <div className="workRightCol">
                <h3 className="workTitle">{work.name}</h3>
                <p className="workDescr">{work.description}</p>
                <Skills work={work}></Skills>
            </div>
        </div>
    </div>
}

function Skills({ work }) {
    return <>
        <h3 className="workSkillsHeader">Key Skills:</h3>
        <ul className="workList">
            {work.skills.map((skill) => (
                <li key={work.id + skill}>{skill}</li>
            ))}
        </ul>
    </>
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
        <ImgHoverAnimation />
        <div id="bigWorkImgContainer">
            <img id="bigWorkImg"></img>
        </div>
        <AnimateWorks />
        <NavHeader />
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