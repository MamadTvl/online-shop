import React from 'react'
import {useStyles} from "./Styles/FooterStyle";
import {Grid, Typography} from "@material-ui/core";
import logo from '../../img/didshop-logo-white.svg'
import Link from "@material-ui/core/Link";
import {Link as RouterLink} from "react-router-dom"
import SocialNetwork from "./SocialNetwork";
import {SmoothVerticalScrolling} from "../../utills/smoothScroll";

function Footer() {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item md={6} sm={8} xs={12}>
                        <RouterLink to={'/'}>
                            <img
                                onClick={() => SmoothVerticalScrolling(document.body, 500, "top")}
                                className={classes.logo}
                                src={logo}
                                alt={'دیدآرت شاپ'}
                            />
                        </RouterLink>
                        <Typography
                            className={classes.description}
                            paragraph
                            noWrap={false}
                        >
                            فعالیت اصلی Did Agency تهیه، تولید و فروش صنایع‌دستی در قالب‌ محصولات متنوع، با همکاری هنرمندان بنام، خلاق و کار بلد ایرانی است. هنرمندان جوان همکار در Did Agency که تشکیل‌دهنده‌ی  Did Creative Agency نیز هستند، با طراحی محصولات خاص و منحصربه‌فرد و استفاده از مواد اولیه‌ی باکیفیت درصدد بازگرداندن کالای مرغوب ایرانی به سبد خانواده‌ی ایرانی در Did ArtShop هستند.
                        </Typography>
                        <SocialNetwork isXs={false}/>
                    </Grid>

                    <Grid item md={2} sm={4}>
                        <div className={classes.title}><Typography className={classes.pages}>صفحات</Typography></div>
                        <div className={classes.linkContainer}>
                            <Link className={classes.link}>تماس با ما</Link>
                            <RouterLink onClick={() => SmoothVerticalScrolling(document.body, 500, "top")} to={'/about-us'} className={classes.link}>درباره ما</RouterLink>
                            <Link
                                href={'https://blog.didartshop.ir'}
                                target="_blank" rel="noopener noreferrer"
                                className={classes.link}
                            >
                                بلاگ
                            </Link>
                        </div>
                    </Grid>
                    <Grid item className={classes.xsGrid} md={false} sm={false} xs={6}/>
                    <Grid item className={classes.xsGrid} md={false} sm={false} xs={1}>
                        <SocialNetwork isXs={true}/>
                    </Grid>
                    <Grid item md={4} sm={12}>
                        <div className={classes.title}><Typography className={classes.pages}>نماد‌ها</Typography></div>
                        <div className={classes.symbolContainer}>
                            <div className={classes.symbol}/>
                            <div className={classes.symbol}/>
                            <div className={classes.symbol}/>
                        </div>
                    </Grid>

                </Grid>
            </div>

        </footer>
    )
}

export default Footer