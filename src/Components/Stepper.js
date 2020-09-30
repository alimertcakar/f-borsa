import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import TabPanel from '@material-ui/lab/TabPanel';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: "400px",
        borderRadius: "3px"
    },
}));

export default function CenteredTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState("0");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Paper className={classes.root}>
                <TabContext value={value}>
                    <TabList indicatorColor="primary"
                        onChange={handleChange} aria-label="alırken satarken">
                        <Tab label="Alırken" value="0" />
                        <Tab label="Satarken" value="1" />
                    </TabList>
                    <TabPanel value="0">Çok güzel alınır.</TabPanel>
                    <TabPanel value="1">Çok güzel satılır.</TabPanel>
                </TabContext>
            </Paper>

        </>
    );
}