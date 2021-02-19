import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({

    container: {
        display: "flex",
        justifyContent: 'space-between',
        backgroundColor: '#F16522',
        padding: theme.spacing(4, 17.5),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(4, 3),
        },
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(4, 0),
        },

        marginTop: 64,
    },
    spacingContainer: {
      width: 'calc(100% + 20px)' ,
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    titleContainer: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    sliderContainer: {
        margin: '0 auto',
        display: 'flex',
        overflow: 'visible',
        marginRight: 32,
        marginLeft: '-16px',
        width: '100%',
        [theme.breakpoints.between(0, 960)]: {
            width: 'auto'
        },

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
        [theme.breakpoints.between(0, 400)]: {
            width: '125%',
        },
    },
    card: {
        direction: 'rtl',
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        height: '420px',
        width: '100%',
        borderRadius: 7,
        marginLeft: 16,
        maxWidth: 300,
        [theme.breakpoints.between(0, 960)]: {
            height: 320,
            minWidth: 211,
            maxWidth: 250,
        },
        [theme.breakpoints.up('xl')]: {
            marginLeft: 200,
        },
    }

}), {index: 1});
