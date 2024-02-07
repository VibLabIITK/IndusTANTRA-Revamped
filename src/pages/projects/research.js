import { Routes, Route, Link } from "react-router-dom";

export const Research = () => {
    return (
        <div className="page">
            <div className='navbar'>
                <a href="people"><h3>People</h3></a>
                <a href="education"><h3>Education</h3></a>
                <a href="experience"><h3>Experience</h3></a>
                <a href="teaching"><h3>Teaching</h3></a>
                <a href="research"><h3>Research</h3></a>
            </div>
            <h1 className="header">Research</h1>
            <h3>Research Interests</h3>
            <p>Machine Dynamics<br />
                System Identification and Parameter Estimation<br />
                MEMS<br />
                Instrumentation and Sensor Technologies<br />
                Condition Monitoring & Neural Networks</p>
            <h3>Thesis Supervision</h3>
            <p>
                <ul>
                    <li><a href="phd">Ph.D. Thesis Titles</a></li>
                    <li><a href="mtech">M.Tech. Thesis Titles</a></li>
                </ul>
                <a href="details">Research Details</a><br /><br />
                <a href="publications">Recent Publications</a>
            </p>
        </div >
    );
};