import React, {useState} from "react";
import PropTypes from "prop-types"
import {Button, Card, IconButton} from "@material-ui/core";
import {useMobileProductStyle} from "./Styles/useMobileProductStyle";
import Typography from "@material-ui/core/Typography";
import {toFaDigit} from "../../../../utills/ToFaDigit";
import MobileCommentCard from "./MobileCommentCard";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import FullScreenDialog from "./FullScreenDialog";
import {StyledTextField} from "../../Public/StyledTextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SendRoundedIcon from "@material-ui/icons/SendRounded";


function CommentContainer(props) {
    const {comments} = props
    const classes = useMobileProductStyle()
    const [open, setOpen] = useState(false)
    return (
        <>
            <Card className={classes.card}>
                <Typography className={classes.detailTitle}>{toFaDigit(`دیدگاه ها (2)`)}</Typography>
                {comments.length > 0 && <MobileCommentCard isPreview={true} comment={comments[0]}/>}
                <Button
                    onClick={() => setOpen(true)}
                    style={{marginTop: 8}}
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
                    <StyledTextField
                        id="outlined-textarea"
                        placeholder="دیدگاه خود را بنویسید"
                        InputProps={{
                            endAdornment:
                                <InputAdornment style={{position: 'absolute', left: 0, bottom: 28}} position="end">
                                    <IconButton>
                                        <SendRoundedIcon style={{transform: 'rotate(180deg)', color: '#F16522'}}/>
                                    </IconButton>
                                </InputAdornment>
                            ,
                            classes: {
                                input: classes.commentInput,
                                root: classes.commentInputRoot,
                            }
                        }}
                        fullWidth
                        multiline
                        variant="outlined"
                    />
                </Card>

            </FullScreenDialog>
        </>
    )

}

CommentContainer.propTypes = {
    comments: PropTypes.object.isRequired,
}
export default CommentContainer