import './frame2.css';
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useMediaQuery } from 'react-responsive';



const Frame2 = () => {
  const [highlighted, setHighlighted] = useState(false);
  const [visibleSection, setVisibleSection] = useState(null);
  const [isMouseInsideContainer, setIsMouseInsideContainer] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Adjust max width as needed

  const toggleHighlight = () => {
    setHighlighted(!highlighted);
  };

  // Function to handle mouse enter on button
  const handleMouseEnter = (section) => {
    if (!visibleSection) {
      setVisibleSection(section);
    }
  };

  // Function to handle mouse leave from button
  const handleMouseLeave = () => {
    if (!isMouseInsideContainer) {
      setVisibleSection(null);
    }
  };

  // Function to handle mouse enter on container
  const handleContainerMouseEnter = () => {
    setIsMouseInsideContainer(true);
    
  };

  // Function to handle mouse leave from container
  const handleContainerMouseLeave = () => {
    setIsMouseInsideContainer(false);
    setVisibleSection(null);
  };

   // Function to handle click on button (for desktop) or touch (for mobile/tablet)
  const handleClick = (section) => {
    if (visibleSection === section) {
      setVisibleSection(null);
    } else {
      setVisibleSection(section);
    }
  };


  // Function to handle click on container to hide it
  const handleContainerClick = () => {
    setIsMouseInsideContainer(false);
    setVisibleSection(null);
  };


  const wordsToHighlight = [
    'passion for technology', 'commitment to learning', 'problem-solving',
    'logical thinking', 'collaboration', 'Curiosity', 'desire', 'creativity',
    'logical mindset', 'ERASMUS', 'artificial intelligence', 'internet of things',
    'international exchange', 'ambitious', 'driven', 'pursuit of knowledge', 'dedication'
  ];

  const renderCustomArrowPrev = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button onClick={onClickHandler} aria-label={label} className="custom-arrow prev">
        Prev
      </button>
    );

  const renderCustomArrowNext = (onClickHandler, hasNext, label) =>
    hasNext && (
      <button onClick={onClickHandler} aria-label={label} className="custom-arrow next">
        Next
      </button>
    );
    
   // Carousel content for tooltips
   const carouselContent = [
    {
      section: 'scouts',
      content:
        "My journey as a Scouts member has been an enriching odyssey marked by adventure and personal growth. Beginning in fifth grade and extending through tenth grade, my commitment was unfortunately interrupted by the pandemic and increasing academic demands. Nonetheless, over those five pivotal years, I acquired a diverse array of skills and experiences.\n\n From exhilarating hikes to organizing our own events like the Festival of Light, where I played a key role in creating decorations, hosting activities for children, and coordinating team efforts, my time with the Scouts was brimming with activity and learning. These experiences taught me the importance of teamwork, cooperation, and self-confidence, enriching my personal and professional development."
    },
    {
      section: 'access',
      content:
        'As a volunteer in the Acces Oltenia NGO, I had the privilege of working with children facing various difficulties, providing them with emotional support and facilitating recreational activities. In this role, I cultivated essential skills such as empathy and sensitivity in communication.I learned to adapt my communication style to meet the individual needs of the children and to organize activities efficiently, ensuring that each child felt valued and encouraged during our interactions. This experience provided me with a profound perspective on the impact that small gestures of generosity and involvement can have on the lives of others, and it strengthened my belief that every contribution matters in building a more empathetic and united community.',
    },
    {
      section: 'shakespeare',
      content:
        'During my tenure as a guide angel at the local Shakespeare Festival, I attended to the needs of the actors, ensuring their accommodations were comfortable and managing logistical aspects with great attention to detail. Additionally, I engaged in promotional activities, distributing flyers and providing comprehensive information about the festival s schedule and featured plays.This experience has enhanced my attention to detail through managing logistical aspects, I ensured a seamless experience for festival participants and organizational proficiency coordinating various tasks and honed my organizational skills, allowing for efficient task execution and prioritization. Overall, my involvement in the Shakespeare Festival made me better at handling responsibilities, communicate effectively, and contribute positively to organizational objectives.',
    },
  ];
  return (
    <div id="Frame2" className="Frame2">
      <p id="About_Me" className="About_Me">About Me</p>
      <div className="Purple_Square1">
        <div className="myname2">Daria Giotina
          <p className="myname2_underparagraph">Software engineer~
            Computer science major</p>
        </div>
      </div>

      <div className="Purple_Square2">
          <img src="/assets/image_2024-05-12_190546285-removebg-preview.png" className="My_photo2" alt="Daria Giotina" />
        </div>

      <div className="container">
        <div 
          className={`highlightButton ${highlighted ? 'flipped' : ''}`} 
          id="highlightButton" 
          data-back="Highlighted" 
          data-front="Highlight Keywords" 
          onClick={toggleHighlight}
        >
          Highlight Keywords
        </div>
        <div className="scrollable-container">
          <div className="scrollable-paragraph">
            {paragraphs.map((paragraph, index) => (
              <p className={`paragraph${index + 1}_frame2`} key={index}>
                {highlighted ? highlightWords(paragraph, wordsToHighlight) : paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div>
      <p className="paragraph8_frame1">Hover to find more about my experience while volunteering</p>
      <p className="paragraph9_frame1">Slide to find more about my experience while volunteering</p>
      
      
      <div className="Volunteering_icons">

      {!isMobile ? (
            <div className="mobile_icons">
              {/* Button for Scouts */}
              <button
                className="button_scouts"
                onClick={() => handleClick('scouts')}
                onMouseEnter={() => handleMouseEnter('scouts')}
                onMouseLeave={handleMouseLeave}
              ></button>

              {/* Button for Access */}
              <button
                className="button_acces"
                onMouseEnter={() => handleMouseEnter('access')}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('access')}
              ></button>

              {/* Button for Shakespeare */}
              <button
                className="button_shakespeare"
                onMouseEnter={() => handleMouseEnter('shakespeare')}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('shakespeare')}
              ></button>
            </div>
          ) : (
            <Carousel
                 showArrows={true}
                 showStatus={false}
                 showThumbs={false}
                 showIndicators={false}
                 infiniteLoop={false}
                 autoPlay={true}
                 stopOnHover={true}
                 swipeable={false} // Ensure swipeable is enabled for touch devices
                 emulateTouch={true} // Emulate touch behavior
                 renderArrowPrev={renderCustomArrowPrev}
                 renderArrowNext={renderCustomArrowNext}
            >
             {carouselContent.map((item, idx) => (
             <div key={idx} className={`moreinfo_${item.section} visible${idx + 1}`}>
              <div className="scrollable-content-frame2">
             {item.content}
            </div>
            </div>
            ))}
          </Carousel>
          )}
       
        
        <div className="pc_icons">
        {/* Button for Scouts */}
        <button
            className="button_scouts"
            onClick={() => handleClick('scouts')}
            onMouseEnter={() => handleMouseEnter('scouts')}
            onMouseLeave={handleMouseLeave}

          >
          </button>

          {/* Button for Access */}
          <button
            className="button_acces"
            onMouseEnter={() => handleMouseEnter('access')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('access')}
          >
          </button>

           {/* Button for Shakespeare */}
          <button
            className="button_shakespeare"
            onMouseEnter={() => handleMouseEnter('shakespeare')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('shakespeare')}

          >
          </button>
        </div>
         {/* Tooltips for each section */}
         <div>
         {visibleSection === 'scouts' && (
              <div
                className={`moreinfo_Scouts visible1`}
                onMouseEnter={handleContainerMouseEnter}
                onMouseLeave={handleContainerMouseLeave}
                onClick={handleContainerClick}
              >
                <p>My journey as a Scouts member has been an enriching odyssey marked by adventure and personal growth. Beginning in fifth grade and extending through tenth grade, my commitment was unfortunately interrupted by the pandemic and increasing academic demands. Nonetheless, over those five pivotal years, I acquired a diverse array of skills and experiences.</p>
                <p>From exhilarating hikes to organizing our own events like the Festival of Light, where I played a key role in creating decorations, hosting activities for children, and coordinating team efforts, my time with the Scouts was brimming with activity and learning. These experiences taught me the importance of teamwork, cooperation, and self-confidence, enriching my personal and professional development.</p>
              </div>
            )}
        {visibleSection === 'access' && (
              <div
                className={`moreinfo_Acces_Oltenia visible2`}
                onMouseEnter={handleContainerMouseEnter}
                onMouseLeave={handleContainerMouseLeave}
                onClick={handleContainerClick}
             
              >
                <p>As a volunteer in the Acces Oltenia NGO, I had the privilege of working with children facing various difficulties, providing them with emotional support and facilitating recreational activities. In this role, I cultivated essential skills such as empathy and sensitivity in communication.</p>
                <p>I learned to adapt my communication style to meet the individual needs of the children and to organize activities efficiently, ensuring that each child felt valued and encouraged during our interactions. This experience provided me with a profound perspective on the impact that small gestures of generosity and involvement can have on the lives of others, and it strengthened my belief that every contribution matters in building a more empathetic and united community.</p>
              </div>
            )}
            {visibleSection === 'shakespeare' && (
              <div
                className={`moreinfo_Shakespeare visible3`}
                onMouseEnter={handleContainerMouseEnter}
                onMouseLeave={handleContainerMouseLeave}
                onClick={handleContainerClick}
      
              >
                <p>During my tenure as a guide angel at the local Shakespeare Festival, I attended to the needs of the actors, ensuring their accommodations were comfortable and managing logistical aspects with great attention to detail. Additionally, I engaged in promotional activities, distributing flyers and providing comprehensive information about the festival's schedule and featured plays.</p>
                <p>This experience has enhanced my attention to detail through managing logistical aspects, I ensured a seamless experience for festival participants and organizational proficiency coordinating various tasks and honed my organizational skills, allowing for efficient task execution and prioritization.</p>
                <p>Overall, my involvement in the Shakespeare Festival made me better at handling responsibilities, communicate effectively, and contribute positively to organizational objectives.</p>
              </div>
            )}
      </div>

     
    </div>
    </div>
    </div>
  );
};

const highlightWords = (text, words) => {
  let highlightedText = text;
  words.forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    highlightedText = highlightedText.replace(regex, match => `<span class="highlighted">${match}</span>`);
  });
  return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
};

