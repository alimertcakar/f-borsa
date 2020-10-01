import { makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useEffect } from 'react'
import FarmaBorsaSticker from "../Svg/FarmaBorsa-1.svg";
import FarmaBorsaSticker2 from "../Svg/FarmaBorsa-2.svg"
import FarmaBorsaSticker3 from "../Svg/FarmaBorsa-3.svg"
import FarmaBorsaSticker4 from "../Svg/FarmaBorsa-4.svg"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";

const useStyles = makeStyles((theme) =>
    ({
        stickerlar: {
            marginTop: 200,
        },
        stickerlarPaper: {
            padding: 30,
            [theme.breakpoints.down("sm")]: {
                padding: 10
            }
        },
        farmaborsasticker: {
            display: "block", marginLeft: "auto", marginRight: "auto", width: "50%"
        },
        stickerlartext: {
            textAlign: "center"
        },


    }),
);

export function Sticker1() {
    const classes = useStyles();
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <motion.div ref={ref} animate={controls}
            variants={{
                visible: { rotate: 360 },
                hidden: { rotate: 0, x: 300 }
            }}
            transition={{ duration: 2 }}>
            <Paper elevation={2} className={classes.stickerlarPaper}>
                <img src={FarmaBorsaSticker} alt="" aria-hidden="true" width="67px" className={classes.farmaborsasticker}></img>
                <Typography variant="caption" className={classes.stickerlartext} component="div">
                    <br />Türkiye`nin Her Yerine<br /> <strong>Kargo Ücretsiz</strong>
                </Typography>
            </Paper>
        </motion.div>
    )
}
export function Sticker2() {
    const classes = useStyles();
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <motion.div ref={ref} animate={controls}
            variants={{
                visible: { rotate: 360 },
                hidden: { rotate: 0, x: 300 }
            }}
            transition={{ duration: 2 }}>
            <Paper className={classes.stickerlarPaper}>
                <img src={FarmaBorsaSticker2} alt="" aria-hidden="true" width="67px" className={classes.farmaborsasticker}></img>
                <Typography variant="caption" component="div" className={classes.stickerlartext}>
                    <br />50. Alışverişinize Özel <br /> <strong>50 Farma Lira Hediye</strong>
                </Typography>
            </Paper>
        </motion.div>
    )
}
export function Sticker3() {
    const classes = useStyles();
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <motion.div ref={ref} animate={controls}
            variants={{
                visible: { rotate: 360 },
                hidden: { rotate: 0, x: 300 }
            }}
            transition={{ duration: 2 }}>
            <Paper className={classes.stickerlarPaper}>
                <img src={FarmaBorsaSticker3} alt="" aria-hidden="true" width="67px" className={classes.farmaborsasticker}></img>
                <Typography variant="caption" component="div" className={classes.stickerlartext}>
                    <br />Mobil Uygulamamız <br /> <strong>AppStore & PlayStore’da</strong>
                </Typography>
            </Paper>
        </motion.div>
    )
}
export function Sticker4() {
    const classes = useStyles();
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <motion.div ref={ref} animate={controls}
            variants={{
                visible: { rotate: 360 },
                hidden: { rotate: 0, x: 300 }
            }} transition={{ duration: 2 }}>
            <Paper className={classes.stickerlarPaper}>
                <img src={FarmaBorsaSticker4} alt="" aria-hidden="true" width="67px" className={classes.farmaborsasticker}></img>
                <Typography variant="caption" component="div" className={classes.stickerlartext}>
                    <br />Farma Borsa’da <br /> <strong>İlan Eklemek Ücretsiz</strong>
                </Typography>
            </Paper>
        </motion.div>
    )
}



