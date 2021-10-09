import React, { useState } from 'react';
import { styles } from './MeasurementVariants.style';
import { withStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MeasurementVariantsData } from './MeasurementVariantsData';

const MeasurementVariants = ({ classes ,...props}) => {
    console.log(MeasurementVariantsData)
    const [focus,setFocus] = useState(false)
    return (
        <Box className={classes.measurementVariantsContainer}>
            {MeasurementVariantsData.map((item, ind) => {
                return <Box className={classes.measurementVariants} onClick={()=>props.onclick()}>
                    <Box className={classes.measurementVariantsPicture} >
                        <Box onClick={()=>setFocus(!focus)}>
                       {(focus)? <img src={item.imgSrc} /> : <img src={item.imgFocus}/> }
                       </Box>
                    </Box>
                    <Box className={classes.measurementVariantsTitle}>
                        <Typography variant='h6' sx={{fontSize:'15px',fontWeight:'bold'}}> {item.title}</Typography>
                    </Box>
                    <Box className={classes.measurementVariantsDescription}>
                        <Typography variant='p' sx={{fontSize:'12px'}}>{item.details}</Typography>
                    </Box>
                </Box>
            })}
        </Box>
    )
}

export default withStyles(styles)(MeasurementVariants);