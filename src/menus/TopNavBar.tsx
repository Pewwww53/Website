import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material"
import React, { useState } from "react"
import Home from "../pages/Home";
import Prices from "../pages/Prices";
import About from "../pages/About";

const pages = ['Home', 'Pricing', 'About Us', 'Contact'];
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function TopNavBar() {
  const [value, setValue] = useState(0);
  return (
    <React.Fragment>
      <AppBar position="static" color="transparent" sx={{boxShadow: "none"}}>
        <Toolbar>
        <Typography
            variant="h6"
            noWrap
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 800,
              fontSize: '3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Lando
          </Typography>
          <Tabs textColor="primary"  value={value} onChange={(e, value) => setValue(value)} indicatorColor="primary" sx={{
            ml: 10
          }}>
              {pages.map((page) => (
                <Tab label={page} sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 800,
                  fontSize: '1.3rem',
                  color: 'black',
                }}/>
              ))}
          </Tabs>
          <Button sx={{ml: 'auto', color: 'black', fontFamily: 'Poppins', fontWeight: 800, textTransform: 'capitalize', fontSize: '1.3rem',}} variant="text" >Log in</Button>
          <Button sx={{color: 'white', fontFamily: 'Poppins', fontWeight: 500, borderRadius: 2,textTransform: 'capitalize', fontSize: '1.3rem',}} variant="contained">Sign up</Button>
        </Toolbar>
      </AppBar>
      <CustomTabPanel value={value} index={0}>
        <Home/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Prices/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <About/>
      </CustomTabPanel>
    </React.Fragment>
  )
}
export default TopNavBar