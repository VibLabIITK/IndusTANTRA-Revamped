import { Routes, Route, Link } from "react-router-dom";

export const Research = () => {
    return (
        <div className="page">
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
                    <li>Ph.D. Thesis Titles</li>
                    <li>M.Tech. Thesis Titles</li>
                </ul>
                Research Details<br /><br />
                Recent Publications
            </p>
        </div >
    );
};