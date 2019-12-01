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

  button {
    display: inline-block;
    background-color: ${Theme.colours.primary};
    color: white;
    border-radius: 5px;
    padding: 1em;
    margin: 1em;

    :hover {
      background-color: ${Theme.colours.primaryDark};
    }

    :active {
      background-color: ${Theme.colours.primaryLight};
    }
  }

  a {
    color: ${Theme.colours.primary};
    text-decoration: none;
    &.primary {
      display: inline-block;
      background-color: ${Theme.colours.primary};
      color: white;
      border-radius: 5px;
      padding: 1em;
      margin: 1em;

      ${Theme.icons.after(Theme.icons.arrow.right)}

      :hover {
        background-color: ${Theme.colours.primaryDark};
      }

      :active {
        background-color: ${Theme.colours.primaryLight};
      }
      
    }

    &.secondary {
      display: inline-block;
      background-color: ${Theme.colours.secondary};
      color: ${Theme.colours.surface};
      border-radius: 5px;
      padding: 5px;
      margin: 1em;

      ${Theme.icons.before(Theme.icons.arrow.left)}

      :hover {
        background-color: ${Theme.colours.secondaryDark};
      }

      :active {
        background-color: ${Theme.colours.secondaryLight};
      }
      
    }
  }
`;

export default AppStyles;
