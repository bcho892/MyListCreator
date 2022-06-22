import "./menu.css"
import React from 'react'
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';import SummarizeIcon from '@mui/icons-material/Summarize';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import {NavLink} from "react-router-dom"
export default function Menu() {
  return (
    <div className="menucontainer">

            <div className="options">
                <Typography variant="h6" gutterBottom component="div">
                Options
                </Typography>
                <NavLink  to="/" style={{textDecoration:"none"}} className={({ isActive }) => "navlink" + (isActive ? " selected" : "")}>
                <li className="pages">
                  
                  <SummarizeIcon/>
                    <p>My Collection</p>
                    
                </li>
                </NavLink>
                <NavLink  to="/addtitle" style={{textDecoration:"none"}} className={({ isActive }) => "navlink" + (isActive ? " selected" : "")}>

                <li className="pages">

                    <AddCircleOutlineIcon/>
                    <p>Add Title</p>
                </li>
                </NavLink>


                <NavLink to="/generatelist" style={{textDecoration:"none"}} className={({ isActive }) => "navlink" + (isActive ? " selected" : "")}>

                <li className="pages">
                  <DesignServicesIcon/>
                    <p>Generate List</p>
                </li>
                </NavLink>
            </div>
        
    </div>
  )
}
