import image from '../utilities/images/process_scheduling_image.png';

export const ProcessScheduling = () => {
    return (
        <div className="page">
            <h1>Manufacturing Process Scheduling</h1>
            <h3>Novel Code</h3>
            <div className="content">
                <img src={image} alt="Process Scheduling" />
                <ul>
                    <li>Input: Products, Machines, HR, Priorities, Timelines</li>
                    <li>Output: Gantt Chart, Machine Loading Chart, Make-Buy Decisions</li>
                    <li>Existing ERP Integration Flexibility</li>
                    <li>Customised Analytics</li>
                </ul>
            </div>
        </div >
    );
};