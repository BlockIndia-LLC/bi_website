import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import NetworkXpr from './pages/NetworkXpr';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Blog from './pages/Blog';
import PostQuantumSignatures from './pages/blog/PostQuantumSignatures';

import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 600,
        easing: 'ease-out-cubic',
        offset: 50,
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("BlocksIndia | Validator - #Proton #Metal #Telos #Libre #FIO #TRON");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} />
            <Route path="/networks/xpr" element={<NetworkXpr />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/post-quantum-blockchain-signatures" element={<PostQuantumSignatures />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
