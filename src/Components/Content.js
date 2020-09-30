import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import FarmaBorsa1 from "../Img/farmaborsa1.png";
import FarmaBorsa2 from "../Img/farmaborsa2.png";
import Stepper from "./Stepper";

const useStyles = makeStyles((theme) =>
    ({
        jumbotextcontainer: {
            marginTop: "120px"
        },
        jumbotext: {
            fontWeight: "700",
            color: "#2B3036"
        },
        uyeolbuttons: {
            background: "linear-gradient(90deg, rgba(81,172,245,1) 0%, rgba(63,63,251,1) 100%)",
            color: "white",
            textTransform: "none",
            marginTop: "35px",
            marginLeft: "15px"
        },
        formaborsaImg: {
            position: "absolute",
            top: 130
        },
        farmaborsaaciklama: {
            marginTop: 600,
            marginBottom: 100,
        },
        farmaborsatypography: {
            lineHeight: "1.8",
            whitespace: "pre-line",
            fontWeight: 300
        },
        farmaborsatypographyheader: {
            fontWeight: 700,
            marginBottom: 20
        }
    }),
);


export default function Content() {
    const classes = useStyles();

    return (
        <Container style={{ height: 620 }}>
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

                <Grid item xs={6}>
                    <img src={FarmaBorsa1} className={classes.formaborsaImg} alt="" aria-hidden="true"></img>
                </Grid>
            </Grid>
            <Grid container className={classes.farmaborsaaciklama} >
                <Grid item xs={8}>
                    <Typography variant="h4" component="h2" className={classes.farmaborsatypographyheader}>FarmaBorsa Nedir?</Typography>
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
                <Grid container item xs={12} justify="center">
                    <Grid item>
                        <Typography variant="h4" component="h2" className={classes.farmaborsatypographyheader}>FarmaBorsa Nasıl Çalışır?</Typography>
                        <Typography className={classes.farmaborsatypography}>                    </Typography>

                    </Grid>
                    <Grid container item xs={12} justify="center">
                        <Stepper /><br /><br />
                    </Grid>

                </Grid>
            </Grid>
        </Container >
    )
}
