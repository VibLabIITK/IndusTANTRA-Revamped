import image from '../../utilities/images/nalinaksh_vyas_image.png';

export const People = () => {
    return (
        <div className="page">
            <h1>Personal Profile</h1>
            <div className="content">
                <div className="people">
                    <img src={image} alt="Nalinaksh Vyas" />
                    <h3>Nalinaksh S. Vyas</h3>
                    <h5>Professor,<br />
                        Department of Mechanical Engineering
                        <br /><br />Indian Institute of Technology Kanpur - 208016, INDIA
                        <br /><br />Phone: 0512 2597040 (O), 0512 2598423 (H)
                        <br />Fax: + 91 512 2597232, 2590007
                        <br />Email: <a href="mailto:vyas@iitk.ac.in">vyas@iitk.ac.in</a>
                        <br />Web: <a href=" http://home.iitk.ac.in/~vyas/" target='__blank'>Nalinaksh S Vyas</a>
                    </h5>
                </div>
                <p>Nalinaksh S. Vyas has a Ph.D. (Mechanical Engg.,1986, Indian Institute of Technology Delhi), M.Tech.
                    (Mechanical Engg.,1983, Indian Institute of Technology Delhi) and B.Tech. (Mechanical Engg., 1980,
                    Indian Institute of Technology Bombay), and has been a Faculty Member at the Indian Institute of
                    Technology Kanpur (Department of Mechanical Engineering), since 1987.
                    <br /><br />
                    He also functioned as the Chairman of the Technology Mission for Indian Railways, for the Government
                    of India, till April 2022. The major areas of activities in this role has included implementation of
                    Industry 4.0 protocols for rail coach design and manufacturing, on-board diagnostic capabilities in
                    rolling stock and Deep Learning technologies for rail asset management.
                    <br /><br />
                    At IIT Kanpur, he has been the Head of Mechanical Engineering Department, Nuclear Engineering
                    Department, Centre for Mechatronics and the Innovation Laboratory. He has also been a Visiting
                    Professor at Virginia Tech, USA; INSA Lyon, France; Lulea University Sweden and National Chung
                    Cheng University, Taiwan. He served as the Vice Chancellor of Rajasthan Technical University between
                    2013-15.
                    <br /><br />
                    His research interests lie in Machine Dynamics, Nonlinear Parameter Estimation, Instrumentation and
                    Integrated Health Monitoring of Machinery and AI / ML applications in Smart Infrastructure domains.
                    He has supervised fifteen PhD and ninety M.Tech. theses and has more than hundred research
                    publications to his credit.
                    <br /><br />
                    He has executed major projects for organisations like the Aeronautical Research & Development Board,
                    Department of Science & Technology, Indian Space Research Organisation, Ministry of Railways, TATA
                    Consultancy Services, Larson & Toubro, Scooters India, Hindustan Aeronautics Limited, Gas Turbine
                    Research Establishment, among others.
                    <br /><br />
                    He has been the National Coordinator for an earlier Technology Mission on Railway Safety, Govt of
                    India; Chairman, Automotive Parc, National Program on Smart Matls & Structures, Govt of India;
                    Project Coordinator, Nano-Satellite, JUGNU Project with ISRO; Consortium Leader, Automotive
                    Electronic Stability Program, Core Group on Automotive Research; Member, Expert Task Force on
                    IVHM of LCA (Light Combat Aircraft); Editor, ISSS Journal (International Society of Smart Systems);
                    Editor, Advances in Vibration Engineering; Member, Indo-US Task Force on Embedded Systems; Founding
                    Director, International Society on Asset Management, Australia.
                    <br /><br />
                    He has also been on the Board of Governors of IIT Jodhpur and on the Executive Council of the All
                    India Council for Technical Education.</p>
            </div>
        </div >
    );
};