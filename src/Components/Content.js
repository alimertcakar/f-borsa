import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import FarmaBorsa1 from "../Img/farmaborsa1.png";
import FarmaBorsa2 from "../Img/farmaborsa2.png";
import Farmaekg from "../Img/farmaekg.jpeg";
import Farmaekg2 from "../Img/farmaekg2.jpeg";
import Farmaekg3 from "../Img/farmaekg3.jpeg";
import FarmaBorsaSticker from "../Svg/FarmaBorsa-1.svg";
import FarmaBorsaSticker2 from "../Svg/FarmaBorsa-2.svg"
import FarmaBorsaSticker3 from "../Svg/FarmaBorsa-3.svg"
import FarmaBorsaSticker4 from "../Svg/FarmaBorsa-4.svg"
import { ReactComponent as SendMail } from "../Svg/sendmail.svg";

import Maps from "../Components/Maps";

import Stepper from "./Stepper";
import { IconButton, SvgIcon } from '@material-ui/core';


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
            marginTop: 200
        },
        downloadIcons: {
            marginRight: 15,
            marginTop: 20,
            minWidth: 175
        },
        mobildenaninda: { marginBottom: 45 },
        stickerlar: {
            marginTop: 200,
        },
        stickerlarPaper: {
            padding: 30
        },
        farmaborsasticker: {
            display: "block", marginLeft: "auto", marginRight: "auto", width: "50%"
        },
        stickerlartext: {
            textAlign: "center"
        },
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
            <Grid container className={classes.jumbotextcontainer}>
                <Grid container item xs={12} justify="flex-start">
                    <Typography variant="h3" component="h3" className={classes.jumbotext}>
                        Türkiye'nin
            </Typography>
                </Grid>
                <Grid container item xs={12} justify="flex-start">
                    <Typography variant="h3" component="h1" className={classes.jumbotext}>  Eczacılara Özel</Typography>
                </Grid>
                <Grid container item xs={12} justify="flex-start">
                    <Typography variant="h3" component="h1" className={classes.jumbotext}> Pazaryeri</Typography>
                </Grid>
                <Grid item xs={6}>

                    <Button size="large" variant="contained" className={classes.uyeolbuttons}>Üye Ol</Button>
                    <Button size="large" variant="contained" className={classes.uyeolbuttons}>Kurum Eczacısı Üye Ol</Button>
                </Grid>

                <Grid item xs={6} md={12} lg={6}>
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
                    <Paper elevation={2} className={classes.stickerlarPaper}>
                        <img src={FarmaBorsaSticker} alt="" aria-hidden="true" width="67px" className={classes.farmaborsasticker}></img>
                        <Typography variant="caption" className={classes.stickerlartext} component="div">
                            <br />Türkiye`nin Her Yerine<br /> <strong>Kargo Ücretsiz</strong>
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item >

                    <Paper className={classes.stickerlarPaper}>
                        <img src={FarmaBorsaSticker2} alt="" aria-hidden="true" width="67px" className={classes.farmaborsasticker}></img>
                        <Typography variant="caption" component="div" className={classes.stickerlartext}>
                            <br />50. Alışverisinişe Özel <br /> <strong>50 Farma Lira Hediye</strong>
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item >

                    <Paper className={classes.stickerlarPaper}>
                        <img src={FarmaBorsaSticker3} alt="" aria-hidden="true" width="67px" className={classes.farmaborsasticker}></img>
                        <Typography variant="caption" component="div" className={classes.stickerlartext}>
                            <br />Mobil Uygulamamız <br /> <strong>AppStore & PlayStore’da</strong>
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item >

                    <Paper className={classes.stickerlarPaper}>
                        <img src={FarmaBorsaSticker4} alt="" aria-hidden="true" width="67px" className={classes.farmaborsasticker}></img>
                        <Typography variant="caption" component="div" className={classes.stickerlartext}>
                            <br />Farma Borsa’da <br /> <strong>İlan Eklemek Ücretsiz</strong>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container className={classes.farmaborsaaciklama} >
                <Grid item xs={7} className={classes.farmaborsaaciklamaitem}>
                    <Typography variant="h4" component="h2" className={classes.farmaborsatypographyheader}>FarmaBorsa <span className={classes.headerhighlight}>Nedir?</span></Typography>
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
                </Grid>
                <Grid container item xs={5} md={12} lg={5} justify="center" >
                    <Grid item style={{ height: 1 }}>
                        <Typography variant="h4" component="h2" className={classes.farmaborsatypographyheader}>FarmaBorsa <span className={classes.headerhighlight}>Nasıl Çalışır?</span></Typography>
                        <Typography className={classes.farmaborsatypography}>                    </Typography>
                        <Grid container justify="center">
                            <Stepper />
                        </Grid>
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
                        <a href="mailto:destek@farmaborsa.com" >
                            <Typography component="span" className={classes.link}>
                                Bize e-posta İle ulaşın
                    </Typography>
                            <IconButton><SendMail /></IconButton>
                        </a>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                        <a href="https://api.whatsapp.com/send?phone=905465680707&text=FarmaBorsa%2c%20Eczac%C4%B1lara%20ait%20Pazaryeri&source=&data=&app_absent=">
                            <Typography component="span" className={classes.link}>
                                Whatsapp'dan mesaj bırakın
                    </Typography>
                        </a>
                    </Grid>
                </Grid>
            </Grid>
        </Container >
    )
}
