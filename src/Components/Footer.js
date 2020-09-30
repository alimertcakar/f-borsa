import React from 'react'
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';

import Grid from "@material-ui/core/grid";
import Iyzico from "../Svg/iyzico.svg";
import Facebook from "../Svg/Social/facebook.svg";
import Insta from "../Svg/Social/instagram.svg";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Kargo from "../Img/kargo.png";
import { ReactComponent as GooglePlay } from "../Svg/google-play.svg";
import { ReactComponent as AppStore } from "../Svg/appstore2.svg";


const useStyles = makeStyles((theme) =>
    ({
        kargo: { marginTop: 45 },
        formaborsacom: {
            textDecoration: "underline", background: "linear-gradient(0deg, rgba(34,193,195,1) 1%, rgba(34,254,255,1) 16%, rgba(255,31,31,0) 49%);",
        },
        upperContainer: { marginBottom: 20 },
        social: {
            margin: 5,
        },
        downloadIcons: {
            color: "white",
            textTransform: "none",
            margin: "0 10px"
        },
        uygulamayıIndir: {
            marginBottom: 10
        },
        footerhightext: {
            marginBottom: 8
        },
        divider: {
            marginTop: 50,
            marginBottom: 25
        },
        topcontainer: {
            marginTop: "1250px"
        }
    }),
);



export default function Footer() {
    const classes = useStyles();

    return (
        <>
            <Container className={classes.topcontainer}>
                <Grid container className={classes.upperContainer}>
                    <Grid container item xs={7}>
                        <Grid container item xs={5}>
                            <Grid item xs={12}><Typography variant="h6" className={classes.footerhightext}>FormaBorsa</Typography></Grid>
                            <Grid item xs={12}>Neden FormaBorsa?</Grid>
                            <Grid item xs={12}>Üyelik Sözleşmesi</Grid>
                            <Grid item xs={12}>Kullanım Koşulları</Grid>
                            <Grid item xs={12}>Kişisel Veri Politikası</Grid>
                            <Grid item xs={12}>FormaBorsa API</Grid>
                            <Grid item xs={12}>Gizlilik Politikası</Grid>
                            <Grid item xs={12}>İletişim</Grid>
                            <Grid item xs={12}>Güvenli Ödeme Sistemi</Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid item xs={12}><Typography variant="h6" className={classes.footerhightext}>Yardım</Typography></Grid>
                            <Grid item xs={12}>Sıkça Sorulan Sorular</Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Grid item xs={12}><Typography variant="h6" className={classes.footerhightext}> İletişim</Typography></Grid>
                            <Grid item xs={12}>+90 546 568 0707</Grid>
                            <Grid item xs={12}>+90 542 622 2077</Grid>
                            <Grid item xs={12}>+850 533 0633</Grid>
                            <Grid item xs={12}> destek@farmaborsa.com</Grid>
                        </Grid>
                    </Grid>
                    <Grid container item xs={5} >
                        <Grid item xs={12} justify="center" align="center">
                            <Typography variant="h6" className={classes.uygulamayıIndir}>  Uygulamayı indir </Typography>
                            <Button variant="contained"
                                color="secondary"
                                size="large" startIcon={<SvgIcon><GooglePlay /></SvgIcon>} className={classes.downloadIcons}>Google Play</Button>
                            <Button variant="contained"
                                color="secondary"
                                size="large" startIcon={<SvgIcon><AppStore /></SvgIcon>} className={classes.downloadIcons}>AppStore</Button>
                        </Grid>
                        <Grid item xs={12} className={classes.kargo}>
                            <img src={Kargo} aria-hidden="true" alt="" height="48px"></img>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Divider light className={classes.divider} />
            <Container>
                <Grid container>
                    <Grid item xs={4} style={{ marginTop: 5 }}>
                        <Typography component="p" variant="caption">
                            © 2018-2020 <span className={classes.formaborsacom}>farmaborsa.com</span>® | Tüm hakları saklıdır
                        </Typography>
                    </Grid>
                    <Grid container item xs={4} justify="center" >
                        <img src={Iyzico} aria-hidden="true" alt="" height="24px" className={classes.social}></img>
                    </Grid>
                    <Grid container item xs={4} justify="flex-end" >
                        <img src={Facebook} aria-hidden="true" alt="" height="24px" className={classes.social}></img>
                        <img src={Insta} aria-hidden="true" alt="" height="24px" className={classes.social}></img>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
