import React, {useState} from "react";
import {useMobileProductStyle} from "./Styles/useMobileProductStyle";
import {Button, Card, Typography} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import FullScreenDialog from "./FullScreenDialog";
import PropTypes from "prop-types";
import DetailCard from "./DetailCard";


function DescriptionCard(props) {
    const classes = useMobileProductStyle()
    const {product} = props
    const [open, setOpen] = useState(false)
    return (
        <>
            <Card className={classes.card}>
                <Typography className={classes.detailTitle}>توضیحات محصول</Typography>
                <Typography className={classes.detailDescription}>{product.description}</Typography>
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
            </Card>
            <FullScreenDialog open={open} setOpen={setOpen} title={'توضیحات محصول'}>
                <Card className={classes.card}>
                    <Typography style={{maxHeight: 'initial'}} className={classes.detailDescription}>
                        {product.description}
                    </Typography>
                </Card>
            </FullScreenDialog>
        </>
    )
}

DetailCard.propTypes = {
    product: PropTypes.object.isRequired,
}
export default DescriptionCard