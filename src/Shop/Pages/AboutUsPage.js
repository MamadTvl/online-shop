import React from "react";
import {useAboutUsPageStyle} from "./Styles/useAboutUsPageStyle";

import {Card, Typography} from "@material-ui/core";
import Title from "../Components/Public/Title";


function AboutUsPage() {
    const classes = useAboutUsPageStyle()
    return (

        <div className={classes.container}>
            <Title title={'درباره ما'}/>
            <Card className={classes.card}>
                <div className={classes.section1}>
                    <Typography className={classes.h2} component={'h2'}>
                        | Do It Different |
                    </Typography>
                    <Typography className={classes.text}>
                        فعالیت اصلی Did Agency تهیه، تولید و فروش صنایع‌دستی در قالب‌ محصولات متنوع، با همکاری هنرمندان بنام، خلاق و کار بلد ایرانی است. هنرمندان جوان همکار در Did Agency که تشکیل‌دهنده‌ی  Did Creative Agency نیز هستند، با طراحی محصولات خاص و منحصربه‌فرد و استفاده از مواد اولیه‌ی باکیفیت درصدد بازگرداندن کالای مرغوب ایرانی به سبد خانواده‌ی ایرانی در Did ArtShop هستند. Did ArtShop علاوه بر فروش محصولات دست‌ساز خود، به دنبال معرفی تولیدات هنرمندان دیگر با رویکردی پویا و نگرشی خلاق است که توسط Did Creative Agency تائید شده‌اند. ما در Did Agency معتقدیم که  ایجاد انگیزه، ساخت بستر مناسب جهت کسب درآمد و معرفی هنرمندان جوان از اولین گام‌هایی است که در ابتدای امر باید برداشته شود تا علاوه بر کسب درآمد، به رسالت هنر نیز وفادار باشیم. به‌گونه‌ای که با قرار دادن فضای مناسب در اختیار همکاران جوان در این حوزه، زمینه‌ای‌ جهت شکوفایی استعدادهای نسل جدید فراهم کنیم و هم از تجربیات نسل‌های پیشین برای آموزش‌وپرورش دیگر مستعدان عرصه‌ی صنایع‌دستی استفاده کنیم؛ به همین دلیل است که یکی دیگر از فعالیت‌های ما جذب، خلق و نشر مقالات مختلف و آموزش تولید صنایع‌دستی گوناگون از طریق مدیاهای مختلف به علاقه‌مندان صنایع‌دستی است.
                    </Typography>
                </div>
            </Card>
        </div>
    )
}

export default AboutUsPage