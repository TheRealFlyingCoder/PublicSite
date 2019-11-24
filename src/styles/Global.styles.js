/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import { theme } from './App.theme';

const AppStyles = css`
    body {
        margin: 0;
        padding: 0;
        font-family: ${theme.fonts.family.primary};
        background-color: ${theme.colours.dark};
    }
`;

export default AppStyles;
