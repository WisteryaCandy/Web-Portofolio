import React from 'react';
import './frame1.css';

function Frame1() {
  return (
    <div className="Frame1">
      <div className="background_block1">
        <div className="Hello_line">
          <div className="Hello">Hello</div>
        </div>
        
        <div className="paragraph1_frame1">
          I am Daria Giotina
          <p className="paragraph2_frame1">
            I am a software engineer, game developer and web developer, currently in my first year of university studying computer science
          </p>
        </div>
        
        <div>
          <img 
            src="/assets/image_2024-05-12_181334664-removebg-preview.png" 
            alt="Sitting down" 
            className="mesittindown"
            
          />
        </div>
        
        <div className="frame1_button1and2">
          <div className="button1_frame1 effect_frame1 effect-3">
            <a href="mailto:dariawisterya@gmail.com" className="button1_frame1">Hire me</a>
          </div>
          <div className="button2_frame1 effect_frame1 effect-4">
            <a href="assets/Cv.pdf" download="cv.pdf"  style={{ textDecorationStyle: 'none'}}>Get CV</a>
          </div>
        </div>
        
        <div className="Apps_buttons">
          <a href="https://www.facebook.com/daria.giotina.1" target="_blank" rel="noopener noreferrer">
            <img src="/assets/facebook.png" className="Facebook" alt="Facebook" />
          </a>
          <a href="https://ro.linkedin.com/in/dariamaria-giotina?original_referer=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noopener noreferrer">
            <img src="/assets/linkedin.png" className="Linkedin" alt="Linkedin" />
          </a>
          <a href="https://www.instagram.com/daria_giotina/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/instagrqam.png" className="Insta" alt="Instagram" />
          </a>
          <a href="https://github.com/WisteryaCandy" target="_blank" rel="noopener noreferrer">
            <img src="/assets/githubicon.png" className="Github" alt="Github" />
          </a> 
        </div>
        
      </div>
    </div>
  );
}

export default Frame1;
