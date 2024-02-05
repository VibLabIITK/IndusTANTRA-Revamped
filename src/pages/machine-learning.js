import image from '../utilities/images/machine_learning_image.png';

export const MachineLearning = () => {
    return (
        <div className="page">
            <h1>Machinery Health Dianosis and Prognosis</h1>
            <h3>Machine Learning</h3>
            <div className="content">
                <img src={image} alt="Machine Learning" />
                <ul>
                    <li>Back-Propogation Neural Networks</li>
                    <li>Probabilistic Neural Networks</li>
                    <li>Self-Organising Maps</li>
                    <li>Deep Convoloution Networks</li>
                    <li>Shallow-Parallel Networks</li>
                    <li>ARMA Models</li>
                    <li>Kalman Filters</li>
                </ul>
            </div>
        </div >
    );
};