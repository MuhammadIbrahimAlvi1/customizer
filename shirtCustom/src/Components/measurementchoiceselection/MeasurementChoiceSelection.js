import React, { useState } from 'react';
import { styles } from './MeasurementChoiceSelection.style';
import { withStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const MeasurementChoiceSelecion = ({ classes }) => {

    return (
        <Box className={classes.measurementSelectionContainer}>
            <Box className={classes.measurementChoices} >
                <Typography variant='h6' sx={{ fontSize: '13px', fontWeight: 'bold' }}>Nice that you are ordering from us again.</Typography>
                <Typography variant='p' sx={{ fontSize: '11px', }}>If the body measurements have not changed after your last custom-made shirt, we can make a new made-to-measure shirt based on your measurements. If your body measurements have changed, please select one of the other options available. Of course, you are also welcome to contact us. </Typography>
                <Typography variant='h6' sx={{ fontSize: '11px', }}><b>Phone</b>: 0212 - 20 60 214
                </Typography>
                <Typography variant='h6' sx={{ fontSize: '11px', }}>
                    <b> E-Mail:</b>
                    mass-service@walbusch.de
                </Typography>
            </Box>
            <Box className={classes.measurementImg}>
                <img src="https://konfigurator.walbusch.de/images/9b47f37.png" />
            </Box>
            <Box className={classes.measurementdescription}>
                <Typography variant='h6'></Typography>
            </Box>
        </Box>
    )
}

export default withStyles(styles)(MeasurementChoiceSelecion);