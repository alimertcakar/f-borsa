import React from 'react'
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import Grid from "@material-ui/core/grid";
import Iyzico from "../Svg/iyzico.svg";
import Facebook from "../Svg/Social/facebook.svg";
import Insta from "../Svg/Social/instagram.svg";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Kargo from "../Img/kargo.png";
import { ReactComponent as GooglePlay } from "../Svg/google-play.svg";

import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) =>
    ({
        upperContainer: { marginBottom: 20 },
        social: {
            margin: 5,
        },
    }),
);



export default function Footer() {
    const classes = useStyles();

    return (
        <>
            <Container>
                <Grid container className={classes.upperContainer}>
                    <Grid container item xs={7}>
                        <Grid container item xs={5}>
                            <Grid item xs={12}>FormaBorsa</Grid>
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
                            <Grid item xs={12}>Yardım</Grid>
                            <Grid item xs={12}>Sıkça Sorulan Sorular</Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Grid item xs={12}>Whatsapp & İletişim</Grid>
                            <Grid item xs={12}>+90 546 568 0707</Grid>
                            <Grid item xs={12}>+90 542 622 2077</Grid>
                            <Grid item xs={12}>+850 533 0633</Grid>
                        </Grid>
                    </Grid>
                    <Grid container item xs={5}>
                        <Grid item xs={12}>
                            <img src={GooglePlay} aria-hidden="true" alt="" height="24px"></img>App Store
                            <Button variant="contained"
                                color="primary"
                                size="large" startIcon={<GooglePlay />} >Google Play indir</Button>

                        </Grid>
                        <Grid item xs={12}>
                            <img src={Kargo} aria-hidden="true" alt="" height="48px"></img>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Divider light />
            <Container>
                <Grid container>
                    <Grid item xs={4} style={{ marginTop: 5 }}>
                        <Typography component="p" variant="caption">
                            © 2018-2020 farmaborsa.com® | Tüm hakları saklıdır
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
