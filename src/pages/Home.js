import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import { theme } from '../styles/App.theme';
import Logo from '../assets/logo.png';

const HomeStyles = css`
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .content {
        width: 40%;
        text-align: center;
        h1 {
            font-size: 40px;
            color: white;
        }
        img {
            width: 50%;
        }
    }
    
`;

export default () => {
    return (
        <div css={HomeStyles}>
            <div className="content">
                <img src={Logo} />
                <h1>The Flying Coder's Public Site</h1>
            </div>
        </div>
    )
}