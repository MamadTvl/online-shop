import React from "react";
import image from '../../../img/create_account.png'
import {TextField, Typography} from "@material-ui/core";
import {useSignUpPageStyle} from "../../Pages/Styles/useSignUpPageStyle";


function FirstStep() {
    const classes = useSignUpPageStyle()

    return(
        <>
            <div className={classes.imageContainer}>
                <img src={image} alt={'create_account'} className={classes.image}/>
            </div>
            <div className={classes.mobileContainer}>
                <Typography className={classes.label}>شماره موبایل</Typography>
                <TextField
                    dir={'ltr'}
                    // error={error}
                    // value={values.mobileNumber}
                    // onChange={handleChange('mobileNumber')}
                    InputProps={{
                        classes: {
                            input: classes.input,
                            root: classes.TextFieldRoot,
                        }
                    }}
                    fullWidth
                    variant="outlined"
                />
            </div>
        </>
    )
}


export default FirstStep