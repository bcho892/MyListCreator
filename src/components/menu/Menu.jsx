import "./menu.css"
import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SummarizeIcon from '@mui/icons-material/Summarize';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import { NavLink } from "react-router-dom"
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import InfoIcon from '@mui/icons-material/Info';
import Modal from '@mui/material/Modal';
import Help from "../pages/Help/Help";
import About from "../pages/about/About";
export default function Menu() {
  const [helpOpen, setHelpOpen] = React.useState(false);
  const openHelp = () => setHelpOpen(true);
  const closeHelp = () => setHelpOpen(false);
  const [aboutOpen, setAboutOpen] = React.useState(false);
  const openAbout = () => setAboutOpen(true);
  const closeAbout = () => setAboutOpen(false);

  return (
    <div className="menucontainer">
      <Modal
        sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
        open={helpOpen}
        onClose={closeHelp}
        aria-labelledby="help dialog"
      >
        <Help />
      </Modal>
      <Modal
        sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
        open={aboutOpen}
        onClose={closeAbout}
        aria-labelledby="help dialog"
      >
        <About />
      </Modal>
      <div className="options">
        <Typography variant="h6" gutterBottom component="div">
          Options
        </Typography>
        <NavLink to="/" style={{ textDecoration: "none" }} className={({ isActive }) => "navlink" + (isActive ? " selected" : "")}>

          <li className="pages">

            <SummarizeIcon />
            <p>My Collection</p>

          </li>

        </NavLink>
        <NavLink to="/addtitle" style={{ textDecoration: "none" }} className={({ isActive }) => "navlink" + (isActive ? " selected" : "")}>
          <li className="pages">
            <AddCircleOutlineIcon />
            <p>Add Title</p>
          </li>
        </NavLink>

        <NavLink to="/generatelist" style={{ textDecoration: "none" }} className={({ isActive }) => "navlink" + (isActive ? " selected" : "")}>

          <li className="pages">
            <DesignServicesIcon />
            <p>Generate List</p>
          </li>
        </NavLink>

        <Divider variant="middle" />

        <li className="pages" onClick={() => openHelp()}>
          <HelpOutlineIcon />
          <p>How to Use</p>
        </li>
        <li className="pages" onClick={() => openAbout()}>
          <InfoIcon />
          <p>About</p>
        </li>
      </div>

    </div>
  )
}
