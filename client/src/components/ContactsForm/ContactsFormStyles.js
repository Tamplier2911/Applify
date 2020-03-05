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

export const ContactsFormContainer = styled.div`
  display: grid;
  grid-row-gap: 4rem;
  grid-auto-rows: min-content;
`;

export const ContactsFormTitle = styled.h3`
  ${getFont}
  font-weight: 400;
  font-size: 1.7rem;
`;

export const ContactsFormItself = styled.form`
  display: grid;
  grid-row-gap: 2rem;
`;
