import './App.css';
import "@fontsource/plus-jakarta-sans"; 
import "@fontsource/plus-jakarta-sans/400.css"; 
import "@fontsource/plus-jakarta-sans/400-italic.css";

import React, { useState, useEffect  } from 'react'; 
import { Routes, Route} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Home from '../pages/Home';
import Chat from '../pages/Chat';

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
        { showNavbar && <Navbar /> }

        <div className="container">
          <Header toggleNavbar={toggleNavbar} />

          <div className="main-content">
            <Routes>
              <Route path="/" exact element={<Home />} />              
              <Route path="/chat" exact element={<Chat />} /> 
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
