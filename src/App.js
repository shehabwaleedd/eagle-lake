import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollUp from './components/scrollUp/ScrollUp';
import Home from './pages/home/Home';
import { useState } from 'react';
function App() {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="App">
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname} >
          <Route path='/' element={<Home navOpen={navOpen} setNavOpen={setNavOpen}/>} />
        </Routes>
      </AnimatePresence>
      <ScrollUp />
    </div>
  );
}

export default App;
