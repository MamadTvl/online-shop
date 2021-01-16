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
import {Link} from "react-router-dom";
import {SmoothVerticalScrolling} from "../../../utills/smoothScroll";
import FullScreenDialog from "./MobileVersion/FullScreenDialog";

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
                        message: classes.snackbarMessage,
                    }}
                    style={{fontFamily: 'Shabnam'}}
                    onClose={() => setOpenSnackBar(false)}
                    severity={auth.isLogin ? createCommentResult ? "success" : "error" : "warning"}
                >{
                    auth.isLogin ?
                        createCommentResult
                            ? 'نظر شما ثبت شد. پس از بررسی، نظر شما در سایت قرار داده می‌شود.'
                            : 'خطا لطفا دوباره تلاش کنید.'
                        : <div style={{display: 'flex'}}>
                            <Typography>
                                {' شما ابتدا باید'}
                            </Typography>
                            <Typography
                                component={
                                    (props) =>
                                        <Link
                                            {...props}
                                            onClick={() => SmoothVerticalScrolling(document.body, 500, "top")}
                                            to={'/login'}/>
                                }
                                style={{margin: 'auto 4px'}}
                            >
                                ورود/ثبت‌نام
                            </Typography>
                            <Typography>
                                {'کنید '}
                            </Typography>
                        </div>
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
                                <div style={{marginBottom: 16}} key={comment.id}>
                                    <CommentCard comment={comment}/>
                                </div>
                            ))
                        }
                        {
                            product.comment_objs_list.length === 0 &&
                            <Typography
                                style={{
                                    color: '#545454',
                                    fontSize: 14,
                                    textAlign: 'center',
                                    opacity: 0.68,
                                    margin: '16px 0'
                                }}
                            >
                                هنوز دیدگاهی ثبت نشده !
                            </Typography>
                        }
                        <form
                            onSubmit={(event) => {
                                event.preventDefault()
                                if (!auth.isLogin) {
                                    setOpenSnackBar(true)
                                } else {
                                    setFetchPostComment(true)
                                }
                            }}
                        >
                            <StyledTextField
                                required
                                id="comment-input"
                                placeholder="دیدگاه خود را بنویسید"
                                value={toFaDigit(commentInput)}
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