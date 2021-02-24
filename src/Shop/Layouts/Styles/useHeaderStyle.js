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
        overflow: 'auto',
    },
    items: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: theme.spacing(0, 17.5),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(0, 3),
        },
        // [theme.breakpoints.down('sm')]: {
        //     margin: theme.spacing(0, 3),
        // },
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0, 0),
        },
        // [theme.breakpoints.up('lg')]: {
        //     padding: theme.spacing(0, 17.5),
        // },
        [theme.breakpoints.up('xl')]: {
            minWidth: 1560,
            padding: 0,
            margin: 'auto'
        },
    },
    menuIcon: {
        color: '#434343',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }

    },
    logo: {
        width: 175,
        alignSelf: 'center',
        marginLeft: theme.spacing(4),
        [theme.breakpoints.down('xs')]: {
            width: 114.51,
        }
    },
    logoLink: {
        margin: 'auto',
        [theme.breakpoints.down('xs')]: {
            marginTop: 10,
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
        justifyContent: 'center',
        [theme.breakpoints.up('sm')]: {
            minWidth: 200,
        }
    },
    catsLink: {
        '&.MuiLink-underlineHover:hover': {
            textDecoration: 'none',
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
    dialogContent: {},
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: 270,
            flexShrink: 0,
        },
    },
    desktopDrawer: {
        width: 270,
        flexShrink: 0,
    },
    drawerAppBar: {
        //for keep it fix on bottom and necessary for content to be below bar
        offset: theme.mixins.toolbar,
        position: 'sticky',
        display: 'flex',
        width: '100%',
        alignItems: 'right',
        background: '#FFFFFF',
        padding: theme.spacing(1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        [theme.breakpoints.up('md')]: {
            height: 84,
        }
    },
    desktopDrawerPaper: {
        width: '27%',
        right: '8%',
        borderRadius: '0 0 7px 7px',
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        '&::-webkit-scrollbar': {
            display: "none"
        },
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
        fontSize: 18,
        fontWeight: "bold",
        color: '#545454',
        margin: 'auto 16px',
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
        bottom: 10,
    },
    basketBadgeXsAlign: {
        right: 20,
        bottom: 10,
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
