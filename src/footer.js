import React from 'react';
import './footer.css'; // Assuming you have a CSS file for styling

const Footer = () => {
    return (
        <div id="Frame5" className="Frame5">
            <p className="Title1_frame5">Want to work with me?</p>

            <div className="HireMe_frame5 effect effect-1">
                <a href="mailto:dariawisterya@gmail.com" className="HireMe_frame5-link">Hire Me</a>
            </div>

             <div className='Right_rows'>
            <p className="PhoneNumber">Phone number: +40 771 735 219</p>
            <p className="Emailaddres">Email address: dariamaria61@yahoo.com</p>

            <div className="Images_frame5">
                <a href="https://github.com/WisteryaCandy" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/githubicon2.png" className="github2" alt="GitHub" />
                </a>
                <a href="https://www.instagram.com/daria_giotina/" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/instagrqam3.png" className="instagram2" alt="Instagram" />
                </a>
                <a href="https://ro.linkedin.com/in/dariamaria-giotina?original_referer=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/linkedin2.png" className="linkedin2" alt="LinkedIn" />
                </a>
                <a href="https://www.facebook.com/daria.giotina.1" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/facebook2.png" className="facebook2" alt="Facebook" />
                </a>
                <p className="Follow">Follow me</p>
            </div>
            </div>

            <div className="Footer">
                <a href="#Frame2" className="link-aboutme">About me</a>
                <a href="#Frame3" className="link-academics">Academics</a>
                <a href="#Frame4" className="link-projects">Projects</a>
                <a href="#Frame5" className='link-contact'>Contact</a>
            </div>
        </div>
    );
}

export default Footer;
