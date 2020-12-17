import React, {useState} from "react";
import {Button, Card, Typography} from "@material-ui/core";
import {useMobileProductStyle} from "./Styles/useMobileProductStyle";
import PropTypes from 'prop-types';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import FullScreenDialog from "./FullScreenDialog";


function DetailCard(props) {
    const classes = useMobileProductStyle()
    const {product} = props
    const [open, setOpen] = useState(false)
    return (
        <Card className={classes.card}>
            <Typography className={classes.detailTitle}>مشخصات محصول</Typography>
            <Typography className={classes.detailDescription}>{product.detail}</Typography>
            <Button
                onClick={() => setOpen(true)}
                className={classes.moreButton}
                dir={'ltr'}
                variant={'text'}
                endIcon={
                    <AddCircleOutlineIcon/>
                }
            >
                مشاهده بیشتر
            </Button>
            <FullScreenDialog open={open} setOpen={setOpen} title={'مشخصات محصول'}>
                    <Card style={{height: '100%'}} className={classes.card}>
                        <Typography style={{maxHeight: 'initial'}} className={classes.detailDescription}>
                            {product.detail}
                        </Typography>
                    </Card>
            </FullScreenDialog>
        </Card>
    )

}

DetailCard.propTypes = {
    product: PropTypes.object.isRequired,
}

export default DetailCard