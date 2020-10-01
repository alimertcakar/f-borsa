import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { makeStyles, Paper, Typography } from '@material-ui/core';
import { ReactComponent as SendMail } from "../Svg/sendmail.svg";
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
    ({
        test: {

        },
    }),
);



export function Nedir() {
    const classes = useStyles();
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <motion.a ref={ref} variants={{
            visible: { x: [-100, 0] },
            hidden: { rotate: 0, x: 300 }
        }} animate={controls} transition={{ duration: 1.2 }} href="mailto:destek@farmaborsa.com" >
            <Typography component="span" className={classes.link}>
                Bize e-posta İle ulaşın
            </Typography>
            <IconButton><SendMail /></IconButton>
        </motion.a>
    )
}
export function NasilCalisir() {
    const classes = useStyles();
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <motion.a ref={ref} variants={{
            visible: { x: [-100, 0] },
            hidden: { rotate: 0, x: 300 }
        }} animate={controls} transition={{ duration: 1.2 }} href="https://api.whatsapp.com/send?phone=905465680707&text=FarmaBorsa%2c%20Eczac%C4%B1lara%20ait%20Pazaryeri&source=&data=&app_absent=">
            <Typography component="span" className={classes.link}>
                Whatsapp'dan mesaj bırakın
            </Typography>
        </motion.a>
    )
}