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
    editButton: {
        fontFamily: 'Shabnam',
        fontSize: 16,
        color: '#545454',
        width: 200,
        height: 48,
        borderColor: '#434343',
        margin: 'auto 0',
        '&:hover': {
            color: 'white',
            backgroundColor: '#545454'
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
    cardsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
    }

}));
