import {makeStyles} from "@material-ui/styles";


export const useProfilePageStyle = makeStyles((theme) => ({

    container: {
        padding: theme.spacing(0, 17.5),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(0, 3),
        },

        [theme.breakpoints.down('xs')]: {
            padding: 18.5,
        },
        [theme.breakpoints.up('lg')]: {
            padding: theme.spacing(0, 17.5),
        },
        [theme.breakpoints.up('xl')]: {
            maxWidth: 1560,
            margin: 'auto',
            padding: 0,
        },
    },
    profileCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 32,
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        }
    },
    profileContent: {
        display: 'flex',
        flexDirection: 'row',
    },
    image: {
        width: 96,
        height: 96,
    },
    profileDetail: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: 23,
    },
    name: {
        fontFamily: 'Shabnam',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#545454'
    },
    mobileNumber: {
        fontFamily: 'Shabnam',
        fontSize: 16,
        color: '#545454',
    },
    actionContainer: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('xs')]: {
            marginTop: 16,
        }
    },
    editButton: {
        height: 48,
        borderColor: '#F16522',
        borderWidth: '2px',
        color: '#F16522',
        fontSize: '16px',
        fontFamily: 'Shabnam',
        fontWeight: "bold",
        '&:hover': {
            backgroundColor: '#F16522',
            color: 'white',
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: 8,
        }
    },
    title: {
        fontFamily: 'Shabnam',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#545454',
        marginTop: 32,
        marginBottom: 16,
    },
    addAddress: {
        fontFamily: 'Shabnam',
        fontSize: 16,
        color: '#F16522',
        margin: 'auto 0'
    },
    cardsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
    }

}), {index: 1});
