import React, { useState } from 'react';
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
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

const CartPagesContainer = ({ classes }) => {
    return (
        <Grid container spacing={3} sx={{ width: '90%', margin: '0 auto', display: 'flex' }}>
            <Box className={classes.cartNav}>
                <Grid xs={4}>
                    1.SHOPPING CART
                </Grid>
                <Grid xs={4}>
                    2.)SIGN UP
                </Grid>
                <Grid xs={4}>
                    3.ORDER
                </Grid>
            </Box>
            <Box className={classes.cartPages}>
                {/* <ShoppingCart /> */}
                {/* <SignUp />
                <Order />
                <Invoice />
                <BuyNow /> */}
                <Routes>
                    {/* <Route path='/varity/inthecart/cart' element={<ShoppingCart />} />
                    <Route path='/varity/inthecart/signup' element={<SignUp />} />
                    <Route path='/varity/inthecart/order' element={<Order />} />
                    <Route path='/varity/inthecart/invoice' element={<Invoice />} />
                    <Route path='/varity/inthecart/buynow' element={<BuyNow />} /> */}
                </Routes>
            </Box>
        </Grid>
    )
}

export default withStyles(styles)(CartPagesContainer);