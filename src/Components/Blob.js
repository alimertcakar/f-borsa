import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Blob1 } from "../Svg/Blobs/blob2.svg";
import { ReactComponent as Pill } from "../Svg/Blobs/pill.svg";
import { ReactComponent as Pharma } from "../Svg/Blobs/pharma.svg";

import { motion, useAnimation } from "framer-motion"

const useStyles = makeStyles((theme) =>
    ({
        blob: {
            position: "absolute",
            left: 150,
            top: 100,
            zIndex: -1,
        },
        blob2: {

        },
        pill: {
            position: "absolute",
            left: 250,
            top: 210,
            zIndex: -1,
        },
        pharma: {
            position: "absolute",
            left: 200,
            top: 210,
            zIndex: -1,
        }
    }));
export default function Blob() {
    const classes = useStyles();
    return (<motion.div animate={{ rotate: 315 }} transition={{ delay: 0, duration: 2 }}>
        <Blob1 height="250px" width="250px" className={classes.blob} />
        <Pill height="48px" width="48px" className={classes.pill} />
    </motion.div>
    )
}


