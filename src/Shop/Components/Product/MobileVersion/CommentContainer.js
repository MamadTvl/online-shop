import React, {useState} from "react";
import PropTypes from "prop-types"
import {Button, Card} from "@material-ui/core";
import {useMobileProductStyle} from "./Styles/useMobileProductStyle";
import Typography from "@material-ui/core/Typography";
import {toFaDigit} from "../../../../utills/ToFaDigit";
import MobileCommentCard from "./MobileCommentCard";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import FullScreenDialog from "./FullScreenDialog";


function CommentContainer(props) {
    const {comments} = props
    const classes = useMobileProductStyle()
    const [open, setOpen] = useState(false)
    return (
        <>
            <Card className={classes.card}>
                <Typography className={classes.detailTitle}>{toFaDigit(`دیدگاه ها (2)`)}</Typography>
                <MobileCommentCard isPreview={true} comment={comments[0]}/>
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
            <FullScreenDialog open={open} setOpen={setOpen} title={toFaDigit(`دیدگاه ها (2)`)}>
                <Card className={classes.card}>
                    {
                        comments.map((comment) => (
                            <div style={{marginBottom: 16}}>
                                <MobileCommentCard isPreview={false} comment={comment}/>
                            </div>
                        ))
                    }
                </Card>
            </FullScreenDialog>
        </>
    )

}

CommentContainer.propTypes = {
    comments: PropTypes.object.isRequired,
}
export default CommentContainer