import { style, globalStyle } from '@vanilla-extract/css';
import { colors } from './colors';
import { flexCenterAll } from './utils.css';

globalStyle('body', {
    margin: 0,
    backgroundColor: colors.charcoal40
});

export const appContainer = style([
    flexCenterAll,
    {
        flexDirection: 'column'
    }
]);
