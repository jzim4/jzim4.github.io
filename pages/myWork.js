import React from 'react';
import data from '../myWork.json' with { type: "json" };

function Title() {
    return <div id="myWorkTitleContainer">
        <h2 id="myWorkTitle">My Work</h2>

    </div>
}
function Work({work}) {
    return <div className="workContainer">
        <h3 className="workTitle">{work.name}</h3>
        <img className="workImg" src={work.img}></img>
        <p className="workDescr">{work.description}</p>
    </div>
}

export default function MyWork() {
    let dataList = Object.entries(data);
    return <>
    <div id="myWorkPage">
        <Title/>
        <div id="myWorkContainer">
            {dataList.map((item) => (
                <Work key={item[1].id} work={item[1]} />
            ))}
        </div>
    </div>
    </>
}