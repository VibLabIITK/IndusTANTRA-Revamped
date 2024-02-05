import image from '../utilities/images/nalinaksh_vyas_image.png';

export const People = () => {
    return (
        <div className="page">
            <h1>Personal Profile</h1>
            <h3>Nalinaksh S. Vyas</h3>
            <div className="content">
                <img src={image} alt="Nalinaksh Vyas" />
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