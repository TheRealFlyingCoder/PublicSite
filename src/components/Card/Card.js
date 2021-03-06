import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from 'Components/Button';
import Styles from "./Card.styles";

export default ({ children, image, title, subtitle, hasBack, history, OverrideStyles }) => {

  return (
    <div css={css`${Styles} ${OverrideStyles}`} className="card">
      <div className="content">
        {hasBack && history && (
          <Button className="secondary back" onClick={history.goBack} />
        )}
        {image && <img src={image} />}
        {title && <h1>{title}</h1>}
        {subtitle && <h3>{subtitle}</h3>}
        {children}
      </div>
    </div>
  );
};
