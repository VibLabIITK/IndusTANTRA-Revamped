import image from '../utilities/images/tech_image.jpg';

export const Technology = () => {
    return (
        <div className="page">
            <h1>Cyber-Physical Domain</h1>
            <h3>Technologies</h3>
            <div className="content">
                <img src={image} alt="Technology Domains" />
                <ul>
                    <li>Component and System Design & Dynamics</li>
                    <li>Manufacturing Processes Optimisation</li>
                    <li>Sensors and Instrumentaion</li>
                    <li>Imaging Systems and Quality Assurance</li>
                    <li>Machine Learning (artificial Neural Networks, Deep and Shallow-Parallel Learning)</li>
                    <li>Health Diagnosis and Prognosis of Machinery</li>
                </ul>
            </div>
        </div>
    );
};