import React, {useEffect, useState} from "react";
import {AppBar, Card, CircularProgress, IconButton, Snackbar, Tab, Tabs, Typography} from "@material-ui/core";
import {toFaDigit} from "../../../utills/ToFaDigit";
import TabPanel from "./TabPanel";
import {useProductDetailStyle} from "./Styles/useProductDetailStyle";
import CommentCard from "./CommentCard";
import InputAdornment from "@material-ui/core/InputAdornment";
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import {StyledTextField} from "../Public/StyledTextField";
import * as PropTypes from "prop-types";
import {useAuth} from "../../../utills/Auth";
import usePostComment from "../../PostData/usePostComment";
import {Alert} from "@material-ui/lab";

function ProductDetail(props) {
    const {product} = props
    const classes = useProductDetailStyle()
    const [fetchPostComment, setFetchPostComment] = useState(false)
    const [value, setValue] = useState(0);
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [commentInput, setCommentInput] = useState('')
    const [createCommentLoading, createCommentResult] = usePostComment(fetchPostComment, product.id, commentInput)
    const auth = useAuth()

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        if (!createCommentLoading && fetchPostComment) {
            setOpenSnackBar(true)

            setFetchPostComment(false)
        }

    }, [createCommentLoading, createCommentResult])

    return (
        <>
            <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={() => setOpenSnackBar(false)}>
                <Alert
                    dir={'ltr'}
                    variant={'filled'}
                    classes={{
                        action: classes.snackbarAction,
                        icon: classes.snackbarIcon,
                        message: classes.snackbarMessage
                    }}
                    style={{fontFamily: 'Shabnam'}}
                    onClose={() => setOpenSnackBar(false)}
                    severity={createCommentResult ? "success" : "error"}
                >{
                    createCommentResult
                        ? 'نظر شما ثبت گردید و پس از تایید در وب سایت نمایش داده خواهد شد'
                        : 'به نظر میرسد که مشکلی پیش آمده لطفا دوباره تلاش کنید'
                }

                </Alert>
            </Snackbar>
            <Card className={classes.card}>
                <AppBar className={classes.appBar} position={'static'}>
                    <Tabs classes={{indicator: classes.indicator, scroller: classes.tabsContainer}} value={value}
                          onChange={handleChange}>
                        <Tab className={classes.tab} label={'توضیحات محصول'}/>
                        <Tab className={classes.tab} label={toFaDigit(`دیدگاه‌ها (${product.comment_number})`)}/>
                    </Tabs>
                    <TabPanel index={0} value={value}>
                        <Typography className={classes.description}>{product.description}</Typography>
                    </TabPanel>

                    <TabPanel index={1} value={value}>
                        {
                            product.comment_objs_list.map((comment) => (
                                <div key={comment.id}>
                                    <CommentCard comment={comment}/>
                                </div>
                            ))
                        }
                        <form
                            onSubmit={(event) => {
                                event.preventDefault()
                                setFetchPostComment(true)
                            }}
                        >
                            <StyledTextField
                                required
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
                                                        type={'submit'}
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
                        </form>
                    </TabPanel>

                </AppBar>
            </Card>
        </>
    )

}

ProductDetail.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ProductDetail