import React from 'react'
import {useStyles} from "./Styles/FooterStyle";
import {Grid, Typography} from "@material-ui/core";
import logo from '../../img/zimmerman-white.svg'
import Link from "@material-ui/core/Link";
import SocialNetwork from "./SocialNetwork";

function Footer() {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item md={6} sm={8} xs={12}>
                        <a href={'google.com'}><img className={classes.logo} src={logo} alt={'zimmerman.ir'}/></a>
                        <Typography className={classes.description} paragraph noWrap={false}>دیجی‌استایل، پس از تجربه‌ی
                            موفق فروشگاه اینترنتی دیجی‌کالا به صورت تخصصی پا به
                            عرصه مد، پوشاک و سبک زندگی گذاشت تا همان تجربه‌ی شیرین، در قالبی نو تکرار شود. در دیجی
                            ‌استایل
                            می‌توانید همه آنچه مرتبط با مد و پوشاک است.</Typography>
                        <SocialNetwork isXs={false}/>
                    </Grid>

                    <Grid item md={2} sm={4}>
                        <div className={classes.title}><Typography className={classes.pages}>صفحات</Typography></div>
                        <div className={classes.linkContainer}>
                            <Link className={classes.link}>تماس با ما</Link>
                            <Link className={classes.link}>درباره ما</Link>
                            <Link
                                href={'https://blog.didartshop.ir'}
                                target="_blank" rel="noopener noreferrer"
                                className={classes.link}
                            >
                                بلاگ
                            </Link>
                        </div>
                    </Grid>
                    <Grid className={classes.xsGrid} md={false} sm={false} xs={5}/>
                    <Grid className={classes.xsGrid} md={false} sm={false} xs={1}>
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