import {makeStyles} from "@material-ui/styles";


export const useAboutUsPageStyle = makeStyles((theme) => ({

    container: {
        padding: theme.spacing(0, 17.5),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(0, 3),
        },
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0, 3),
        },
    },
    card: {
        padding: 24,

    },
    section1: {
        display: 'flex',
            flexDirection: 'column'

    },
    text: {
        fontFamily: 'Shabnam, sans-serif',
        fontSize: 14,
        color: '#545454',
        whiteSpace: 'pre-wrap',
        lineHeight: '32px',
    },
    h2: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        color: '#545454',
        fontWeight: 'bold',
        marginTop: 24,
        marginBottom: 16,
        direction: 'ltr'
    },
    image: {
        width: '30vw',
        height: '30vw',
        marginRight: 24,
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '100%',
            marginRight: 0,
        },
    }


}), {index: 1});
