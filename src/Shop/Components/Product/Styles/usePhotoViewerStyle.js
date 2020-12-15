import {makeStyles} from "@material-ui/styles";


export const usePhotoViewerStyle = makeStyles((theme) => ({
    container: {
        position: 'relative',
        width: '30vw',
        height: '30vw',//maybe grid help
    },
    viewer: {
        width: '100%'
    },
    imageView: {
        width: '100%',
    },
    nextArrow: {
        position: 'absolute',
        transform: 'rotate(180deg)',
        width: 24,
        height: 24,
        borderRadius: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        right: '5%',
        top: '41%',
    },
    prevArrow: {
        position: 'absolute',
        borderRadius: '50%',
        width: 24,
        height: 24,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        left: '5%',
        top: '41%',
    },
    imageButtonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        bottom: '23%',
        paddingRight: '16px',
        overflowX: 'scroll',
        msOverflowStyle: 'none',// IE and Edge
        scrollbarWidth: 'none', // firefox
        '&::-webkit-scrollbar': { //chrome
            display: 'none',
        },
    },
    listItem: {
        marginLeft: '16px',
    },


    imageButton: {
        width: '6vw',
        height: '6vw',
        borderStyle: 'solid',
        borderColor: '#989898',
        borderWidth: 1,
    }
}));