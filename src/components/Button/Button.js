import React from "react";
import { Link } from 'react-router-dom';
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Styles from "./Button.styles";

export default ({ link, children, isPrimary, className, ...props }) => {
  const classes = `${className || ''} ${isPrimary ? 'primary' : ''}`;

  return link ? (
    <Link to={link} {...props} className={classes} css={Styles.Link}>
      {children}
    </Link>
  ) : (
    <button {...props} className={classes} css={Styles.Button}>
      {children}
    </button>
  );
};
