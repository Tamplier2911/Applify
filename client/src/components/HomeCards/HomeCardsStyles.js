import styled, { css } from "styled-components";

import { ReactComponent as TimeSVG } from "../../assets/svg/clock.svg";
import { ReactComponent as ResponsiveSVG } from "../../assets/svg/responsive.svg";
import { ReactComponent as TechSVG } from "../../assets/svg/technologies.svg";
import { ReactComponent as ShieldSVG } from "../../assets/svg/shield.svg";

const svgStyles = css`
  position: absolute;
  width: 6rem;
  height: 6rem;
  display: block;
  object-fit: cover;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HomeCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26.5rem, 1fr));
  grid-gap: 2rem;
  padding: 0 0.5rem;
`;

export const IconTimeSVG = styled(TimeSVG)`
  ${svgStyles}
`;

export const IconResponsiveSVG = styled(ResponsiveSVG)`
  ${svgStyles}
`;

export const IconTechSVG = styled(TechSVG)`
  ${svgStyles}
`;

export const IconShieldSVG = styled(ShieldSVG)`
  ${svgStyles}
`;
