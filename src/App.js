import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './navbar'; // Import the Sidebar component
import Frame1 from './frame1';
import Frame2 from './frame2';
import Frame3 from './frame3';
import Frame4 from './frame4';
import Footer from './footer';

export default function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="navbar">
          <Sidebar />
        </div>
        <div className="frame frame1">
          <Frame1 />
          <div className="GreyLine1"></div> {/* Add GreyLine1 inside frame1 */}
        </div>
        <div className="frame frame2">
          <Frame2 />
          <div className="GreyLine2"></div> 
        </div>
        <div className="frame frame3">
           <Frame3 />
           <div className="GreyLine3"></div> 
        </div>
        <div className="frame frame4">
        <Frame4 />
        <div className="GreyLine4"></div> 
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

