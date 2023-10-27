import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>

        <div className="about_content">
          {/* <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div> */}

          <p>
          My name is Saurabh Kumar and I am a Full Stack Developer, with a passion for building digital products, I am constantly seeking new challenges and opportunities to enhance my skills and knowledge. I hold a Bachelor's degree in Electrical and Electronics Engineering (B.tech) and have core expertise in the MERN (Node.js, Express.js, MongoDB, React) stack technology.

          With my strong technical background and ability to quickly learn new technologies, I have a proven track record of delivering high-quality software solutions that improve everyday experiences for users. I am always looking for new ways to expand my knowledge and improve my skills, whether through online courses or personal projects.
          </p>


          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
