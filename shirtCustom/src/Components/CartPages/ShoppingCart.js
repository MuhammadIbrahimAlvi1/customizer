import React, { useState } from 'react';
import { styles } from './CartPagesContainer.style';
import { withStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Link from '@mui/material/Link';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';


const ShoppingCart = ({ classes }) => {
    return (
        <Grid container spacing={3} sx={{ width: '90%', margin: '0 auto', display: 'flex', justifyContent: 'space-evenly' }}>
            <Grid className={classes.itemDetails}>
                <Typography variant='h6' sx={{ fontSize: '14px', textAlign: 'left' }}>1.On what basis u r born </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap' ,textAlign:'left'}}>
                    <Box className={classes.itemImg}>
                        <img src='https://konfigurator.walbusch.de/savedconfigurations/XR026A_s.png' width='100%' />
                    </Box>
                    <Box>
                        <Typography variant='h6' sx={{ fontSize: '13px', fontWeight: 'bold' }}>
                            Made-to-measure shirt
                        </Typography>

                        <List sx={{ width: '100%', maxWidth: 360, fontSize: '12px', lineHeight: '0.7px' }}>
                            <ListItem>
                                Uni red
                            </ListItem>
                            <ListItem>
                                Shirt poplin

                            </ListItem>
                            <ListItem>
                                Comfort Fit

                            </ListItem>
                            <ListItem>
                                Kent

                            </ListItem>
                            <ListItem>
                                Button placket: tucked in

                            </ListItem>
                            <ListItem>
                                Article no. XR026A
                            </ListItem>

                        </List>
                        <Select
                            autoWidth
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select><Link sx={{ color: 'black', cursor: 'pointer', paddingLeft: '5px', textDecoration: 'none' }}>Clear</Link>
                        <Grid container spacing={3} sx={{ margin: '10px', display: 'flex', alignItems: 'center' }}>
                            <Grid xs={8}>
                                <Typography variant='p' sx={{ fontSize: '11px', display: 'flex' }}>
                                    <Brightness1Icon fontSize='small' color='success' />   Delivery in 3-4 weeks
                                </Typography>
                            </Grid>
                            <Grid xs={4}>
                                <Typography variant='p' sx={{ fontSize: '11px' }}>
                                    € 110.00
                                </Typography>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>
            </Grid>
            <Grid className={classes.checkoutItem}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <TextField id="outlined-basic" label="Enter voucher" variant="outlined" /><Typography variant='p' sx={{ color: 'grey' }}>Redeem</Typography>
                </Box>
                <Box sx={{ marginTop: '20px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant='p' sx={{ fontSize: '13px' }}>
                            Shipping
                        </Typography>
                        <Typography variant='p'>
                            € 5.95
                        </Typography>

                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant='p' sx={{ fontSize: '13px' }}>
                            Total
                        </Typography>
                        <Typography variant='p'>
                            € 112.95
                        </Typography>

                    </Box>
                    <Button variant="contained" size="large" color='primary' fullWidth={true} sx={{borderRadius:'none'}}>
                        CheckOut
                    </Button>
                </Box>
                <Box>

                </Box>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(ShoppingCart);