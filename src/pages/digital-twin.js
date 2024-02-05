import image from '../utilities/images/digital_twin_image.png';

export const DigitalTwin = () => {
    return (
        <div className="page">
            <h1>Data Based and Simulation Based Digital Models for -</h1>
            <h3>Shop Floor Digital Twin</h3>
            <div className="content">
                <img src={image} alt="Digital Twin" />
                <ul>
                    <li>Products</li>
                    <li>Production and Processes</li>
                    <li>Performance and Health</li>
                </ul>
            </div>
        </div >
    );
};