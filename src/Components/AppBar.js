import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) =>
    ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
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
            textTransform: "none"
        },
        kEczacısıButton: {
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
                    <div className={classes.title}>
                        <Typography variant="h6" >
                            f-Borsa
                        </Typography>
                    </div>

                    <Button color="inherit" className={classes.button}>Giriş Yap</Button> |
                    <Button color="inherit" className={classes.button}>Üye Ol</Button>
                    <Button color="inherit" className={classes.button}>Kurum Eczacısı Üye Ol</Button>

                </Toolbar>
            </AppBar>
        </div>
    );
}