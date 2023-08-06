import './App.css';

import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollUp from './components/scrollUp/ScrollUp';
import Navbar from './navbar/Navbar';
import Home from './pages/home/Home';
import RightSide from './pages/rightSide/RightSide';
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname} >
          <Route path='/' element={<Home />} />
        </Routes>
      </AnimatePresence>
      <ScrollUp />
    </div>
  );
}

export default App;
