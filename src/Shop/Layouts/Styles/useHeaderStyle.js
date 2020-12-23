import {makeStyles} from "@material-ui/styles";


export const useHeaderStyle = makeStyles((theme) => ({

    root: {
        display: 'flex',
    },
    appBar: {
        display: "flex",
        background: 'white',
        // padding: theme.spacing(1),
        justifyContent: 'center',
        width: "100%",
        height: 84,
    },
    items: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        margin: theme.spacing(0, 17.5),
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(0, 3),
        },
        // [theme.breakpoints.down('sm')]: {
        //     margin: theme.spacing(0, 3),
        // },
        [theme.breakpoints.down('xs')]: {
            margin: theme.spacing(0, 0),
        }
    },
    menuIcon: {
        color: '#434343',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }

    },
    logo: {
        width: 175,
        height: 34,
        alignSelf: 'center',
        marginLeft: theme.spacing(4),
        [theme.breakpoints.down('xs')]: {
            width: 114.51,
            height: 28,
        }
    },
    rightItems: {
        display: 'flex',
        marginLeft: '32px',
        [theme.breakpoints.down('xs')]: {
            margin: 0,
        }
    },
    category: {
        // margin: theme.spacing(0, 3, 0, 9),
        display: "none",
        marginLeft: theme.spacing(3),
        justifyContent: "flex-start",
        alignSelf: "center",
        fontFamily: 'Shabnam',
        fontSize: '16px',
        fontWeight: 'normal',
        color: '#8B8B8B',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }

    },
    menuLabel: {
        fontFamily: 'Shabnam',
        fontSize: 14,
        [theme.breakpoints.up('sm')]: {
            minWidth: 200,
        }
    },
    label: {
        alignSelf: "center",
        fontFamily: 'Shabnam',
        fontSize: '16px',
        fontWeight: 'normal',
    },
    icon: {
        color: '#8B8B8B'
    },
    dialog: {
        top: '-34%'
    },
    dialogContent: {

    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: 270,
            flexShrink: 0,
        },
    },
    drawerAppBar: {
        //for keep it fix on bottom and necessary for content to be below bar
        offset: theme.mixins.toolbar,
        position: 'sticky',
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        background: '#FFFFFF',
        padding: theme.spacing(1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    drawerPaper: {
        width: 270,
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        '&::-webkit-scrollbar': {
            display: "none"
        }
    },
    appbarTitle: {
        fontFamily: 'Shabnam',
        fontSize: 16,
        fontWeight: "bold",
        color: '#545454',
        margin: 'auto',
    },
    textField: {
        width: 453,
        minHeight: 40,
        fontFamily: 'Shabnam',
        fontSize: '14px',
        fontWeight: 'normal',
        backgroundColor: '#F0F0F0',
    },
    searchBar: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    searchBarIcon: {
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    login: {
        // margin: theme.spacing(0, 9, 0, 3),
        width: 151,
        height: 38,
        alignSelf: "center",
        display: 'none',
        fontFamily: 'Shabnam',
        fontSize: '16px',
        fontWeight: 'normal',
        color: '#8B8B8B',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    },
    cart: {
        display: 'none',
        fontFamily: 'Shabnam',
        width: 113,
        height: 38,
        alignSelf: 'center',
        fontSize: '16px',
        fontWeight: 'normal',
        color: '#434343',
        borderColor: 'rgba(0, 0, 0, 0.12)',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    },
    desktopBasketVisibility: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    },
    mobileBasketVisibility: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    basketBadgeColor: {
        backgroundColor: '#F16522'
    },
    basketBadge: {
        fontFamily: 'Shabnam',
    },
    basketBadgeAlign: {
      bottom:10,
    },
    basketBadgeXsAlign: {
        right: 20,
        bottom:10,
    },
    iconButtons: {
        marginRight: 8,
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }

    },
    leftItems: {
        display: 'flex',
        marginRight: '32px',
        [theme.breakpoints.down('xs')]: {
            margin: 0,
        }
    }
}), {index: 1})