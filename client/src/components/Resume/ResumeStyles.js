import styled, { css } from "styled-components";

import { ReactComponent as MailSVG } from "../../assets/svg/resume-mail.svg";
import { ReactComponent as PhoneSVG } from "../../assets/svg/resume-telephone.svg";
import { ReactComponent as ChromeSVG } from "../../assets/svg/resume-chrome.svg";
import { ReactComponent as TwitterSVG } from "../../assets/svg/resume-twitter.svg";
import { ReactComponent as CorrectSVG } from "../../assets/svg/resume-correct.svg";

const SVGStyles = css`
  fill: var(--cl-font-resume);
  height: 2.5rem;
  width: 2.5rem;
`;

const getProgressPercentage = props => {
  let { percentage } = props;
  percentage = Number(percentage);
  if (percentage === 100) {
    return `background-image: -webkit-linear-gradient(left, #028cd5 50%, transparent 50%), -webkit-linear-gradient(right, #028cd5 50%, #ddd 50%);`;
  } else if (percentage > 90 && percentage <= 100) {
    return `background-image: -webkit-linear-gradient(left, #028cd5 50%, transparent 50%), -webkit-linear-gradient(144deg, #028cd5 50%, #ddd 50%);`;
  } else if (percentage > 70 && percentage <= 80) {
    return `background-image: -webkit-linear-gradient(left, #028cd5 50%, transparent 50%), -webkit-linear-gradient(108deg, #028cd5 50%, #ddd 50%);`;
  } else if (percentage > 60 && percentage <= 70) {
    return `background-image: -webkit-linear-gradient(left, #028cd5 50%, transparent 50%), -webkit-linear-gradient(72deg, #028cd5 50%, #ddd 50%);`;
  } else if (percentage > 50 && percentage <= 60) {
    return `background-image: -webkit-linear-gradient(left, #028cd5 50%, transparent 50%), -webkit-linear-gradient(36deg, #028cd5 50%, #ddd 50%);`;
  } else if (percentage > 40 && percentage <= 50) {
    return `background-image: -webkit-linear-gradient(right, #ddd 50%, transparent 50%), -webkit-linear-gradient(left, #028cd5 50%, #ddd 50%);`;
  } else if (percentage > 30 && percentage <= 40) {
    return `background-image: -webkit-linear-gradient(144deg, #ddd 50%, transparent 50%), -webkit-linear-gradient(left, #028cd5 50%, #ddd 50%);`;
  } else if (percentage > 20 && percentage <= 30) {
    return `background-image: -webkit-linear-gradient(108deg, #ddd 50%, transparent 50%), -webkit-linear-gradient(left, #028cd5 50%, #ddd 50%);`;
  } else if (percentage > 10 && percentage <= 20) {
    return `background-image: -webkit-linear-gradient(72deg, #ddd 50%, transparent 50%), -webkit-linear-gradient(left, #028cd5 50%, #ddd 50%);`;
  } else if (percentage > 0 && percentage <= 10) {
    return `background-image: -webkit-linear-gradient(36deg, #ddd 50%, transparent 50%), -webkit-linear-gradient(left, #028cd5 50%, #ddd 50%);`;
  } else if (percentage === 0) {
    return `background-image: -webkit-linear-gradient(left, #ddd 50%, transparent 50%), -webkit-linear-gradient(left, #028cd5 50%, #ddd 50%);`;
  } else {
    return `background-image: -webkit-linear-gradient(left, #ddd 50%, transparent 50%), -webkit-linear-gradient(left, #028cd5 50%, #ddd 50%);`;
  }
};

export const ResumeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 2rem;
  grid-row-gap: 4rem;
  grid-column-gap: 4rem;

  @media only screen and (max-width: 768px) {
    grid-row-gap: 8rem;
  }

  @media only screen and (max-width: 540px) {
    grid-row-gap: 4rem;
  }

  @media only screen and (max-width: 425px) {
    grid-row-gap: 2rem;
  }
`;

export const ResumeHeader = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 4rem;
  grid-row-gap: 2rem;
  align-items: center;
  justify-items: center;
`;

export const ResumeHeaderImgContainer = styled.div`
  grid-column: 1 / 2;
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  overflow: hidden;
  display: flex;

  @media only screen and (max-width: 540px) {
    height: 12rem;
    width: 12rem;
  }

  @media only screen and (max-width: 310px) {
    grid-column: 1 / -1;
  }
`;

export const ResumeHeaderImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const ResumeHeaderTitle = styled.div`
  grid-column: 2 / -1;

  @media only screen and (max-width: 310px) {
    grid-column: 1 / -1;
  }
`;

export const ResumeHeaderName = styled.h2`
  color: var(--cl-font-resume);
  font-size: 6rem;
  line-height: 0.9;

  @media only screen and (max-width: 720px) {
    font-size: 4rem;
  }

  @media only screen and (max-width: 310px) {
    font-size: 3rem;
  }
`;

export const ResumeHeaderOccupation = styled.h4`
  font-size: 1.7rem;
  text-transform: uppercase;

  @media only screen and (max-width: 720px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 310px) {
    font-size: 1.4rem;
    text-align: center;
  }
`;

