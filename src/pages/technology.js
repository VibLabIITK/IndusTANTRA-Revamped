import image from '../utilities/images/tech_image.jpg';

export const Technology = () => {
    return (
        <div className="page">
            <h1>Cyber-Physical Domain</h1>
            <h3>Technologies</h3>
            <div className="content">
                <img src={image} alt="Technology Domains Image" className="image" />
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
        </div>
    );
};