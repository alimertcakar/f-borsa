import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FarmaBorsaLogo from "../Svg/logo.svg";
import RightArrow from "../Svg/rightarrow.svg";

const useStyles = makeStyles((theme) =>
    ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
            color: "white"
        },
        title: {
            flexGrow: 1,
            textAlign: "center"
        },
        appbar: {
            minHeight: 24,
            background: "linear-gradient(90deg, rgba(81,172,245,1) 0%, rgba(63,63,251,1) 100%)"

        },
        button: {
            textTransform: "none",
            borderRadius: "16.5px",
        },
        loginButton: {
            color: "white",
            textTransform: "none",
            borderRadius: "16.5px",
            padding: "5px 15px",
            background: "hsla(0,0%,100%,0.2)",
            "&:hover": {
                background: "hsla(0,0%,100%,0.4)"
            }
        },
        kEczacısıButton: {
            textTransform: "none",
        },
        farmaborsalogo: {
            verticalAlign: "bottom",
            userSelect: "none"
        },
        loginRightArrow: {
            marginLeft: 10
        }
    }),
);

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" >
                <Toolbar className={classes.appbar}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.title} aria-hidden="true">
                        <img src={FarmaBorsaLogo} alt="" height="24px" className={classes.farmaborsalogo}></img>
                    </div>

                    <Button className={classes.loginButton}>Giriş Yap <img src={RightArrow} height="12px" className={classes.loginRightArrow} alt="Giriş Yap" /></Button>
                </Toolbar>
            </AppBar>
        </div >
    );
}