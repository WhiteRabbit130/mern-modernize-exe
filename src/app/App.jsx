import logo from '../assets/logo.svg';
import './app.css';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { IconMenu2, IconSearch, IconShoppingCart, IconBellRinging, IconChevronDown } from '@tabler/icons-react';
import flagEnSvg from '../assets/flags/icon-flag-en.svg';

const buttonStyles = {
  borderRadius: '7px',
  textTransform: "none",
  fontWeight: 400,
  padding: "5px 15px 5px 15px"
}

function App() {
  return (
    <div className="app">
      <div className='navigation'>
        <div className="nav-bar">
          <div className="logo">
            <a className="logo-svg" href="/">
              <img src={logo} className='' alt='logo'></img>
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <AppBar color='inherit' position="sticky" sx={{boxShadow: 'none'}}>
          <Toolbar>
            <IconButton aria-label="menu" color="inherit">
              <IconMenu2 
                size={20}
                color="currentColor"
                stroke={2}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </IconButton>
            <IconButton aria-label="search-menu" color="inherit" size="large">
              <IconSearch
                size={16}
                color="currentColor"
                stroke={2}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </IconButton>
            <Box>
              <span>
                <Button color='inherit' size="medium" sx={buttonStyles}>
                  Apps
                  <span>
                  <IconButton aria-label="menu" color="inherit">
                    <IconChevronDown 
                      size={15}
                      color="currentColor"
                      stroke={2}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </IconButton>
                  </span>
                </Button>
              </span>             
            </Box>
            <Button color='inherit' size="medium" sx={buttonStyles}>Chat</Button>
            <Button color='inherit' size="medium" sx={buttonStyles}>Calendar</Button>
            <Button color='inherit' size="medium" sx={buttonStyles}>Email</Button>           
            <Box sx={{ flexGrow: 1 }}></Box>
            {/* <div className="lang">
              <img src={flagEnSvg} alt="en" className='lang-menu-en' />
            </div> */}
            {/* <div className="shopping-cart rh-ml"> */}
            {/* <span className="icon-shopping-cart rh-ml">
              <IconShoppingCart
                size={21}
                color="currentColor"
                stroke={1.5}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <span className="show-shopping-cart topRight">0</span>
            </span> */}
            {/* </div> */}
            {/* <div className="notification rh-ml"> */}
              {/* <span className="icon-notification rh-ml">
                <IconBellRinging
                  size={21}
                  color="currentColor"
                  stroke={1.5}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <span className="show-notification topRight"></span>
              </span> */}
            {/* </div> */}
            {/* <div className="profile rh-ml"> */}
              {/* <button type='button' className="btn-profile rh-ml">
                <div className="profile">
                  <img src="/assets/img/user-1.jpg" alt="user-1" className='icon-profile'/>
                </div>
              </button> */}
            {/* </div> */}
          </Toolbar>
        </AppBar>
      

        <div className="main-content">
          <div className="contents">
            <div className="content"></div>
            <div className="content"></div>
            <div className="content"></div>
            <div className="content"></div>
            <div className="content"></div>
            <div className="content"></div>
            <div className="content grid-column-span-4"></div>
            <div className="content grid-column-span-2"></div>
            <div className="content grid-column-span-2"></div>
            <div className="content grid-column-span-2"></div>
            <div className="content grid-column-span-2"></div>
            <div className="content grid-column-span-2"></div>
            <div className="content grid-column-span-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
