import image from '../utilities/images/otit_image.png';

export const OTITBridge = () => {
    return (
        <div className="page">
            <h1>Plaform bridging Operational & Information Technologies</h1>
            <h3>Synergising OT-IT</h3>
            <div className="content">
                <img src={image} alt="OT IT Bridge" />
                <ul>
                    <li>Ubiquitous Integration</li>
                    <li>Industrial Controllors</li>
                    <li>Industrial Networks</li>
                    <li>Embedded Systems</li>
                    <li>Cameras, Scanners</li>
                    <li>Computor Technology</li>
                </ul>
            </div>
        </div >
    );
};