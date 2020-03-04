import styled, { css } from "styled-components";

import { ReactComponent as LangPannelSVG } from "../../assets/svg/language.svg";

const languageCommonStyles = css`
  cursor: pointer;
  position: absolute;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0.1rem 0.2rem 0.6rem var(--cl-langpan-shadow);
`;

const engAnimation = css`
  @keyframes engAnimation {
    0% {
      top: 2rem;
      left: 2rem;
    }
    100% {
      top: -5rem;
      left: 1.8rem;
    }
  }
`;

const rusAnimation = css`
  @keyframes rusAnimation {
    0% {
      top: 2rem;
      left: 2rem;
    }
    100% {
      top: -2.4rem;
      left: -4.2rem;
    }
  }
`;

const ukrAnimation = css`
  @keyframes ukrAnimation {
    0% {
      top: 2rem;
      left: 2rem;
    }
    100% {
      top: 4rem;
      left: -4.8rem;
    }
  }
`;

export const LanguagePanelContainer = styled.div`
  position: fixed;
  bottom: 4rem;
  right: 4rem;
  z-index: 20;
`;

export const LanguagePanelLanguages = styled.div``;

export const LanguagePanelLangEng = styled.div`
  top: -5rem;
  left: 1.8rem;
  animation: engAnimation 0.5s;
  ${languageCommonStyles}
  ${engAnimation}
`;

export const LanguagePanelLangRus = styled.div`
  top: -2.4rem;
  left: -4.2rem;
  animation: rusAnimation 0.5s;
  ${languageCommonStyles}
  ${rusAnimation}
`;

export const LanguagePanelLangUkr = styled.div`
  top: 4rem;
  left: -4.8rem;
  animation: ukrAnimation 0.5s;
  ${languageCommonStyles}
  ${ukrAnimation}
`;

export const LanguagePanelImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const LanguagePanelWrap = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--cl-white);
  box-shadow: 0.1rem 0.2rem 0.6rem var(--cl-langpan-shadow);
  border-radius: 50%;
  width: 7rem;
  height: 7rem;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  &:hover .language-panel__svg {
    fill: var(--cl-primary);
  }
`;

export const LanguagePanelSVG = styled(LangPannelSVG)`
  fill: var(--cl-font);
  width: 4rem;
  height: 4rem;
  transition: fill 0.3s;

  &:hover {
    fill: var(--cl-primary);
  }
`;
