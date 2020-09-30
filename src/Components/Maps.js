import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) =>
    ({
        map: {

        }
    }));

function Maps() {
    const classes = useStyles();
    const tablet = useMediaQuery('(max-width:768px)');
    const bigPhone = useMediaQuery('(max-width:425px)');
    const phone = useMediaQuery('(max-width:375px)');

    let size = tablet ? "400px" : "640px";
    size = bigPhone ? "350px" : size;
    size = phone ? "300px" : size;

    let height = phone ? "200px" : "480px";
    console.log(size)

    return (
        <iframe className={classes.map} title="Adresimiz" src="https://www.google.com/maps/d/u/0/embed?mid=1vMp68g7e1FG7TmlN59RimiUmttt7_yWL" height={height} width={size}></iframe>
    )
}

export default Maps
