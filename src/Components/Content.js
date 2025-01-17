import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import FarmaBorsa1 from "../Img/farmaborsa1.png";
import FarmaBorsa2 from "../Img/farmaborsa2.png";
import Farmaekg from "../Img/farmaekg.jpeg";
import Farmaekg2 from "../Img/farmaekg2.jpeg";
import Farmaekg3 from "../Img/farmaekg3.jpeg";
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import Maps from "../Components/Maps";
import { Whatsapp, Eposta } from "./İletisim";
import Stepper from "./Stepper";
import { IconButton } from '@material-ui/core';
import { Sticker1, Sticker2, Sticker3, Sticker4 } from "./Stickers";
import { Nedir, NasilCalisir } from "./Descriptions";
import Blob from "./Blob";

const useStyles = makeStyles((theme) =>
    ({
        jumbotextcontainer: {
            marginTop: "120px",
            [theme.breakpoints.down]: {
                textAlign: "center"
            }
        },
        jumbotext: {
            fontWeight: "700",
            color: "#2B3036",
            [theme.breakpoints.down('md')]: {
                display: "none"
            }
        },
        uyeolbuttons: {
            background: "linear-gradient(90deg, rgba(81,172,245,1) 0%, rgba(63,63,251,1) 100%)",
            color: "white",
            textTransform: "none",
            marginTop: "35px",
            marginLeft: "15px",
            [theme.breakpoints.down('md')]: {
                display: "none"

            }
        },
        formaborsaImg: {
            position: "absolute",
            top: 130,
            [theme.breakpoints.down("md")]: {
                position: "static",
                marginTop: 100,
                marginLeft: "20vh"
            },
            [theme.breakpoints.down("sm")]: {
                marginLeft: "4vw"
            },
            [theme.breakpoints.down("xs")]: {
                width: "80%",
                marginLeft: "5vw"
            }
        },
        farmaborsaaciklama: {
            marginTop: 150,
            marginBottom: 100,

        },
        farmaborsaaciklamaitem: {
            [theme.breakpoints.down("md")]: {
                marginLeft: "25vw",
            }
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
        headerhighlight: {
            color: theme.palette.primary.main
        },
        uygulamalar: {
            marginTop: 200,
            marginBottom: 150,
            minHeight: 250
        },
        downloadIcons: {
            marginRight: 15,
            marginTop: 20,
            minWidth: 175
        },
        mobildenaninda: { marginBottom: 45 },
        fiyatlardakolaytarama: {
            fontWeight: 700,
            textAlign: "center"
        },
        fiyatlardakolaytaramatypography: {
            fontWeight: 300,
            margin: "0 75px"
        },
        epostaButton: {
            color: "white",
            fontWeight: 700,
            textTransform: "none",
            padding: 20
        },
        link: {
            textDecoration: "underline",
            color: "#0f0f0f",
            fontWeight: 300,
            fontSize: 20,
        },
        kolaytaramacontainer: {
            [theme.breakpoints.down('md')]: {
                display: "none"
            },
        },
        eczacılaraozelmobil: {
            display: "block",
            textAlign: "center",
            position: "relative",
            top: 150,
            [theme.breakpoints.up('lg')]: {
                display: "none"
            },
        },
        maps: {
            [theme.breakpoints.down('md')]: {
                marginTop: 100,
                marginLeft: "16vw"
            },
        },
        motionspan: {
            display: "inline-block"
        }
    }),
);


export default function Content() {
    const classes = useStyles();


    return (
        <Container style={{ height: 620 }}>
            <Grid container item xs={12} className={classes.eczacılaraozelmobil} justify="center">
                <Typography variant="h5" component="h3" >
                    Türkiyenin Eczacılara Özel Pazaryeri
                </Typography>
            </Grid>
            <Grid container className={classes.jumbotextcontainer} >
                <Grid container item xs={12} justify="flex-start">
                    <Blob />
                    <motion.span animate={{ x: [-100, 100] }} transition={{ delay: 1.5 }}>
                        <Typography variant="h3" component="h3" className={classes.jumbotext}>
                            Türkiye'nin
            </Typography>
                    </motion.span>
                </Grid>
                <Grid container item xs={12} justify="flex-start">
                    <motion.span animate={{ x: [-100, 100] }} transition={{ delay: 1.5 }}>
                        <Typography variant="h3" component="h1" className={classes.jumbotext}>  Eczacılara Özel</Typography>
                    </motion.span>
                </Grid>
                <Grid container item xs={12} justify="flex-start">
                    <motion.span animate={{ x: [-100, 100] }} transition={{ delay: 1.5 }}>
                        <Typography variant="h3" component="h1" className={classes.jumbotext}> Pazaryeri</Typography>
                    </motion.span>
                </Grid>
                <Grid item xs={6}>
                    <motion.span className={classes.motionspan} animate={{ x: [-100, 100] }} transition={{ delay: 1 }} whileHover={{
                        scale: 1.1,
                        rotate: 10,
                        transition: { duration: 1 },
                    }}>
                        <Button size="large" variant="contained" className={classes.uyeolbuttons}>Üye Ol</Button>
                    </motion.span>
                    <motion.span className={classes.motionspan} animate={{ x: [-100, 100] }} transition={{ delay: 0.5 }} whileHover={{
                        scale: 1.1,
                        rotate: 10,
                        x: 120,
                        transition: { duration: 1 },
                    }}>
                        <Button size="large" variant="contained" className={classes.uyeolbuttons}>Kurum Eczacısı Üye Ol</Button>
                    </motion.span>

                </Grid>

                <Grid item xs={12} md={12} lg={6}>
                    <img src={FarmaBorsa1} className={classes.formaborsaImg} alt="" aria-hidden="true"></img>
                </Grid>
                <Grid container item xs={12} className={classes.uygulamalar} justify="center">
                    <Grid container item xs={12} justify="center" className={classes.mobildenaninda}>
                        <Typography variant="h5" component="h2">Mobilden Anında Alış Satış ve Daha Fazlası</Typography>

                    </Grid>
                    <Grid container item xs={12} justify="center">
                        <img src={FarmaBorsa2} alt="" aria-hidden="true" width="400px"></img>
                        <img src={Farmaekg} alt="" aria-hidden="true" width="100px"></img>
                        <img src={Farmaekg2} alt="" aria-hidden="true" width="100px"></img>
                        <img src={Farmaekg3} alt="" aria-hidden="true" width="100px"></img>
                    </Grid>

                </Grid>
            </Grid>
            <Grid container className={classes.stickerlar} justify="space-around"
            >
                <Grid item >
                    <Sticker1 />
                </Grid>
                <Grid item >
                    <Sticker2 />
                </Grid>
                <Grid item >
                    <Sticker3 />
                </Grid>
                <Grid item >
                    <Sticker4 />
                </Grid>
            </Grid >
            <Grid container className={classes.farmaborsaaciklama} >
                <Grid item xs={7} className={classes.farmaborsaaciklamaitem}>
                    <Nedir />
                </Grid>
                <Grid container item xs={12} md={12} lg={5} justify="center" >
                    <Grid item style={{ height: 1 }}>
                        <NasilCalisir />
                    </Grid>
                    <Grid container item justify="center" md={1} lg={12} className={classes.kolaytaramacontainer}>
                        <Grid item>
                            <Typography variant="h6" className={classes.fiyatlardakolaytarama}> Fiyatlarda Kolay Tarama</Typography>
                            <Typography component="div" className={classes.fiyatlardakolaytaramatypography}>
                                Aradığınız ürünün tüm ilanlarına tek bir ekranda kolaylıkla ulaşabilirsiniz. Ürünün farklı miat ve fiyat avantajları, ücretsiz kargo avantajı ile hizmetinize sunuluyor.
                        </Typography>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
            <Grid container>
                <Grid item md={12} lg={7} className={classes.maps}>
                    <Maps />
                </Grid>
                <Grid container item xs={12} md={12} lg={5} justify="center">
                    <Grid container item xs={12} justify="center">
                        <Eposta />
                    </Grid>
                    <Grid container item xs={12} justify="center">
                        <Whatsapp />
                    </Grid>
                </Grid>
            </Grid>
        </Container >
    )
}
