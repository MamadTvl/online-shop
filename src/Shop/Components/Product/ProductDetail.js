import React, {useState} from "react";
import {AppBar, Card, IconButton, Tab, Tabs, Typography} from "@material-ui/core";
import {toFaDigit} from "../../../utills/ToFaDigit";
import TabPanel from "./TabPanel";
import {useProductDetailStyle} from "./Styles/useProductDetailStyle";
import CommentCard from "./CommentCard";
import InputAdornment from "@material-ui/core/InputAdornment";
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import {StyledTextField} from "../Public/StyledTextField";
import * as PropTypes from "prop-types";

function ProductDetail(props) {
    const classes = useProductDetailStyle()
    const {product} = props
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
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
                            <CommentCard comment={comment}/>
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
                </TabPanel>

            </AppBar>
        </Card>
    )

}
ProductDetail.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ProductDetail