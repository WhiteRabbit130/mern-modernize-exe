import logo from '../assets/logo.svg';
import './app.css';

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
            <button className="btn-control-navbar" tabindex="0" type="button" aria-label="menu"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg><span className="hover-grey-background"></span></button>
            <button className="btn-search-menu grey-background" tabindex="0" type="button" aria-label="show 4 new mails" aria-controls="search-menu" aria-haspopup="true"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="10" cy="10" r="7"></circle><line x1="21" y1="21" x2="15" y2="15"></line></svg><span className="hover-grey-background"></span></button>
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
            <a href="" className="header-menu">Chat</a>
          </div>
          <div className="right-header">
            
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
