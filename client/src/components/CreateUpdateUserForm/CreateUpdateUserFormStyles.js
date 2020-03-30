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

export const CreateUpdateUserFormContainer = styled.div`
  display: grid;
  grid-row-gap: 4rem;
  grid-auto-rows: min-content;
`;

export const CreateUpdateUserFormTitle = styled.h3`
  ${getFont}
  font-weight: 400;
  font-size: 1.7rem;

  margin-top: 2rem;
  @media only screen and (max-width: 425px) {
    margin-top: 5rem;
  }
`;

export const CreateUpdateUserFormElement = styled.form`
  display: grid;
  grid-row-gap: 2rem;
`;

export const CreateUpdateUserFormLength = styled.div`
  display: grid;
`;

export const CreateUpdateUserFormHolder = styled.div``;
