import {makeStyles} from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import {withStyles} from "@material-ui/styles"

export const useStyles = makeStyles((theme) => ({
    searchContainer: {
        padding: theme.spacing(0, 17.5),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(0, 3),
        },

        [theme.breakpoints.down('xs')]: {
            padding: 18.5,
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: 1560,
            margin: 'auto',

        },

    },
    breadcrumbContainer: {
        marginTop: 24,
    },
    breadcrumb: {
        fontFamily: 'Shabnam',
        fontSize: 12,
        color: '#545454',
        [theme.breakpoints.down('xs')]: {
            fontSize: 10,
        },

    },
    titleContainer: {
        display: "flex",
        marginBottom: 37,
        marginTop: 21,
    },
    titleRectangle: {
        borderRightWidth: 4,
        height: 32,
        marginTop: 3,
        borderRightColor: '#F16522',
        borderRightStyle: 'solid',
        marginLeft: 8,
        [theme.breakpoints.down('xs')]: {
            borderRightWidth: 2,
            height: 15,
            marginTop: 2,
        },

    },
    title: {
        fontFamily: 'Shabnam',
        fontWeight: 'bold',
        fontSize: 28,
        color: '#545454',
        [theme.breakpoints.down('xs')]: {
            fontSize: 14,
        },
    },
    gridContainer: {},
    filterContainer: {
        height: '100%',
    },
    filterItem: {
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            marginBottom: 1,
        },
    },
    categoryMdItem: {
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    categoryXsItem: {
        display: "none",
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            display: 'flex'
        },
    },
    productsContainer: {
        [theme.breakpoints.down('md')]: {
            marginTop: 16,
        },
    },
    productItem: {
        paddingRight: 20,
        paddingBottom: 20,
        height: 420,
        [theme.breakpoints.down('xs')]: {
            paddingRight: 0,
            height: 340,
        },
    },
    buttonGroup: {
        width: '30%',
        display: 'flex',
        margin: 'auto',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginBottom: 16,
        },
    },
    discount: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    discountTitle: {
        fontFamily: 'Shabnam',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#545454',
        marginTop: 7,
        [theme.breakpoints.down('xs')]: {
            fontSize: 14
        },

    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color:'#F16522'
    }
}), {index: 1});

export const StyledSwitch = withStyles({
    switchBase: {
        color: '#888888',
        '&$checked': {
            color: '#F16522',
        },
        '&track': {
            backgroundColor: '#B8B8B8'
        },
        '&$checked + $track': {
            backgroundColor: '#B8B8B8',
        },
    },
    checked: {},
    track: {},
})(Switch);
