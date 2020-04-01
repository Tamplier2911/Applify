import styled from "styled-components";
import { Link } from "react-router-dom";

export const FeedbackCreateContainer = styled.div`
  margin-bottom: 5rem;
`;

export const FeedbackCreateUnauthorized = styled.div`
  font-size: 2rem;
  align-self: center;
  justify-self: center;
`;

export const FeedbackCreateLink = styled(Link)`
  &:link,
  &:visited {
    text-decoration: none;
    font-weight: bold;
    color: var(--cl-font);
    transition: color 0.3s;
  }

  &:hover,
  &:active {
    color: var(--cl-primary);
  }
`;
