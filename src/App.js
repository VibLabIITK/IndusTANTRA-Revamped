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
import { Sidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu, collapseSidebar, useProSidebar } from 'react-pro-sidebar';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SchoolIcon from '@mui/icons-material/School';
import LaptopIcon from '@mui/icons-material/Laptop';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import PeopleIcon from '@mui/icons-material/People';
import InsightsIcon from '@mui/icons-material/Insights';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import MemoryIcon from '@mui/icons-material/Memory';
import BiotechIcon from '@mui/icons-material/Biotech';
import StarRateIcon from '@mui/icons-material/StarRate';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ScienceIcon from '@mui/icons-material/Science';
import WavesIcon from '@mui/icons-material/Waves';
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import PhoneIcon from '@mui/icons-material/Phone';
import DescriptionIcon from '@mui/icons-material/Description';
import Button from '@mui/material/Button';
import { useState, React, useEffect } from 'react';

const App = () => {
  const [translated, setTranslated] = useState(false);

  const toggleTranslation = () => {
    setTranslated(!translated);
  };

  return (
    <div id="app" className={`container ${translated ? 'translated' : ''}`} style={({ height: "100vh" }, { display: "flex" })}>
      <section>
        <Sidebar style={{ background: "#a8d5e5", height: "100vh", width: "30vb" }}>
          <Menu className="sidebar-header">
            <MenuItem
              icon={<MenuRoundedIcon />}
              className="menu1"
              style={{ textAlign: "center" }}
            >
              <h2 style={{ fontSize: "3vb" }}>IndusTANTRA</h2>
            </MenuItem>
            <MenuItem component={<Link to="home" className="link" />} icon={<GridViewRoundedIcon />}>
              Home
            </MenuItem>
            <MenuItem component={<Link to="technology-domain" className="link" />} icon={<WavesIcon />}>
              Technology Domains
            </MenuItem>
            <MenuItem component={<Link to="ot-it-bridge" className="link" />} icon={<ControlPointIcon />}>
              OT-IT Bridge
            </MenuItem>
            <MenuItem component={<Link to="stack" className="link" />} icon={<AccountTreeIcon />}>
              Stack
            </MenuItem>
            <MenuItem component={<Link to="digital-twin" className="link" />} icon={<MemoryIcon />}>
              Digital Twin
            </MenuItem>
            <MenuItem component={<Link to="real-time-monitoring" className="link" />} icon={<LaptopIcon />}>
              Real Time Monitoring
            </MenuItem>
            <MenuItem component={<Link to="machine-learning" className="link" />} icon={<InsightsIcon />}>
              Machine Learning
            </MenuItem>
            <MenuItem component={<Link to="process-scheduling" className="link" />} icon={<ReceiptRoundedIcon />}>
              Process Scheduling
            </MenuItem>
            <SubMenu label="Projects" icon={<BiotechIcon />}>
              <MenuItem component={<Link to="projects" className="link" />} icon={<StarRateIcon />}>
                Major Projects
              </MenuItem>
              <MenuItem component={<Link to="people" className="link" />} icon={<PeopleIcon />}>
                People
              </MenuItem>
              <MenuItem component={<Link to="education" className="link" />} icon={<SchoolIcon />}>
                Education
              </MenuItem>
              <MenuItem component={<Link to="experience" className="link" />} icon={<HomeRepairServiceIcon />}>
                Experience
              </MenuItem>
              <MenuItem component={<Link to="teaching" className="link" />} icon={<CoPresentIcon />}>
                Teaching
              </MenuItem>
              <MenuItem component={<Link to="research" className="link" />} icon={<ScienceIcon />}>
                Research
              </MenuItem>
              <MenuItem component={<Link to="phd" className="link" />} icon={<DescriptionIcon />}>
                Ph.D. Thesis
              </MenuItem>
              <MenuItem component={<Link to="mtech" className="link" />} icon={<DescriptionIcon />}>
                M.Tech. Thesis
              </MenuItem>
              <MenuItem component={<Link to="details" className="link" />} icon={<DescriptionIcon />}>
                Research Details
              </MenuItem>
              <MenuItem component={<Link to="publications" className="link" />} icon={<DescriptionIcon />}>
                Research Publications
              </MenuItem>
              <MenuItem component={<Link to="news" className="link" />} icon={<NewspaperIcon />}>
                News
              </MenuItem>
            </SubMenu>
            <MenuItem component={<Link to="contact" className="link" />} icon={<PhoneIcon />}>
              Contact
            </MenuItem>
            <MenuItem href='https://www.ofc-industantra.com/' target='_blank' icon={<LogoutRoundedIcon />}>
              Industry4.0 Project
            </MenuItem>
          </Menu>
        </Sidebar>
      </section>
      <section>
        <Button
          variant="contained"
          color="primary"
          onClick={toggleTranslation}
          startIcon={<MenuRoundedIcon>add_circle</MenuRoundedIcon>} // Change 'add_circle' to the icon you want
        >
          Add
        </Button>
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