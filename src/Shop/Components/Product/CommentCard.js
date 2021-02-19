import React, {useEffect, useState} from "react";
import {Button, Card, CardContent, Snackbar, SvgIcon, Typography} from "@material-ui/core";
import profile from "../../../img/profile.png";
import {useProductDetailStyle} from "./Styles/useProductDetailStyle";
import {separateDigit} from "../../../utills/ToFaDigit";
import useLikingComment from "../../PostData/useLikingComment";
import {useAuth} from "../../../utills/Auth";
import {Alert} from "@material-ui/lab";
import {Link} from "react-router-dom";
import {SmoothVerticalScrolling} from "../../../utills/smoothScroll";


function CommentCard(props) {
    const {comment} = props
    const auth = useAuth()
    const classes = useProductDetailStyle()
    const [status, setStatus] = useState({
        like: comment.is_liked,
        dislike: comment.is_disliked,
        likes_number: comment.likes_number,
        dislikes_number: comment.dislikes_number,
    })
    const [fetchLiking, setFetchLiking] = useState(false)
    const [data, setData] = useState({
        like: false,
        dislike: false,
    })
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [likingLoading, likingResult] = useLikingComment(fetchLiking, comment.id, data)

    useEffect(() => {
        if (!likingLoading && likingResult !== undefined) {
            if (likingResult !== null) {
                setStatus({
                    like: likingResult.is_liked,
                    dislike: likingResult.is_disliked,
                    likes_number: likingResult.likes_number,
                    dislikes_number: likingResult.dislikes_number,
                })
            } else {
                // show error
            }
            setFetchLiking(false)
        }
    }, [likingLoading, likingResult])


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
                    severity={"warning"}
                >{
                    <div style={{display: 'flex'}}>
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
            <Card className={classes.commentContainer}>
                <div className={classes.cardHeader}>
                    <Button
                        className={classes.like}
                        dir={'ltr'}
                        color={'primary'}
                        classes={{
                            textPrimary: !status.like
                                ? classes.defaultButtonColor
                                : classes.activeColor
                        }}
                        variant={'text'}
                        onClick={() => {
                            if (auth.isLogin) {
                                setData({
                                    like: true,
                                    dislike: false,
                                })
                                setFetchLiking(true)
                            } else {
                                setOpenSnackBar(true)
                            }
                        }}
                        endIcon={
                            <SvgIcon color={'primary'}
                                     classes={{
                                         colorPrimary: !status.like
                                             ? classes.defaultColor
                                             : classes.activeColor
                                     }}
                                     xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14">
                                <path id="Like"
                                      d="M14.5,5a1.452,1.452,0,0,1,.578.117,1.552,1.552,0,0,1,.48.32A1.477,1.477,0,0,1,16,6.5a1.452,1.452,0,0,1-.078.477l-2,6a1.561,1.561,0,0,1-.219.418,1.435,1.435,0,0,1-.328.324,1.557,1.557,0,0,1-.41.207A1.46,1.46,0,0,1,12.5,14h-4a6.956,6.956,0,0,1-2.7-.539,6.6,6.6,0,0,0-1.129-.344A5.79,5.79,0,0,0,3.5,13H0V6H3.258a2.459,2.459,0,0,0,.957-.187,2.5,2.5,0,0,0,.809-.547L9.883.414a1.814,1.814,0,0,1,.391-.3A.962.962,0,0,1,10.75,0a1.211,1.211,0,0,1,.484.1A1.269,1.269,0,0,1,11.9.766a1.211,1.211,0,0,1,.1.484,5.058,5.058,0,0,1-.141,1.207,5.7,5.7,0,0,1-.414,1.137,5.616,5.616,0,0,0-.266.684A3.668,3.668,0,0,0,11.031,5Zm-2,8a.491.491,0,0,0,.289-.094.5.5,0,0,0,.188-.25q.039-.109.145-.422l.254-.754q.148-.441.328-.969t.359-1.066q.18-.539.348-1.051t.3-.922q.133-.41.211-.672A2.11,2.11,0,0,0,15,6.5a.507.507,0,0,0-.5-.5H10q0-.414.02-.77a5.907,5.907,0,0,1,.078-.691,4.874,4.874,0,0,1,.168-.672,5.837,5.837,0,0,1,.289-.711,4.581,4.581,0,0,0,.332-.926A4.193,4.193,0,0,0,11,1.25.241.241,0,0,0,10.75,1a.112.112,0,0,0-.082.035L10.6,1.1,5.734,5.977a3.391,3.391,0,0,1-.535.438,3.629,3.629,0,0,1-.605.32A3.38,3.38,0,0,1,3.258,7H1v5H3.5a6.994,6.994,0,0,1,2.7.539A6.027,6.027,0,0,0,8.5,13Z"/>
                            </SvgIcon>
                        }
                    >
                        {`(${separateDigit(status.likes_number)}) پسندیدم`}
                    </Button>
                    <Button
                        className={classes.like}
                        color={'primary'}
                        classes={{
                            textPrimary: !status.dislike
                                ? classes.defaultButtonColor
                                : classes.activeColor
                        }}
                        dir={'ltr'}
                        variant={'text'}
                        onClick={() => {
                            if (auth.isLogin) {
                                setData({
                                    like: false,
                                    dislike: true,
                                })
                                setFetchLiking(true)
                            } else {
                                setOpenSnackBar(true)
                            }
                        }}
                        endIcon={
                            <SvgIcon color={'primary'}
                                     classes={{
                                         colorPrimary: !status.dislike
                                             ? classes.defaultColor
                                             : classes.activeColor
                                     }}
                                     xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14">
                                <path id="Dislike"
                                      d="M7.5,256a6.994,6.994,0,0,1,2.7.539,6.6,6.6,0,0,0,1.129.344A5.79,5.79,0,0,0,12.5,257H16v7H12.742a2.459,2.459,0,0,0-.957.188,2.5,2.5,0,0,0-.809.547l-4.859,4.852a1.814,1.814,0,0,1-.391.3A.962.962,0,0,1,5.25,270a1.211,1.211,0,0,1-.484-.1,1.269,1.269,0,0,1-.668-.668,1.21,1.21,0,0,1-.1-.484,5.058,5.058,0,0,1,.141-1.207,5.7,5.7,0,0,1,.414-1.137,5.616,5.616,0,0,0,.266-.684A3.668,3.668,0,0,0,4.969,265H1.5a1.452,1.452,0,0,1-.578-.117,1.553,1.553,0,0,1-.48-.32A1.477,1.477,0,0,1,0,263.5a1.452,1.452,0,0,1,.078-.477l2-6A1.5,1.5,0,0,1,3.5,256Zm7.5,2H12.5a6.956,6.956,0,0,1-2.7-.539A6.027,6.027,0,0,0,7.5,257h-4a.491.491,0,0,0-.289.094.5.5,0,0,0-.187.25q-.039.109-.145.422l-.254.754q-.148.441-.328.969t-.359,1.066q-.18.539-.348,1.051t-.3.922q-.133.41-.211.672a2.11,2.11,0,0,0-.078.3.481.481,0,0,0,.148.352A.48.48,0,0,0,1.5,264H6q0,.414-.02.77a5.908,5.908,0,0,1-.078.691,4.874,4.874,0,0,1-.168.672,5.837,5.837,0,0,1-.289.711,4.582,4.582,0,0,0-.332.926,4.193,4.193,0,0,0-.113.98.241.241,0,0,0,.25.25.112.112,0,0,0,.082-.035L5.4,268.9l4.867-4.875a3.391,3.391,0,0,1,.535-.437,3.629,3.629,0,0,1,.605-.32A3.379,3.379,0,0,1,12.742,263H15Z"
                                      transform="translate(0 -256)"/>
                            </SvgIcon>
                        }
                    >
                        {`(${separateDigit(status.dislikes_number)}) نپسندیدم`}
                    </Button>
                </div>
                <CardContent className={classes.cardContent}>
                    <img className={classes.profile} src={profile} alt={'profile'}/>
                    <div style={{marginRight: 20}}>
                        <Typography className={classes.username}>{comment.user.name_and_last_name}</Typography>
                        <Typography className={classes.comment}>{comment.text}</Typography>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}


export default CommentCard
