import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// svg
import { ReactComponent as UsersSVG } from "../../assets/svg/adminpage-users.svg";
import { ReactComponent as MessagesSVG } from "../../assets/svg/adminpage-messages.svg";
import { ReactComponent as BlogsSVG } from "../../assets/svg/adminpage-blogs.svg";
import { ReactComponent as FeedsSVG } from "../../assets/svg/adminpage-feeds.svg";

const SVGSharedStyles = css`
  width: 3rem;
  height: 3rem;
  fill: var(--cl-font);
  transition: 0.3s fill;

  @media only screen and (max-width: 200px) {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    fill: var(--cl-primary);
  }
`;

export const ProfilePortraitAdminBar = styled.div`
  display: grid;
`;

export const ProfilePortraitAdminUL = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const ProfilePortraitAdminLI = styled.li`
  display: grid;
  align-items: center;
  justify-items: center;
  list-style: none;
`;

export const ProfilePortraitAdminLink = styled(Link)``;

export const ProfilePortraitAdminUsersSVG = styled(UsersSVG)`
  ${SVGSharedStyles}
`;

export const ProfilePortraitAdminMessagesSVG = styled(MessagesSVG)`
  ${SVGSharedStyles}
`;

export const ProfilePortraitAdminPostsSVG = styled(BlogsSVG)`
  ${SVGSharedStyles}
`;

export const ProfilePortraitAdminFeedsSVG = styled(FeedsSVG)`
  ${SVGSharedStyles}
`;