const paragraphs = [
  'As a first-year Computer Science student, I embarked on this academic journey with an unwavering passion for technology and a relentless pursuit of excellence in software engineering and game development. While my professional experience may be nascent, my commitment to learning and growth has been steadfast.',
  'From an early age, I discovered that my mind thrived not on rote memorization, but on understanding the underlying principles. This innate curiosity led me to fall in love with mathematics, where logical thinking became my ally in problem-solving. Curiosity didn t stop at numbers; I found myself disassembling clocks and machinery, driven by a desire to unravel their inner workings. This thirst for understanding eventually converged with a fascination for programming, igniting a career path that I have diligently pursued since the sixth grade.',
  'Through the corridors of a mathematics-informatics high school, I honed my skills, culminating in an outstanding performance in the baccalaureate exams. With scores of 95 and 96 out of 100 in mathematics and informatics respectively, I cemented my foundation for a future in computer science.',
  'Beyond the realm of algorithms and code, I harbor a deep appreciation for creativity. Even in the structured world of programming, I endeavor to infuse my work with imaginative solutions. This creative spark extends beyond the digital domain; as a member of my high school theatre club and now a volunteer at the Shakespeare festival, I immerse myself in art, theatre, and music.',
  'My personality, characterized as ESTJ, underscores my approach to collaboration and problem-solving. An extroverted nature empowers me to articulate my ideas confidently, while a logical mindset enables me to navigate complexity with clarity. I thrive under pressure, leveraging my problem-solving skills to bring order to chaos and ensure that every task is tackled systematically.',
  'Currently, I am enrolled in the ERASMUS+ Blended Intensive Program, broadening my horizons in artificial intelligence, internet of things, and remotely operated underwater vehicles.',
  'In summary, I am an ambitious and driven individual with a relentless pursuit of knowledge and a fervent dedication to excellence. As I continue to chart my course in the world of computer science, I am excited about the endless possibilities that lie ahead and the contributions I can make to the field.'
];

export default Frame2;
