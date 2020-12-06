import React from "react";
import {useStyles} from "./Styles/BlogInterViewStyle";
import image from '../../../img/blog.png'
import {Card, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import Chip from "@material-ui/core/Chip";


function BlogInterView() {
    const classes = useStyles()

    function createData(image, title, date, summery) {
        return {image, title, date, summery}
    }

    const articles = [
        createData(image, 'کارآفرینی', 'دوشنبه، بهمن ۹۸', 'به دنبال تعریفی شفاف و جامع از مفهوم مدیریت محصول دیجیتال در فضای رسانه'),
        createData(image, 'کارآفرینی', 'دوشنبه، بهمن ۹۸', 'به دنبال تعریفی شفاف و جامع از مفهوم مدیریت محصول دیجیتال در فضای رسانه'),
        createData(image, 'کارآفرینی', 'دوشنبه، بهمن ۹۸', 'به دنبال تعریفی شفاف و جامع از مفهوم مدیریت محصول دیجیتال در فضای رسانه'),
    ]
    return (
        <div className={classes.container}>
            <Typography className={classes.title}>آخرین نوشته‌ها</Typography>
            <Grid container spacing={3}>
                {
                    articles.map((article) => (
                        <Grid item md={4} xs={12}>
                            <Card className={classes.card}>
                                <div style={{position: 'relative', display: 'flex', justifyContent: 'center'}}>
                                    <CardMedia className={classes.image} image={article.image}
                                               title={article.title}/>
                                    <Chip className={classes.chip} label={article.title}/>
                                </div>
                                <CardContent className={classes.cardContent}>
                                    <Typography className={classes.date}>{article.date}</Typography>
                                    <Typography className={classes.summery}>{article.summery}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
            </Grid>
        </div>
    )

}

export default BlogInterView