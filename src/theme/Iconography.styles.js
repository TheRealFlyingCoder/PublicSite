/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export default {
    after: (icon) => {
        return css`
            :after {
                content: '';
                display: block;
                background: url(${icon}) no-repeat;
                opacity: 0.8;
                width: 20px;
                height: 20px;
                margin-left: 10px;
                float: right;
            }
        `;
    },
    before: (icon) => {
        return css`
            :before {
                content: '';
                display: block;
                background: url(${icon}) no-repeat;
                opacity: 0.8;
                width: 15px;
                height: 15px;
                float: left;
            }
        `;
    },
    arrow: {
        right: require('../assets/icons/arrow-right.svg'),
        left: require('../assets/icons/arrow-left.svg'),
    }
}