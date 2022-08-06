import { Drawer } from "@mui/material";
import Menu from "./Menu";
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

export default function MobileMenu() {
  const [drawOpen, setOpen] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  React.useEffect(() => {
    width >= 1000 && closeMobile();
  }, [width]);

  function closeMobile() {
    setOpen(false);
  }
  return (
    <div>
      <div className="menubutton" onClick={() => setOpen(true)}>
        <MenuIcon sx={{ height: "30px", width: "30px" }} />
      </div>
      <Drawer anchor="left"
        open={drawOpen}
        onClose={() => setOpen(false)}
      >

        <Menu />
      </Drawer>
    </div>
  )
}
