import React, {useState} from "react";
import {AppBar, Card, IconButton, Tab, Tabs, Typography} from "@material-ui/core";
import {toFaDigit} from "../../../utills/ToFaDigit";
import TabPanel from "./TabPanel";
import {useProductDetailStyle} from "./Styles/useProductDetailStyle";
import CommentCard from "./CommentCard";
import InputAdornment from "@material-ui/core/InputAdornment";
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import {StyledTextField} from "../Public/StyledTextField";

function ProductDetail() {
    const classes = useProductDetailStyle()
    const [value, setValue] = useState(0);
    const description = 'مخلوط‌کن مدل HA230 محصولی کاربردی از کالوات (Calwatt) است که با ابعاد جمع‌وجور و وزن پایین طراحی و تولید شده است. این محصول در رنگ‌های متنوعی ارائه شده است تا بتواند نظر افراد با سلیقه‌های متفاوت را به‌خود جلب کند. توان این محصول برابر با 300 وات است و از آن برای تهیه انواع اسموتی می‌توان استفاده کرد. ظرفیت بطری این محصول برابر با 570 میلی‌لیتر است. همچنین برای این محصول یک درپوش برای استفاده آسان تراز دستگاه و ریختن آب میوه طراحی شده است. تیغه‌ دستگاه از جنس استیل ضد‌زنگ ساخته شده که کیفیت مطلوبی دارد؛ به این ترتیب می‌توان از آن برای خرد کردن یخ هم استفاده کرد. روی بطری این محصول حلقه‌ای ازجنس سیلیکون قرار گرفته است تا بتوان آن را به‌راحتی در دست گرفت. ظرف این محصول بی‌رنگ است و حالتی شیشه‌ای دارد که می‌توان محتویات داخل آن را مشاهده کرد. موتور این مخلوط‌کن تنها دارای یک سرعت است. گفتنی است این محصول دارای گواهینامه CE است.\n' +
        '\n' +
        'مخلوط کن مدل HA230 با وزن یک کیلوگرم و ابعاد 335 × 85 × 85  میلی‌متر محصولی کاربردی از کالوات (Calwatt) است که با ابعاد جمع و جور و وزن پایین طراحی و تولید شده است.  این مخلوط کن با توجه به، ابعاد مناسب آن، به راحتی داخل کابینت، بدون اشغال کردن فضای زیادی جای می‌گیرد. شایان ذکر است از این مخلوط کن داخل آشپزخانه و روی کابینت هم میتوان بهره برد ، که با توجه به کوچک بودن بعضی از آشپزخانه‌ها بسیار کاربردی است. مخلوط کن مدل HA230  در رنگ‌های متنوعی ارائه شده است تا بتواند طیف وسیعی از سلیقه‌ها را پوشش دهد و با توجه به، رنگ‌بندی سایر وسایل آشپزخانه رنگ مورد علاقه هر فردی انتخاب شود.\n'
    const comment = {
        user: 'آرش دامن‌افشان',
        description: 'مخلوط‌کن مدل HA230 محصولی کاربردی از کالوات (Calwatt) است که با ابعاد جمع‌وجور و وزن پایین طراحی و تولید شده است. این محصول در رنگ‌های متنوعی ارائه شده است تا بتواند نظر افراد با سلیقه‌های متفاوت را به‌خود جلب کند. توان این محصول برابر با 300 وات است و از آن برای تهیه انواع اسموتی می‌توان استفاده کرد. ظرفیت بطری این محصول برابر با 570 میلی‌لیتر است. همچنین برای این محصول یک درپوش برای استفاده آسان تراز دستگاه و ریختن آب میوه طراحی شده است. تیغه‌ دستگاه از جنس استیل ضد‌زنگ ساخته شده که کیفیت مطلوبی دارد؛ به این ترتیب می‌توان از آن برای خرد کردن یخ هم استفاده کرد.'
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Card className={classes.card}>
            <AppBar className={classes.appBar} position={'static'}>
                <Tabs classes={{indicator: classes.indicator, scroller: classes.tabsContainer}} value={value}
                      onChange={handleChange}>
                    <Tab className={classes.tab} label={'توضیحات محصول'}/>
                    <Tab className={classes.tab} label={toFaDigit('دیدگاه‌ها (2)')}/>
                </Tabs>
                <TabPanel index={0} value={value}>
                    <Typography className={classes.description}>{description}</Typography>
                </TabPanel>

                <TabPanel index={1} value={value}>
                    <CommentCard comment={comment}/>
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

export default ProductDetail