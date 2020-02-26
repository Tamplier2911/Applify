import styled, { css } from "styled-components";

// PLACE STYLES FOR RESUME PAGE HERE

// SEPARATE ALL STYLES RELATED TO RESUME TO SEPARATE COMPONENT
// STYLES FOR RESUME COMPONENT
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

export const ResumePageBlackHeader = styled.h4`
  font-size: 1.8rem;
  font-family: var(--font-title);
  text-transform: uppercase;
  font-weight: bold;
`;

export const ResumePageBlueHeader = styled.h4`
  font-size: 1.6rem;
  font-family: var(--font-title);

  font-weight: bold;
  color: var(--cl-font-resume);
`;

export const ResumePageSubTitle = styled.div`
  font-family: var(--font-title);
  color: var(--cl-darkest-grey);
`;

export const ResumePageMailSVG = styled(MailSVG)`
  ${SVGStyles}
`;

export const ResumePagePhoneSVG = styled(PhoneSVG)`
  ${SVGStyles}
`;

export const ResumePageChromeSVG = styled(ChromeSVG)`
  ${SVGStyles}
`;

export const ResumePageTwitterSVG = styled(TwitterSVG)`
  ${SVGStyles}
`;

export const ResumePageCorrectSVG = styled(CorrectSVG)`
  ${SVGStyles}
`;
