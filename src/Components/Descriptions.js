import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { makeStyles, Paper, Typography, Grid } from '@material-ui/core';
import { ReactComponent as SendMail } from "../Svg/sendmail.svg";
import Stepper from "./Stepper";


const useStyles = makeStyles((theme) =>
    ({
        motionspan: {
            display: "inline-block"
        },
        farmaborsatypographyheader: {
            fontWeight: 700,
            marginBottom: 20
        },
        headerhighlight: {
            color: theme.palette.primary.main
        },
        farmaborsatypography: {
            lineHeight: "1.8",
            whitespace: "pre-line",
            fontWeight: 300
        },
        farmaborsatypographyheader: {
            fontWeight: 700,
            marginBottom: 20
        },
    }),
);



export function Nedir() {
    const classes = useStyles();
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <>
            <motion.span ref={ref} animate={controls} variants={{ hidden: { x: -100 }, visible: { x: [-100, 0] } }} className={classes.motionspan} >
                <Typography variant="h4" component="h2" className={classes.farmaborsatypographyheader}>FarmaBorsa <span className={classes.headerhighlight}>Nedir?</span></Typography>
            </motion.span>
            <Typography className={classes.farmaborsatypography}>

                FarmaBorsa sadece eczacıların üye olabildiği ve sadece eczacılara ait olan bir pazaryeridir.<br /><br />

        Yaklaşık 4 yıldır üzerinde çalıştığımız FarmaBorsa, hepimizin sırtındaki stok maliyetini azaltmak düşük baremde karlılığımızı arttırmak ve ucuza çeşit bulundurabilmek amacıyla hazırlanmıştır.<br />

        Eczacı olmayan kişilerin FarmaBorsa’ya üye olması mümkün değildir. Bu denetim yönetici eczacılar tarafından titizlikle sağlanmaktadır.<br /><br />

        Sisteme sadece eczanelerimize ait GLN numarası ile üye olunabilmektedir.<br /><br />

        Üye eczacılar, sistem içinde ilaç dışı ürün satın alabileceği gibi ilaç dışı ürün de satabilmektedir.<br /><br />

        FarmaBorsa’ya üyelik ve ürün ilan verme ücretsiz olup, üyelerden herhangi bir aidat da talep edilmemektedir.<br /><br />

        FarmaBorsa’da alışveriş yapabilmek için kredi kartı kullanımı zorunludur. Alıcı ve Satıcı meslektaşlarımız arasındaki para transferi, güvenli ödeme kanalı olan iyzico ve FarmaBorsa garantisi altındadır.<br /><br />

        Mart 2017 de FarmaBorsa markası altında, sosyal sorumluluk projesi olarak başladığımız ve meslektaşlarımız arasında takas imkanı sunan bir programdan, mesleğin gereksinimleri ve mevcut üye eczacıların talepleri doğrultusunda evrilen bir pazaryeri haline gelmiştir.<br />

        %100 Eczacı Markası olmakla övündüğümüz FarmaBorsa, mesleğimize ve ihtiyaçlarımıza değer katmaya devam edecektir.<br /><br /></Typography>
        </>)
}
export function NasilCalisir() {
    const classes = useStyles();
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <>
            <motion.span ref={ref} animate={controls} variants={{ hidden: { x: -100 }, visible: { x: [-100, 0] } }} className={classes.motionspan} >
                <Typography variant="h4" component="h2" className={classes.farmaborsatypographyheader}>FarmaBorsa <span className={classes.headerhighlight}>Nasıl Çalışır?</span></Typography>
            </motion.span>
            <Typography className={classes.farmaborsatypography}>                    </Typography>
            <Grid container justify="center">
                <Stepper />
            </Grid>
        </>
    )
}