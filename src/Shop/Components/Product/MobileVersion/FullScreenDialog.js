import React from "react";
import {AppBar, Dialog, IconButton, Slide, SvgIcon, Typography} from "@material-ui/core"
import PropTypes from "prop-types"
import {useMobileProductStyle} from "./Styles/useMobileProductStyle";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function FullScreenDialog(props) {
    const {children, open, setOpen, title} = props;
    const classes = useMobileProductStyle()
    return (
        <Dialog fullScreen open={open} TransitionComponent={Transition}>
            <AppBar position={'fixed'} className={classes.dialogHeader}>
                <IconButton onClick={() => setOpen(false)}>
                    <SvgIcon xmlns="http://www.w3.org/2000/svg" width="32.504" height="16.12"
                             viewBox="0 0 32.504 16.12">
                        <g id="return-up-back" transform="translate(0.75 1.061)">
                            <path id="Path_2570" data-name="Path 2570" d="M48,160l4.77,4.77L48,169.54"
                                  transform="translate(-21.766 -160)" fill="none" stroke="#434343"
                                  strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                            <path id="Path_2571" data-name="Path 2571"
                                  d="M93.811,224H71.9a8.012,8.012,0,0,0-7.9,8.049v1.491"
                                  transform="translate(-64 -219.23)" fill="none" stroke="#434343" strokeLinecap="round"
                                  strokeLinejoin="round" strokeWidth="1.5"/>
                        </g>
                    </SvgIcon>
                </IconButton>
                <Typography className={classes.dialogTitle}>{title}</Typography>
            </AppBar>
            <div className={classes.dialogContent}>
                <div className={classes.toolbar}/>
                {children}
            </div>
        </Dialog>
    )
}

FullScreenDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
}

export default FullScreenDialog