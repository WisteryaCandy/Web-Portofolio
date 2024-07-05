import './frame3.css';
import React from 'react';

const Frame3 = () => {
    return (
        <div className="Frame3">
            {/* Frame 3 Technical Competencies */}
            <div id="Frame3" className="Imagine_movbg">
                <div className="Title1">Competencies</div>
                <div className="Title2">Technical Competencies</div>
                <div className="paragraph1_frame3">
                    Throughout my journey in computer science, I've gained proficiency in various technical skills. While I don't consider myself a master in every area, I'm confident in my ability to excel in roles that demand these competencies. Moreover, I'm dedicated to continually enhancing my skill set as required.
                </div>

                <div className='Border'>
                <div className="Border1">
                    <img src="/assets/nn.png" className="border1_circle" alt="programming icon" />
                    <p className="Title3">Languages</p>
                    <p className="paragraph2_frame3">C++, C, C#, HTML, CSS, JavaScript, React, SFML</p>
                </div>

                <div className="Border2">
                    <img src="/assets/courses.png" className="border2_circle" alt="courses icon" />
                    <p className="Title4">Relevant Courses</p>
                    <p className="paragraph3_frame3">Linear Algebra and Geometry, Computer Programming, Algorithm Design, Logical Design I, Logical Design II</p>
                </div>

                <div className="Border3">
                    <img src="/assets/nn.png" className="border3_circle" alt="interests icon" />
                    <p className="Title5">Interests</p>
                    <p className="paragraph4_frame3">Software Engineering, Software Development, Game development, Web development</p>
                </div>
                </div>

            </div>
        </div>
    );
};

export default Frame3;
