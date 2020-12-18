import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({

    container: {
        display: "flex",
        backgroundColor: '#F16522',
        padding: '32px 407px 32px 140px',

        [theme.breakpoints.down('sm')]: {
            padding: '32px 220px 32px 24px',
        },
        [theme.breakpoints.down('md')]:{
            padding: '32px 220px 32px 24px',
        },

        [theme.breakpoints.between(371, 500)]: {
            padding: theme.spacing(4, 3, 4, 1)
        },
        [theme.breakpoints.between(0, 371)]: {
            padding: theme.spacing(13.75, 3, 4, 1)
        },

        position: 'relative',
        marginTop: 64,
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',

    },
    titleContainer: {
        position: "absolute",
        right: 140,
        top: 32,
        width: '17%',
        [theme.breakpoints.down('sm')]: {
            right: 24,
            width: '20%',
        },
        [theme.breakpoints.down('md')]:{
            right: 24,
            width: '15%',
        },
        [theme.breakpoints.between(376, 600)]: {
            right: 16,
            width: '30%',
        },
        [theme.breakpoints.between(0, 500)]: {
            right: 6,
            width: '33%',
        },
    },
    sliderContainer: {
        width: '100%',
        margin: 'auto',
        [theme.breakpoints.between(600, 800)]:{
            width: '60%'
        },
        [theme.breakpoints.between(0, 400)]:{
            width: '103%'
        }


    },
    title: {
        fontFamily: 'Shabnam',
        fontWeight: 'bold',
        fontSize: 36,
        color: 'white',
        [theme.breakpoints.between(0, 500)]: {
            fontSize: 24,
        },
    },
    previewImage: {
        width: '100%',
        margin: 'auto',
    },
    card: {
        direction: 'rtl',
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        // minHeight: 422,
        // height: "auto",
        width: '100%',
        // marginLeft: 16,
        [theme.breakpoints.between(376, 600)]: {
            marginRight: 'auto',
            width: 288,
            // height: 265,
        },
        [theme.breakpoints.between(0, 500)]: {
            marginRight: 'auto',
            width: 231,
            // height: 265,
        },

    },

}));