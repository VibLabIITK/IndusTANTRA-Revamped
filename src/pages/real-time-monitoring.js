import image from '../utilities/images/rtmonitor_image.png';

export const RealTimeMonitoring = () => {
    return (
        <div className="page">
            <h1>Real Time Monitoring</h1>
            <h3>DAQ-Display Dashboard</h3>
            <div className="content">
                <img src={image} alt="Real Time Monitoring" />
                <ul>
                    <li>Obtains Real-Time machine data from the shop-floor</li>
                    <li>Presents machine data in a graphical form </li>
                    <li>Presents RFID and HMI data in an integrated manner</li>
                    <li>Integrated with a WebApp</li>
                    <li>Easy Data Storage and retrieval</li>
                    <li>Data Analytics</li>
                </ul>
            </div>
        </div >
    );
};