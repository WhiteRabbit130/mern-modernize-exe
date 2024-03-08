export default function Header(props) {
    const { toggleNavbar } = props;

    return (
        <header className='header'>
          <div className="left-header">
            <button className="btn-control-navbar header-hover" onClick={toggleNavbar} tabIndex="0" type="button" aria-label="menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-menu-2"><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg>
              <span className="hover-grey-background"></span>
            </button>
            <button className="btn-search-menu header-hover" tabIndex="0" type="button" aria-label="show 4 new mails" aria-controls="search-menu" aria-haspopup="true">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="10" cy="10" r="7"></circle><line x1="21" y1="21" x2="15" y2="15"></line></svg>
              <span className="hover-grey-background"></span></button>
            <button className="header-menu header-apps-dropmenu header-hover" tabIndex="0" type="button" aria-label="show 11 new notifications" aria-controls="msgs-menu" aria-haspopup="true">
              Apps
              <span className="icon-dropdown">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width="15" height="15" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="6 9 12 15 18 9"></polyline></svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="21" height="21" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="6" cy="19" r="2"></circle><circle cx="17" cy="19" r="2"></circle><path d="M17 17h-11v-14h-2"></path><path d="M6 5l14 1l-1 7h-13"></path></svg>
              <span className="show-shopping-cart topRight">0</span>
            </button>
            <button type='button' className="rh-ml rh-border header-hover">
              <span className="rh-item">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell-ringing" width="21" height="21" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path><path d="M9 17v1a3 3 0 0 0 6 0v-1"></path><path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727"></path><path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727"></path></svg>
                <span className="show-notification topRight"></span>
              </span>
            </button>
            <button type='button' className="show-header-menu rh-ml rh-border header-hover">
              <span className="rh-item">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid-dots" width="21" height="21" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="5" cy="5" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="19" cy="5" r="1"></circle><circle cx="5" cy="12" r="1"></circle><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="19" r="1"></circle><circle cx="12" cy="19" r="1"></circle><circle cx="19" cy="19" r="1"></circle></svg> 
              </span>
            </button>
            <button type='button' className="rh-ml rh-border header-hover">
              <div className="profile">
                <img src="/assets/img/user-1.jpg" alt="user-1" className='icon-profile'/>
              </div>
            </button>
          </div>          
        </header>
    )
}