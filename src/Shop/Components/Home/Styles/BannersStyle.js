import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(0, 17.5),
        width: '100%',
        marginTop: theme.spacing(6),

        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0, 3),
        },

        [theme.breakpoints.down('xs')]: {
            marginTop: 12,
            padding: 18.5,
        }
    },
    imageContainer: {
      position: "relative",
        [theme.breakpoints.down('sm')]: {
            marginBottom: 12,
        },
    },

    firstImage: {
        width: '100%',
        height: 520,
        [theme.breakpoints.down('sm')]: {
            height: 'auto',
        },
    },
    secondImage: {
        width: '100%',
        height: 520,
        [theme.breakpoints.down('sm')]: {
            height: 'auto',
        },
    },
    secondImageContainer: {
        position: "relative",
        [theme.breakpoints.up('md')]: {
            paddingRight: 24,
            paddingBottom: 24,
            marginBottom: 12,
        },

    },
    thirdImage: {
        // position: 'absolute',
        width: '100%',
        height: 'auto',
        [theme.breakpoints.down('sm')]: {
            height: 'auto',
        },

    },
    thirdImageContainer:{
        position: "relative",
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    thirdImageXsContainer: {
        position: "relative",
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    title: {
        position: 'absolute',
        top: 56,
        right: 56,
        fontFamily: 'Shabnam',
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#FFFFFF',
        [theme.breakpoints.down('sm')]: {
            fontSize: '38px',
            top: 10,
            right: 12,
        },
    },

}));