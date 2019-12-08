/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Theme from "Theme";

const Styles = css`
  height: inherit;
  width: inherit;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

  .content {
    background-color: ${Theme.colours.layer(1)};
    padding: 20px;
    border-radius: 5px;
    width: 80%;
    ${Theme.breakpoints.desktop} {
      width: 40%;
      /* Card in a card */
      .card {
          margin: 20px 5px 5px 5px;
          width: auto;
        .content {
          width: 80%;
        }
      }
    }

    h3,
    h1 {
      margin: 10px;
    }
    img {
      width: 40%;
      min-width: 150px;
    }

    button.back {
      top: 5px;
      left: 5px;      

      ${Theme.icons.before(Theme.icons.arrow.left)};
    }
  }
`;

export default Styles;
