// import "./Resume.scss";
import React from "react";

// JS Rendering CSS
import {
  ResumeContainer,
  ResumeHeader,
  ResumeHeaderImgContainer,
  ResumeHeaderImg,
  ResumeHeaderTitle,
  ResumeHeaderName,
  ResumeHeaderOccupation,
  ResumeInfo,
  ResumeInfoAbout,
  ResumeInfoDetails,
  ResumeInfoWrapper,
  ResumeInfoContacts,
  ResumeInfoContacstWrapper,
  ResumeInfoContacsLink,
  ResumeMain,
  ResumeMainExperience,
  ResumeMainEducation,
  ResumeMainEducationOrg,
  ResumeMainEducationOrgDate,
  ResumeMainEducationOrgName,
  ResumeSkills,
  ResumeMainSkills,
  ResumeMainSkillsProg,
  ResumeMainSkillsProgWrapper,
  ResumeMainInterests,
  ResumeMainInterestsCover,
  ResumeMainInterestsWrapper,
  ResumeLinksContainer,
  ResumeDownloadLink,
  ResumeBlackHeader,
  ResumeBlueHeader,
  ResumeSubTitle,
  ResumeMailSVG,
  ResumePhoneSVG,
  ResumeChromeSVG,
  ResumeTwitterSVG,
  ResumeCorrectSVG,
  ResumeProgressContainer,
  ResumeProgressCircle,
  ResumeProgressText
} from "./ResumeStyles";

// image
import portrait from "../../assets/jpeg/profile-portrait.jpg";

import resEng from "../../assets/pdf/Artem Nikolaiev CV.pdf";