export const ResumeInfo = styled.div`
  grid-column: 1 / 2;
  display: grid;
  grid-auto-rows: min-content;
  grid-row-gap: 2rem;

  @media only screen and (max-width: 720px) {
    grid-column: 1 / -1;
  }
`;

export const ResumeInfoAbout = styled.div``;

export const ResumeInfoDetails = styled.div`
  line-height: 1.5;

  @media only screen and (max-width: 720px) {
    display: grid;
  }
`;

export const ResumeInfoWrapper = styled.div`
  @media only screen and (max-width: 720px) {
    display: grid;
    grid-column-gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 540px) {
    grid-column-gap: 0rem;
    grid-template-columns: 1fr;
  }
`;

export const ResumeInfoContacts = styled.div`
  display: grid;
  grid-row-gap: 0.4rem;

  @media only screen and (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;

    & h4 {
      grid-column: 1 / -1;
    }
  }

  @media only screen and (max-width: 540px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0rem;
  }
`;

export const ResumeInfoContacstWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: min-content 1fr;
  grid-column-gap: 1rem;
`;

export const ResumeInfoContacsLink = styled.a`
  &:link,
  &:visited {
    font-family: var(--font-title);
    color: var(--cl-darkest-grey);
    text-decoration: none;
    transition: color 0.3s;
  }

  &:hover,
  &:active {
    color: var(--cl-font-resume);
  }
`;

export const ResumeMain = styled.div`
  grid-column: 2 / -1;
  display: grid;
  grid-row-gap: 3rem;

  @media only screen and (max-width: 720px) {
    grid-column: 1 / -1;
  }
`;

export const ResumeMainExperience = styled.div``;

export const ResumeMainEducation = styled.div``;

export const ResumeMainEducationOrg = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  &:not(:first-child) {
    margin-top: 1rem;
  }

  @media only screen and (max-width: 360px) {
    grid-template-columns: 1fr;
  }
`;

export const ResumeMainEducationOrgDate = styled.div`
  white-space: nowrap;
  font-family: var(--font-title);
  color: var(--cl-darkest-grey);
  @media only screen and (max-width: 360px) {
    order: 3;
  }
`;

export const ResumeMainEducationOrgName = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.4rem;

  @media only screen and (max-width: 360px) {
    order: 2;
  }
`;

export const ResumeSkills = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 540px) {
    grid-template-columns: 1fr;
    grid-row-gap: 2rem;
  }
`;

export const ResumeMainSkills = styled.div``;

export const ResumeMainSkillsProg = styled.div`
  display: grid;
  grid-row-gap: 1rem;
`;

export const ResumeMainSkillsProgWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  align-items: center;
  grid-column-gap: 1rem;
`;

export const ResumeMainInterests = styled.div``;

export const ResumeMainInterestsCover = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 0.5rem;

  @media only screen and (max-width: 540px) {
    grid-template-columns: 1fr;
    grid-row-gap: 0.5rem;
  }
`;

export const ResumeMainInterestsWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-column-gap: 1rem;
`;

export const ResumeLinksContainer = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;
  // justify-items: center;
  margin: 4rem 0;

  @media only screen and (max-width: 620px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0rem;
    grid-row-gap: 2rem;
  }
`;

export const ResumeDownloadLink = styled.a`
  &:link,
  &:visited {
    font-weight: bold;
    text-decoration: none;
    color: var(--cl-font-resume);
    border: 0.2rem solid var(--cl-font-resume);
    padding: 0.5rem 2rem;
    text-align: center;
    transition: color 0.3s, background-color 0.3s, border 0.3s;
  }

  &:hover,
  &:active {
    color: var(--cl-white);
    background-color: var(--cl-font-resume);
  }
`;

export const ResumeBlackHeader = styled.h4`
  font-size: 1.8rem;
  font-family: var(--font-title);
  text-transform: uppercase;
  font-weight: bold;
`;

export const ResumeBlueHeader = styled.h4`
  font-size: 1.6rem;
  font-family: var(--font-title);

  font-weight: bold;
  color: var(--cl-font-resume);
`;

export const ResumeSubTitle = styled.div`
  font-family: var(--font-title);
  color: var(--cl-darkest-grey);
`;

export const ResumeMailSVG = styled(MailSVG)`
  ${SVGStyles}
`;

export const ResumePhoneSVG = styled(PhoneSVG)`
  ${SVGStyles}
`;

export const ResumeChromeSVG = styled(ChromeSVG)`
  ${SVGStyles}
`;

export const ResumeTwitterSVG = styled(TwitterSVG)`
  ${SVGStyles}
`;

export const ResumeCorrectSVG = styled(CorrectSVG)`
  ${SVGStyles}
`;

export const ResumeProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  ${getProgressPercentage}
`;

export const ResumeProgressCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(--cl-white);
`;

export const ResumeProgressText = styled.div`
  font-weight: bold;
  color: var(--cl-font-resume);
  font-size: 1rem;
`;
