/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Theme from "Theme";

const AppStyles = css`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    display: flex; 
    font-family: ${Theme.font.family.primary};
    color: white;
    background-color: ${Theme.colours.surface};

    ${Theme.font.standard}
    ${Theme.font.sizes.mobile}

    {
        ${Theme.breakpoints.mobile} {
            ${Theme.font.sizes.tablet}
        }

        ${Theme.breakpoints.desktop} {
            ${Theme.font.sizes.desktop}
        }
    }
  }

  #app {
    width: 100%;
    height: 100%;
  }
`;

export default AppStyles;
