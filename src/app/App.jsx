import './app.css';
import "@fontsource/plus-jakarta-sans"; 
import "@fontsource/plus-jakarta-sans/400.css"; 
import "@fontsource/plus-jakarta-sans/400-italic.css";

import React, { useState, useEffect  } from 'react'; 

function App() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    function handleResize() {
      setShowNavbar(window.innerWidth >= 1200);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="app">
      { showNavbar && ( 
        <div className='navigation' id='navigation'>
          <div className="nav-bar">
            <div className="logo">
              <a className="logo-svg" href="/">
                <img src="/assets/logo.svg" className='' alt='logo'></img>
              </a>
            </div>
            <div className="navbar-body">
              <div className="navbar-wrapper">
                <div className="navbar-content">
                  <ul className="navbar-items">
                    <li className="nav-sub-header">Home</li>
                    <li className="nav-item">
                      <a tabindex="0" href="/" aria-current="page" class="" target="">
                        <div class="icon-nav-item">
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-aperture" width="1.3rem" height="1.3rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><path d="M3.6 15h10.55"></path><path d="M6.551 4.938l3.26 10.034"></path><path d="M17.032 4.636l-8.535 6.201"></path><path d="M20.559 14.51l-8.535 -6.201"></path><path d="M12.257 20.916l3.261 -10.034"></path></svg>
                        </div>
                        <div class="nav-item-text">
                          <span class="body1">Modern<br /></span>
                        </div>
                        <div class="nav-item-noti"><span class="ni-noti-la">New</span></div>
                        <span class=""></span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a tabindex="0" href="/" aria-current="page" class="" target="">
                        <div class="icon-nav-item">
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="1.3rem" height="1.3rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="6" cy="19" r="2"></circle><circle cx="17" cy="19" r="2"></circle><path d="M17 17h-11v-14h-2"></path><path d="M6 5l14 1l-1 7h-13"></path></svg>
                        </div>
                        <div class="nav-item-text">
                          <span class="body1">eCommerce<br /></span>
                        </div>
                        <span class=""></span>
                      </a>
                    </li>
                    <li className="nav-sub-header">Apps</li>
                    <li className="nav-item">
                      <a tabindex="0" href="/" aria-current="page" class="" target="">
                        <div class="icon-nav-item">
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-package" width="1.3rem" height="1.3rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline><line x1="12" y1="12" x2="20" y2="7.5"></line><line x1="12" y1="12" x2="12" y2="21"></line><line x1="12" y1="12" x2="4" y2="7.5"></line><line x1="16" y1="5.25" x2="8" y2="9.75"></line></svg>
                        </div>
                        <div class="nav-item-text">
                          <span class="body1">Contacts<br /></span>
                        </div>
                        <div class="nav-item-noti"><span class="ni-noti-la">2</span></div>
                        <span class=""></span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a tabindex="0" href="/" aria-current="page" class="" target="">
                        <div class="icon-nav-item">
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-donut-3" width="1.3rem" height="1.3rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3v5m4 4h5"></path><path d="M8.929 14.582l-3.429 2.918"></path><circle cx="12" cy="12" r="4"></circle><circle cx="12" cy="12" r="9"></circle></svg>
                        </div>
                        <div class="nav-item-text">
                          <span class="body1">Blog<br /></span>
                        </div>
                        <span class=""></span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a tabindex="0" href="/" aria-current="page" class="" target="">
                        <div class="icon-nav-item">
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-basket" width="1.3rem" height="1.3rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="7 10 12 4 17 10"></polyline><path d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z"></path><circle cx="12" cy="15" r="2"></circle></svg>
                        </div>
                        <div class="nav-item-text">
                          <span class="body1">Ecommerce<br /></span>
                        </div>
                        <span class=""></span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a tabindex="0" href="/" aria-current="page" class="" target="">
                        <div class="icon-nav-item">
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-2" width="1.3rem" height="1.3rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3"></path><line x1="8" y1="9" x2="16" y2="9"></line><line x1="8" y1="13" x2="14" y2="13"></line></svg>
                        </div>
                        <div class="nav-item-text">
                          <span class="body1">Chat<br /></span>
                        </div>
                        <span class=""></span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a tabindex="0" href="/" aria-current="page" class="" target="">
                        <div class="icon-nav-item">
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="1.3rem" height="1.3rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="10" r="3"></circle><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path></svg>
                        </div>
                        <div class="nav-item-text">
                          <span class="body1">Users<br /></span>
                        </div>
                        <span class=""></span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a tabindex="0" href="/" aria-current="page" class="" target="">
                        <div class="icon-nav-item">
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-notes" width="1.3rem" height="1.3rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="5" y="3" width="14" height="18" rx="2"></rect><line x1="9" y1="7" x2="15" y2="7"></line><line x1="9" y1="11" x2="15" y2="11"></line><line x1="9" y1="15" x2="13" y2="15"></line></svg>  
                        </div>
                        <div class="nav-item-text">
                          <span class="body1">Notes<br /></span>
                        </div>
                        <span class=""></span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a tabindex="0" href="/" aria-current="page" class="" target="">
                        <div class="icon-nav-item">
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar" width="1.3rem" height="1.3rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="4" y="5" width="16" height="16" rx="2"></rect><line x1="16" y1="3" x2="16" y2="7"></line><line x1="8" y1="3" x2="8" y2="7"></line><line x1="4" y1="11" x2="20" y2="11"></line><line x1="11" y1="15" x2="12" y2="15"></line><line x1="12" y1="15" x2="12" y2="18"></line></svg>
                        </div>
                        <div class="nav-item-text">
                          <span class="body1">Calendar<br /></span>
                        </div>
                        <span class=""></span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a tabindex="0" href="/" aria-current="page" class="" target="">
                        <div class="icon-nav-item">
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="1.3rem" height="1.3rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="3" y="5" width="18" height="14" rx="2"></rect><polyline points="3 7 12 13 21 7"></polyline></svg>
                        </div>
                        <div class="nav-item-text">
                          <span class="body1">Email<br /></span>
                        </div>
                        <span class=""></span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a tabindex="0" href="/" aria-current="page" class="" target="">
                        <div class="icon-nav-item">
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="1.3rem" height="1.3rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="6" cy="19" r="2"></circle><circle cx="17" cy="19" r="2"></circle><path d="M17 17h-11v-14h-2"></path><path d="M6 5l14 1l-1 7h-13"></path></svg>
                        </div>
                        <div class="nav-item-text">
                          <span class="body1">Blog<br /></span>
                        </div>
                        <span class=""></span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a tabindex="0" href="/" aria-current="page" class="" target="">
                        <div class="icon-nav-item">
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ticket" width="1.3rem" height="1.3rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="15" y1="5" x2="15" y2="7"></line><line x1="15" y1="11" x2="15" y2="13"></line><line x1="15" y1="17" x2="15" y2="19"></line><path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"></path></svg>
                        </div>
                        <div class="nav-item-text">
                          <span class="body1">Tikets<br /></span>
                        </div>
                        <span class=""></span>
                      </a>
                    </li>
                    <li className="nav-sub-header">Pages</li>
                    <li className="nav-item">
                      <a tabindex="0" href="/" aria-current="page" class="" target="">
                        <div class="icon-nav-item">
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lock-access" width="1.3rem" height="1.3rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path><path d="M4 16v2a2 2 0 0 0 2 2h2"></path><path d="M16 4h2a2 2 0 0 1 2 2v2"></path><path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path><rect x="8" y="11" width="8" height="5" rx="1"></rect><path d="M10 11v-2a2 2 0 1 1 4 0v2"></path></svg>
                        </div>
                        <div class="nav-item-text">
                          <span class="body1">Roll Base Access<br /></span>
                        </div>
                        <span class=""></span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a tabindex="0" href="/" aria-current="page" class="" target="">
                        <div class="icon-nav-item">
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-git-merge" width="1.3rem" height="1.3rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="7" cy="18" r="2"></circle><circle cx="7" cy="6" r="2"></circle><circle cx="17" cy="12" r="2"></circle><line x1="7" y1="8" x2="7" y2="16"></line><path d="M7 8a4 4 0 0 0 4 4h4"></path></svg>
                        </div>
                        <div class="nav-item-text">
                          <span class="body1">Treeview<br /></span>
                        </div>
                        <span class=""></span>
                      </a>
                    </li><li className="nav-item">
                      <a tabindex="0" href="/" aria-current="page" class="" target="">
                        <div class="icon-nav-item">
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-dollar" width="1.3rem" height="1.3rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"></path><path d="M12 3v3m0 12v3"></path></svg>
                        </div>
                        <div class="nav-item-text">
                          <span class="body1">Pricing<br /></span>
                        </div>
                        <span class=""></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="navbar-footer">
              <div className="nb-profile rh-border">
                <img src="/assets/img/user-1.jpg" alt="user-1" className='icon-profile'/>
              </div>
              <div>
                <h6>Mathew</h6>
                <span className='caption'>Designer</span>
              </div>
              <a href="/" className="power">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-power" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 6a7.75 7.75 0 1 0 10 0"></path><line x1="12" y1="4" x2="12" y2="12"></line></svg>
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="container">
        <header className='header'>
          <div className="left-header">
            <button className="btn-control-navbar header-hover" onClick={toggleNavbar} tabindex="0" type="button" aria-label="menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-menu-2"><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg>
              <span className="hover-grey-background"></span>
            </button>
            <button className="btn-search-menu header-hover" tabindex="0" type="button" aria-label="show 4 new mails" aria-controls="search-menu" aria-haspopup="true">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="10" cy="10" r="7"></circle><line x1="21" y1="21" x2="15" y2="15"></line></svg>
              <span className="hover-grey-background"></span></button>
            <button className="header-menu header-apps-dropmenu header-hover" tabindex="0" type="button" aria-label="show 11 new notifications" aria-controls="msgs-menu" aria-haspopup="true">
              Apps
              <span className="icon-dropdown">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width="15" height="15" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
              <span className=""></span>
            </button>
            <a href="/" className="header-menu header-hover" >Chat</a>
            <a href="/" className="header-menu header-hover">Calendar</a>
            <a href="/" className="header-menu header-hover">Email</a>
          </div>
          <div className="right-header">
            <button type='button' className="lang rh-border header-hover">
              <img src="/assets/flags/icon-flag-en.svg" alt="en" className='lang-menu-en' />
            </button>
            <button type='button' className="rh-item rh-ml rh-border header-hover">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="21" height="21" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="6" cy="19" r="2"></circle><circle cx="17" cy="19" r="2"></circle><path d="M17 17h-11v-14h-2"></path><path d="M6 5l14 1l-1 7h-13"></path></svg>
              <span className="show-shopping-cart topRight">0</span>
            </button>
            <button type='button' className="rh-ml rh-border header-hover">
              <span className="rh-item">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell-ringing" width="21" height="21" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path><path d="M9 17v1a3 3 0 0 0 6 0v-1"></path><path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727"></path><path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727"></path></svg>
                <span className="show-notification topRight"></span>
              </span>
            </button>
            <button type='button' className="show-header-menu rh-ml rh-border header-hover">
              <span className="rh-item">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid-dots" width="21" height="21" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="5" cy="5" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="19" cy="5" r="1"></circle><circle cx="5" cy="12" r="1"></circle><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="19" r="1"></circle><circle cx="12" cy="19" r="1"></circle><circle cx="19" cy="19" r="1"></circle></svg> 
              </span>
            </button>
            <button type='button' className="rh-ml rh-border header-hover">
              <div className="profile">
                <img src="/assets/img/user-1.jpg" alt="user-1" className='icon-profile'/>
              </div>
            </button>
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
            <div className="content grid-span4 grid-col-span3"></div>
            <div className="content grid-span2 grid-col-span3"></div>
            <div className="content grid-span2 grid-col-span3"></div>
            <div className="content grid-span2 grid-col-span3"></div>
            <div className="content grid-span2 grid-col-span3"></div>
            <div className="content grid-span2 grid-col-span3"></div>
            <div className="content grid-span4 grid-col-span3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
