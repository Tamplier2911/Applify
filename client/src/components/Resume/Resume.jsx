// import "./Resume.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";

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
  ResumeProgressText,
} from "./ResumeStyles";

// resume for download
import resEng from "../../assets/pdf/Artem_Nikolaiev_CV_ENG.pdf";
import resRus from "../../assets/pdf/Artem_Nikolaiev_CV_RUS.pdf";
import resUkr from "../../assets/pdf/Artem_Nikolaiev_CV_UKR.pdf";

// component constants
import resumeData from "./ResumeConstants";

const Resume = ({ lang }) => {
  const {
    header: { name, occupation, image },
    info: {
      about: { aboutHeader, aboutText },
      details: {
        detailsHeader,
        birthTitle,
        birthDate,
        nationalityTitle,
        nationality,
        addressTitle,
        address,
      },
      contacts: { contactsHeader, email, phone, github, twitter },
    },
    main: {
      experience: { experienceHeader, experienceTitle, experienceText },
      education: { educationHeader, educationCollection },
      skills: {
        skillsHeaderFront,
        skillListFront,
        skillsHeaderBack,
        skillListBack,
      },
      interests: { interestsHeader, interestSubjects },
    },
    downloadLinks: { linkDescriptions },
  } = resumeData[lang];

  return (
    <ResumeContainer lang={lang}>
      <ResumeHeader animateIn={"bounceInUp"} animateOnce={true}>
        <ResumeHeaderImgContainer>
          <ResumeHeaderImg alt="author" src={image} />
        </ResumeHeaderImgContainer>
        <ResumeHeaderTitle>
          <ResumeHeaderName>{name}</ResumeHeaderName>
          <ResumeHeaderOccupation>{occupation}</ResumeHeaderOccupation>
        </ResumeHeaderTitle>
      </ResumeHeader>
      <ResumeInfo animateIn={"bounceInRight"} animateOnce={true}>
        <ResumeInfoAbout>
          <ResumeBlackHeader>{aboutHeader}</ResumeBlackHeader>
          <ResumeSubTitle>{aboutText}</ResumeSubTitle>
        </ResumeInfoAbout>
        <ResumeInfoDetails>
          <ResumeBlackHeader>{detailsHeader}</ResumeBlackHeader>
          <ResumeInfoWrapper>
            <ResumeBlueHeader>{birthTitle}</ResumeBlueHeader>
            <ResumeSubTitle>{birthDate}</ResumeSubTitle>
          </ResumeInfoWrapper>
          <ResumeInfoWrapper>
            <ResumeBlueHeader>{nationalityTitle}</ResumeBlueHeader>
            <ResumeSubTitle>{nationality}</ResumeSubTitle>
          </ResumeInfoWrapper>
          <ResumeInfoWrapper>
            <ResumeBlueHeader>{addressTitle}</ResumeBlueHeader>
            <ResumeSubTitle>{address}</ResumeSubTitle>
          </ResumeInfoWrapper>
        </ResumeInfoDetails>
        <ResumeInfoContacts>
          <ResumeBlackHeader>{contactsHeader}</ResumeBlackHeader>
          <ResumeInfoContacstWrapper>
            <ResumeMailSVG />
            <ResumeSubTitle>{email}</ResumeSubTitle>
          </ResumeInfoContacstWrapper>
          <ResumeInfoContacstWrapper>
            <ResumePhoneSVG />
            <ResumeSubTitle>{phone}</ResumeSubTitle>
          </ResumeInfoContacstWrapper>
          <ResumeInfoContacstWrapper>
            <ResumeChromeSVG />
            <ResumeInfoContacsLink
              href={github}
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </ResumeInfoContacsLink>
          </ResumeInfoContacstWrapper>

          <ResumeInfoContacstWrapper>
            <ResumeTwitterSVG />
            <ResumeInfoContacsLink
              href={twitter}
              rel="noopener noreferrer"
              target="_blank"
            >
              Twitter
            </ResumeInfoContacsLink>
          </ResumeInfoContacstWrapper>
        </ResumeInfoContacts>
      </ResumeInfo>
      <ResumeMain animateIn={"bounceInLeft"} animateOnce={true}>
        <ResumeMainExperience>
          <ResumeBlackHeader>{experienceHeader}</ResumeBlackHeader>
          <ResumeBlueHeader>{experienceTitle}</ResumeBlueHeader>
          <ResumeSubTitle>{experienceText}</ResumeSubTitle>
        </ResumeMainExperience>
        <ResumeMainEducation>
          <ResumeBlackHeader>{educationHeader}</ResumeBlackHeader>
          <ResumeMainEducationOrg>
            <ResumeBlueHeader>
              {educationCollection[0].educationSubject}
            </ResumeBlueHeader>
            <ResumeMainEducationOrgDate>
              {educationCollection[0].educationDate}
            </ResumeMainEducationOrgDate>
            <ResumeMainEducationOrgName>
              {educationCollection[0].educationOrg}
            </ResumeMainEducationOrgName>
          </ResumeMainEducationOrg>
          <ResumeMainEducationOrg>
            <ResumeBlueHeader>
              {educationCollection[1].educationSubject}
            </ResumeBlueHeader>
            <ResumeMainEducationOrgDate>
              {educationCollection[1].educationDate}
            </ResumeMainEducationOrgDate>
            <ResumeMainEducationOrgName>
              {educationCollection[1].educationOrg}
            </ResumeMainEducationOrgName>
          </ResumeMainEducationOrg>
        </ResumeMainEducation>
        <ResumeSkills>
          <ResumeMainSkills>
            <ResumeBlackHeader>{skillsHeaderFront}</ResumeBlackHeader>
            <ResumeMainSkillsProg>
              <ResumeMainSkillsProgWrapper>
                <ResumeProgressContainer
                  percentage={skillListFront[0].skillPercentage}
                >
                  <ResumeProgressCircle>
                    <ResumeProgressText>
                      {skillListFront[0].skillPercentage}%
                    </ResumeProgressText>
                  </ResumeProgressCircle>
                </ResumeProgressContainer>
                <ResumeSubTitle>
                  {skillListFront[0].skillSubject}
                </ResumeSubTitle>
              </ResumeMainSkillsProgWrapper>
              <ResumeMainSkillsProgWrapper>
                <ResumeProgressContainer
                  percentage={skillListFront[1].skillPercentage}
                >
                  <ResumeProgressCircle>
                    <ResumeProgressText>
                      {skillListFront[1].skillPercentage}%
                    </ResumeProgressText>
                  </ResumeProgressCircle>
                </ResumeProgressContainer>
                <ResumeSubTitle>
                  {skillListFront[1].skillSubject}
                </ResumeSubTitle>
              </ResumeMainSkillsProgWrapper>
            </ResumeMainSkillsProg>
          </ResumeMainSkills>
          <ResumeMainSkills>
            <ResumeBlackHeader>{skillsHeaderBack}</ResumeBlackHeader>
            <ResumeMainSkillsProg>
              <ResumeMainSkillsProgWrapper>
                <ResumeProgressContainer
                  percentage={skillListBack[0].skillPercentage}
                >
                  <ResumeProgressCircle>
                    <ResumeProgressText>
                      {skillListBack[0].skillPercentage}%
                    </ResumeProgressText>
                  </ResumeProgressCircle>
                </ResumeProgressContainer>
                <ResumeSubTitle>{skillListBack[0].skillSubject}</ResumeSubTitle>
              </ResumeMainSkillsProgWrapper>
              <ResumeMainSkillsProgWrapper>
                <ResumeProgressContainer
                  percentage={skillListBack[1].skillPercentage}
                >
                  <ResumeProgressCircle>
                    <ResumeProgressText>
                      {skillListBack[1].skillPercentage}%
                    </ResumeProgressText>
                  </ResumeProgressCircle>
                </ResumeProgressContainer>
                <ResumeSubTitle>{skillListBack[1].skillSubject}</ResumeSubTitle>
              </ResumeMainSkillsProgWrapper>
            </ResumeMainSkillsProg>
          </ResumeMainSkills>
        </ResumeSkills>
        <ResumeMainInterests>
          <ResumeBlackHeader>{interestsHeader}</ResumeBlackHeader>
          <ResumeMainInterestsCover>
            <ResumeMainInterestsWrapper>
              <ResumeCorrectSVG />
              <ResumeSubTitle>
                {interestSubjects[0].interestDescription}
              </ResumeSubTitle>
            </ResumeMainInterestsWrapper>
            <ResumeMainInterestsWrapper>
              <ResumeCorrectSVG />
              <ResumeSubTitle>
                {interestSubjects[1].interestDescription}
              </ResumeSubTitle>
            </ResumeMainInterestsWrapper>
            <ResumeMainInterestsWrapper>
              <ResumeCorrectSVG />
              <ResumeSubTitle>
                {interestSubjects[2].interestDescription}
              </ResumeSubTitle>
            </ResumeMainInterestsWrapper>
            <ResumeMainInterestsWrapper>
              <ResumeCorrectSVG />
              <ResumeSubTitle>
                {interestSubjects[3].interestDescription}
              </ResumeSubTitle>
            </ResumeMainInterestsWrapper>
          </ResumeMainInterestsCover>
        </ResumeMainInterests>
      </ResumeMain>
      <ResumeLinksContainer animateIn={"bounceInDown"} animateOnce={true}>
        <ResumeDownloadLink href={resEng} download>
          {linkDescriptions[0].text}
        </ResumeDownloadLink>
        <ResumeDownloadLink href={resRus} download>
          {linkDescriptions[1].text}
        </ResumeDownloadLink>
        <ResumeDownloadLink href={resUkr} download>
          {linkDescriptions[2].text}
        </ResumeDownloadLink>
      </ResumeLinksContainer>
    </ResumeContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
});

export default connect(mapStateToProps)(Resume);
