import './app.css';
import "@fontsource/plus-jakarta-sans"; 
import "@fontsource/plus-jakarta-sans/400.css"; 
import "@fontsource/plus-jakarta-sans/400-italic.css";

import React, { useState, useEffect  } from 'react'; 
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Home from '../components/Home';

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
    <Router>
      <div className="app">
        { showNavbar && <Navbar /> }

        <div className="container">
          <Header toggleNavbar={ toggleNavbar } />

          <div className="main-content">
            <Routes>
              <Route path="/home" exact element={ <Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
