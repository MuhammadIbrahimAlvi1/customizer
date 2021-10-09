import React, { useState } from 'react';
import { styles } from './Measurement.style';
import { withStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MeasurementVariants from '../measurementvariants/MeasurementVariants';
import MeasurementChoiceSelection from '../measurementchoiceselection/MeasurementChoiceSelection';
import Input from '@mui/material/Input';
import Button from '@material-ui/core/Button';
import BodyMeasurements from '../bodymeasurements/BodyMeasurements';
import WhaleShirt from '../WhaleShirt/WhaleShirt';
import {
    Link
  } from "react-router-dom";

const Measurement = ({ classes }) => {
    const [visibility, setVisibility] = useState(true)
    return (
        <Box className={classes.measurementParentContainer}>

            {(visibility) ? <Box className={classes.measurementText} >
                <Typography variant='h6'>On what basis would you like to determine your measurements?
                </Typography>
            </Box> : null}
            <Box className={classes.measurementCategories} >
                <MeasurementVariants onclick={() => setVisibility(false)} />
            </Box>
            <Box className={classes.measurementMultiSelection}>
                {/* <MeasurementChoiceSelection /> */}
                <BodyMeasurements/>
                {/* <WhaleShirt/> */}
            </Box>
            <Box className={classes.measurementquantity}>
                Lot <input type='text' className={classes.inputLot}/>
            </Box>
            <Box className={classes.measurementquantity}>
                <Link to='/varity/inthecart'>
                <Button variant="contained" size="large" color="primary" >
                    IN THE CART
                </Button>
                </Link>
            </Box>
        </Box >
    )
}

export default withStyles(styles)(Measurement);