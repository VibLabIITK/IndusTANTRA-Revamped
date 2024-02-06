import MySidebar from "./components/Sidebar";
import Header from "./components/Head";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home";
import { Technology } from "./pages/technology";
import { OTITBridge } from "./pages/ot-it-bridge";
import { Stack } from "./pages/stack";
import { DigitalTwin } from "./pages/digital-twin";
import { RealTimeMonitoring } from "./pages/real-time-monitoring";
import { MachineLearning } from "./pages/machine-learning";
import { ProcessScheduling } from "./pages/process-scheduling";
import { Projects } from "./pages/projects/projects";
import { People } from "./pages/projects/people";
import { Education } from "./pages/projects/education";
import { Experience } from "./pages/projects/experience";
import { Teaching } from "./pages/projects/teaching";
import { Research } from "./pages/projects/research";
import { News } from "./pages/projects/news";
import { Contact } from "./pages/contact";
import { PhD } from "./pages/research/phd";
import { MTech } from "./pages/research/mtech";
import { Details } from "./pages/research/details";
import { Publications } from "./pages/research/publications";

const App = () => {
  return (
    <div id="app" style={{ display: "flex" }}>
      <section>
        <MySidebar />
      </section>
      <section>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="technology-domain" element={<Technology />} />
          <Route path="ot-it-bridge" element={<OTITBridge />} />
          <Route path="stack" element={<Stack />} />
          <Route path="digital-twin" element={<DigitalTwin />} />
          <Route path="real-time-monitoring" element={<RealTimeMonitoring />} />
          <Route path="machine-learning" element={<MachineLearning />} />
          <Route path="process-scheduling" element={<ProcessScheduling />} />
          <Route path="projects" element={<Projects />} />
          <Route path="people" element={<People />} />
          <Route path="education" element={<Education />} />
          <Route path="experience" element={<Experience />} />
          <Route path="teaching" element={<Teaching />} />
          <Route path="research" element={<Research />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="phd" element={<PhD />} />
          <Route path="mtech" element={<MTech />} />
          <Route path="details" element={<Details />} />
          <Route path="publications" element={<Publications />} />
        </Routes>
      </section>
    </div >
  );
}

export default App;