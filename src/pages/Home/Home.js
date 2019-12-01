import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom';
import Theme from 'Theme';
import Logo from 'Assets/logo.png';

const HomeStyles = css`
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .content {
        width: 80%;
        text-align: center;

        h3,
        h1 {
            margin: 10px;
        }
        img {
            width: 40%;
            min-width: 150px;
        }

        ${Theme.breakpoints.desktop} {
            width: 40%;
        }        
    }    
`;

export default () => {
    return (
        <div css={HomeStyles}>
            <div className="content">
                <img src={Logo} />
                <h1>The Flying Coder</h1>
                <h3>Massive undertaking in progress</h3>
                <Link to="/roadmap" className="primary">Explore the roadmap</Link>
            </div>
        </div>
    )
}