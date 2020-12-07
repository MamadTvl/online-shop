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
    },
    breadcrumbContainer: {
        marginTop: 24,
    },
    breadcrumb: {
        fontFamily: 'Shabnam',
        fontSize: 12,
        color: '#545454'
    },
    titleContainer: {
        display: "flex",
        marginBottom: 37,
        marginTop: 21,
    },
    titleRectangle: {
        borderRightWidth: 4,
        borderRightColor: '#F16522',
        borderRightStyle: 'inset',
        marginLeft: 8
    },
    title: {
        fontFamily: 'Shabnam',
        fontWeight: 'bold',
        fontSize: 28,
        color: '#545454',
    },
    gridContainer: {},
    filterContainer: {
        maxHeight: 485,
    },
    filterItem: {
        marginBottom: theme.spacing(2),
    },
    categoryMdItem: {
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    categoryXsItem: {
        display: "none",
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            display: 'flex'
        },
    },
    productsContainer: {},
    productItem: {
        paddingRight: 20,
        paddingBottom: 20,
        [theme.breakpoints.down('xs')]: {
            paddingRight: 0,
        },
    },
    buttonGroup: {
        width: '30%',
        display: 'flex',
        margin: 'auto',
        [theme.breakpoints.down('xs')]: {
            width: '68%',
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
    }
}));

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