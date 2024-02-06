import pilotproject from '../../utilities/files/TMIR_Pilot_Project.pdf';
import brief from '../../utilities/files/TMIR_Brief.pdf';
import micc_constitution from '../../utilities/files/MICCConstitution.pdf';
import chairman from '../../utilities/files/Chairman.pdf';
import mission from '../../utilities/files/Mission.pdf';
import extension from '../../utilities/files/Extension.pdf';

export const Projects = () => {
    return (
        <div className="page">
            <h1>Major Projects</h1>
            <div className="projects">
                <h3>Technology Mission for Indian Railways (TMIR)</h3>
                <p><a href={pilotproject} target='__blank'>Pilot Project on Implementation of Industry 4.0 Protocols at Modern Coach Factory (MCF), Raebareli</a><br />
                    <a href={brief} target='__blank'>Rail Budget (2015) Announcement</a><br />
                    <a href={micc_constitution} target='__blank'>Mission Implementation & Coordination Committee (MICC): Notification</a><br />
                    <a href={chairman} target='__blank'>Chairman, MICC-TMIR: Notification</a><br />
                    <a href="https://timesofindia.indiatimes.com/city/kanpur/Rlys-appoint-IIT-K-Prof-as-TMIR-chief/articleshow/47185232.cms" target='__blank'>ToI</a><br />
                    <a href={mission}>Mission Vision</a><br />
                    <a href={extension}>Mission Extension</a><br />
                </p>
                <h3>Technology Mission on Railway Safety (TMRS)</h3>
                <p>
                    <a href="https://home.iitk.ac.in/~vyas/tmrs/index.html">Technology Mission on Railway Safety (TMRS) - Indian Railways</a>
                </p>
                <h3>Wheel Impact Load Detection System (WILD)</h3>
                <p>
                    Design and Development of Instrumentation System for Wheel-Flat Detection in Indian Railways RDSO, 2001<br />
                    <a href="https://home.iitk.ac.in/~vyas/WILD/systemdescription.html">Wheel Impact Load Detection System (WILD) - RDSO</a>
                </p>
                <h3>Electronic Stability Program for Automobiles</h3>
                <p>
                    Consortium project with IIT Bombay, TATA Motors, Mahindra & Mahindra, Ashok Leyland, TCS, Pricol and others on development of
                    ABS (Anti-lock Brake Systems), TCS (Traction Control Systems) and ESC (Electronic Stabilty Control) for automobiles – supported
                    by the CAR ( Core group on Automotive Research) – TIFAC, DST.<br />
                    <a href="https://home.iitk.ac.in/~vyas/ABS/ABS.html">Electronic Stability Program for Automobiles - CAR</a>
                </p>
                <h3>IITK NanoSat</h3>
                <p>
                    Design, Development and Launch of a micro-satellite based on MEMS technology. Supported by ISRO.<br />
                    <a href="https://home.iitk.ac.in/~vyas/Jugnu/index.html">JUGNU (NanoSatellite IIT Kanpur)</a>
                </p>
                <h3>B-SMART</h3>
                <p>(Board for Smart Materials Research and Technology)</p>
                <h3>NPMASS</h3>
                <p>(National Proframme on Micro and Smart Systems)<br />
                    NPMASS</p>
                <h3>Software Development for Life Estimation of Turbine Blades</h3>
                <p>Aeronautical Research And Development Board, Ministry of Defence, Govt. of India, June 92-Dec. 95</p>
                <h3>Development of A New Technique for Determination of Damping in Rotors</h3>
                <p>Aeronautical Research And Development Board, Ministry of Defence, Govt. of India, Feb. 93-Jan. 97</p>
                <h3>Virtual Instrumentation for Rotordynamic Applications</h3>
                <p>Aeronautical Research And Development Board, Ministry of Defence, Govt. of India, Oct. 96-Sept. 98</p>
                <h3>Instrumentation Systems And Related Technology for Condition Monitoring of Critical Rotating
                    Machines for Generation of Electric Power</h3>
                <p>Department of Science And Technology, Govt. of India, A joint project with CSIO Chandigarh, BHEL and NTPC July 1996 - Dec. 2001</p>
                <h3>Linear & Nonlinear Parameter Estimation in Rotor-Bearing Systems</h3>
                <p>Aeronautical Research And Development Board, Ministry of Defence, Govt. of India, Oct. 98-Sept. 2000</p>
                <h3>Artificial Neural Network applications for Rotor Vibration diagnosis</h3>
                <p>Aeronautical Research And Development Board, Ministry of Defence, Govt. of India, Jun 2000</p>
                <h3>Application of Neural Networks for System Indentification from Flight Test Data</h3>
                <p>Hindustan Aeronautics Ltd., 2002</p>
                <h3>Output Only Modal Analysis for Rotor-Bearing Systems</h3>
                <p>Aeronautical Research And Development Board, Ministry of Defence, Govt. of India, 2002 ---</p>
                <h1>About 4i Lab</h1>
                <p>4i-Lab is a recent initiative at the Indian institute of Technology, Kanpur. It is an enabling
                    laboratory with an objective to facilitate design evolution into complete products. The four "i"s
                    stand for Innovation, Integration, Incubation and Implementation. The laboratory is envisaged as a
                    central facility for concept design and product realization. The laboratory environment is structured
                    to digitally integrate the processes of design, simulation and manufacturing. The facility has been
                    designed to take care of professional course requirements of students and to provide infrastructural
                    facilities for sponsored research and industrial consultancy.</p>
                <h3>Facilities</h3>
                <p>
                    <ul>
                        <li>CNC Vertical Milling Center</li>
                        <li>CNC Turning Center</li>
                        <li>Abrasive Water Jet Machining Center</li>
                        <li>Laser Engraving & Cutting Machine</li>
                        <li>Rapid Prototyping Machine</li>
                    </ul>
                </p>
            </div>
        </div >
    );
};