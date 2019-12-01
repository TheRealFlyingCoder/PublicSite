import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom';
import Theme from 'Theme';
import Logo from 'Assets/logo.png';

const Styles = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        position: absolute;
        top: 0;
        left: 0;
        ${Theme.icons.before(Theme.icons.arrow.left)}
    }
    .content {
        width: 80%;
        background-color: ${Theme.colours.layer(1)};
        min-height: 600px;
        margin-top: 60px;
        padding: 20px;
        
        text-align: left;
        ${Theme.breakpoints.desktop} {
            width: 40%;
        }

        h1 {
            margin: 0;
        }

        ol {
            background-color: ${Theme.colours.layer(2)};
            padding: 2em;
            li {
                color: ${Theme.colours.primaryLight};
                margin-bottom: 15px;
            }
        }   
        
    }    
`;

const pipeline = [
    'Update this roadmap so it isn\'t terrible',
    'Re-design logo and prove that devs can be creative',
    'Header, Footer, and scaffolding routes out',
    'Blog',
    'Coding test with Firebase integrations',
    'Authentication demonstration',
    'Theming update',
]

export default () => {
    return (
        <div css={Styles}>
            <Link to="/" className="secondary">Back</Link>
            <div className="content">
                <h1>Roadmap</h1>
                <p>A living list of additions in the pipeline</p>
                <ol>
                    {pipeline.map((item, index) => {
                        return (
                            <li key={`pieline-${index}`}>
                                {item}
                            </li>
                        )
                    })}
                </ol>
                
            </div>
        </div>
    )
}