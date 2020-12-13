import {makeStyles} from "@material-ui/styles";


export const useSignUpPageStyle = makeStyles((theme) => ({

    container: {
        marginTop: theme.spacing(7),
        marginBottom: 185,
        padding: theme.spacing(0, 52.6),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(0, 3),
        },

        [theme.breakpoints.down('xs')]: {
            padding: 18.5,
        },
    },
    textFieldRoot: {
        borderRadius: 6,
        height: 48,
    },
    input: {
        fontFamily: 'Shabnam'
    },

    signUpButton: {
        height: 40,
        backgroundColor: '#F16522',
        color: 'white',
        fontSize: '16px',
        fontFamily: 'Shabnam',
        fontWeight: "bold",
        '&:hover': {
            backgroundColor: '#F16522',
            opacity: '70%'
        },

    },

    /** FirstStep **/
    imageContainer: {
        marginLeft: 48,
    },
    image: {
        width: '176.5px',
        height: '149.86px',
    },
    mobileContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    label: {
        fontFamily: 'Shabnam',
        fontSize: 14,
        color: '#545454',
        marginBottom: 12,
    },

    /** SecondStep **/

    timerContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    timer_div: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        position: 'relative',
        marginLeft: 8,
    },
    timer: {
        fontFamily: 'Shabnam',
        fontSize: 56,
        fontWeight: 'bold',
        color: '#06092C',
        direction: 'ltr',
    },
    seconds: {
        position: 'absolute',
        bottom: 8,
        right: '31%',
        fontFamily: 'Shabnam',
        fontSize: 14,
        color: 'rgba(49, 71, 72, 0.53)',
        fontWeight: 300,
    },
    timerLabel: {
        fontFamily: 'Shabnam',
        fontSize: 16,
        color: '#06092C',
    },
    timerContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginRight: 46,
        [theme.breakpoints.down('xs')]: {
           marginRight: 0,
            marginTop: 46,
        },
    },
    timerTitle: {
        fontFamily: 'Shabnam',
        fontSize: 16,
        fontWeight: 500,
        color: '#434343',
        marginBottom: 24,
    },
    codeContainer: {
        display: 'flex',
        flexDirection: "column",
        width: '100%',
        marginBottom: 21,
    },
    timerAction: {},
    timerButton: {
        fontFamily: 'Shabnam',
        fontSize: '14',
        color: '#F16522',
    },

    /** ThirdStep **/


}));
