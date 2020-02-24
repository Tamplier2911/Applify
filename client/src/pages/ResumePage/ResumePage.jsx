import "./ResumePage.scss";
import React from "react";

// image
import portrait from "../../assets/jpeg/profile-portrait.jpg";

// JS Rendering CSS
import {
  ResumePageBlackHeader,
  ResumePageBlueHeader,
  ResumePageSubTitle
} from "./ResumePageStyles";

// make separe component for:
// each blue title
// each black title
// each contact and interest link
// each circle progress bar
// title possibly too

/*
<a href="/images/myw3schoolsimage.jpg" download>
  <img src="/images/myw3schoolsimage.jpg" alt="W3Schools">
</a>
*/

const ResumePage = props => {
  console.log(props);
  return (
    <div className="resume-page">
      <div className="resume-page__header">
        <div className="resume-page__header--image-container">
          <img
            alt="author"
            src={portrait}
            className="resume-page__header--image"
          ></img>
        </div>
        <div className="resume-page__header--title">
          <h2 className="resume-page__header--name">Artem Nikolaiev</h2>
          <h4 className="resume-page__header--occupation">
            Front-End Engineer
          </h4>
        </div>
      </div>
      <div className="resume-page__info">
        <div className="resume-page__info--about">
          <ResumePageBlackHeader>About Me</ResumePageBlackHeader>
          <ResumePageSubTitle>
            My passion is technologies and self-education, looking forward a
            long term productive partnership.
          </ResumePageSubTitle>
        </div>
        <div className="resume-page__info--details">
          <ResumePageBlackHeader>Personal Details</ResumePageBlackHeader>
          <ResumePageBlueHeader>Birth Date</ResumePageBlueHeader>
          <ResumePageSubTitle>15 / 03 / 1990</ResumePageSubTitle>
          <ResumePageBlueHeader>Nationality</ResumePageBlueHeader>
          <ResumePageSubTitle>Ukrainian</ResumePageSubTitle>
          <ResumePageBlueHeader>Address</ResumePageBlueHeader>
          <ResumePageSubTitle>
            Avdiivka, Donetska Oblast, Ukraine
          </ResumePageSubTitle>
        </div>
        <div className="resume-page__info--contact">
          <ResumePageBlackHeader>Contact</ResumePageBlackHeader>
          <div className="resume-page__info--contact-wrapper">
            <div className="resume-page__info--contact-icon"></div>
            <ResumePageSubTitle>artyom.nikolaev@yahoo.com</ResumePageSubTitle>
          </div>
          <div className="resume-page__info--contact-wrapper">
            <div className="resume-page__info--contact-icon"></div>
            <ResumePageSubTitle>+38 093 151 21 28</ResumePageSubTitle>
          </div>
          <div className="resume-page__info--contact-wrapper">
            <div className="resume-page__info--contact-icon"></div>
            <a
              href="https://github.com/Tamplier2911"
              className="resume-page__info--contact-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </div>

          <div className="resume-page__info--contact-wrapper">
            <div className="resume-page__info--contact-icon"></div>
            <a
              href="https://twitter.com/ArtyomNikolayev"
              className="resume-page__info--contact-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="resume-page__main">
        <div className="resume-page__main--experience">
          <ResumePageBlackHeader>Professional Experience</ResumePageBlackHeader>
          <ResumePageBlueHeader>Junior Front-end Engineer</ResumePageBlueHeader>
          <ResumePageSubTitle>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo ea
            corrupti commodi! Quos voluptates minus asperiores sequi, est iste
            magni molestias aperiam modi explicabo impedit. Facere quis sed
            quibusdam dignissimos! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque rerum nemo nisi, voluptas necessitatibus id,
            modi sint, ab voluptatum iste tempora delectus recusandae deserunt
            quaerat minima iusto blanditiis quod doloremque.
          </ResumePageSubTitle>
        </div>
        <div className="resume-page__main--education">
          <ResumePageBlackHeader>Education</ResumePageBlackHeader>
          <div className="resume-page__main--education-org">
            <ResumePageBlueHeader>Computer Science 50</ResumePageBlueHeader>
            <div className="resume-page__main--education-org-date">
              2018 - 2019
            </div>
            <div className="resume-page__main--education-org-name">
              edx.org - online courses
            </div>
          </div>
          <div className="resume-page__main--education-org">
            <ResumePageBlueHeader>
              Bachelor of Restaurant and Hotel Business
            </ResumePageBlueHeader>
            <div className="resume-page__main--education-org-date">
              2009 - 2014
            </div>
            <div className="resume-page__main--education-org-name">
              Donetsk National University of Economics and Trade
            </div>
          </div>
        </div>
        <div className="resume-page__main--skills">
          <div className="resume-page__main--skills-front">
            <ResumePageBlackHeader>Front-end Skills</ResumePageBlackHeader>
            <div className="resume-page__main--skills-front-progress">
              <div className="resume-page__main--skills-front-progress-wrap">
                <div className="resume-page__main--skills-front-circleprogress"></div>
                <ResumePageSubTitle>HTML CSS JS</ResumePageSubTitle>
              </div>
              <div className="resume-page__main--skills-front-progress-wrap">
                <div className="resume-page__main--skills-front-circleprogress"></div>
                <ResumePageSubTitle>React.js</ResumePageSubTitle>
              </div>
            </div>
          </div>
          <div className="resume-page__main--skills-back">
            <ResumePageBlackHeader>Back-end Skills</ResumePageBlackHeader>
            <div className="resume-page__main--skills-front-progress">
              <div className="resume-page__main--skills-front-progress-wrap">
                <div className="resume-page__main--skills-back-circleprogress"></div>
                <ResumePageSubTitle>Node.js / Express</ResumePageSubTitle>
              </div>
              <div className="resume-page__main--skills-front-progress-wrap">
                <div className="resume-page__main--skills-back-circleprogress"></div>
                <ResumePageSubTitle>MongoDB / Mongoose</ResumePageSubTitle>
              </div>
            </div>
          </div>
        </div>
        <div className="resume-page__main--interesets">
          <ResumePageBlackHeader>Interesets</ResumePageBlackHeader>
          <div className="resume-page__main--interesets-cover">
            <div className="resume-page__main--interesets-wrapper">
              <div className="resume-page__main--interesets-icon"></div>
              <ResumePageSubTitle>Music &amp; Movies</ResumePageSubTitle>
            </div>
            <div className="resume-page__main--interesets-wrapper">
              <div className="resume-page__main--interesets-icon"></div>
              <ResumePageSubTitle>Technologies</ResumePageSubTitle>
            </div>
            <div className="resume-page__main--interesets-wrapper">
              <div className="resume-page__main--interesets-icon"></div>
              <ResumePageSubTitle>Reading &amp; Education</ResumePageSubTitle>
            </div>
            <div className="resume-page__main--interesets-wrapper">
              <div className="resume-page__main--interesets-icon"></div>
              <ResumePageSubTitle>
                Sitting with cocoa covered in blanket
              </ResumePageSubTitle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
