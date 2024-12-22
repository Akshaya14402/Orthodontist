import React from 'react';
import './Socials.css';

const Socials = () => {
  return (
    <div className="socials-container">
      <h1 className="doctor-title">Dr. SINCHAN V KUMAR </h1>
      <img src={`${process.env.PUBLIC_URL}/doctor.jpg`} alt="Doctor" className="doctor-image" />

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><i className="fas fa-phone"></i> <a href="tel:+9176761202121">+91 76761202121</a></p>
        <p><i className="fas fa-envelope"></i> <a href="mailto:dr.johndoe@example.com">dr.johndoe@example.com</a></p>
        <p><i className="fas fa-map-marker-alt"></i> 123 Dental Avenue, Mumbai, Maharashtra, India</p>
      </div>

      <div className="qualifications">
        <h2>Qualifications</h2>

        {/* <div className="skill-section">
          <h3></h3>
          <ul>
            <li>Advanced diagnostic abilities to assess dental and facial structures using X-rays, 3D imaging, and digital scans</li>
            <li>Precise manual dexterity for installing and adjusting orthodontic appliances like braces, aligners, and retainers</li>
            <li>Expert knowledge of dental anatomy, bite mechanics, and facial development</li>
            <li>Ability to develop comprehensive treatment plans for complex dental misalignments</li>
            <li>Proficiency in various orthodontic techniques and emerging technologies</li>
          </ul>
        </div> */}

        <div className="skill-section">
          <h3>Technical Competencies</h3>
          <ul>
            <li>Mastery of digital orthodontic software for treatment planning</li>
            <li>Skill in using advanced imaging technologies</li>
            <li>Understanding of 3D printing applications in orthodontic device creation</li>
            <li>Proficient with computer-aided design (CAD) tools for custom appliance design</li>
          </ul>
        </div>

        <div className="skill-section">
          <h3>Patient Interaction Skills</h3>
          <ul>
            <li>Excellent communication to explain complex treatment procedures</li>
            <li>Empathy and patience, especially when working with children and anxious patients</li>
            <li>Active listening to understand patient concerns and expectations</li>
            <li>Ability to build trust and provide emotional support during long-term treatments</li>
          </ul>
        </div>

        <div className="skill-section">
          <h3>Professional Development Skills</h3>
          <ul>
            <li>Commitment to continuous learning about new orthodontic techniques</li>
            <li>Participation in professional conferences and workshops</li>
            <li>Research and adaptation of emerging medical technologies</li>
            <li>Understanding of current dental and orthodontic research</li>
          </ul>
        </div>

        <div className="skill-section">
          <h3>Interpersonal and Management Skills</h3>
          <ul>
            <li>Collaboration with dental specialists like oral surgeons and dentists</li>
            <li>Team leadership in managing dental practice operations</li>
            <li>Time management and scheduling efficiency</li>
            <li>Patient record management and documentation</li>
          </ul>
        </div>

        <div className="skill-section">
          <h3>Analytical and Problem-Solving Skills</h3>
          <ul>
            <li>Critical thinking to develop innovative treatment approaches</li>
            <li>Ability to diagnose and resolve complex dental alignment challenges</li>
            <li>Strategic treatment planning</li>
            <li>Adaptability in modifying treatment plans based on patient progress</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Socials;
