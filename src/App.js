import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollUp from './components/scrollUp/ScrollUp';
import Home from './pages/home/Home';
import { useState, useEffect } from 'react';
function App() {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  useEffect(() => {
    if (navOpen) {
      document.body.classList.add('no-scroll')
    }
    else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMobile, location, navOpen]);
  return (
    <div className="App">
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname} >
          <Route path='/' element={<Home navOpen={navOpen} setNavOpen={setNavOpen} isMobile={isMobile} setIsMobile={setIsMobile} setIsTablet={setIsTablet} isTablet={isTablet} />} />
        </Routes>
      </AnimatePresence>
      <ScrollUp />
    </div>
  );
}

export default App;
