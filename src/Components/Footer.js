import React from 'react'
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/grid";
import Iyzico from "../Svg/iyzico.svg";
import Facebook from "../Svg/Social/facebook.svg";
import Insta from "../Svg/Social/instagram.svg";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) =>
    ({
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
                x
                <Grid container>
                    <Grid item xs={7}>
                        sol
                    </Grid>
                    <Grid item xs={5}>
                        sağ
                    </Grid>
                </Grid>
            </Container>
            <Divider light />
            <Container>
                <Grid container>
                    <Grid item xs={4} style={{ marginTop: 5 }}>
                        <Typography>
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
