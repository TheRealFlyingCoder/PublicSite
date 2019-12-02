import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Link } from "react-router-dom";
import Theme from "Theme";
import Card from "Components/Card";
import Logo from "Assets/logo.png";

const Styles = css`
  text-align: left;
  li {
    color: ${Theme.colours.primaryLight};
    margin-bottom: 15px;
  }
`;

const pipeline = [
  "Update this roadmap so it isn't terrible",
  "Re-design logo and prove that devs can be creative",
  "Header, Footer, and scaffolding routes out",
  "Blog",
  "Coding test with Firebase integrations",
  "Authentication demonstration",
  "Theming update"
];

export default () => {
  return (
    <Card title="Roadmap" image={Logo} hasBack>
      <h6>A living list of additions in the pipeline</h6>
      <Card>
        <ol css={Styles}>
          {pipeline.map((item, index) => {
            return <li key={`pieline-${index}`}>{item}</li>;
          })}
        </ol>
      </Card>
    </Card>
  );
};
