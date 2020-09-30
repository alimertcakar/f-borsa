import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import FarmaBorsa1 from "../Img/farmaborsa1.png";
import FarmaBorsa2 from "../Img/farmaborsa2.png";

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
    }),
);


export default function Content() {
    const classes = useStyles();

    return (
        <Container style={{ height: 620 }}>
            <Grid container className={classes.jumbotextcontainer}>
                <Grid container item xs={6} justify="flex-start">
                    <Typography variant="h3" component="h3" className={classes.jumbotext}>
                        Türkiye'nin
            </Typography>
                </Grid>
                <Grid container item xs={6} justify="flex-start">
                    <Typography variant="h3" component="h1" className={classes.jumbotext}>  Eczacılara Özel</Typography>
                </Grid>
                <Grid container item xs={6} justify="flex-start">
                    <Typography variant="h3" component="h1" className={classes.jumbotext}> Pazaryeri</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Button size="large" variant="contained" className={classes.uyeolbuttons}>Üye Ol</Button>
                    <Button size="large" variant="contained" className={classes.uyeolbuttons}>Kurum Eczacısı Üye Ol</Button>
                </Grid>

                <Grid item xs={6}>
                    <img src={FarmaBorsa1}></img>
                </Grid>
            </Grid>
        </Container>
    )
}
