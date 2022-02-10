import { css } from "styled-components";

export const mobil = (props) => {
  return css`
    @media only screen and (max-width: 700px) {
      ${props}
    }
  `;
};

export const fourK = (props) => {
  return css`
    @media only screen and (min-width: 2200px) {
      ${props}
    }
  `;
};
