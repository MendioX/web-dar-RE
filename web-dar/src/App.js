import logo from './logo.svg';

import Navbar from "./Components/Navbar";
import Nosotros from './Layauts/nosotros';

import Footer from './Components/Footer';
import Partners from './Layauts/Partners';

import Inicio from './Layauts/Inicio';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Campanas from './Components/Campanas';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Inicio />
                <Nosotros />
                <Partners />
                <Footer />
              </div>
            }
          />
          <Route path="/campains" element={<div>
            <Navbar />
            <Campanas />
            <Footer />
          </div>} />
          <Route path="/newCampain" element={<Campanas />} />
          <Route path="/campains" element={<Campanas />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
