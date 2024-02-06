import image from '../utilities/images/stack_image.png';

export const Stack = () => {
    return (
        <div className="page">
            <h1>IndusTANTRA Stack</h1>
            <h3>Software Structure</h3>
            <div className="content">
                <img src={image} alt="Stack" />
                <ul>
                    <li>Indigenous</li>
                    <li>Modular</li>
                    <li>Plug and Play</li>
                    <li>Scalable</li >
                    <li>Cloud based</li >
                    <li>Custom Analytics</li >
                </ul >
            </div >
        </div >
    );
};