import React from "react";
import {useStyles} from "./Styles/AttributesStyle";
import {Grid, Typography} from "@material-ui/core";
import attributes_image_1 from '../../../img/attributes1.png'
import attributes_image_2 from '../../../img/attributes2.png'
import attributes_image_3 from '../../../img/attributes3.png'


function Attributes() {
    const classes = useStyles()
    function createData(image, title, description){
        return{image, title, description}
    }
    const attributes = [
        createData(attributes_image_1, 'پشتیبانی ۲۴ ساعته', 'پشتیبانی تلفنی ما به صورت ۲۴ ساعته و در ۷ روز هفته به سوالات شما پاسخ می دهد.'),
        createData(attributes_image_2, 'ضمانت اورجینال پوشاک', 'تمامی محصولات وارد شده در این وبسایت اوریجینال و با صدور گواهی نامه تحویل داده می‌شوند.'),
        createData(attributes_image_3, 'تحویل سریع و آسان', 'ما به آسانی و در کمترین زمان ممکن از طریق پیک و پست‌های پیشتاز به دست شما می‌رسانیم.'),
    ]


    return(
        <div className={classes.main}>
            <Typography className={classes.title}>با خیال راحت، از ما خرید کنید.</Typography>
            <Grid container>
                {
                    attributes.map((attribute)=> (
                        <Grid item md={4} xs={12}>
                            <div className={classes.container}>
                                <img className={classes.image} src={attribute.image} alt={attribute.title}/>
                                <Typography className={classes.attributeTitle}>{attribute.title}</Typography>
                                <Typography className={classes.attributeDescription}>{attribute.description}</Typography>
                            </div>
                        </Grid>
                    ))

                }
            </Grid>
        </div>
    )
}

export default Attributes