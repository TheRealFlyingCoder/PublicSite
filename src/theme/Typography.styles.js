/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Theme from 'Theme';

export default {
    family: {
        primary: "Roboto, sans-serif",
        secondary: "Open Sans, sans-serif",
    },
    sizes: {
        desktop: css`
            h1 {
                font-size: 52px;
            }
            h2 {
                font-size: 38px;
            }
            h3 {
                font-size: 30px;
            }
            h4 {
                font-size: 24px;
            }
            h5 {
                font-size: 18px;
            }
            h6 {
                font-size: 16px;
            }
            button {
                font-size: 14px;
            }
        `,
        mobile: css`
            h1 {
                font-size: 32px;
            }
            h2 {
                font-size: 28px;
            }
            h3 {
                font-size: 24px;
            }
            h4 {
                font-size: 20px;
            }
            h5 {
                font-size: 18px;
            }
            h6 {
                font-size: 16px;
            }
            button {
                font-size: 14px;
            }
        `,
        tablet: css`
            h1 {
                font-size: 42px;
            }
            h2 {
                font-size: 34px;
            }
            h3 {
                font-size: 28px;
            }
            h4 {
                font-size: 22px;
            }
            h5 {
                font-size: 18px;
            }
            h6 {
                font-size: 16px;
            }
            button {
                font-size: 14px;
            }
        `,
    }
}