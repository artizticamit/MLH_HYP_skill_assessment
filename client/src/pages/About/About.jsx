import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <Navbar />
      <h1 className="about-heading">About</h1>
      <div className="about-body">
        Welcome to our innovative web application designed to empower users in
        their journey to mastery through skill assessment and personalized
        learning recommendations. Whether you're a seasoned developer looking to
        polish your skills or a beginner eager to learn, our platform offers a
        comprehensive suite of tools to guide you every step of the way. <br />
        <br />
        <br />
        <b>How It Works Skill Assessment:</b>
        <p>
          Engage in interactive quizzes and coding challenges across a wide
          range of topics including programming languages, algorithms, data
          structures, and more.
        </p>
        Personalized Learning Recommendations: Receive tailored recommendations
        based on your assessment results. These recommendations suggest courses,
        tutorials, and projects that match your current skill level and learning
        goals. Integration with Learning APIs: We seamlessly integrate with
        leading learning platforms' APIs to provide you with the latest and most
        relevant course recommendations available online. This ensures you have
        access to a curated selection of educational resources at your{" "}
        <fingertips className="br">
          <br />
          <br />
        </fingertips>
        <b>Meet Our Team:</b>
        <p>
          Our dedicated team brings together expertise in technology and
          education to create a platform that revolutionizes the learning
          experience:
        </p>
        <div className="owners">
          <div className="amit">
            AMIT KUMAR
            
            <div className="linkedin"><a href="https://www.linkedin.com/in/amitkumar65">LinkedIN</a></div>
            <div className="git"><a href="https://github.com/artizticamit">GitHub</a></div>
    
          </div>
          <div className="poorvi">
            POORVI BAJPAI 
            <div className="linkedin"><a href="https://www.linkedin.com/in/poorvi-bajpai-03248b26b">LinkedIN</a></div>
            <div className="git"><a href="https://github.com/poorvibajpai">GitHub</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
