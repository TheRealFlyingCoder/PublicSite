/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Theme from "Theme";

const Styles = {
  Link: css`
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
  `,
  Button: css`
    display: inline-block;
    color: white;
    border-radius: 5px;
    padding: 1em;
    margin: 1em;

    &.primary{
      background-color: ${Theme.colours.primary};
    }

    &:hover {
      background-color: ${Theme.colours.primaryDark};
    }

    &:active {
      background-color: ${Theme.colours.primaryLight};
    }
  `
};

export default Styles;
