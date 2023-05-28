import { style } from '@vanilla-extract/css';
import { colors } from '../../styles/colors';
import { flexCenterAll } from '../../styles/utils.css';

export const boardContainer = style([
    flexCenterAll,
    {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.alpineDark
    }
]);
