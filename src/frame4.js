import React, { useState } from 'react';
import './frame4.css'; // Assuming you have a corresponding CSS file for styles
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";




const Frame4 = () => {
  const [activeSection, setActiveSection] = useState('All');
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sections = [
    { id: 'All', label: 'All' },
    { id: 'Gamedevelopment', label: 'Game development' },
    { id: 'Webdevelopment', label: 'Web development' },
    { id: 'Cprojects', label: 'C/C++ projects' },
  ];

  const handleToggle = (sectionId) => {
    setActiveSection(sectionId);
  };
  const thumbnailsRef = React.useRef(null);
  const images = {
    All: [
      { src: "/assets/flappybird.png", alt: "Flappy Bird" },
      { src: "/assets/proiecttrencrop.png", alt: "Project Train Crop" },
      { src: "/assets/sitenou2.png", alt: "Site Nou 2" },
      { src: "/assets/SITEUE2.png", alt: "Site UE 2" },
      { src: "/assets/characterselection.png", alt: "Character Selection" },
      { src: "/assets/proiecttren.png", alt: "Project Train" },
      { src: "/assets/sitewebproiect2.png", alt: "Site Web Project 2" },
      { src: "/assets/sitewebproiect.png", alt: "Site Web Project" },
      { src: "/assets/siteeu.png", alt: "Site EU" },
      { src: "/assets/SITEUE3.png", alt: "Site UE 3" },
      { src: "/assets/sitenou1.png", alt: "Site Nou 1" },
      { src: "/assets/sitenou.png", alt: "Site Nou" },

    ],
    Gamedevelopment: [
      { src: "/assets/flappybird.png", alt: "Flappy Bird" },
      { src: "/assets/graybackground.jpg", alt: "Gray BG" },
      { src: "/assets/characterselection.png", alt: "Character Selection" },   
    ],
    Webdevelopment: [
      { src: "/assets/sitewebproiect2.png", alt: "Site Web Project 2" },
      { src: "/assets/SITEUE3.png", alt: "Site UE 3" },
      { src: "/assets/sitenou2.png", alt: "Site Nou 2" },
      { src: "/assets/sitenou1.png", alt: "Site Nou 1" },
      { src: "/assets/sitenou.png", alt: "Site Nou" },
      { src: "/assets/sitewebproiect.png", alt: "Site Web Project" },
      { src: "/assets/SITEUE2.png", alt: "Site UE 2" },
      { src: "/assets/siteeu.png", alt: "Site EU" },
    ],
    Cprojects: [
      { src: "/assets/proiecttren.png", alt: "Project Train" },
      { src: "/assets/proiect2.png", alt: "Proiect Tren 2" },
      { src: "/assets/proiecttrencrop.png", alt: "Project Train 3" },
    ],
  };

   const descriptions = {
    Gamedevelopment: (
      <div className="Description_gamedevelopment description-box">
        <h2 className='Title_gamedev1'>Game Developer Projects:</h2>
        <h4 className='Title_gamedev2'>Flappy Bird Clone:</h4>
        <p>Developed using Unity and C#, this project is a recreation of the popular game Flappy Bird. The objective is to navigate a bird through gaps in obstacles by tapping to make the bird "flap" and stay airborne. Key features include:</p>
        <p>Smooth Animations: The bird has fluid animations for jumping and idling, enhancing the visual appeal and gameplay experience.</p>
        <p>Character Selection: Players can choose from multiple characters, each with unique animations.</p>
        <p>Challenging Gameplay: The game maintains the original's challenging nature, requiring precise timing and quick reflexes to succeed.</p>
      </div>
    ),
    Webdevelopment: (
      <div className="Description_webdevelopment description-box">
        <h2 className='Title_webdev1'>Web Developer Front-End Projects:</h2>
        <h4 className='Title_webdev2'>Project 1: Personal CV Page</h4>
        <p>Crafted using HTML, CSS, and React JavaScript, my personal CV page stands as a testament to my web development skills. With a design meticulously crafted in Figma, this dynamic webpage boasts an array of features:</p>
        <p>Custom Design: Every element, from layout to color scheme, is tailor-made, reflecting my creativity and attention to detail.</p>
        <p>Interactive Elements: Engaging hover and click effects enrich user interaction, providing a delightful browsing experience.</p>
        <p>Responsive Design: Seamlessly adapting to various screen sizes, including phones, tablets, and PCs, ensures accessibility for all users.</p>
        <p>Carousel API Integration: Leveraging a carousel API, the page showcases dynamic content in a visually appealing manner.</p>
        <p>Contact Form: A built-in contact form allows visitors to easily reach out, fostering communication and networking opportunities.</p>
        <h4 className='Title_webdev2'>Project 2: School Radiobiology Project</h4>
        <p>Contributing both to design and programming, our team's School Radiobiology project exemplifies collaborative efforts in web development. Key highlights include:</p>
        <p>Shared Vision: Combining our collective expertise, we crafted a visually compelling and informative webpage aimed at educating visitors about radiobiology.</p>
        <p>Programming Contributions: Taking an active role in programming tasks, I helped bring the design to life, ensuring seamless functionality and user experience.</p>
        <p>Accessible Deployment: The project is accessible via a hosted link, enabling easy dissemination of knowledge to a wider audience: <a href="https://proiect-fizica.vercel.app/index.html" target="_blank" rel="noopener noreferrer">https://proiect-fizica.vercel.app/index.html</a></p>
        <h4 className='Title_webdev2'>Project 3: Japan Info Page</h4>
        <p>Embarking on my web development journey, I created my inaugural webpage dedicated to showcasing information about Japan. Despite being a novice, the page exhibits foundational skills in HTML and CSS:</p>
        <p>Learning Milestone: Serving as my first-ever webpage, it marks the beginning of my journey into web development, capturing the excitement of exploring new technologies.</p>
        <p>Visual Representation: While not yet published, the page incorporates photos for reference, offering a glimpse into its potential aesthetic appeal.</p>
        <p>HTML/CSS Mastery: By relying solely on HTML and CSS, I honed fundamental skills in structuring content and styling elements, laying a solid groundwork for future projects.</p>
      </div>
    ),
    Cprojects: (
      <div className="Description_cprojects description-box">
        <h2 className='Title_cprojects1'>C/C++ Projects:</h2>
        <h4 className='Title_cprojects2'>Train Project</h4>
        <p>This project showcases a meticulously crafted train simulation using C++. The simulation includes a variety of features and functions that bring the train system to life:</p>
        <p>Realistic Movements: The train moves smoothly along the tracks, demonstrating complex animation algorithms.</p>
        <p>Interactive Controls: Users can interact with the simulation, controlling the train's speed and direction, and observing the effects in real-time.</p>
        <p>Visual Details: The project includes detailed visual elements, from the train's design to the surrounding environment, enhancing the overall experience.</p>
      </div>
    ),
  };

  const slides = images[activeSection].map((img, index) => ({
    src: img.src,
    alt: img.alt,
    onClick: () => {
      setCurrentIndex(index);
      setOpen(true);
    }
  }));
  

  return (
    <div id="Frame4" className="Frame4">
      <p className="Title1_frame4">Projects</p>
      <div className="navbar_frame4">
        {sections.map((section) => (
          <p
            key={section.id}
            id={`${section.id.toLowerCase()}_button`}
            className={activeSection === section.id ? 'active' : ''}
            onClick={() => handleToggle(section.id)}
          >
            {section.label}
          </p>
        ))}
      </div>

      <div id={`${activeSection.toLowerCase()}_frame4`} className={activeSection} style={{ display: 'block' }}>
        {images[activeSection].map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            className={`Square${index + 1}_${activeSection.toLowerCase()}`}
            onClick={() => {
              setCurrentIndex(index);
              setOpen(true);
            }}
          />
        ))}
        {descriptions[activeSection]}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={currentIndex}
        plugins={[Thumbnails]}
        thumbnails={{ ref: thumbnailsRef }}
        on={{
          click: () => {
           (thumbnailsRef.current?.visible
            ? thumbnailsRef.current?.hide
            : thumbnailsRef.current?.show)?.();
      },
    }}
      />
    </div>
  );
};

export default Frame4;
