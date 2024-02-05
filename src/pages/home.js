import image from '../utilities/images/home_image.jpeg';

export const Home = () => {
    return (
        <div className="page">
            <h1>Indigenous, Modular and Scalable, Cyber-Physical Platform<br />for Industry 4.0 implementation</h1>
            <h3>End-to-End solution to -</h3>
            <div className="content">
                <img src={image} alt="Home" />
                <ul>
                    <li>Monitor, Manage and Control capabilities for CNC/Robotic Machines </li>
                    <li>Manual Machines monitoring using indigenously built add-on hardware </li>
                    <li>Secure ownership and management of system and machine data </li>
                    <li>RFID enabled material tracking capabilities </li>
                    <li>Human Machine Interfaces for faster learning and smooth operations </li>
                    <li>Indegenous Scheduling and ERP integration </li>
                    <li>AI/ML powered Custom Analytics available on-demand</li>
                </ul>
            </div>
        </div >
    );
};