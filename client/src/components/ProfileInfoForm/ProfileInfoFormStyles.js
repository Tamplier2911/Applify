import styled from "styled-components";

const getFont = props => {
  const { lang } = props;
  if (lang === "eng") {
    return `font-family: var(--font-title);`;
  } else if (lang === "rus" || lang === "ukr") {
    return `font-family: var(--font-cyrillic);`;
  }
  return `font-family: var(--font-title);`;
};

export const ProfileInfoFormContainer = styled.div`
  display: grid;
  grid-row-gap: 4rem;
  grid-auto-rows: min-content;

  padding: 2rem;
  box-shadow: 0 0.1rem 0.5rem var(--cl-font);
`;

export const ProfileInfoFormTitle = styled.h3`
  ${getFont}
  font-weight: 400;
  font-size: 1.7rem;

  margin-top: 2rem;
  @media only screen and (max-width: 425px) {
    //   margin-top: 5rem;
  }
`;

export const ProfileInfoFormElement = styled.form`
  display: grid;
  grid-row-gap: 2rem;
`;
