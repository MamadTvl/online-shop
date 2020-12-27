import React, {useEffect, useState} from "react";
import PropTypes from "prop-types"
import {Button, Card, CircularProgress, IconButton, Snackbar} from "@material-ui/core";
import {useMobileProductStyle} from "./Styles/useMobileProductStyle";
import Typography from "@material-ui/core/Typography";
import {separateDigit, toFaDigit} from "../../../../utills/ToFaDigit";
import MobileCommentCard from "./MobileCommentCard";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import FullScreenDialog from "./FullScreenDialog";
import {StyledTextField} from "../../Public/StyledTextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import usePostComment from "../../../PostData/usePostComment";
import {useAuth} from "../../../../utills/Auth";
import {Alert} from "@material-ui/lab";


function CommentContainer(props) {
    const {comments, productId} = props
    const classes = useMobileProductStyle()
    const [open, setOpen] = useState(false)
    const [fetchPostComment, setFetchPostComment] = useState(false)
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [commentInput, setCommentInput] = useState('')
    const [createCommentLoading, createCommentResult] = usePostComment(fetchPostComment, productId, commentInput)
    const auth = useAuth()

    useEffect(() => {
        if (!createCommentLoading && fetchPostComment) {
            setOpenSnackBar(true)

            setFetchPostComment(false)
        }

    }, [createCommentLoading, createCommentResult])
    return (
        <>
            <Card className={classes.card}>
                <Typography className={classes.detailTitle}>{toFaDigit(`دیدگاه ها (${separateDigit(comments.length)})`)}</Typography>
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
            <FullScreenDialog open={open} setOpen={setOpen} title={toFaDigit(`دیدگاه ها (${separateDigit(comments.length)})`)}>
                <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={() => setOpenSnackBar(false)}>
                    <Alert
                        dir={'ltr'}
                        variant={'filled'}
                        style={{fontFamily: 'Shabnam'}}
                        onClose={() => setOpenSnackBar(false)}
                        severity={createCommentResult ? "success" : "error"}
                    >{
                        createCommentResult
                            ? 'نظر شما ثبت شد و پس از تایید قرار داده میشود باتشکر'
                            : 'به نظر میرسد که مشکلی پیش آمده لطفا دوباره تلاش کنید'
                    }

                    </Alert>
                </Snackbar>
                <Card className={classes.card}>
                    {
                        comments.map((comment) => (
                            <div style={{marginBottom: 16}}>
                                <MobileCommentCard isPreview={false} comment={comment}/>
                            </div>
                        ))
                    }
                    <StyledTextField
                        id="comment-input"
                        placeholder="دیدگاه خود را بنویسید"
                        value={toFaDigit(commentInput)}
                        disabled={!auth.isLogin}
                        onChange={(event) => setCommentInput(event.target.value)}
                        InputProps={{
                            endAdornment:
                                <InputAdornment
                                    style={{
                                        position: 'absolute',
                                        left: 0,
                                        bottom: 28,
                                        display: (commentInput === '') && 'none'
                                    }}
                                    position="end"
                                >
                                    {
                                        createCommentLoading
                                            ?
                                            <CircularProgress size={32} color={'initial'}
                                                              style={{color: '#F16522'}}/>
                                            :
                                            <IconButton
                                                onClick={() => setFetchPostComment(true)}
                                            >
                                                <SendRoundedIcon
                                                    style={{transform: 'rotate(180deg)', color: '#F16522'}}/>
                                            </IconButton>

                                    }
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
    productId: PropTypes.number.isRequired,
}
export default CommentContainer