import {makeStyles} from "@material-ui/styles";


export const useImageDialogStyle = makeStyles((theme) => ({
    dialog: {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        padding: '16px 86px'
    },
    previewImage: {
        width: '40vw',
        height: '40vw',
    },
    imagesContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    image: {
        width: '40vw',
        height: '40vw',
    },
     imageButtonContainer: {
        display: 'flex',
         flexDirection: 'row',
         flexWrap: 'wrap',

     },
    imageButton: {
        width: '10vw',
        height: '10vw'
    },
    listItem: {
        width: '10vw',
        height: '10vw',
        marginLeft: '16px',
    }
}), {index: 1});