const Resume = () => {
  return (
    <ResumeContainer>
      <ResumeHeader>
        <ResumeHeaderImgContainer>
          <ResumeHeaderImg alt="author" src={portrait} />
        </ResumeHeaderImgContainer>
        <ResumeHeaderTitle>
          <ResumeHeaderName>Artem Nikolaiev</ResumeHeaderName>
          <ResumeHeaderOccupation>Front-End Engineer</ResumeHeaderOccupation>
        </ResumeHeaderTitle>
      </ResumeHeader>
      <ResumeInfo>
        <ResumeInfoAbout>
          <ResumeBlackHeader>About Me</ResumeBlackHeader>
          <ResumeSubTitle>
            My passion is technologies and self-education, looking forward a
            long-term productive partnership.
          </ResumeSubTitle>
        </ResumeInfoAbout>
        <ResumeInfoDetails>
          <ResumeBlackHeader>Personal Details</ResumeBlackHeader>
          <ResumeInfoWrapper>
            <ResumeBlueHeader>Birth Date</ResumeBlueHeader>
            <ResumeSubTitle>15 / 03 / 1990</ResumeSubTitle>
          </ResumeInfoWrapper>
          <ResumeInfoWrapper>
            <ResumeBlueHeader>Nationality</ResumeBlueHeader>
            <ResumeSubTitle>Ukrainian</ResumeSubTitle>
          </ResumeInfoWrapper>
          <ResumeInfoWrapper>
            <ResumeBlueHeader>Address</ResumeBlueHeader>
            <ResumeSubTitle>Avdiivka, Donetska Oblast, Ukraine</ResumeSubTitle>
          </ResumeInfoWrapper>
        </ResumeInfoDetails>
        <ResumeInfoContacts>
          <ResumeBlackHeader>Contact</ResumeBlackHeader>
          <ResumeInfoContacstWrapper>
            <ResumeMailSVG />
            <ResumeSubTitle>artyom.nikolaev@yahoo.com</ResumeSubTitle>
          </ResumeInfoContacstWrapper>
          <ResumeInfoContacstWrapper>
            <ResumePhoneSVG />
            <ResumeSubTitle>+38 093 151 21 28</ResumeSubTitle>
          </ResumeInfoContacstWrapper>
          <ResumeInfoContacstWrapper>
            <ResumeChromeSVG />
            <ResumeInfoContacsLink
              href="https://github.com/Tamplier2911"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </ResumeInfoContacsLink>
          </ResumeInfoContacstWrapper>

          <ResumeInfoContacstWrapper>
            <ResumeTwitterSVG />
            <ResumeInfoContacsLink
              href="https://twitter.com/ArtyomNikolayev"
              rel="noopener noreferrer"
              target="_blank"
            >
              Twitter
            </ResumeInfoContacsLink>
          </ResumeInfoContacstWrapper>
        </ResumeInfoContacts>
      </ResumeInfo>
      <ResumeMain>
        <ResumeMainExperience>
          <ResumeBlackHeader>Professional Experience</ResumeBlackHeader>
          <ResumeBlueHeader>Junior Front-end Engineer</ResumeBlueHeader>
          <ResumeSubTitle>
            My experience in web development mainly comes from self-education
            and independant projects, that I love to challenge my self with.
            Having 12+ month of experience studing and building web solutions, I
            have developed a strong passion for this domain. To demonstrate my
            learning curve, below I have provided a git link, which you can use
            to review the projects I have built along the way. This is my first
            application for Junior Front-end dev. position, and I am excited to
            put my skill to the test as a part of growing, ambitious team.
          </ResumeSubTitle>
        </ResumeMainExperience>
        <ResumeMainEducation>
          <ResumeBlackHeader>Education</ResumeBlackHeader>
          <ResumeMainEducationOrg>
            <ResumeBlueHeader>Computer Science 50</ResumeBlueHeader>
            <ResumeMainEducationOrgDate>2018 - 2019</ResumeMainEducationOrgDate>
            <ResumeMainEducationOrgName>
              edx.org - online courses
            </ResumeMainEducationOrgName>
          </ResumeMainEducationOrg>
          <ResumeMainEducationOrg>
            <ResumeBlueHeader>
              Bachelor of Restaurant and Hotel Business
            </ResumeBlueHeader>
            <ResumeMainEducationOrgDate>2009 - 2014</ResumeMainEducationOrgDate>
            <ResumeMainEducationOrgName>
              Donetsk National University of Economics and Trade
            </ResumeMainEducationOrgName>
          </ResumeMainEducationOrg>
        </ResumeMainEducation>
        <ResumeSkills>
          <ResumeMainSkills>
            <ResumeBlackHeader>Front-end Skills</ResumeBlackHeader>
            <ResumeMainSkillsProg>
              <ResumeMainSkillsProgWrapper>
                {/* <div className="resume-page__main--skills-front-circleprogress"></div> */}
                <ResumeProgressContainer percentage="76">
                  <ResumeProgressCircle>
                    <ResumeProgressText>76%</ResumeProgressText>
                  </ResumeProgressCircle>
                </ResumeProgressContainer>
                <ResumeSubTitle>HTML / CSS / JS</ResumeSubTitle>
              </ResumeMainSkillsProgWrapper>
              <ResumeMainSkillsProgWrapper>
                <ResumeProgressContainer percentage="70">
                  <ResumeProgressCircle>
                    <ResumeProgressText>70%</ResumeProgressText>
                  </ResumeProgressCircle>
                </ResumeProgressContainer>
                <ResumeSubTitle>React.js</ResumeSubTitle>
              </ResumeMainSkillsProgWrapper>
            </ResumeMainSkillsProg>
          </ResumeMainSkills>
          <ResumeMainSkills>
            <ResumeBlackHeader>Back-end Skills</ResumeBlackHeader>
            <ResumeMainSkillsProg>
              <ResumeMainSkillsProgWrapper>
                <ResumeProgressContainer percentage="50">
                  <ResumeProgressCircle>
                    <ResumeProgressText>50%</ResumeProgressText>
                  </ResumeProgressCircle>
                </ResumeProgressContainer>
                <ResumeSubTitle>Node.js / Express</ResumeSubTitle>
              </ResumeMainSkillsProgWrapper>
              <ResumeMainSkillsProgWrapper>
                <ResumeProgressContainer percentage="50">
                  <ResumeProgressCircle>
                    <ResumeProgressText>50%</ResumeProgressText>
                  </ResumeProgressCircle>
                </ResumeProgressContainer>
                <ResumeSubTitle>MongoDB / Mongoose</ResumeSubTitle>
              </ResumeMainSkillsProgWrapper>
            </ResumeMainSkillsProg>
          </ResumeMainSkills>
        </ResumeSkills>
        <ResumeMainInterests>
          <ResumeBlackHeader>Interesets</ResumeBlackHeader>
          <ResumeMainInterestsCover>
            <ResumeMainInterestsWrapper>
              <ResumeCorrectSVG />
              <ResumeSubTitle>Music &amp; Movies</ResumeSubTitle>
            </ResumeMainInterestsWrapper>
            <ResumeMainInterestsWrapper>
              <ResumeCorrectSVG />
              <ResumeSubTitle>Technologies</ResumeSubTitle>
            </ResumeMainInterestsWrapper>
            <ResumeMainInterestsWrapper>
              <ResumeCorrectSVG />
              <ResumeSubTitle>Reading &amp; Education</ResumeSubTitle>
            </ResumeMainInterestsWrapper>
            <ResumeMainInterestsWrapper>
              <ResumeCorrectSVG />
              <ResumeSubTitle>
                Sitting with cocoa covered in blanket
              </ResumeSubTitle>
            </ResumeMainInterestsWrapper>
          </ResumeMainInterestsCover>
        </ResumeMainInterests>
      </ResumeMain>
      <ResumeLinksContainer>
        <ResumeDownloadLink href={resEng}>Download English</ResumeDownloadLink>
        <ResumeDownloadLink href={resEng}>Download Russian</ResumeDownloadLink>
        <ResumeDownloadLink href={resEng}>
          Download Ukrainian
        </ResumeDownloadLink>
      </ResumeLinksContainer>
    </ResumeContainer>
  );
};

export default Resume;
