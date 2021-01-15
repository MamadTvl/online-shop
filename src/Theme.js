import {createMuiTheme} from "@material-ui/core/styles";

export const theme = createMuiTheme({
    direction: 'rtl',
    typography: {
      fontFamily: 'Shabnam'
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    fontFamily: 'Shabnam'
                }
            }
        },
        MuiTypography: {
            body1: {
                fontFamily: 'Shabnam',
            },
            body2: {
                fontFamily: 'Shabnam',
            },
            paragraph: {
                fontFamily: 'Shabnam',
            },
            h1: {
                fontFamily: 'Shabnam',
            },
            h2: {
                fontFamily: 'Shabnam',
            },
            h3: {
                fontFamily: 'Shabnam',
            },
            h4: {
                fontFamily: 'Shabnam',
            },
            h5: {
                fontFamily: 'Shabnam',
            },
            h6: {
                fontFamily: 'Shabnam',
            },
        }
    }
}, {index: 1})