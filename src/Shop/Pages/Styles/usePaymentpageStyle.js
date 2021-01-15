import {makeStyles} from "@material-ui/styles";


export const usePaymentPageStyle = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(0, 17.5),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(0, 3),
        },
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0, 0),
        },
        textAlign: 'center',
        marginTop: 76,

    },
    icon: {
        width: 153,
        height: 153,
        marginBottom: 63,
        [theme.breakpoints.down('xs')]: {
            marginBottom: 32,
            width: 84,
            height: 84,
        },
    },
    message: {
        fontFamily: 'Shabnam',
        fontSize: 36,
        fontWeight: 'bold',
        color: '#545454',
        marginBottom: 38,
        [theme.breakpoints.down('xs')]: {
            marginBottom: 20,
            fontSize: 18,
        },
    },
    code: {
        fontFamily: 'Shabnam',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#545454',
        opacity: 0.68,
        marginBottom: 24,
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
            marginBottom: 16,
        },
    },
    describe: {
        fontFamily: 'Shabnam',
        fontSize: 24,
        color: '#545454',
        marginBottom: 64,
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
            marginBottom: 16,
        },
    },
    link: {
        '&.MuiLink-underlineHover:hover': {
            textDecoration: 'none'
        }
    },
    backToHome: {
        fontFamily: 'Shabnam',
        fontSize: 24,
        color: '#F16522',
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
        },
    }

}), {index: 1});
