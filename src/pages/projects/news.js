import file from '../../utilities/files/TMIR_Brief.pdf';

export const News = () => {
    return (
        <div className="page">
            <h1 className="header">News</h1>
            <h3>Industry 4.0</h3>
            <p><a href="https://pib.gov.in/PressReleasePage.aspx?PRID=1586545" target='__blank'>PIB</a><br />
                <a href="https://cio.economictimes.indiatimes.com/news/strategy-and-management/industry-4-0-railways-to-integrate-big-data-ai/71369653" target='__blank'>ETCIO</a><br />
                <a href="https://swarajyamag.com/news-brief/industry-40-powered-by-indian-railways-iit-kanpur-heres-what-indias-first-smart-coach-factory-will-look-like" target='__blank'>Swarajya</a><br />
                <a href="https://www.deccanherald.com/national/north-and-central/railways-launches-pilot-project-to-usher-industry-40-764727.html" target='__blank'>Deccan Herald</a><br />
                ANI<br />
                <a href="https://www.business-standard.com/article/news-ani/pilot-project-at-rae-bareli-coach-factory-to-usher-industry-4-0-119092800860_1.html" target='__blank'>Business Standard</a><br />
                <a href="http://www.uniindia.com/~/railways-dept-of-s-t-bats-for-project-on-industry-4-0-at-mcf-raebareli/India/news/1743301.html" target='__blank'>UNI</a><br />
                <a href="https://www.outlookindia.com/newsscroll/pilot-project-to-introduce-industry-40-launched-by-railways/1629469" target='__blank'>Outlook</a><br />
                <a href="https://www.ndtv.com/education/industry-4-0-railway-ministry-and-iit-kanpur-digital-project-to-host-ai-big-data-machine-learning-2108763" target='__blank'>NDTV Financial Express</a>
            </p>
            <h3>Technology Mission for Indian Railways (TMIR)</h3>
            <p><a href={file} target='__blank'>Rail Budget (2015) Announcement</a></p>
            <h3>Electronic Stability Control System</h3>
            <p>Times of India August 20, 2007</p>
            <h3>IITK Nano Satellite</h3>
            <p>Gallery<br />
                Amar Ujjala April 14, 2008<br />
                Times of India April 4, 2008<br />
                Dainik Jagran January 15, 2008</p>
        </div >
    );
};