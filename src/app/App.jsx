import logo from '../assets/logo.svg';
import './app.css';
import { IconMenu2, IconSearch, IconShoppingCart, IconBellRinging } from '@tabler/icons-react';
import flagEnSvg from '../assets/flags/icon-flag-en.svg';

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
        <header className='header'>
          <div className="left-header">
            <button className="btn-control-navbar" tabindex="0" type="button" aria-label="menu">
              <IconMenu2 
                size={20}
                color="currentColor"
                stroke={2}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <span className="hover-grey-background"></span></button>
            <button className="btn-search-menu grey-background" tabindex="0" type="button" aria-label="show 4 new mails" aria-controls="search-menu" aria-haspopup="true">
               <IconSearch
                size={16}
                color="currentColor"
                stroke={2}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
               <span className="hover-grey-background"></span></button>
            <button className="header-apps-dropmenu" tabindex="0" type="button" aria-label="show 11 new notifications" aria-controls="msgs-menu" aria-haspopup="true">
              Apps
              <span className="dropdown-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width="15" height="15" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
              <span className=""></span>
            </button>
            <a href="/" className="header-menu">Chat</a>
            <a href="/" className="header-menu">Calendar</a>
            <a href="/" className="header-menu">Email</a>
          </div>
          <div className="right-header">
            <div className="lang">
              <img src={flagEnSvg} alt="en" className='lang-menu-en' />
            </div>
            {/* <div className="shopping-cart rh-ml"> */}
            <span className="icon-shopping-cart rh-ml">
              <IconShoppingCart
                size={21}
                color="currentColor"
                stroke={1.5}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <span className="show-shopping-cart topRight">0</span>
            </span>
            {/* </div> */}
            {/* <div className="notification rh-ml"> */}
              <span className="icon-notification rh-ml">
                <IconBellRinging
                  size={21}
                  color="currentColor"
                  stroke={1.5}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <span className="show-notification topRight"></span>
              </span>
            {/* </div> */}
            {/* <div className="profile rh-ml"> */}
              <button type='button' className="btn-profile rh-ml">
                <div className="profile">
                  <img src="/assets/img/user-1.jpg" alt="user-1" className='icon-profile'/>
                </div>
              </button>
            {/* </div> */}
          </div>          
        </header>

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
