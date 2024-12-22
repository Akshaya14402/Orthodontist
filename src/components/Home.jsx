import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const slides = document.querySelectorAll('.slide');
    let currentSlideIndex = 0;

    function updateSlides() {
      slides.forEach((slide, index) => {
        slide.classList.remove('current', 'next', 'prev');

        if (index === currentSlideIndex) {
          slide.classList.add('current');
        } else if (index === (currentSlideIndex + 1) % slides.length) {
          slide.classList.add('next');
        } else if (index === (currentSlideIndex - 1 + slides.length) % slides.length) {
          slide.classList.add('prev');
        }
      });
    }


    function nextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      updateSlides();
    }

    updateSlides(); 
    const intervalId = setInterval(nextSlide, 3000);

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className="home-container">
      <img src="background.jpg" alt="Background" className="background-image" />

      <div className="doctor-info">
        <div className="doctor-image-container">
          <img src={`${process.env.PUBLIC_URL}/doctor.jpg`} alt="Doctor" className="doctor-image" />
        </div>
        <h3 className="doctor-name">Dr. SINCHAN V KUMAR <p className="specialization">B.D.S, M.D.S</p> </h3>
       
      </div>

      <div className="blank-space"></div>

      <div className="home-content">
        <h1 className="your-healthy-smile">Your healthy smile starts here</h1>
        <h2 className="dental-clinic">ORTHODONTIST</h2>
        <Link to="/socials">
        <button>Get in touch <i className="fas fa-phone"></i></button> 
        </Link>
           {/* <i className="fas fa-envelope"></i></p> */}

        <div className="expertise-container">
          <h1 className="expertise-title">ABOUT ME</h1>
          <h5 className="ongoing-education">
          As an orthodontic professional, I am dedicated to transforming smiles and improving patients' oral health through specialized care. My expertise lies in addressing dental and facial irregularities using advanced diagnostic and treatment methods. I am well-versed in a wide range of corrective techniques, including braces and aligners, with particular skill in treating patients of all ages. <br></br><br></br>
My practice goes beyond standard orthodontic care, extending to complex cases that may require interdisciplinary collaboration. I work closely with oral surgeons to manage challenging situations involving jaw alignments and facial asymmetries, ensuring comprehensive treatment strategies. By leveraging state-of-the-art technologies such as 3D imaging and digital scanning, I develop precise and personalized treatment plans that prioritize both functional and aesthetic outcomes.<br></br><br></br>
Patient experience is at the heart of my approach. I strive to create a supportive and comfortable environment, guiding each individual through their orthodontic journey with empathy and expertise. My commitment to ongoing professional development means I continuously refine my skills and incorporate the latest advancements in orthodontic care, guaranteeing that my patients receive the most innovative and effective treatments available.
          </h5>
        </div>
        <div className="clinical-container">
          <h1 className="clinical-skills">CLINICAL SKILLS</h1>
          <div className="clinical-description">
          <ul>
            <li>Advanced diagnostic abilities to assess dental and facial structures using X-rays, 3D imaging, and digital scans</li>
            <li>Precise manual dexterity for installing and adjusting orthodontic appliances like braces, aligners, and retainers</li>
            <li>Expert knowledge of dental anatomy, bite mechanics, and facial development</li>
            <li>Ability to develop comprehensive treatment plans for complex dental misalignments</li>
            <li>Proficiency in various orthodontic techniques and emerging technologies</li>
          </ul>
          </div>
        </div>

        <h2 className="our-services">OUR SERVICES</h2>

        <div className="image-container">
        <div className="slide">
            <img src="GrowthModulation.jpeg" alt="Service 1" />
            <p className="image-description">Growth Modulation Appliance</p>
          </div>
          <div className="slide">
            <img src="Exams.jpg" alt="Service 2" />
            <p className="image-description">Comprehensive Exams</p>
          </div>
          <div className="slide">
            <img src="Restorations.jpg" alt="Service 3" />
            <p className="image-description">Tooth-Saving Restorations</p>
          </div>
          <div className="slide">
            <img src="Makeovers.jpg" alt="Service 4" />
            <p className="image-description">Confident Smile Makeovers</p>
          </div>
          <div className="slide">
            <img src="aligners.jpeg" alt="Service 5" />
            <p className="image-description">Clear Aligners</p>
          </div>
          <div className="slide">
            <img src="digitalplanning.jpeg" alt="Service 6" />
            <p className="image-description">Orthognathic Surgical Digiplanning</p>
          </div>
          <div className="slide">
            <img src="Orthognathic.webp" alt="Service 7" />
            <p className="image-description">Orthognathic Surgical Wafers</p>
          </div>
          <div className="slide">
            <img src="smileline.png" alt="Service 8" />
            <p className="image-description">Smile Line Approach</p>
            
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Home;
