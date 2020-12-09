import {makeStyles} from "@material-ui/styles";


export const usePhotoViewerStyle = makeStyles((theme) => ({
    container: {
        position: 'relative',
        width: '40vw',
        height: '40vw',//maybe grid help
        padding: 24,
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
        top: '50%',
    },
    prevArrow: {
        position: 'absolute',
        borderRadius: '50%',
        width: 24,
        height: 24,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        left: '5%',
        top: '50%',
    },
    imageButtonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        bottom: '20%',
        paddingRight: '24px',
        overflowX: 'scroll',
        msOverflowStyle: 'none',// IE and Edge
        scrollbarWidth: 'none', // firefox
        '&::-webkit-scrollbar': { //chrome
            display: "none",
        },
    },
    listItem: {
        marginLeft: '10%',
    },


    imageButton: {
        width: '6vw',
        height: '6vw',
        borderStyle: 'solid',
        borderColor: '#989898',
        borderWidth: 1,
    }
}));
