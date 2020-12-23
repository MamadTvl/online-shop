import {makeStyles} from "@material-ui/styles";


export const useAddressFactorCardStyle = makeStyles((theme) => ({
    card: {
        backgroundColor: '#F8F8F8',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
        [theme.breakpoints.down('xs')]:{
            flexDirection: 'column'
        }
    },
    dataContainer: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('xs')]:{
            marginBottom: 22
        }
    },
    title: {
        fontFamily: 'Shabnam',
        fontSize: 12,
        color: '#545454',
        marginBottom: 8,
    },
    label: {
        fontFamily: 'Shabnam',
        fontSize: 16,
        color: '#545454',
    },

}), {index: 1});
