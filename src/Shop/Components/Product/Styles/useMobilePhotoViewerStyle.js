import {makeStyles} from "@material-ui/styles";


export const useMobilePhotoViewerStyle = makeStyles((theme) => ({
    container: {
        width: '80vw',
        height: '80vw',
        margin: '0 auto',
        position: 'relative',
        borderRadius: 4,
        boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
    },
    imageView: {
        width: '100%',
        borderRadius: 4,
    },
    dotsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '0%',
        right: 'auto',
        overflowX: 'scroll',
        width: '100%',
        // paddingRight: 24,
        msOverflowStyle: 'none',// IE and Edge
        scrollbarWidth: 'none', // firefox
        '&::-webkit-scrollbar': { //chrome
            display: 'none',
        },

    },
    dot: {
        borderRadius: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        width: 12,
        height: 12,
        '&:hovor':{
            backgroundColor: 'white',
        }
    }
}));
