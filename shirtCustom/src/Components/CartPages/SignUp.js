import React from 'react';
import { styles } from './CartPagesContainer.style';
import { withStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import TextField from '@mui/material/TextField';

import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@material-ui/core/Button';


const SignUp = ({ classes }) => {
    return (
        <Grid container spacing={3} sx={{ width: '70%', margin: '0 auto', display: 'flex', justifyContent: 'space-evenly' }}>
            <Grid xs={6} sx={{ border: '1px solid black', paddingTop: '10px' }}>
                <Box>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </Box>
                <Box>
                    <Select>
                        <MenuItem disabled value="">
                            <em>Saluation</em>
                        </MenuItem>

                        <MenuItem
                        >
                            Mr
                        </MenuItem>
                        <MenuItem
                        >
                            Mrs
                        </MenuItem>
                    </Select>
                </Box>
                <Box>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </Box>
                <Box>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />

                </Box>
                <Box sx={{ display: 'flex' }}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />

                </Box>
                <Box sx={{ display: 'flex' }}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />

                </Box>
                <Box sx={{ display: 'flex' }}>
                    <Select>
                        <MenuItem disabled value="">
                            <em>Saluation</em>
                        </MenuItem>

                        <MenuItem
                        >
                            Mr
                        </MenuItem>
                        <MenuItem
                        >
                            Mrs
                        </MenuItem>
                    </Select>
                </Box>
                <Box sx={{ display: 'flex' }}>
                <Button variant="contained" size="large" sx={{backgroundColor:'#152e59'}}>
                    CheckOut
                </Button>

                </Box>
            </Grid>
            <Grid xs={6}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap',border:'1px solid black' }}>
                    <Box className={classes.itemImg}>
                        <img src='https://konfigurator.walbusch.de/savedconfigurations/XR026A_s.png' width='100%' />
                    </Box>
                    <Box>
                        <Typography variant='h6' sx={{ fontSize: '13px', fontWeight: 'bold' }}>
                            1x made-to-measure shirt
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
                                Article no.XR026A
                            </ListItem>

                        </List>

                        </Box>
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
                        <Box sx={{borderTop:'2px solid silver',width:'90%' ,margin: '0 auto',}}></Box>
                        <Box container sx={{ width: '90%',border:'1px solid black', marginTop: '10px', marginLeft: '12px' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ width: '45%' }}>
                                    <Typography variant='p' sx={{ fontSize: '11px' }}>
                                        Shipping
                                    </Typography>
                                </Box>
                                <Box sx={{ width: '45%' }}>
                                    <Typography variant='p' sx={{ fontSize: '11px' }}>
                                        € 110.00
                                    </Typography>
                                </Box>
                            </Box>
                            <Box xs={6} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ width: '45%' }}>
                                    <Typography variant='p' sx={{ fontSize: '11px' }}>
                                        Total
                                    </Typography>
                                </Box>
                                <Box sx={{ width: '45%' }}>
                                    <Typography variant='p' sx={{ fontSize: '11px' }}>
                                        € 110.00
                                    </Typography>
                                </Box>
                            </Box>

                    </Box></Box>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(SignUp);