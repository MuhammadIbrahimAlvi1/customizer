import React, { useEffect, useState } from 'react';
import { styles } from './CartPagesContainer.style';
import { withStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ShoppingCart from './ShoppingCart';
import SignUp from './SignUp';
import Order from './Order';
import Invoice from './Invoice';
import BuyNow from './BuyNow';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams,
    useNavigate
} from "react-router-dom";


const CartPagesContainer = ({ classes }) => {

    // const [value, setValue] = React.useState('');
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        // setValue(newValue);
        // console.log(value)
        navigate(`./../${newValue}`);
    };


    var content = null;

    const { type } = useParams();
    //  let type = value;
    // if (type === 'item') {
    //     content = <ShoppingCart />
    // } else if (type === 'signup') {
    //     content = <SignUp />
    // } else if (type === 'order') {
    //     content = <Order />
    // } else if (type === 'invoice') {
    //     content = <Invoice />
    // } else {
    //     content = '404 Not Found'
    // }
    // console.log(type, 'param');

    useEffect(() => {
        console.log(type);
    }, [type]);
    return (
        <Grid container spacing={3} sx={{ width: '95%', margin: '0 auto', display: 'flex' }}>
            <Box className={classes.cartNav}>
                <TabContext value={type}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="1.SHOPPING CART" value="item" />
                            <Tab label="2.SIGN UP" value="signup" />
                            <Tab label="3.ORDER" value="order" />
                        </TabList>
                    </Box>
                    <TabPanel value="item"><ShoppingCart /></TabPanel>
                    <TabPanel value="signup"><SignUp /> </TabPanel>
                    <TabPanel value="order"><Invoice /> </TabPanel>
                </TabContext>
            </Box>
            <Box className={classes.cartPages}>
                {/* {content} */}
                {/* <Order /> */}
            </Box>
        </Grid>
    )
}

export default withStyles(styles)(CartPagesContainer);