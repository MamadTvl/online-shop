import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    footer:{
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor: '#434343'
    },


    root: {
        padding: theme.spacing(6, 17.5),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(3),
        }

    },
    logo: {
        width: 175,
        height: 34,
    },
    description: {
        fontFamily: 'Shabnam',
        fontSize: 16,
        fontWeight: 300,
        color: "white",
        opacity: 0.68,
    },
    socialContainer: {
        display: 'none',

        [theme.breakpoints.up('sm')]: {
            display: "flex",
            justifyContent: 'flex-start',
        }
    },
    social: {
        marginLeft: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            marginBottom: 12,
        }
    },
    title: {
        marginBottom: theme.spacing(3),
    },
    pages: {
        fontFamily: 'Shabnam',
        fontSize: 24,
        fontWeight: 'bold',
        color: "white",
    },
    linkContainer: {
        display: "flex",
        flexDirection: "column"
    },
    link: {
        fontFamily: 'Shabnam',
        fontSize: 18,
        color: "white",
        opacity: 0.68,
        marginBottom: theme.spacing(2)
    },
    xsGrid: {
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    symbolContainer: {
        display: "flex",
        flexDirection: "row",
    },
    socialContainerXs: {
        display: "flex",
        flexDirection: "column-reverse",
        marginTop: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    symbol: {
        minWidth: 110,
        minHeight: 148,
        backgroundColor: "white",
        marginLeft: theme.spacing(3),
        borderRadius: 16,
        [theme.breakpoints.down('sm')]: {
            minWidth: 91.27,
            minHeight: 128.7,
            marginLeft: theme.spacing(2),
        }
    },


}));